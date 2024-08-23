import UserModel from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import ErrorHandle from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const HashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const newUser = await UserModel.create({
      username,
      email,
      password: HashedPassword,
    });

    res.json({
      Message: "User Created Successfully",
    });
  } catch (Error) {
    next(Error);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await UserModel.findOne({ email });
    if (!validUser) return next(ErrorHandle(404, "User not found"));
    const validPassword = bcryptjs.compare(password, validUser.password);
    if (!validPassword) return next(ErrorHandle(401, "Invalid password"));
    const token = jwt.sign({ id: validUser.id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
