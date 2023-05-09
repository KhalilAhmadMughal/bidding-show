# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 80 (adjust as needed)
EXPOSE 3000

# Set environment variables, if required
# ENV REACT_APP_API_URL=http://example.com/api

# Start the React app
CMD ["npm", "run", "start"]
