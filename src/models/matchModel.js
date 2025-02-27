const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  matchedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["Matched", "Unmatched"], default: "Matched" }
}, { timestamps: true });

const matchModel = mongoose.model("Match", matchSchema)
module.exports = matchModel;
