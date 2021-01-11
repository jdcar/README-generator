const inquirer = require('inquirer');
const fs = require('fs');
// const generate = require('/utils/generateMarkdown.js')

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
    }

]


writeToFile()



// function to write README file
function writeToFile(fileName, data) { // original
    // fs.writeFile('README.md', data, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
    inquirer
    .prompt(questions)
    .then((data) => {

        console.log(data.title, data.description)
        console.log("write to file")
    })



} // original

// function to initialize program
function init() { // original

} // original

// function call to initialize program
init(); // original
