FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173 3020
CMD ["npx", "concurrently", "\"npm run preview -- --host\"", "\"npm run server\""]