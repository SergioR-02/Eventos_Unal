# Backend Dockerfile for Strapi
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies for better-sqlite3
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Create necessary directories
RUN mkdir -p .tmp public/uploads

# Build admin panel
RUN npm run build

# Expose port
EXPOSE 1337

# Start in development mode (can be overridden in docker-compose)
CMD ["npm", "run", "develop"]
