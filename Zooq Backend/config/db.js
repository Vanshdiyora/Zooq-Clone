const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
});