# 1st-MERN_APP
This repo is about how to create a simple MERN app & contains ```mongoApi.js``` as an API file to connect with MongoDB.

## Description
The idea behind this simple application is to learn MERN and getting started with it.

### About mongoApi.js
##### dependencies 
```bash
npm install express
npm install mongodb
```
In this API file we have some code which connects to the MongoDB using {mongodb} dependency and uses ```database = ankitDB``` & ```collection = details```.

## Installation
In this section we will look how to set-up everything in system and get your app up & running!

1. Install nodejs in your system - to work with nodejs.
2. Install mongodb in your system - for database.
3. Install mongosh in your system - to work with mongoDB.
4. Install VS Code

### Steps to create database and store some data
1. Open terminal and type ```mongosh```.
2. Create a db and create a collection in it.
3. Create a document (use db.collection_name.inertOne({"key":"value"})).

Now your database is created and has some data in it.

### Next Steps
Now all we need to do is connect to mongoDB by creating an API (```mongoApi.js```) in nodeJs and run the server.

That's it!! Now you can create a react-app and fetch the API in it and show some UI 😊

## FAQs

#### Q1. I am unable to connect with MongoDB even after installing it correctly. How to solve this?

##### Ans. To connect with your database you need to start your MongoDB service.
1. search for Services, for that search using the left bottom corner search option.

2. then there is a gear icon named with 'Services'.

3. after clicking that you will get a window with a lot of services

4. scroll down and you will find 'MongoDB server (MongoDB)'.

5. so you will see that there is an option to start the service.

6. start it.

Now try to connect again using any terminal & that's it you are good to go!!