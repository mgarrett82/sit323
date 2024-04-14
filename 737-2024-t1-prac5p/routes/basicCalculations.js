const express = require('express')
const router = express.Router();


const add = (n1,n2) => {  //returns the value of n1+n2
    return n1+n2;
}

router.get("/add", (req,res)=> {
    try{
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 is not a Number");
        }
        if(isNaN(n2)) {
            throw new Error("n2 is not a Number");
        }
        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
            
        const result = add(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }
});


const minus = (n1,n2) => {
    return n1-n2; //returns the value of n1-n2
}

const multiply = (n1,n2) => {
    return n1*n2; //returns the value of n1 x n2
}

const division = (n1,n2) => {
    return n1/n2; //returns the value of n1 / n2
}

/* each of the app.get functions below will activiate depending on what's written
  "/add/n1=2&n2=3" will parse n1=2 & n2 =3 into the add funciton etc.
each app.get also containts a try catch error block which will throw an error is a number isn't written
*/

router.get("/add", (req,res)=> {
    try{
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 is not a Number");
        }
        if(isNaN(n2)) {
            throw new Error("n2 is not a Number");
        }
        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
            
        const result = add(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }
});

router.get("/minus", (req,res)=> {
    try {
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 is not a Number");
        }
        if(isNaN(n2)) {
            throw new Error("n2 is not a Number");
        }
        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        const result = minus(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

router.get("/multiply", (req,res)=> {
    try {
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 is not a Number");
        }
        if(isNaN(n2)) {
            throw new Error("n2 is not a Number");
        }
        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        const result = multiply(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

router.get("/division", (req,res)=> {
    try {
        const n1=parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 is not a Number");
        }
        if(isNaN(n2)) {
            throw new Error("n2 is not a Number");
        }
        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error");
        }
        const result = division(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});


module.exports = router