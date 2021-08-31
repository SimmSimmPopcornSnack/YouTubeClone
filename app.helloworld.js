// change this file name to "app.js" to run
// sample form https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})
