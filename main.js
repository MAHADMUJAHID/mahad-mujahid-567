"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var ans = await inquirer_1.default.prompt([{
        type: "number",
        name: "first_number",
        message: " entry first name"
    },
    {
        type: "number",
        name: "second_number",
        message: " entry first name"
    },
    {
        type: "list",
        name: "oprateors",
        message: "please select your oprators types",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (ans.oprateors === "addition") {
    console.log(ans.first_number + ans.second_number);
}
else if (ans.oprateors === "subtraction") {
    console.log(ans.first_number - ans.second_number);
}
else if (ans.oprateors === "multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else
    console.log(ans.first_number / ans.second_number);
