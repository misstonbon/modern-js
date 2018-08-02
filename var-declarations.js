function discountedPrices(prices, discount) {
    var discounted = [];
    prices.forEach(price => {
        var discountedPrice = price * (1-discount);
        var finalPrice = Math.round(discountedPrice * 100 ) /100;
        discounted.push(finalPrice);
    })
    return discounted;
}

// VAR IS FUNCTION SCOPED 
// LET IS BLOCK SCOPED


console.log(discountedPrices([100,200,300], .5));
// returns [ 50, 100, 150 ] for a discount of 50%

/// how this really looks like because hoisting ///

function alsoDiscountedPrices(prices, discount) {
    var discounted;
    var discountedPrice;
    var finalPrice;

    discounted = [];

    prices.forEach(price => {
        discountedPrice = price * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100 ) /100;
        discounted.push(finalPrice);
    })
    return discounted;
}


