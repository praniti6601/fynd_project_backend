const router=require('express').Router();
const studentController=require('../controller/studentController');
const ChoiceController=require('../controller/StudentChoiceController')


//Student Registration routes
router.post('/student/reg',studentController.studentregister);


//Student add choice routes
router.post('/student/add_choice',ChoiceController.studentChoice);


//student information for student dashboard
router.get('/student/student_info/:id',studentController.fetchstudent);


//export router
module.exports=router;