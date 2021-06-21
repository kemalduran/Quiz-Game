# Quiz-Game-App
Quiz game app with react &amp; spring boot

## Getting started

First, you need to run scripts in scripts.sql file on your MySql database.

To get the backend running locally:

- Clone this repo and go to quiz-game-app folder
- open the project with IntelliJ Idea
- change credentials in application.properties file
- run app

To get the frontend running locally:

- go to quiz-game-app folder
- `yarn install` to install all required dependencies
- `yarn start` to start the local server

you can test endpoints with these urls:
- `http://localhost:8080/questions?amount=10&category=9&difficulty=easy&type=multiple`
- `http://localhost:8080/users`
