const mongoose = require("mongoose");

const DB = async () => {
   try {
      await mongoose.connect(process.env.URL);

      console.log("MONGODB ULANDI".bgBlue.underline.bold);
   } catch (error) {
      console.log("MONGODB ULANMADI".bgRed.bold.underline);
      console.log(process.env.URL);
   }
};
module.exports = DB;
