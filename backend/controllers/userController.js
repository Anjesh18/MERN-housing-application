import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
export const registerController = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, location } = req.body;
    const files = req.file;
    const dataUri = getDataUri(files).content;
    const cloudRes = await cloudinary.uploader.upload(dataUri);
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(405)
        .json({ message: "User already exists", success: false });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname: fullname,
      email: email,
      password: hashedPass,
      phoneNumber: phoneNumber,
      location: location,
      profilePhoto: cloudRes.secure_url,
    });
    return res
      .status(202)
      .json({ message: "User registered", success: true, newUser });
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ message: "Internal serer error", success: false });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(405)
        .json({ message: "User does not exist", success: false });
    }
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res
        .status(500)
        .json({ message: "Invalid credentials", success: false });
    }
    const token = jwt.sign({ userId: user._id }, "secret123", {
      expiresIn: "1d",
    });
    if (!token) {
      return res
        .status(503)
        .json({ message: "Token not found", success: false });
    }
    const loggedinUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      profilePhoto: user.profilePhoto,
      location: user.location,
      phoneNumber: user.phoneNumber,
    };
    return res
      .status(202)
      .cookie("token", token, { maxAge: 24 * 60 * 60 * 1000 })
      .json({
        message: `Welcome back ${user.fullname}`,
        loggedinUser,
        success: true,
      });
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ message: "Internal server error", success: false });
  }
};

export const logoutController = async (req, res) => {
  try {
    return res
      .status(201)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logout successful", success: true });
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ message: "Internal server error", success: false });
  }
};
