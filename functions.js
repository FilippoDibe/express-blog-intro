const fs = require('fs');
const path = require("path");

// leggere json 

const readJson = (fileName) => {
    const filePath = path.join(__dirname, 'db', `${fileName}.json`);
    const json = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(json);
}

// scrivere json 

const writeJson = (fileName, data) => {
    const filePath = path.join(__dirname, 'db', `${fileName}.json`);
    const json = JSON.stringify(data);
    fs.writeFileSync(filePath, json);
}

module.exports = {
    readJson,
    writeJson
}