const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const expressJwt= require('express-jwt');

const jwtSecret = 'D3l1l4h';

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 20, // limit each IP to 20 requests per windowMs
    message:  "se superaron las 20 peticiones por hora"
    });



module.exports = function (app) {
    app.use(helmet()); // seguridad por helmet

    app.use(expressJwt({ // seguridad por token JWT
        secret: jwtSecret,
        algorithms: ['HS256']
        }).unless({
            path: ['/user/signup','/user/login']
        })
    );
    app.use(limiter); //  seguridad por limiter
    
    app.use(express.json());
    app.use(express.json({  // tamaño archivos
        limit: '200kb'
    }));
}