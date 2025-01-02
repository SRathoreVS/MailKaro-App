import { User } from "../modals/user.modal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password)
      return res
        .status(400)
        .json({ message: "All feilds are required", success: false });

    const user = await User.findOne({ email });

    // check user already there
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exist", success: false });
    }
    //bcrypt pass
    const hashedPassword = await bcrypt.hash(password, 10);
    // if user not there , create the account

    const profilePhoto = `https://avatar.iran.liara.run/public`;
    await user.create({
      fullname,
      email,
      password: hashedPassword,
      profilePhoto,
    });

    return res
      .status(201)
      .json({ message: "Account created successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "All feilds are required", success: false });

    const user = await User.findOne({ email });
    //check if email matched
    if (!user)
      return res
        .status(401)
        .json({ message: "Incorrect email or password", success: false });
    //check if password matched
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!password)
      return res
        .status(401)
        .json({ message: "Incorrect email or password", success: false });

    // generate the token
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `${user.fullname} logged in successfully`,
        user,
      });
  } catch (error) {
    console.error(error);
  }
};
