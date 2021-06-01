const express = require('express');
const app = express();
const mongoose = require('mongoose');

const video_routes = require('./routes/video');


// db connection
const db_url = 'mongodb+srv://admin:admin@cluster0.gcqgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(db_url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(console.log("DB Connected!"))


// middleware
app.use(express.json());

app.use('/api', video_routes)


// port & server 
const PORT = process.env.PORT || 8848
app.listen(PORT, console.log(`Server is running on ${PORT}`))



