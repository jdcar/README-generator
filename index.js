const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user

const questions = [

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
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'GNU General Public License v3.0', 'The Unlicense', 'Other']
    },
    {
        type: 'input',
        message: 'Name',
        name: "name",
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
    }

]





// function to write README file
function writeToFile(fileName, data) { // original

    inquirer
        .prompt(questions)
        .then((data) => {


            console.log(generateMarkdown(data))


        })



} // original

// function to initialize program
function init() { // original
    writeToFile()

} // original

// function call to initialize program
init(); // original
