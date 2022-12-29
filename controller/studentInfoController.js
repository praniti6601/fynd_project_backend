const StudentReg = require('../model/studentRegister');
const ChoiceModel = require('../model/addChoice');


//student information fetch for student dashboard

const notallotedstudents =async (req,res)=>{
    try {
        const student_info=await StudentReg.find({status:0,org_id:req.params.orgid},{_id:1}).sort({rank:0})
        if(student_info.length!=0){
            res.status(200).json(student_info)
        }else{
            res.status(404).json({'errmsg':false})
        }
       
    }
    catch(error){
        res.status(400).json({'errmsg':error})
    }
  }
  
  
  //get student choice....................................................................
  const notallotedchoice =async (req,res)=>{
    try {
        const choice_info=await ChoiceModel.find({stu_id:req.params.stuid},{choice:1})
        if(choice_info.length!=0){
            res.status(200).json(choice_info)
        }else{
            res.status(404).json({'errmsg':false})
        }
       
    }
    catch(error){
        res.status(400).json({'errmsg':error})
    }
  }
  


//export admin mopdule

module.exports={
    notallotedstudents,
    notallotedchoice
}