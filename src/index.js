module.exports = function toReadable (number) {
    
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];    
    
    const numberString = number.toString();
    
    if (number === 0) return 'zero';
    
    if (number > 0 && number < 20) {
        return ones[number];
    }
    
    if (number < 20) {
        return ones[number];
      }
    
    if (numberString.length === 2) {
        if (numberString[1] === '0')  
           return dozens[numberString[0]];
        else
           return dozens[numberString[0]] + ' ' + ones[numberString[1]];
    }
    
    if (numberString.length == 3) {
        if (numberString[1] === '0' && numberString[2] === '0')
           return ones[numberString[0]] + ' hundred';
        else
           return ones[numberString[0]] + ' hundred ' + toReadme(+(numberString[1] + numberString[2]));        
    }
    
}
