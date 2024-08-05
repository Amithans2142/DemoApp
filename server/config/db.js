const mongooose = require('mongoose')
require('dotenv').config();

exports.connectToDb = (req,res) => {
    try {
        mongooose.connect(process.env.DATABASE_URL,{
            useNewUrlParser : true ,
            useUnifiedTopology : true

        })
        console.log("database is connected");
        
    } catch (error) {
        console.log("error while connecting to database");
        
        
    }
}
