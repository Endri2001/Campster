const mongoose = require('mongoose')
// shortcut instead of having to use mongoose.Schema all the time
const Schema = mongoose.Schema;

const campSchema = new Schema({
    name: String,
    price: String,
    description:String,
    location:String
});

module.exports = mongoose.model('Camp',campSchema);