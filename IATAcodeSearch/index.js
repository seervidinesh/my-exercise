var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
let app = express();

var url = "mongodb://localhost:27017";
var dbName;

mongoClient.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function(err, client) {
        if (err) throw err;
        dbName = client.db("test");
    }
);

var url = "mongodb://localhost:27017";
var dbName;

var urlEncodecParser = bodyParser.urlencoded({
    extended: true
});
var jsonParser = bodyParser.json();
var port = process.env.PORT || 3030;

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render(__dirname + "index.html")
});

app.get('/iatacodes', urlEncodecParser, (req, res) => {
    dbName.collection('iatacodes').find({}).toArray((err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

// Need To save all the airports in database (To do This copy data from indianAirports.json file and paste inside insertMany([]) and open this post route inside postman)
// app.post('/insertIataMany', jsonParser, (req, res) => {
//     try {
//         dbName.collection('iatacodes').insertMany([]);
//     } catch (e) {
//         print(e);
//     }
// })


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});