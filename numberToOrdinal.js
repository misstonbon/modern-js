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


const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;

function benchmark(fn, name, ...args) {
  
    const start = process.hrtime();
    const result = fn(...args);
    const diff = process.hrtime(start);
    console.log(`${name} function took ${(diff[0] * NS_PER_SEC + diff[1]) *
      MS_PER_NS}ms with result:`);
      
    // if you wish to see the result, uncomment this 
    console.log(result);  
  }

benchmark(numberToOrdinal, "numberToOrdinal", 12);
benchmark(numberToOrdinal, "numberToOrdinal", 1);
benchmark(numberToOrdinal, "numberToOrdinal", 1004);
benchmark(numberToOrdinal, "numberToOrdinal", 1213);
benchmark(numberToOrdinal, "numberToOrdinal", 1000);
benchmark(numberToOrdinal, "numberToOrdinal", 123);
benchmark(numberToOrdinal, "numberToOrdinal", 101);
benchmark(numberToOrdinal, "numberToOrdinal", 105);

