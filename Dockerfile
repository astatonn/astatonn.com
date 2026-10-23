# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the application
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install vips dependencies for sharp image processing
RUN apk add --no-cache vips-dev

RUN npm run build

# Production stage
FROM node:22-alpine AS runner
WORKDIR /app

# Patch all Alpine packages to latest security versions
RUN apk upgrade --no-cache

# Copy necessary files and production-pruned node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/next-env.d.ts ./

# Remove devDependencies (eslint, tailwind, @types...) and their CVEs. typescript is a regular
# dependency because Next compiles next.config.ts at startup. No `|| true` here: the old
# `npm install --no-save typescript` silently reinstalled every devDependency.
RUN npm prune --omit=dev --no-audit --no-fund

# npm only assembles the image; at runtime it is dead weight with CVEs of its own
# (bundled tar, glob, brace-expansion). The CMD below calls Next directly.
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

# Set proper permissions
RUN chown -R node:node .
USER node

EXPOSE 3000
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

CMD ["node", "node_modules/next/dist/bin/next", "start"]