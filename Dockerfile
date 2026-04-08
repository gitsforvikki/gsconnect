# base image for the Dockerfile

FROM node

WORKDIR /gsconnect

COPY package.json ./
RUN npm install

COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]