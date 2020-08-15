// requiring mongoose after npm install mongooose
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://mpv33:uV7Pe6CLrRFw4Eb2@cluster0.8jpev.mongodb.net/contact_list_db?retryWrites=true&w=majority");
// acquiring connection to check for errors
const dbConnection=mongoose.connection;
dbConnection.on("error",function(){
    console.error("problem in connecting db");
})
// once connected successfully show meassge on console
dbConnection.once("open",function(){
   console.log("db connected successfully");
})
