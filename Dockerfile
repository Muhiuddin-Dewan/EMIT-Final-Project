# Set the base image
FROM node:18-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Rebuild bcrypt to match the container's environment
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env

# Expose port
EXPOSE 8081

# Start the backend server
CMD ["node", "server.js"]
