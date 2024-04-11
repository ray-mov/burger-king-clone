import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  googleId: {
    type: String,
  },
  displayName: {
    type: String
  },
  address: {
    type: String,
  },
  orders: {
    type: Schema.Types.ObjectId,
    ref: 'Order'
  },
  profilePic: {
    type: String, // cloudinary url
  },
},
  {
    timestamps: true
  })



export const User = mongoose.model("User", userSchema)