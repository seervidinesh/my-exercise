var express = require("express");
// var bodyParser = require("body-parser");
var multer = require("multer");
var cloudinary = require('cloudinary').v2;
const cloudinaryStorage = require('multer-storage-cloudinary');
var upload = multer({
    dest: "public/uploads/"
})

cloudinary.config({
    cloud_name: 'drlq88665',
    api_key: '945666529561658',
    api_secret: 'gk-HY7ul1HB_-ch6c_Qf3sQxqsY'
});


var app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('home.hbs')
});


app.post('/single', upload.single('singleFileUpload'), function(req, res, next) {
    cloudinary.uploader.upload(req.file.path, (err, result) => {
        console.log("Result of Cloudinary : " + JSON.stringify(result))
    })
    console.log(req.file)
    res.render('single.hbs', ({
        data: req.file
    }))
})



var multiFileUpload = multer({
    storage: cloudinaryStorage({
        cloudinary: cloudinary,
        folder: 'xxx',
        filename: function(req, file, cb) {
            cb(undefined, file.originalname);
        }
    })
});

app.post('/photos', upload.array('multiFileUpload', 10), async(req, res, next) => {
    for (let i = 0; i < req.files.length; i++) {
        cloudinary.uploader.upload(req.files[i].path, (err, result) => {
            if (err) throw err;
            //res.json(result)
            console.log(result)
                //console.log("Result of Cloudinary : " + JSON.stringify(result))
        })
    }
    console.log(req.files)
    res.render('photos.hbs', ({
        data: req.files
    }))
})


app.listen(3000);