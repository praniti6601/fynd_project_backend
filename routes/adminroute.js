const router=require('express').Router();
const adminController=require('../controller/adminController');
const infoController=require('../controller/studentInfoController')


//Admin Registration routes
router.post('/admin/reg',adminController.adminregister);



//add institutes
router.post('/admin/add_ins',adminController.addins);

//update student status
router.post('/admin/update_status/:id',adminController.verify_student);


//not alloted student info
router.get('/admin/notallot_student/:orgid',infoController.notallotedstudents);


//not alloted student choice
router.get('/admin/notallot_student_choice/:stuid',infoController.notallotedchoice);

//export router
module.exports=router;