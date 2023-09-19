// Iterating through array doing double of each element and putting those new
// elements in new array

var nums = [1, 2, 3];
var doubleNums = [];
for (var i = 0; i < nums.length; i++) {
  doubleNums.push(2 * nums[i]);
}
console.log(doubleNums);

// map: Array helper method
// it takes values one by one and perform some operation using iterator function and return result as an array (puts in new array one by one)
// must return some value when using map

var newNumArray = nums.map(function (num) {
  return num * 2;
});

console.log(newNumArray);

// Examples:

var cars = [
  { model: "Tata", price: "cheap" },
  { model: "Jaguar", price: "expensive" },
];

var prices = cars.map(function (car) {
  return car.price;
});
console.log(prices);

// Very Helpful in when need to render lists of data
// very highly used

// Examples:

//eg1: getting list of heights

var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map(function (image) {
  return image.height;
});
console.log(heights);

// eg2: getting list of speed

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});

console.log(speeds);

// eg3: getting list of property using function

function pluck(arrayItems, property) {
  var ans = arrayItems.map(function (arrayItem) {
    return arrayItem[property];
  });
  // console.log(ans);
  return ans;
}

var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
// pluck(paints,'color');
console.log(pluck(paints, "color"));
