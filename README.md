Тестовое задание для ЛОТОС
Ссылка для просмотра комнаты: https://lotus-test-mocha.vercel.app/

Реализованы все требования задачи. Стэк: React, Express, MongoDB.

Описание принципа работы таймера
Каждая комната торгов представлена в базе MongoDB отдельным документом, который включает в себя список участников и таймстемп начала торгов. Учитывая, что время на ход фиксированное, можно по таймстемпу начала торгов и текущему таймстемпу рассчитать чей сейчас идет ход и сколько по времени (см. функцию src/helpers/getTimerState.js). Данное вычисление происходит каждую секунду на фронтенде, чтобы таймер работал в реальном времени.

Локальный запуск проекта
npm i
Создать .env файл по примеру .env.example, прокинуть необходимые переменные
npm run start - запуск фронта
npm run start:server - запуск сервера