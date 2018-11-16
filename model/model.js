var mongoose = require("mongoose");
//var Schema = mongoose.Schema();
var profileSchema = new mongoose.Schema({
    username: String,
    age: Number
});

//compiling schema into a model
var Profile = mongoose.model("Profile",profileSchema);

module.exports = Profile;
