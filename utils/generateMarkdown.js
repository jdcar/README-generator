// function to generate markdown for README
function generateMarkdown(data) {

  const { title, description, install, usage, contributing, tests, license, github, email } = data

  // return `# ${data.title}`; 
  console.log("Generate Markdown passed")
  console.log(title)

    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    // THEN this is displayed as the title of the README

    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    // THEN I am taken to the corresponding section of the README

}

module.exports = generateMarkdown;
