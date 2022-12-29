const StudentReg = require('../model/studentRegister');

//Student registration functions
const studentregister = async (req, res) => {
    const register_data = new StudentReg({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        fathers_name:req.body.fathers_name,
        org_id:req.body.orgid,
        rollno:req.body.rollno,
        rank:req.body.rank,
        marks:req.body.marks,
        categ:req.body.categ,
        dob:req.body.dob,
        mobile:req.body.mobile,
    });


   try{
    //save data into database
    const postdetails=await register_data.save();
    
    res.json(postdetails);
    
   }
   catch(err){
    res.status(400).send({'errmsg':err});
   }
}

//student information fetch for student dashboard

const fetchstudent =async (req,res)=>{
    try {
        const student_info=await StudentReg.find({_id:req.params.id})
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
  
  
  


//export admin mopdule

module.exports={
   studentregister,
   fetchstudent
  
}