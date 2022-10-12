// Imports Inquirer, File System and Template.js File
const inquirer = require("inquirer");
const fs = require("fs");
const generateTemplate = require("./src/template");

// Imports the Employee class and role subclasses
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const init = () => askManagerQuestions();
// Inquirer prompt questions for team manager
const askManagerQuestions = () => {
  return inquirer
    .prompt([
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
        name: "officeNumber",
      },
    ])
    .then((managerAnswers) => {
      const { name, id, email, officeNumber } = managerAnswers;
      const manager = new Manager(name, id, email, officeNumber);

      console.log(manager);
    });
};

// Inquirer prompt question to add team members or complete team
const addEmployee = () => {
  return inquirer
    .prompt([
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
    .then((answer) => {
      // if conditional statement to prompt respective role inquirer questions
      if (answer.addnewemployee === "addintern") {
        askInternQuestions();
      } else if (answer.addnewemployee === "addengineer") {
        askEngineerQuestions();
      } else {
      }
    });
};

// Inquirer prompts for intern team member
const askInternQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What's your intern's name? 👤",
        name: "name",
      },
      {
        type: "input",
        message: "What's your intern's ID number? 🔢",
        name: "id",
      },
      {
        type: "input",
        message: "What's your intern's email? 📨",
        name: "email",
      },
      {
        type: "input",
        message: "What's the name of your intern's school? 🎓",
        name: "school",
      },
    ])
    .then((internAnswers) => {
      const { name, id, email, school } = internAnswers;
      const intern = new Intern(name, id, email, school);

      console.log(intern);
    });
};

// Inquirer prompts for engineer team member
const askEngineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What's your engineer's name? 👤",
        name: "name",
      },
      {
        type: "input",
        message: "What's your engineer's ID number? 🔢",
        name: "id",
      },
      {
        type: "input",
        message: "What's your engineer's email? 📨",
        name: "email",
      },
      {
        type: "input",
        message: "What's your engineer's Github username? 🐱",
        name: "github",
      },
    ])
    .then((engineerAnswers) => {
      const { name, id, email, github } = engineerAnswers;
      const engineer = new Engineer(name, id, email, github);

      console.log(engineer);
    });
};

init();
