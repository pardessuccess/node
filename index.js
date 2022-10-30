const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://pardess:eodrn2636@boilerplate.gotfbz2.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
}).then(() => console.log('Mongoose')).catch(
    err=> console.log(err)
)

app.get('/', (req, res) => res.send('Hello World Fuck you'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))