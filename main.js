#! usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./operation/sum.js";
import { sub } from "./operation/sub.js";
import { mul } from "./operation/mul.js";
import { div } from "./operation/div.js";
let answers = await inquirer.prompt([{
        message: "Enter first value",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter Second Value",
        type: "number",
        name: "num2"
    },
    {
        message: "kindly select operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"]
    }
]);
let result;
switch (answers.operator) {
    case "+":
        result = sum(answers.num1, answers.num2);
        break;
    case "-":
        result = sub(answers.num1, answers.num2);
        break;
    case "*":
        result = mul(answers.num1, answers.num2);
        break;
    case "/":
        if (answers.num2 === 0) {
            console.log("Invalid Input");
        }
        else {
            result = div(answers.num1, answers.num2);
        }
        break;
}
;
console.log(result);
