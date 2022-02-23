const likesService = require('./likesService');
const path = require('path');

// const signRefreshToken = require('../../jwt/signToken').signRefreshToken;
// const signAccessToken = require('../../jwt/signToken').signAccessToken;

const hashing = require(path.join(__dirname, '../../config', 'hashing.js'));
const salt = require(path.join(__dirname, '../../config', 'config.json')).salt;

module.exports = {
    likes:(req,res)=>{
        const body = req.body;
        likesService.likes(body).then((result)=>
            res.send(result)
        )
    },
}