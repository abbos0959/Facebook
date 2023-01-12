const jwt = require("jsonwebtoken");
const generateToken = (user, expired) => {
   return jwt.sign(user, "secret", { expiresIn: expired });
};

module.exports = generateToken;
