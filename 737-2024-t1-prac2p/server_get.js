const express = require("express"); // loads the express module framework
const res = require("express/lib/response");  //loads the response sub module from express to parse get requests
const app = express();

// this function takes 2 variables "n1", "n2" and returns the value of them added together
const addTwoNumber = (n1,n2) => {
    return n1+n2;
} 
//this function takes the query from the link name after the ? to take 2 numbers and run the addTwoNumber function and display the result
app.get("/addTwoNumber", (req,res)=> {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: result});
});  
// run the addTwoNumber function through the console
console.log(addTwoNumber(19,12));
const port = 3040;
// display on the console the port
app.listen(port,()=>{
    console.log("Hello I'm listening to port"+port);
})
