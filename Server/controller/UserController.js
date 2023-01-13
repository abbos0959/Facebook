const UserModel = require("../models/userModel");
const { validateEmail, validateLength, validateUserName } = require("../helpers/validator");
const generateToken = require("../helpers/token");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendverificationEmail = require("../helpers/mailer");
const userModel = require("../models/userModel");

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

const activateAcount = async (req, res) => {
   try {
      const { token } = req.body;
      const user = jwt.verify(token, "secret");
      const check = await UserModel.findById(user.id);
      console.log(check.verified);

      console.log(user);

      if (check.verified === false) {
         await userModel.findByIdAndUpdate(user.id, { verified: true });
         return res.status(200).json({ message: "sizning emailingiz muvaffaqiyatli tasdiqlandi" });
      } else {
         return res.status(200).json({ message: "sizning emailingiz allaqachon tasdiqlangan" });
      }
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      const usert = await userModel.findOne({ email });

      if (!usert) {
         return res.status(400).json({
            message: "bunday user mavjud emas",
         });
      }

      const check = await bcrypt.compare(password, usert.password);

      if (!check) {
         return res.status(400).json({
            message: "bunday user mavjud emas password",
         });
      }
      const token = generateToken({ id: usert._id.toString() }, "7d");

      res.send({
         id: usert._id,
         username: usert.username,
         picture: usert.picture,
         first_name: usert.first_name,
         last_name: usert.last_name,
         token: token,
         verified: usert.verified,
         message: "tizimga muvaffaqiyatli kirdingiz ",
      });
   } catch (error) {
      res.status(500).json({
         message: "login xatoligi",
      });
   }
};

module.exports = { register, activateAcount, login };
