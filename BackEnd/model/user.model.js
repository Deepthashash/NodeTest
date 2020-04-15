const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'userName Cannot be empty',
        unique:true
    },
    password: {
        type:String,
        required: 'userName Cannot be empty',
        minlength: [4,'minimun length is 4']
    },  
    saltSecret: {
        type:String
    }  
});

userSchema.pre('save', function(next){
        bcrypt.genSalt(10, (err, salt) => {
            if(err) console.log(JSON.stringify(err,undefined,2));
            else{
                bcrypt.hash(this.password, salt, (err,hash) => {
                    this.password = hash;
                    this.saltSecret = salt;
                    next();           
            });
        }
    });
});

//methods
userSchema.methods.verifyPassword = function (password){
    return bcrypt.compareSync(password,this.password);
};

userSchema.methods.genarateJwt = function () {
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXP});
};

mongoose.model('User', userSchema);