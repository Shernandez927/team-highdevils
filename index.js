// Imports Inquirer, File System and Template.js File
const inquirer = require("inquirer");
const fs = require("fs");
const generateTemplate = require("./src/template");

// Imports the Employee class and role subclasses
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Inquirer prompt questions for team manager
const askManagerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message:
        "Let's start building your team 👥 What's your team manager's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What's your team manager's ID number? 🔢",
      name: "id",
    },
    {
      type: "input",
      message: "What's your team manager's email? 📨",
      name: "email",
    },
    {
      type: "input",
      message: "What's your team manager's office number? 📞",
      name: "officenumber",
    }
  ]);


};

// Inquirer prompt question to add team members or complete team
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",

      message: "Which role would you like to add to your team? 👥",
      choices: [
        { name: "Intern", value: "addintern" },
        { name: "Engineer", value: "addengineer" },
        {
          name: "I don't want to add any more team members.",
          value: "finishedteam",
        },
      ],
      name: "addnewemployee",
    },
  ])
  .then(answer => {
    // if conditional statement to prompt respective role inquirer questions
    if (answer.addnewemployee === "addintern") {
        askInternQuestions();
    } else if (answer.addnewemployee === "addengineer") {
        askEngineerQuestions();
    } else {

    }
  })
};

const askInternQuestions = () => {}

const askEngineerQuestions = () => {}


