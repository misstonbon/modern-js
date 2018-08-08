// it's supposed to return an ordinal given a number. 

// Example: 
// if number is 1, prints 1st and so on 
// also, number provided is from 0 to 10000


function numberToOrdinal(n) {
    let modTen = n % 10;
    let modHundred = n % 100;
    
    if (n === 0) return `${n}`;
    
    if (modTen === 1 && modHundred !== 11) return `${n}st`;
    if (modTen === 2 && modHundred !== 12) return `${n}nd`;
    if (modTen === 3 && modHundred !== 13) return `${n}rd`;
    return `${n}th`;
}

