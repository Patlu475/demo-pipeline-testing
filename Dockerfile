# Use Node base image
FROM node:18-slim

# Set app directory
WORKDIR /app

# Copy dependencies first for caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of the code
COPY . .

# Expose port (not needed here, but good practice for real apps)
EXPOSE 3000

# Default command
CMD ["npm", "test"]
