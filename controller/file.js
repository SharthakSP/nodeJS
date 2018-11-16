var mongoose = require("mongoose");
mongoose.Promise = Promise;//instantiating promise

var Profile = require("./../model/model");


//creating data controller
exports.create_data = (req, res)=> {
    var profile = new Profile(
        {
            username: req.body.username,
            age: req.body.age
        }
    );

    //callback function
    // profile.save(function(err) {
    //     if(err) return console.error(err);
    //     res.json({"message":"Profile succesflly created"});
    // });

    //mongoose promise
    profile.save()
    .then(()=>{
        res.json({"message":"Profile successfully created"})
    })
    .catch((err)=>{
        return console.error(err);
    })
}

//retreiving values from database
exports.get_all_profile = (req,res)=> {

    //callback function
    // Profile.find(function(err,profile){
    //     if(err) return console.error(err);
    //     res.json(profile);
    // });

    //promise function
    Profile.find()
    .then((profile)=>{
        res.json(profile);
    })
    .catch((err)=>{
        return console.error(err);
    })
};

//retreiving value by id
exports.get_profile_by_id = (req,res) =>{

    //callback function
    // Profile.findById(req.params.id,function(err,profile) {
    //     if(err) return next(err);
    //     res.json(profile);
    // });

    //promise function
    Profile.findById(req.params.id)
    .then((profile)=>{
        res.json(profile)
    })
    .catch((err)=>{
        return console.error(err);
    })
};

//update
exports.update_profile = (req,res)=> {

    //callback function
    // Profile.findByIdAndUpdate(req.params.id,{$set:req.body}, function(err){
    //     if(err) return next(err);
    //     res.json({"message":"profile Updateed"});
    // }); 

    //promise function
    Profile.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then(()=>{
        res.json({"message":"profile updated"})
    }).catch((err)=>{
        return console.error(err);
    })
};

//delete 
exports.delete_profile = (req,res) => {

    //callback function
    // Profile.findByIdAndRemove(req.params.id, function(err) {
    //     if(err) return console.error(err);
    //     res.json({"message":"Profile deleted succesfuly"});
    // });

    //promise function
    Profile.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.json({"message":"Profile deleted successfully"});
    })
    .catch((err)=>{
        console.error(err);
    })
};

