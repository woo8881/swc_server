const photoService = require('./photoService');
const path = require('path');
const fs = require("fs");

module.exports = {
    photoUpdate: (req, res) => {
        const body = req.body;
        const imgData = req.files;
        console.log(req.files);
         photoService.photoUpdate(body, imgData).then(result => {
             res.send(result);
         })
     },
}