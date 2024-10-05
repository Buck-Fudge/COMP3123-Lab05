const express = require('express');
const app = express();
const homeRouter = require('./home');

// Philip Cheginy | 101439635
// Week 5 Lab Exercise


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.get('/force/error',(err,req,res,next) => {
  // res.send('This is error router');
  res.status(500);
  throw new Error('Force Error is thrown.');
});

// Error handler middleware
const errorHandler = (err, req, res, next) => {
  res.status(500).send({status:false, message:"Something broke!"})
  next();
}
// ditto.
app.use(errorHandler)

// Router
app.use('/api', homeRouter);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));