const assert = require("assert");

// Mock imports from the game file
const { buy, make, sell, fire, inventoryList } = require("../game");

// Mock global variables
let gold = 10;
let ore = 0;
let wood = 0;
let inventory = [];
let fireBurning = false;

function resetGame() {
    gold = 10;
    ore = 0;
    wood = 0;
    inventory = [];
    fireBurning = false;
}

// Tests
resetGame();
console.log("Running tests...");

// Test buying ore
buy("ore");
assert.strictEqual(ore, 1, "Ore should increase by 1 after buying.");
assert.strictEqual(gold, 7, "Gold should decrease by 3 after buying ore.");
console.log("✔️ Buy ore test passed!");

// Test buying wood
resetGame();
buy("wood");
assert.strictEqual(wood, 1, "Wood should increase by 1 after buying.");
assert.strictEqual(gold, 9, "Gold should decrease by 1 after buying wood.");
console.log("✔️ Buy wood test passed!");

// Add more test cases for make, sell, fire, etc.
console.log("All tests passed!");
