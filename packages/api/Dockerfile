# Start with fully-featured Node.js base image
FROM node AS build

# USER node
WORKDIR /home/node/app

RUN apt-get install libpq-dev

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src
COPY --chown=node:node tsconfig.json ./tsconfig.json
COPY --chown=node:node tsoa.json ./tsoa.json
COPY --chown=node:node webpack.config.js ./webpack.config.js

# Build code
RUN yarn build:heroku

# Run-time stage
FROM node:alpine

# Set non-root user and expose port 8080
# USER node
EXPOSE 8080

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-scripts --production

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD ["yarn", "start:heroku"]
