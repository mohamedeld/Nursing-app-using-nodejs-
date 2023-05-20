const User = require("./../model/userModel");
const bcrypt = require("bcrypt");

exports.checkAuthUser = async (request, response, next) => {
  try {
    let user = await User.findOne({ email: request.body.email }).exec();
    if (!user) {
      response.status(400).json({
        message: "invalid email or password",
      });
    }
    let validPassword = bcrypt.compare(request.body.password, user.password);
    if (!validPassword) {
      response.status(400).json({
        message: "invalid email or password",
      });
    }

    let token = user.genAuthToken();
    response.header("x-auth-token", token);
    response.status(200).json({
      message: "logged in successfully",
    });
  } catch (err) {
    next(err);
  }
};
