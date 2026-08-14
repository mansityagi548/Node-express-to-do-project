const mongoose = require("mongoose");

const bluePrint = new mongoose.Schema({
  name : {
    type:String,
    required : [true , "Please enter name"],
    trim : true,
    maxLength : [20 , "Data can not be more than 20 chars"]
  },
  completed:{
    type : Boolean,
    default : false,
  }
});


const createTodo = mongoose.model("tasksgiven" , bluePrint);

module.exports = createTodo;
