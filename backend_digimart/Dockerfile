# 1. Base Image: Use a lightweight Node.js image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json first to leverage Docker's layer caching
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# # 5. Copy the rest of your application's source code
# COPY . .

# 6. Expose the port your Express server runs on
EXPOSE 5000

# 7. The command to start your server 
CMD ["npm", "run", "dev"]
# CMD sh -c "ls -la && npm run dev"  This is to run ls -al and npm run dev in one command
# Or if you don't have an
#CMD ["/bin/sh"]