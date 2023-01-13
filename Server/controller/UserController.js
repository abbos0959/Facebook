const UserModel = require("../models/userModel");
const { validateEmail, validateLength, validateUserName } = require("../helpers/validator");
const generateToken = require("../helpers/token");
const bcrypt = require("bcrypt");
const sendverificationEmail = require("../helpers/mailer");

const register = async (req, res) => {
   try {
      const { first_name, last_name, email, password, username, bYear, bMonth, bDay, gender } =
         req.body;

      if (!validateEmail(email)) {
         return res.status(400).json({
            message: "Iltimos emailni to'g'ri kiriting",
         });
      }

      const checkUser = await UserModel.findOne({ email });

      if (checkUser) {
         return res.status(400).json({
            message: "bunday user avval ro'yhatdan o'tgan",
         });
      }

      if (!validateLength(first_name, 3, 30)) {
         return res.status(400).json({
            message: "firstname minimal 3 ta maximal 30 ta harfdan iborat bo'lishi kerak",
         });
      }
      if (!validateLength(last_name, 3, 30)) {
         return res.status(400).json({
            message: "lastname minimal 3 ta maximal 30 ta harfdan iborat bo'lishi kerak",
         });
      }
      if (!validateLength(password, 6, 30)) {
         return res.status(400).json({
            message: "parol minimal 6 ta maximal 30 ta belgidan iborat bo'lishi kerak",
         });
      }
      const hashPassword = await bcrypt.hash(password, 12);
      let temperUserName = first_name + last_name;
      let newUserName = await validateUserName(temperUserName);

      const user = await new UserModel({
         first_name,
         last_name,
         email,
         password: hashPassword,
         username,
         bYear,
         bMonth,
         bDay,
         gender,
         username: newUserName,
      }).save();

      const emailverificationtoken = generateToken({ id: user._id.toString() }, "30m");
      const url = `${process.env.BASE_URL}/activate/${emailverificationtoken}`;
      sendverificationEmail(user.email, user.first_name, url);

      const token = generateToken({ id: user._id.toString() }, "7d");

      res.send({
         id: user._id,
         username: user.username,
         picture: user.picture,
         first_name: user.first_name,
         last_name: user.last_name,
         token: token,
         verified: user.verified,
         message: "register muvaffaqiyatli ! Iltimos emailingizni tasdiqlang ",
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

module.exports = { register };
