import { v4 as uuidv4 } from 'uuid';

let users = []; 

export const getUsers = (req, res) =>{
  
    res.send(users); 
}
  export const createUser = (req, res)=>{

    //users.push(); // adding value to the data present in the array 
    //as the data present in the array changes its valeu , whenerver the server is refreshed 
    // becoz, we are not using any prior data base like mongodb to store ouur data 
    const user = req.body;
 users.push({ ...user, id: uuidv4() }); 

  res.send(`User with the name ${user.firstName} added to the DataBase`); 
}
export const getUser = (req, res) => {
    // can we retrive the value of id in that function?
    const { id } = req.params ; 
// as our aim is to send the data associated with the userid , instead of just printing the valeu od used Id 

   const foundUser=users.find((user)=> user.id === id);

   res.send(foundUser); 
}
export const deleteUser = (req, res) => {
    const { id }  = req.params;

    //id to delete 123

    // John 123
    //Jane 321
    
    users = users.filter((user) => user.id !== id); 

    res.send (`User with the id ${id} deleted from the database.`); 
}
export const patchUser = (req, res) => {
    const { id } = req.params; 

    const { firstName , lastName, age } =  req.body; 

    const user = users.find((user) => user.id ===id); 

    if (firstName) user.firstName = firstName; 
    if (lastName) user.lastName = lastName; 
    if(age) user.age = age;
    
    res.send(`User with the ${id} has  been  updated`); 
}