# Use a Node image as the base
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy application files to the container
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
