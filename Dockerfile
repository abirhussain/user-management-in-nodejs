FROM node:23-alpine3.20

WORKDIR /app

# Install dependencies needed for Prisma
RUN apk add --no-cache openssl python3 make g++

COPY package*.json ./
COPY prisma ./prisma

# Install dependencies and generate Prisma client
RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]