# Simple Docker Project

Project sederhana menggunakan Docker Compose dengan Node.js dan MongoDB.

## Persyaratan

- Docker Desktop
- Git

## Cara Menjalankan

1. Clone repository:
   ```bash
   git clone <repository-url>
   cd simple-docker-project
   ```

2. Copy file environment:
   ```bash
   cp .env.example .env
   ```

3. Jalankan dengan Docker Compose:
   ```bash
   docker-compose up
   ```

4. Buka browser dan akses `http://localhost:3000`

## Development

- Semua perubahan pada kode di folder `src` akan otomatis di-reload
- Logs bisa dilihat dengan `docker-compose logs -f`
- Hentikan aplikasi dengan `docker-compose down`