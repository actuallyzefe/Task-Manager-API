const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
// async function connect() {
//   try {
//     await mongoose.connect(connectionString, { });
//     console.log("DB CONNECTED");
//   } catch (err) {
//     console.log(err);
//   }
// }
// connect();
const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => console.log("DB connection successful!"));
