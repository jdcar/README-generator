const inquirer = require('inquirer');

// array of questions for user
const questions = [ // original

    inquirer
        .prompt([

            {
                type: 'input',
                message: 'Title',
                name: "title",
            },

            {
                type: 'input',
                message: 'Description',
                name: "description",
            },
            {
                type: 'input',
                message: 'Installation instructions',
                name: "install",
            },
            {
                type: 'input',
                message: 'Usage instructions',
                name: "usage",
            },
            {
                type: 'input',
                message: 'Contribution instructions',
                name: "contributing",
            },
            {
                type: 'input',
                message: 'Test instructions',
                name: "tests",
            },
            {
                type: 'checkbox',
                message: 'License',
                name: "license",
                choices: ['MIT', 'Other']
            },
            {
                type: 'input',
                message: 'Github username',
                name: "github",
            },
            {
                type: 'input',
                message: 'Email address',
                name: "email",
            },

        ])
        .then((response) =>

            console.log(response.title, response.description)


        )


]; // original





// function to write README file
function writeToFile(fileName, data) { // original

    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    // THEN this is displayed as the title of the README

    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    // THEN I am taken to the corresponding section of the README



} // original

// function to initialize program
function init() { // original

} // original

// function call to initialize program
init(); // original
