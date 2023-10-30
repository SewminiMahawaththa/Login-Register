const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        reuired:true,
        unique:true
    },
    password:{
        type:String,
        reuired:true,
    },
});

const User = mongoose.model("User",UserSchema);

module.exports = User;