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