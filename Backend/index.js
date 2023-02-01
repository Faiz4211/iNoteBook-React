const connectToMongo = require('./db/database');
const express = require('express');

connectToMongo();

const app = express()
const port = 3000

app.use(express.json())

// Available routes 
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server Started on ${port}`)
})