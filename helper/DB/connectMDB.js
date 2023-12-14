const mongoose = require("mongoose")
const dotenv = require('dotenv');

dotenv.config({ path: "./.env" });

const connectMDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Your connection is established ${conn}`);

    } catch (error) {
        console.log(error);
    }
};
connectMDB();

module.exports = connectMDB;