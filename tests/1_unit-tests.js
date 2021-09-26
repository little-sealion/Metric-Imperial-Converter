const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Function convertHandler.getNum(input)',function(){
        test('whole number input',function(){
           let input = '32';
           assert.equal(convertHandler.getNum(input),32);
        })
        test('decimal number input',function(){
            let input = '3.2';
            assert.equal(convertHandler.getNum(input),3.2);
        })
        test('fractional number input',function(){
            let input = '3/2';
            assert.equal(convertHandler.getNum(input),1.5);
        })
        test('a fractional input with a decimal',function(){
            let input = '3.3/2';
            assert.equal(convertHandler.getNum(input),1.65);
        })
        // test('return an error on a double-fraction',function(){
        //     let input = '3.3/2/3';
        //     assert.equal(convertHandler.getNum(input),1.65);
        // })
        test('default to a numerical input of 1 when no numerical input is provided',function(){
            let input = '';
            assert.equal(convertHandler.getNum(input),1);
        })
        
    })


    // suite('Function convertHandler.getUnit(input)/getReturnUnit(initUnit)',function(){
    //     test('read each valid input unit',function(){
    //        let input = '32';
    //        assert.equal(convertHandler.getNum(input),32);
    //     })
    //     test('return an error for an invalid input unit',function(){
    //         let input = '3.2';
    //         assert.equal(convertHandler.getNum(input),3.2);
    //     })
    //     test('return the correct return unit for each valid input unit',function(){
    //         let input = '3/2';
    //         assert.equal(convertHandler.getNum(input),1.5);
    //     })
    //     test('return the spelled-out string unit for each valid input unit.',function(){
    //         let input = '3.3/2';
    //         assert.equal(convertHandler.getNum(input),1.65);
    //     })

    // })


    suite('Function convertHandler.convert(initNum, initUnit)',function(){
        test('gal to L',function(){
            let initNum = 3;
            let initUnit = 'gal';
            assert.equal(convertHandler.convert(initNum, initUnit),11.35623);
        })
        test('L to gal',function(){
            let initNum = 3.3;
            let initUnit = 'L';
            assert.equal(convertHandler.convert(initNum, initUnit),0.87177);
        })
        test('mi to km',function(){
            let initNum = 3/2;
            let initUnit = 'mi';
            assert.equal(convertHandler.convert(initNum, initUnit),2.41401);
        })
        test('km to mi',function(){
            let initNum = 1;
            let initUnit = 'km';
            assert.equal(convertHandler.convert(initNum, initUnit),0.62137);
        })
        test('lbs to kg',function(){
            let initNum = 3.3/0.5;
            let initUnit = 'lbs';
            assert.equal(convertHandler.convert(initNum, initUnit),2.99371);
        })
        test('kg to lbs',function(){
            let initNum = 3.76;
            let initUnit = 'kg';
            assert.equal(convertHandler.convert(initNum, initUnit),8.28939);
        })
    })
   


});