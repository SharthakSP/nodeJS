var profile = [
    {
        username:"sharthak_sp",
        age:23
}];

exports.getFunction = function (req,res) {
    res.json(profile);
};

exports.postFunction = function (req,res) {
    
    profile.push(
        {
            username: req.body.username,
            age: req.body.age
        });

    res.json({message:"posted"});
};