const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }, (err) => {
    if(!err){
        console.log("Connection succeeded!");
    }else{
        console.log(JSON.stringify(err,undefined,2));
    }
});

require('./user.model');