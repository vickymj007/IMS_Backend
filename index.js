const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js')
require('dotenv').config()

const corsOption = {
    origin:true,
    credentials:true
}

//Middlewares
app.use(cors(corsOption))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//Routes
app.use('/api', userRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({
        msg:"Welcome to the Influencer Management system API, Use the below mentioned routes to perform CRND Operations",
        routes:{
            get_all_influencers:"Go to '/api/user' using 'get' method to get all the Influencer",
            update_influencer:"Go to '/api/user/:id' using 'put' method to update Influencer details",
            delete_influencer:"Go to '/api/user/:id' using 'delete' method to delete Influencer",
            add_influencer:"Go to '/api/user' using 'post' method to add new Influencer",
            get_influencer:"Go to '/api/user/:id' using 'get' method to get a single influencer",
        },
        body_example:{
            "name":"Influencer name",
            "gender":"gender",
            "followers":"No of followers",
            "category":"ex (Fitness,Travel,Youtuber,Actor)",
            "socialMedia":"@Influencer_social_media_handle"
        }
    })
})

//Connect to DB
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)

        app.listen(process.env.PORT,()=>{
            console.log('Connected to MongoDB')
            console.log("Server is running");
        })

    } catch (error) {
        console.log(error);
    }
}

connectDB()