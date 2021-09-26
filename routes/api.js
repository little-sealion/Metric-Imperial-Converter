'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();
  app.get('/api/convert', (req,res) => {
    const {input} = req.query;
    const pattern = /^([\d]{0,})(mi|Km|gal|L|lbs|Kg){1}$/i;
    if(!input.match(pattern)) return res.send(`error:plese type correct number&unit`);
    console.log(input.match(pattern));
    // let [a,initValue,initUnit,...rest]= input.match(pattern);

    let initNum = convertHandler.getNum(input.match(pattern)[1]);
    let initUnit = convertHandler.getUnit(input.match(pattern)[2]);
    let returnNum = convertHandler.convert(initNum,initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);

    let result = {initNum,initUnit,returnNum,returnUnit,string:returnString};
    console.log(result);
    res.status(200).send(result);

    

  })

};
// { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }