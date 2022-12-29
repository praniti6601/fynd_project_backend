const AdminReg = require('../model/adminRegister');
const StuReg=require('../model/studentRegister')
const InsReg = require('../model/addinstitute');


//Admin registration functions
const adminregister = async (req, res) => {
    const register_data = new AdminReg({
        ins_name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        
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


//add institute controller......................................................

const addins = async (req, res) => {
    const ins_data = new InsReg({
        name: req.body.name,
        org_id: req.body.email,
        branchs: req.body.branch,
        seatmatrix:req.body.seatmatrix,
        
    });


   try{
    //save data into database
    const ins_details=await ins_data.save();
    
    res.json(ins_details);
    
   }
   catch(err){
    res.status(400).send({'errmsg':err});
   }
}



//verify student and update status..............................................

const verify_student = async (req, res) => {
    try {
        const student_data = {
            status: req.body.status,
          
        };
    
        const update_student_status = await StuReg.findByIdAndUpdate(
          { _id: req.params.id },
          student_data
        );
        res.json({"query_status":true,"data":update_student_status});
        
      } catch (error) {
        res.json({ message: error });
      }
}


//export admin mopdule

module.exports={
    adminregister,
    addins,
    verify_student,
}