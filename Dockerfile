# Menggunakan Node.js versi LTS
FROM node:18

# Membuat direktori aplikasi
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code aplikasi
COPY . .

# Expose port yang akan digunakan
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["node", "src/index.js"]