const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.signUp = async (req, res) =>{
    try {
        const {username, email, password, gender, age} = req.body;

        const userExist = await UserModel.findOne({email});

        if(userExist){
            return res.status(409).json({
                status: "failed",
                message: "User already exist"
            });
        }

        if(Number(age) < 18){
            return res.status(400).json({
                status: "failed",
                message: "Cannot process request, user is underage!"
            });
        }

        let saltRound = 10;
        let hashedPassword = await bcrypt.hash(password, saltRound);

        const user = new UserModel({
            username,
            email,
            password: hashedPassword,
            gender,
            age       
        })

        await user.save();

        console.log(user);
        
        res.status(200).json({
            status: "success",
            message: "User registered successfully"
        });

    } catch (error) {
        res.json({
            status: "failed",
            message: error.message
        });
    }

}

exports.signIn = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({email});
    
        if(!user){
            return res.status(409).json({
                status: "failed",
                message: "User does not exist"
            });
        } 

        const passwordEqual = await bcrypt.compare(password, user.password);
        if(!passwordEqual){
            return res.status(401).json({
                status: "failed",
                message: "User login failed"
            });
        }

        const token = jwt.sign({id: user._id, email: user.email}, process.env.SECRET_KEY);
        res.status(200).json({
            status: "success",
            message: "User signed-in successfully",
            // userData: user,
            token
        });

    } catch (error) {
            res.json({
            status: "failed",
            message: error.message
        });
    }   
}

exports.updateUser = async (req,res) => {
    try {
        const { id } = req.params;

        const updateBody = req.body;

        const user = await UserModel.findByIdAndUpdate(id, updateBody, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            console.log(user);
            return res.status(404).json({
                status: "failed",
                message: "User not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "User updated successfully",
            //orphanage
        });
    } catch (error) {
        res.json({
            status: "failed",
            message: error.message,
        });
    }
}


exports.getUsers = (req, res) =>{
    res.send("Retrieved all users");
}