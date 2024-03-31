const express = require("express");
const res = require("express/lib/response");
const app = express();
const add = (n1,n2) => {
    return n1+n2;
}
const minus = (n1,n2) => {
    return n1-n2;
}

const multiply = (n1,n2) => {
    return n1*n2;
}

const division = (n1,n2) => {
    return n1/n2;
}

app.get("/add", (req,res)=> {
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

app.get("/minus", (req,res)=> {
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

app.get("/multiply", (req,res)=> {
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

app.get("/division", (req,res)=> {
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
const port = 3040;
app.listen(port,()=>{
    console.log("Hello I'm listening on port "+port);
})