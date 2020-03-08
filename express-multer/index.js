const express = require('express')
const multer = require('multer')
const app = express()
let port = process.env.PORT || 3000

var upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
    res.json('Welcome to my Express Multer App.')
})

app.listen(port, () => console.log("Express server is running on Port : " + port))