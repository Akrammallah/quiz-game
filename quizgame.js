import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
        message: "npm i inquirer for?",
        type: "list",
        name: "option",
        choices: ["tsconfig json", "package json", "node modules"]
    },
    {
        message: "tsc --init for?",
        type: "list",
        name: "option2",
        choices: ["tsconfig json", "package json", "node modules"],
    },
    {
        message: "npm init -y for?",
        type: "list",
        name: "option3",
        choices: ["tsconfig json", "package json", "node modules"],
    }
]);
if (answer.option === "node modules") {
    console.log(chalk.blue("Q1: you ans is correct"));
}
else {
    console.log(chalk.red("try again"));
}
if (answer.option2 === "tsconfig json") {
    console.log(chalk.yellow("Q2: your answer is correct"));
}
else {
    console.log(chalk.red("try again"));
}
if (answer.option3 === "package json") {
    console.log(chalk.greenBright("Q3: your answer is correct"));
}
else {
    console.log(chalk.redBright("try again"));
}
