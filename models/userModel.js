const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    socialMedia:{
        type:String,
        required:true
    },
    followers:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    }
},{timestamps:true})


const User = mongoose.model('influencer',userSchema) 
module.exports = User