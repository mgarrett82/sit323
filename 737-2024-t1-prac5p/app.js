// standard boilerplate information for including express and the express response module

const express = require("express");

const app = express();

//creates 2 routes to the modules with the calculation functions

const router = require('./routes/basicCalculations.js');
const routerAdvanced = require('./routes/advancedCalculations.js');


//tells express to use the two routes
app.use(router);
app.use(routerAdvanced);


//tells the app to listen on port 3040 for the https string

const PORT = 3040;

app.listen(PORT, ()=>{
    console.log(`Running on http://${PORT}`);
});