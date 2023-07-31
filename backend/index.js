const express = require("express")
const server = express();
const mongoose = require("mongoose")



const url = `mongodb+srv://dondeysunil:Sunil%40123@cluster0.zci4ooj.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

server.listen(8080, () => {
    console.log("server is started on port 8080 ")
});