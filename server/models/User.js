const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : Number
    },
    password : {
        type : String
    },
    image : {
        type : String
    },
    role : {
        type: String,
        enum: ['type1', 'type2'],
    }
    

})

module.exports=mongooose.model('User',userSchema)