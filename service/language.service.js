const fs = require('fs');

path = require('path'),    
filePath = path.join(__dirname, '../file/iso-lang.json');

function getLan(){  
    let rawdata = fs.readFileSync(filePath);
    let isolang = JSON.parse(rawdata);
    return  isolang; 
};
module.exports = {
    getLan
};
