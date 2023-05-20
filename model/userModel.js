const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: [true, "please enter your name"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please enter your email"],
  },
  isAdmin: {
    type: Boolean,
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
  },
});
userSchema.method("genAuthToken", function () {
  const token = jwt.sign(
    { usrid: this._id, adminRole: this.isAdmin },
    process.env.SECRET_KEY
  );
  return token;
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
