const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSignUp = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password is Required" })
    }
    let user = await User.findOne({email})
    if(user){
        return res.status(400).json({error:"Email already exists"})
    }
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({ email, password: hashPassword })
    let token = jwt.sign({ email,id:newUser._id }, process.env.SECRET_KEY)
    return res.status(200).json({token,newUser})


}

const userLogin = async (req, res) => {

}

const getUser = async (req, res) => {

}

module.exports = { userSignUp, userLogin, getUser }
