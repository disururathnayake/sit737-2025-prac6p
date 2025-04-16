const express= require("express");
const app= express();
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
    new winston.transports.Console({
    format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level:
   'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
   });
  
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }
const add= (n1,n2) => {
    return n1+n2;
}

const subtract= (n1,n2) => {
    return n1-n2;
}

const multiply= (n1,n2) => {
    return n1*n2;
}

const divide= (n1,n2) => {
    return n1/n2;
}



app.get("/add", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1); // Changed from n1 to num1
        const num2 = parseFloat(req.query.num2); // Changed from n2 to num2

        if (isNaN(num1)) {
            logger.error("num1 is incorrectly defined");
            throw new Error("num1 incorrectly defined");
        }
        if (isNaN(num2)) {
            logger.error("num2 is incorrectly defined");
            throw new Error("num2 incorrectly defined");
        }

        logger.info('Parameters ' + num1 + ' and ' + num2 + ' received for addition');
        const result = add(num1, num2);
        res.status(200).json({statuscode: 200, data: result}); // Corrected typo in statuscode
    } catch (error) {
        logger.error(error.toString()); // Using logger to log errors
        res.status(500).json({statuscode: 500, msg: error.toString()}); // Corrected typo in statuscode
    }
});

app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.num1); 
        const n2 = parseFloat(req.query.num2); 

        if (isNaN(n1)) {
            logger.error("num1 is incorrectly defined");
            throw new Error("num1 incorrectly defined");
        }
        if (isNaN(n2)) {
            logger.error("num2 is incorrectly defined");
            throw new Error("num2 incorrectly defined");
        }

        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for subtract');
        const result = subtract(n1, n2);
        res.status(200).json({statuscode: 200, data: result}); // Corrected typo in statuscode
    } catch (error) {
        logger.error(error.toString()); // Using logger to log errors
        res.status(500).json({statuscode: 500, msg: error.toString()}); // Corrected typo in statuscode
    }
});

app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.num1); 
        const n2 = parseFloat(req.query.num2); 

        if (isNaN(n1)) {
            logger.error("num1 is incorrectly defined");
            throw new Error("num1 incorrectly defined");
        }
        if (isNaN(n2)) {
            logger.error("num2 is incorrectly defined");
            throw new Error("num2 incorrectly defined");
        }

        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for multiply');
        const result = multiply(n1, n2);
        res.status(200).json({statuscode: 200, data: result}); // Corrected typo in statuscode
    } catch (error) {
        logger.error(error.toString()); // Using logger to log errors
        res.status(500).json({statuscode: 500, msg: error.toString()}); // Corrected typo in statuscode
    }
});

app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.num1); 
        const n2 = parseFloat(req.query.num2); 

        if (isNaN(n1)) {
            logger.error("num1 is incorrectly defined");
            throw new Error("num1 incorrectly defined");
        }
        if (isNaN(n2)) {
            logger.error("num2 is incorrectly defined");
            throw new Error("num2 incorrectly defined");
        }

        logger.info('Parameters ' + n1 + ' and ' + n2 + ' received for divide');
        const result = divide(n1, n2);
        res.status(200).json({statuscode: 200, data: result}); // Corrected typo in statuscode
    } catch (error) {
        logger.error(error.toString()); // Using logger to log errors
        res.status(500).json({statuscode: 500, msg: error.toString()}); // Corrected typo in statuscode
    }
});


const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port " +port);
})