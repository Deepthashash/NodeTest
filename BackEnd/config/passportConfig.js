const passport = require('passport');
const localStartergy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStartergy({usernameField: 'userName'},
    (userName, password, done) => {
        User.findOne({userName: userName}, 
            (err, user) => {
                if(err){
                    return done(err); //unknow error
                }else if(!user){
                    return done(null,false,{message: 'User is not registered'});
                }else if(!user.verifyPassword(password)){
                    return done(null,false,{message: 'Wrong password'});
                }else{
                    done(null,user);
                }
            });
    })
);


