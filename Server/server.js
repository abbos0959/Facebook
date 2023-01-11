require("dotenv").config();
const app = require("./middleware/app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log("server ishladi".yellow.underline.bold);
});
