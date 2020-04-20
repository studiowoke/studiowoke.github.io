const path = require('path');
var fs = require('fs');
var express = require('express');
var router = express.Router();




function readDirectory(path){
  return fs.readdir(path, function(err, data){
    if (err) return null
    else return data
  })
}



//const publicDir = path.resolve(__dirname, '../../public/index.html')
//const publicFolderElements = readDirectory(publicDir)
//const bundledFile = path.resolve(__dirname, '../../public/index.html')
//const originalFile = path.resolve(__dirname, '../../frontend/index.html')
router.get('/', function(req, res, next) {

  //console.log("public dirs: ", publicFolderElements)
  //check if

  res.sendFile('index.html');
});

module.exports = router;
