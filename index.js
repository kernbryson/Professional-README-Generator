// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
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

    name: "Name",

    message: "What is your full name?",
  },
  {
    type: "input",

    name: "projectDescription",

    message: "Enter a description of your project.",
  },
  {
    type: "input",

    name: "installation",

    message: "What are the steps required to install your project?",
  },
  {
    type: "input",

    name: "usage",

    message: "How do you use your project?",
  },
  {
    type: "input",

    name: "credits",

    message:
      "Who were your collaborators and or what third party information did you use in order to create your project?",
  },
  {
    type: "input",

    name: "tests",

    message:
      "What tests were performed to assure your project worked affectively?",
  },
  {
    type: "list",

    name: "license",

    message: "What license would you like to use?",
    choices: ["MIT", "GNU", "Mozilla", "Unlicense"],
  },
  {
    type: "input",

    name: "github",

    message: "What is your gitHub username?",
  },
  {
    type: "input",

    name: "email",

    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data, fileName) {
  const createReadMe = generateMarkdown(data);
  fs.writeFile("./utils/createdReadMe.md", createReadMe, (err) =>
    err ? console.log(err) : console.log("success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile(data);
  });
}

// Function call to initialize app
init();
