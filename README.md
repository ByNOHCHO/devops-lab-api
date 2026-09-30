# devops-lab-api

Учебный Express + TypeScript API для трека в родительской папке `devops-lab`.

## Локально (без Docker)

```bash
npm install
npm test
npm run build
npm start
```

Проверка: http://127.0.0.1:3000/health

## Docker

```bash
docker compose up -d --build
```

- API: http://127.0.0.1:3000
- Nginx: http://127.0.0.1:80 (с Windows через проброс — порт 8080)

Гайд: открой `../README.md`.
