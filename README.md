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

##### Ans. To connect with the database "MongoDB service" needs to be running, although the service starts running after we install the MongoDB but sometimes this does not happens and in this case, we need to start the service manually.

To start your "MongoDB server (MongoDB)" service, follow the below mentioned steps:

1. Search for "services", using the search option in windows (right side to windows logo button).

2. A "Services" app will appear with "gear" icon, click this.

3. A window will popup with a lots of services.

4. Scroll down and look for 'MongoDB server (MongoDB)'.

5. Right click on the 'MongoDB server (MongoDB)' & start this service manually.

That's it!! Now try to connect again by using any terminal & you are good to go 😊