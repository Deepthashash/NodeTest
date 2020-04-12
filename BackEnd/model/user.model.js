const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

mongoose.model('User', userSchema);