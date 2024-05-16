import express from 'express'; 
import { createUser, deleteUser, getUser, getUsers, patchUser } from '../controllers/users.js';

// initializing the router 
const router =express.Router(); 


// all routes in here are starting with /users
router.get('/', getUsers);
 // to check whether we got into the correct route of the browser 
// add the functionality of adding users to the data base 
router.post('/', createUser); 
// we need to send some data from frontend to the server , that data being the values in the form to be inputted 
//name , passward , email. this data to be sent from the clien tto the server for the suer to be created 
// thats why we use post method  
// / users/2 => req.params { id : 2}

router.get('/:id',getUser);

router.delete('/:id',deleteUser); 

// changing the details of the user 
router.patch('/:id', patchUser); 

export default router;