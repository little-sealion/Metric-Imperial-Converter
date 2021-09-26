function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log(`${input},${eval(input)}`)
    let result = input == ''? 1 : parseFloat(eval(input).toFixed(2));
    return result;
  };
  
  this.getUnit = function(input) {
    let result = '';
    if(/gal/i.test(input)) result = 'gal';
    if(/l/i.test(input)) result = 'L';
    if(/lbs/i.test(input)) result = 'lbs';
    if(/kg/i.test(input)) result = 'kg';
    if(/mi/i.test(input)) result = 'mi';
    if(/km/i.test(input)) result = 'km';
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = '';
    let units = ['gal','mi','lbs','kg','km','L'];
    let index = units.indexOf(initUnit);
    if(index != null){
      result = units[5-index];
    }
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
    switch (initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break; 
      case 'lbs':
        result = initNum * lbsToKg;
        break;     
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }

    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const dic = {
      gal:'gallons',
      lbs:'pounds',
      L:'liters',
      kg:'kilograms',
      mi:'miles',
      km:'kilometers'
    }
    let result = `${initNum} ${dic[initUnit]} converts to ${returnNum} ${dic[returnUnit]}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
