const { default: mongoose } = require('mongoose')
const User = require('../models/userModel')

module.exports = userController = {
    addUser: async(req,res)=>{
        try {
            const user = await User.create(req.body)
            if(!user) return res.status(400).json({msg:"Please fill in all the fields"})

            res.status(201).json({msg:"Successfully added new Influencer"})

        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    },
    getAllUser: async(req,res)=>{
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    },
    getUser:async(req,res)=>{
        try {
            const {id} = req.params
            if(!mongoose.isValidObjectId(id)) return res.status(400).json({msg:"Invalid User ID"})
            
            const user = await User.findById(id)
            if(!user) return res.status(400).json({msg:"User is not available in the system"})

            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    },
    updateUser:async(req,res)=>{
        try {
            const {id} = req.params
            if(!mongoose.isValidObjectId(id)) return res.status(400).json({msg:"Invalid User ID"})
            
            await User.findByIdAndUpdate(id,{$set:req.body})

            res.status(200).json({msg:"Successfully updated influencer details"})
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    },
    deleteUser:async(req,res)=>{
        try {
            const {id} = req.params
            if(!mongoose.isValidObjectId(id)) return res.status(400).json({msg:"Invalid User ID"})
            
            await User.findByIdAndDelete(id)

            res.status(200).json({msg:"Successfully deleted influencer"})
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    }
}