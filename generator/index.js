'use strict';

const fs = require('fs');

const icons = require("./font.json");

let string = "#pragma once\n"; //TODO: license

icons.map((icon) => {
    let uniChar = icon.code.charCodeAt(0).toString(16); // 16b
    uniChar = uniChar.toUpperCase(); // it is now 16B
    uniChar = "\\u0" + uniChar; 

    icon.name = icon.name.replace(/\.?([A-Z]+)/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "");
    string += `#define SEGOE_MDL2_ICON_${icon.name.toUpperCase()} u8"${uniChar}"\n`;
});


let writeStream = fs.createWriteStream('SegoeMDL2Assets.h');
writeStream.write(string);
writeStream.end();