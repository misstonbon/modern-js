/**
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is number representing how many units there are.

`batches(recipe, available)`
*/

// 0 batches can be made
// batches(
//     { milk: 100, butter: 50, flour: 5 },
//     { milk: 132, butter: 48, flour: 51 }
//   )
//   batches(
//     { milk: 100, flour: 4, sugar: 10, butter: 5 },
//     { milk: 1288, flour: 9, sugar: 95 }
//   )

// 1 batch can be made
// batches(
//     { milk: 100, butter: 50, cheese: 10 },
//     { milk: 198, butter: 52, cheese: 10 }
//   )

function objSize(obj) {
    return Object.keys(obj).length
}

function batches(recipe, ingredients) {
    let totalBatches = 0;
    let diff = []
    let recipeVals = Object.values(recipe);
    console.log(`recipe quantities: ${recipeVals}`);
    let ingredientsVals = Object.values(ingredients);
    console.log(`ingredient quantities: ${ingredientsVals}`);

    if (objSize(recipe) > objSize(ingredients)){
        return totalBatches;
    }

    for(let i = 0; i < recipeVals.length; i++){
        for (let j = 0; j < ingredientsVals.length; j++ ) {
            diff.push(Math.floor((ingredientsVals[j] / recipeVals[i])))
        }
    }
    return console.log(Math.min(...diff) === 1 ? `Makes ${Math.min(...diff)} batch` : `Makes ${Math.min(...diff)} batches`);
}

batches({ milk: 2, sugar: 2, butter: 2 },{ milk: 100, sugar: 4, butter: 3 })
batches({ milk: 2, sugar: 2, butter: 2 },{ milk: 500, sugar: 1, butter: 1 })
batches({ milk: 2, sugar: 2, butter: 2 },{ milk: 500, sugar: 100, butter: 56 })
batches({ milk: 2, sugar: 2, butter: 2 },{ milk: 51, sugar: 1234, butter: 343 })


const batchChecker = (recipe, available) =>
  Math.floor(
    Math.min(...Object.keys(recipe)
        .map(k => (available[k] / recipe[k]) || 0)
    )
  )
  
console.log(batchChecker({ milk: 2, sugar: 2, butter: 2 },{ milk: 100, sugar: 4, butter: 3 }))
console.log(batchChecker({ milk: 2, sugar: 2, butter: 2 },{ milk: 500, sugar: 1, butter: 1 }))
console.log(batchChecker({ milk: 2, sugar: 2, butter: 2 },{ milk: 500, sugar: 100, butter: 56 }))
console.log(batchChecker({ milk: 2, sugar: 2, butter: 2 },{ milk: 51, sugar: 1234, butter: 343 }))
