function ConvertHandler() {
  
  this.getNum = function(input) {
  
    let result = input == ''? 1 : parseInt(input);
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = '';
    if(/gal/i.test(input)) result = 'gal';
    if(/l/i.test(input)) result = 'L';
    if(/lbs/i.test(input)) result = 'lbs';
    if(/kg/i.test(input)) result = 'Kg';
    if(/mi/i.test(input)) result = 'mi';
    if(/km/i.test(input)) result = 'Km';
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {


    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
