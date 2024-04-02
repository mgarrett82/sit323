// standard boilerplate information for including express and the express response module

const express = require('express')
const router = express.Router();

const modulus = (n1, n2) => {
    return n1%n2; //returns the mod of n1 and n2
}

const exponential = (n1, n2) => {
    return Math.pow(n1, n2); // returns the exponential of n1 to the power of n2
}

const squareroot = (n1) => {
    return Math.sqrt(n1); // returns the square root of n1;
}


/* each of the app.get routes below will activiate depending on what's written
  "/add/n1=2&n2=3" will parse n1=2 & n2 =3 into the add route/endpoint etc.
each app.get also containts a try catch error block which will throw an error is a number isn't written
*/


router.get("/modulus", (req,res)=> {
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
        const result = modulus(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

router.get("/powerof", (req,res)=> {
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
        const result = exponential(n1,n2);
        
        res.status(200).json({statuscode:200, number1: n1,number2: n2, data: result});
        
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});

router.get("/sqaureroot", (req,res)=> {
    try {
        const n1=parseFloat(req.query.n1);
        
        if(isNaN(n1)) {
            throw new Error("n1 is not a Number");
        }
        
        if (n1 === NaN ) {
            console.log()
            throw new Error("Parsing Error");
        }
        const result = Math.sqrt(n1);
        
        res.status(200).json({statuscode:200, number1: n1, data: result});
        
    } catch(error) {
        console.log(error)
        res.status(500).json({statuscode:500, msg: error.toString()});
    }

});


module.exports = router