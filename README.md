## Инструкция по разворачиванию и сборке контейнеров

   > **git clone https://github.com/Assassinus/ad-service-projects.git**
    
 В папке с проектом запустить команду сборки контейнеров
   > **docker-compose up -d --build**

## Запуск сидера для наполнения событий (рандомит 10 событий)

   > **docker exec ad-service-partner-api npm run seed**

## Рефреш монги   
   > **docker exec ad-service-partner-api npm run seed:refresh**


## После успешного билда контейнеров
 
 AD-service URL
  > **http://localhost:8000/**
  
 AD-service partner URL 
  > **http://localhost:8080/**


# P.S.
Для удобства разворачивания Dockerfile && .env файлы включены в проекты **ad-service** && **ad-service-partner** и оба проекта находятся в одном репозитории

Оба проекта используют одну монгу (разные базы) и у обоих на бэке **NestJS**, на фронте **React**
