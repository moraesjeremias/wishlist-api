var mongoose = require('mongoose');

function dbConnect(){
    mongoose.connect(
        "mongodb+srv://admin:admin@cluster0-qfeuf.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    ).then(function(){
        console.log("Connected to MongoDB Cluster")
    }).catch(err => {
        return err;
    });
}

module.exports = dbConnect;