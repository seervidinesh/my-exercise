const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoClient = require("mongodb").MongoClient;
var auth = require("./routes/auth.js");
var studio = require("./routes/studios/studio");
var projects = require("./routes/projects/project");
var account = require("./routes/account/account");
var user = require("./routes/users/user");
var dashboard = require("./routes/dashboard/dashboard");
var allProjects = require("./routes/allProjects/allProjects");
var home = require("./routes/home/home");
var chat = require('./routes/dashboard/chat')
require("dotenv").config();
var checkToken = require("./checkToken.js");
var app = express();

// Port Configuration Start
var port = process.env.PORT || 3000;
// Port Configuration End

//-----------------------//

// Twilio Setup Start
app.locals.accountSid;
app.locals.authToken;
app.locals.client;
accountSid = process.env.accound_sid;
authToken = process.env.auth_token;
client = require("twilio")(accountSid, authToken);
// Twilio Setup End

//-----------------------//

// Local Variables Start
app.locals.db;
app.locals.ObjectId;
app.locals.projectSerial;
// app.locals.accountSid;
// app.locals.authToken;
// Local variables End

//-----------------------//

// DB Setup Start
ObjectId = require("mongodb").ObjectID;
app.locals.url;
url = process.env.URL;
mongoClient.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, client) => {
        if (err) throw err;
        db = client.db("NeelkanthVideos");
    }
);
// DB Setup End

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.locals.SECRET;
app.use(
    session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true
    })
);


// Route Setup Start
app.use("/", home);
app.use("/auth", auth);
app.use("/studios", studio);
app.use("/projects", projects);
app.use("/account", account);
app.use("/users", user);
app.use("/dashboard", dashboard);
app.use("/allProjects", allProjects);
app.use('/chat', chat);
// Route Setup End

app.use(express.static("public"));


app.put("/uniqueCounter", (req, res) => {
    db.collection("adminConfig").findOneAndUpdate({
            _id: ObjectId("5d84bf1a1c9d4400000e4b03")
        }, {
            $inc: {
                COUNT: 1
            }
        },
        (err, result) => {
            if (err) throw err;
            res.json(result);
        }
    );
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

// twilio sms

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(port, () => console.log(`Server Running on port ${port}`));