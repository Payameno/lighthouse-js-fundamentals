const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

const reveresed = ingredients.reverse();
console.log(reveresed);