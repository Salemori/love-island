const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    dateOfBirth: { type: Date, required: true },
    bio: { type: String, maxlength: 500 },
    location: { type: String },
    profilePicture: { type: String },
    interests: { type: [String] },
    preferences: {
      genderPreference: { type: String, enum: ["Male", "Female"] },
      minAge: { type: Number, default: 18 },
      maxAge: { type: Number, default: 70 },
    },
    matches: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    likedProfiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikedProfiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isPremium: { type: Boolean, default: false },
    lastActive: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;