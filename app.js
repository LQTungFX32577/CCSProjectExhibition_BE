const express = require('express');

const app = express();

app.use('/', (req,res) => {
    res.send('welcome to CCS Project Exhibition')
})

app.listen(8080)