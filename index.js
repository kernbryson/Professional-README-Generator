// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",

    name: "projectTitle",

    message: "What is the title of your project?",
  },
  {
    type: "input",

    name: "name",

    message: "What is your name?",
  },
  {
    type: "input",

    name: "projectDescription",

    message: "Enter a description of your project.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    // const createReadMe = generateMarkdown(answers);
  });
}

// Function call to initialize app
init();
