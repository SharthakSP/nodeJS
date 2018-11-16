var Profile = require("./../model/model");

//creating data controller
exports.create_data = function (req, res) {
    var profile = new Profile(
        {
            username: req.body.username,
            age: req.body.age
        }
    );

    profile.save(function(err) {
        if(err) return console.error(err);
        res.json({"message":"Profile succesflly created"});
    });
}

//retreiving values from database
exports.get_all_profile = function (req,res) {

    Profile.find(function(err,profile){
        if(err) return console.error(err);
        res.json(profile);
    });
};

//retreiving value by id
exports.get_profile_by_id = function(req,res,next) {

    Profile.findById(req.params.id,function(err,profile) {
        if(err) return next(err);
        res.json(profile);
    });
};

//update
exports.update_profile = function(req,res,next) {

    Profile.findByIdAndUpdate(req.params.id,{$set:req.body}, function(err){
        if(err) return next(err);
        res.json({"message":"profile Updateed"});
    }); 
};

//delete 
exports.delete_profile = function(req,res) {

    Profile.findByIdAndRemove(req.params.id, function(err) {
        if(err) return console.error(err);
        res.json({"message":"Profile deleted succesfuly"});
    });
};

