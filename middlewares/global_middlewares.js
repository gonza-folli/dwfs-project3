const express = require('express');
// const rateLimit = require('express-rate-limit)');
// const jwt = require('jsonwebtoken');
const expressJwt= require('express-jwt');

const jwtSecret = 'D3l1l4h';



module.exports = function (app) {
    app.use(expressJwt({
        secret: jwtSecret,
        algorithms: ['HS256']
        }).unless({
            path: ['/user/signup','/user/login']
        })
    );
}