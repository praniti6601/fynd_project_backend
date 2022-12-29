const ChoiceReg=require('../model/addChoice')



//choice add function
const studentChoice = async (req, res) => {
    const choice_data = new ChoiceReg({
        stu_id: req.body.student_id,
        org_id: req.body.org_id,
        choice: req.body.choice,
        
    });


   try{
    //save data into database
    const choicedetails=await choice_data.save();
    
    res.json({"query_status":true,"data":choicedetails});
    
   }
   catch(err){
    res.status(400).send({'errmsg':err});
   }
}



//export choice module

module.exports={
    studentChoice
}