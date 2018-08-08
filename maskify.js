// it's supposed to mask all numerical chars except for the first one and last four.

// it's not supposed to mask non-numerical chars

// it's not supposed to mask at all if string is shorter than 6 chars

function maskify (creditCard) {
  
    const nonDigitRegex = /\D/gm;
    let lastFour = creditCard.substr(-4);
    let result = "";
    
    if ( !creditCard || creditCard.length < 6 ) {
      return creditCard;
    }
    
    for (let i = 0; i < creditCard.length - 4; i++) {
      if (creditCard[i].match(nonDigitRegex) || i === 0) {
         result += creditCard[i];
       } else {
         result += "#";
       }  
     }
        return result+lastFour;      
  }

  const NS_PER_SEC = 1e9;
        const MS_PER_NS = 1e-6;

// If you'd like to check algorithm speed, use the function below: 

function benchmark(fn, name, ...args) {
  
  const start = process.hrtime();
  const result = fn(...args);
  const diff = process.hrtime(start);
  console.log(`${name} function took ${(diff[0] * NS_PER_SEC + diff[1]) *
    MS_PER_NS}ms with result:`);
    
  // if you wish to see the result, uncomment this 
  console.log(result);  
}

// call it like this :

benchmark(maskify, "Maskify", "1234");

benchmark(maskify, "Maskify", "1XXXXXXXXXXXXXXXX");

benchmark(maskify, "Maskify", "1-2-3-4-5-6-7-8-9-01-22-3-344-5");

benchmark(maskify, "Maskify", "YOOOOOOOOOOOOOO111111");

benchmark(maskify, "Maskify", "1234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-33331234--23Y5S888-3333");

benchmark(maskify, "Maskify", "x0x0x0x0x0x0x0x0x0x0x0x0x0x0x0x0x0x");