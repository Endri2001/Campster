const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require("./models/camp")

mongoose.connect("mongodb://localhost:27017/campster",{
    useNewUrlParser:true,
    // use MongoDb driver's new connection managment engine
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DATABASE CONNECTED")
});

const app = express();

// make sure that express reads ejs templates
app.set('view engine', 'ejs');
// the views folder is where we get our ejs its the default place where express looks
app.set('views', path.join(__dirname,'templates','views'));

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/camps', async (req,res)=>{
    const camps = await Campground.find({})
    res.render("camps/index",{camps})
})

app.get('/camps/:id', async (req,res)=>{
    const camp = await Campground.find({})
    res.render("camps/index",{camps})
})

app.listen(3000,()=>{
    console.log('Server on port 3000');
})