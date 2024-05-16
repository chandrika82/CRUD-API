import express from 'express'
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
//dotenv helps to acquire the value of port through  the environment variables file 

const app = express();  // intializing the app 
const PORT = 5000; 

app.use(bodyParser.json()); // we are using the middleware over here
// middle ware is basically used to abstract the req and res object 

// creating the route that will be used by the browser 

app.use('/', usersRoutes); 

app.get('/', (req, res) =>{
   console.log('[TEST]!'); 
   res.send('Hello from Homepage.'); 
});
// remeber browsers can only make the get request 
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
// basically app.use is a middle ware : What does middle ware do ?
//it is the fuction that have acess to the request object and response object, ans the next middle ware ficntion is in request-response 
//api will be handling the users uisng 5 routes *get all users, * post all users, * get a specific user , * delete a specific user, * update the info od specific user 
