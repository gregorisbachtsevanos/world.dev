# Sets the base image of the application to the node’s official image.
FROM node:19

# Sets the Working Directory as "/client"
WORKDIR /client
# Copies the package.json file into "/client" and runs npm i
COPY package.json /client
RUN npm install
# Copies the entire source code into "/client"
COPY . /client

# Specifies the port the node app will be running on
EXPOSE 3000

# Runs "npm run client" after the above step is completed. Starting the react app
CMD ["npm", "run", "start"]