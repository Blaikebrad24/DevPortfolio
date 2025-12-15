# =============================================
# Multi-stage Dockerfile for Nextjs/pnpm build 
# =============================================

FROM node:20-alpine AS base 
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable 

FROM base AS deps 
WORKDIR /app

COPY package.json pnpm-lock.yaml ./ 

# install dependencies with frozen lockfile 
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod=false 

FROM base AS builder 
WORKDIR /app 

#  copy dependencies 
COPY --from=deps /app/node_modules ./node_modules
COPY . . 

#  set ENV variables for for build 
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production 

# Build application
RUN pnpm run build 

FROM base AS prod-deps 
WORKDIR /app 

COPY package.json pnpm-lock.yaml ./ 

#  install production dependencies 
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod 

# ------- Runner stage ---------
FROM base AS runner 
WORKDIR /app 

# set to production
ENV NODE_ENV=production 
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security best practices
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs 

#  files needed from builder
COPY --from=builder /app/public ./public  
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static 

#  set permissions 
RUN chown -R nextjs:nodejs /app 

#  switch to non-root 
USER nextjs 

EXPOSE 3000

#  set environment variable for PORT
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

    # start application
CMD ["node", "server.js"] 