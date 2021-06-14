const express = require("express");
const app = express(); 
const mongoose = require("mongoose"); 
const cors = require("cors"); 



app.use(express.json());
app.use(cors()); 

mongoose.connect("mongodb+srv://admin-harsh:7hoPUeNHT2b42upX@cluster0.8y5it.mongodb.net/Foods?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const FoodSchema = new mongoose.Schema({
    
     name:{ type: String, 
        required: true},
    daysLastEaten: Number,
})

const FoodItem = new mongoose.model("foodItem", FoodSchema); 


app.get("/", function(req, res){
    res.send("Redirect... Data added!")
})

app.get("/read", function(req, res){
    FoodItem.find({}, function(err, result){
        if(err){
            console.log(err);
       } else {
           res.send(result); 
       }
    })
})


app.post("/insert", function(req, res){

    const foodItem = req.body.name;
    const days = req.body.daysLastEaten; 



    const food = new FoodItem ({
        name: foodItem,
        daysLastEaten: days,
    })
    food.save(); 
    res.redirect("/")
})

app.listen(3001, function(){
    console.log("Listening at 3001")
})