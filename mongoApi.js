var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
var url = "mongodb://localhost:27017/";
const database = "ankitDB";
const collection = "details";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    dbo.collection(collection).find({}).toArray(function(err, result) {
        if (err) throw err;
        app.get('/api', (req, res) => res.send(result));
        // console.log(result);
        db.close();
    });
});

app.listen(4000, () => {
    console.log('Server Up & Listening for Requests at port:4000!')
})