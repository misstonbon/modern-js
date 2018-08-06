const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )

  /* Since we are in a Node environment, we can use process.hrtime() to benchmark
our functions. */

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;

// A simple wrapper function for benchmarking our functions.
function simpleBenchmark(fn, name, ...args) {
  
  const start = process.hrtime();
  const result = fn(...args);
  const diff = process.hrtime(start);
  console.log(`${name} function took ${(diff[0] * NS_PER_SEC + diff[1]) *
    MS_PER_NS}ms with result:`);
  console.log(result);
}

// Tests for charFreq function.
console.log('Start charFreq tests:\n');
simpleBenchmark(fibonacci, "Fibonacci", 8);
simpleBenchmark(fibonacci, "Fibonacci", 20);
simpleBenchmark(fibonacci, "Fibonacci", 30);
simpleBenchmark(fibonacci, "Fibonacci", 40);
simpleBenchmark(fibonacci, "Fibonacci", 50);