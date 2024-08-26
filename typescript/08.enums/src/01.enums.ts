// Say we have a game to build and it keys arrow key as input
// How should we define it?
// numbers ? like [1,2,3,4]
// strings? like ["up","down","left","right"]

function keyPressed(key: string) {
    console.log("Key pressed is", key);
}

keyPressed("up");
keyPressed("down");
keyPressed("left");
// TS won't give an error even if we passed something which is not
// a key, but it is an error
keyPressed("raacaca");

// 1. With using 'enums'

type Keys = "up" | "down" | "left" | "right";
function keyPressed2(key: Keys) {
    console.log("Key pressed is", key);
}
keyPressed2("up");
keyPressed2("down");
keyPressed2("left");
// keyPressed2("raacaca"); // TS will give an error as doesn't belong to 'Keys' type

// 2. With 'enums'

// With 'enums' we can define upfront, what value should be considered as key
// So, the concept behind enums is to define a human readable way to represent
// constant values, which might we otherwise represented as string or number

enum KeyEnum {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}

function keyPressed3(key: KeyEnum) {
    console.log("Key pressed is", key);
}
keyPressed3(KeyEnum.UP);
keyPressed3(KeyEnum.DOWN);
keyPressed3(KeyEnum.LEFT);
keyPressed3(KeyEnum.RIGHT);

// if didn't assign values, takes automatically values starting from 0
// If you give 1st one an value in string, then have to give all below a
// value too else error
enum KeyEnum2 {
    UP,
    DOWN,
    LEFT = "left",
    RIGHT = "right",
}

function keyPressed4(key: KeyEnum2) {
    console.log("Key pressed is", key);
}
keyPressed4(KeyEnum2.UP); // 0
keyPressed4(KeyEnum2.DOWN); // 1
keyPressed4(KeyEnum2.LEFT); // left
keyPressed4(KeyEnum2.RIGHT); // right

// IF want to start from custom values and not from 0, just give 1st one an value
enum KeyEnum3 {
    UP = 10,
    DOWN,
    LEFT,
    RIGHT,
}

function keyPressed5(key: KeyEnum3) {
    console.log("Key pressed is", key);
}
keyPressed5(KeyEnum3.UP); // 10
keyPressed5(KeyEnum3.DOWN); // 11
keyPressed5(KeyEnum3.LEFT); // 12
keyPressed5(KeyEnum3.RIGHT); // 13
