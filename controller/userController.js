const { response } = require("express");
const User = require("./../model/userModel");
const bcrypt = require("bcrypt");

exports.userCheckInfo = async (request, response, next) => {
  try {
    let user = await User.findOne({ email: request.body.email }).exec();
    if (user) {
      response.status(400).json({
        message: "user is registered",
      });
    }
    let salt = await bcrypt.genSalt();
    let hashedPassword = await bcrypt.hash(request.body.password, salt);
    user = new User({
      name: request.body.name,
      email: request.body.email,
      isAdmin: request.body.isAdmin,
      password: hashedPassword,
    });

    await user.save();

    const token = user.genAuthToken();
    response.header("x-auth-token", token);
    response.status(200).json({
      message: "ok",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (request, response, next) => {
  try {
    const users = await User.find({});
    response.status(200).json({
      data: {
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      throw new Error("invalid id");
    }
    response.status(200).json({
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateUsers = async (request, response, next) => {
  try {
    const user = await User.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    if (!user) {
      throw new Error("invalid id");
    }
    response.status(200).json({
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (request, response, next) => {
  try {
    const user = await User.findByIdAndDelete(request.params.id);
    if (!user) {
      throw new Error("invalid id");
    }
    response.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    next(err);
  }
};
