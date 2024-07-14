// We know basic of JS Objects => check my repositoty if not

// Let's create a function which returns JS object (later we'll update it in ES6 way)

function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce(
                (total, book) => total + book.price,
                0
            );
        },
        priceForTitle: function (title) {
            return this.inventory.find(book => book.title === title).price;
        },
    };
}

// inventory list
const inventory = [
    { title: "Harry Potter", price: 25 },
    { title: "Breaking Bad", price: 45 },
];

// creating 'bookShop' object (as createBookShop() function returns object)
// passing 'inventory' list in the function
const bookShop = createBookShop(inventory);

// calling returned object methods and properties
console.log("Total price of all inventory books:", bookShop.inventoryValue());
console.log("Price of entered title:", bookShop.priceForTitle("Harry Potter"));
console.log("Inventory list:", bookShop.inventory);

console.log();
console.log();

/*___________________________________________________________

    - Refactoring createBookShop() function
    -  Making returned object => Enhanced Object acc to ES6 (It's just a way to write objects in more compact manner):
        1. Don't use same name for 'key' and 'value' like we were using inventory: inventory => we can just write it once as key (internally works same, just code becomes compact)
        => if key and value are identicle => can use just once
        {inventory: inventory, }  => {inventory,}

        2. We can remove 'function' keyword and 'colon' too.
        {inventoryValue: function(){},} => {inventoryValue(){}, }

        => property name itself can represent function

*/

// Refactored object => Enhanced Object
function createBookShop2(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce(
                (total, book) => total + book.price,
                0
            );
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        },
    };
}

const bookShop2 = createBookShop2(inventory);
console.log("Total price of all inventory books:", bookShop2.inventoryValue());
console.log("Price of entered title:", bookShop2.priceForTitle("Harry Potter"));
console.log("Inventory list:", bookShop2.inventory);
console.table(bookShop2.inventory);

/* Example: in which situations we can use Enhanced Object literals in real world:-

function saveFile(url, data) {
    // Making HTTP request using  AJAX
    $.ajax({ method: "POST", url: url, data: data });
}

const url = "http://anyurl.com";
const data = { name: "Alex" };
console.log(saveFile(url, data));

---------------------------------------

function saveFile(url, data) {
    // Enhancing Object literal
    $.ajax({ method: "POST", url, data});
}

//          Or can write like this to make to it more readable

function saveFile(url, data) {
    $.ajax({ 
        url,
        data,
        method: "POST"
    });
}


*/

// Examples:***************************

// Eg-1

const red = "#ff0000";
const blue = "#0000ff";

const COLORS = { red: red, blue: blue };
console.log(COLORS);

// Refactored to use enhanced literal notation

const red2 = "#ff0000";
const blue2 = "#0000ff";

const COLORS2 = { red2, blue2 };
console.log(COLORS2);

// Eg-2

const fields = ["firstName", "lastName", "phoneNumber"];

const props = { fields: fields };

console.log(props);

// Refactored to use enhanced literal notation

const fields2 = ["firstName", "lastName", "phoneNumber"];

const props2 = { fields };

console.table(props2);

// Eg-3

let canvasDimensions = function (width, initialHeight) {
    const height = (initialHeight * 9) / 16;
    return {
        width: width,
        height: height,
    };
};

console.log(canvasDimensions(3, 4));

// Refactored

canvasDimensions = function (width, initialHeight) {
    const height = (initialHeight * 9) / 16;
    return {
        width,
        height,
    };
};

console.log(canvasDimensions(5, 10));

// Eg-4

const color = "red";

let Car = {
    color: color,
    drive: function () {
        return "Vroom!";
    },
    getColor: function () {
        return this.color;
    },
};

console.table(Car);
console.log(Car.drive());
console.log(Car.getColor());

// Refactored

Car = {
    color,
    drive() {
        return "Vroom2!";
    },
    getColor() {
        return this.color;
    },
};

console.table(Car);
console.log(Car.drive());
console.log(Car.getColor());
