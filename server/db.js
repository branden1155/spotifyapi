const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, (err) => {
    mongoose.set('strictQuery', true);
    if(err){
        console.error("Error: ", err.message);
    }
    else
        console.log("MongoDB Connection was Good!")
})

const saveToken = async (user) => {
    return await user.save();
};

const findToken = async (object) => {
    return User.find(object);
};

module.exports = {saveToken, findToken}