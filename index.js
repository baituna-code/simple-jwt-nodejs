const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

// set global app
dotenv.config();

let PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT} ...`);
});


// generate token
app.post('/user/generateToken', (req, res) => {
    // validate user credentials
    // then generate token

    let jwtToken = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date.now(),
        userId: 'baituna',
        expiresIn: process.env.JWT_EXPIRY,
    }

    const token = jwt.sign(data, jwtToken);

    res.send(token);
});

// verify that the token
app.get('/user/validateToken', (req, res) => {
    // token dikirim dalam sebuah request disimpan di header
    // untuk keperluan keamanan

    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtToken = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);

        const verifyToken = jwt.verify(token, jwtToken);
        if(verifyToken) {
            return res.send('Successfully Verified');
        }else{
            return res.status(401).send(error)
        }
    } catch (error) {
        return res.status(401).send(error.message);
    }
});

//verify token with authentication
app.get('/user/verifyAuthToken', (req, res) => {
    let jwtToken = process.env.JWT_SECRET_KEY;
    try {
        const tokenBariere = req.header('authorization');
        const lengText = tokenBariere.indexOf(' ');
        const token = tokenBariere.substring(lengText+1, tokenBariere.length);

        const verifyToken = jwt.verify(token, jwtToken);
        if(verifyToken) {
            return res.send('Successfully Verified');
        }else {
            return res.send(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error.message);
    }
});