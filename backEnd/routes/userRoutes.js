const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')

router.get('/',(req,res)=>{
    res.json({message:"helllo"})
})

router.post('/signup',(req,res)=>{
    // console.log(req.body.name)
    const {name,email,password} = req.body
    if(!name|| !email|| !password){
        return res.status(422).json({error:"Please add all the feilds"})
    }
    
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"Saved succesfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
        return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"Succefully signed in"})
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router