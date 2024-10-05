const express = require('express');
const router = express.Router();
const user = require('./user.json')

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
    res.status(200);
    res.send('<h1>Welcome to ExpressJs Tutorial!</h1>');
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
    //res.send('This is profile router');
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(user));
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req,res) => {
    // res.send('This is login router');
    if (req.body.username === user.username && req.body.password === user.password) {
        // All Passed
        res.status(200);
        res.send('<p1>Successfully logged in!</p1>');
    } else {
        res.status(401);
        res.send('<p1>Login unsucessful: username or password is incorrect');
    }
    
});
  
/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
    //res.send('This is logout router');
    if(req.params.username === user.username) {
        res.status(200)
        res.send(`<p>${user.username} Successfully logged out.</p>`)
    } else {
        res.status(404)
        res.send(`<h1> Error 404 - Not found.</h1>
            <p>The user ${req.params.username} is not found.</p>`);
    }
});

module.exports = router;