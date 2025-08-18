# Use an official Node.js base image
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Install git (needed for cloning)
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Clone the repos
RUN git clone https://github.com/codewithher/pxt /app/pxt && \
    git clone https://github.com/codewithher/pxt-library /app/pxt-library && \
    git clone https://github.com/codewithher/pxt-atisa /agit pp/pxt-atisa

# Install and build pxt
WORKDIR /app/pxt
RUN npm install && npm run build

# Install common packages
WORKDIR /app/pxt-library
RUN npm install

# Link everything for pxt-atisa
WORKDIR /app/pxt-atisa
RUN npm install -g pxt && \
    pxt link ../pxt && \
    pxt link ../pxt-library && \
    rm -rf node_modules/pxt-core && \
    rm -rf node_modules/pxt-library && \
    npm install

# Expose the default pxt serve port
EXPOSE 3232

# Start the dev server
CMD ["pxt", "serve", "--no-browser", "--port", "3232"]
