# Set the base image with Node.js 22 LTS
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci

# Copy application source
COPY . .

# Build the Next.js application
RUN npm run build

# App listens on port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]