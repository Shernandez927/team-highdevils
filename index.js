// Imports Inquirer, File System and Template.js File
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const { buildHTMLTemplate } = require("./src/template");

// Imports the Employee class and role subclasses
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Empty array to push inquirer answers into
const teamMembers = [];

const finishedBuildingTeam = () => {
  console.log(`
    ===============================
    Finished creating your team 👥 
    ===============================
    `);

  writeFile("./dist/index.html", buildHTMLTemplate(teamMembers));
};

// Inquirer prompt questions for team manager
const askManagerQuestions = () => {
  console.log(`
    =================================
    Let's start building your team 👥 
    =================================
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What's your team manager's name? 👤",
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
      teamMembers.push(manager);
      addEmployee();
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
      // if conditional statement to prompt respective role inquirer questions or begin writing file
      if (answer.addnewemployee === "addintern") {
        askInternQuestions();
      } else if (answer.addnewemployee === "addengineer") {
        askEngineerQuestions();
      } else {
        console.log(teamMembers);
        finishedBuildingTeam();
      }
    });
};

// Inquirer prompts for intern team member
const askInternQuestions = () => {
  console.log(`
    =============================
    Add an Intern to your team 👥 
    =============================
    `);
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
      teamMembers.push(intern);
      addEmployee();
    });
};

// Inquirer prompts for engineer team member
const askEngineerQuestions = () => {
  console.log(`
    ===============================
    Add an Engineer to your team 👥 
    ===============================
    `);
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
      teamMembers.push(engineer);

      addEmployee();
    });
};

// Calls the Manager questions prompt to initialize application
askManagerQuestions();
