const mongoose=require('mongoose');

//student register model
const AddChoiceSchema=new mongoose.Schema({
   
   stu_id:{ type: String, required: true, unique: true},
   org_id:String,
   choice:[
    {"ins_id":String,"branch":String,"choice_no":Number}
   ],

});

// Export student Schema
module.exports=mongoose.model("student_choice",AddChoiceSchema);