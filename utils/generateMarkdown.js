// function to generate markdown for README
const fs = require('fs');
var d = new Date();
var year = d.getFullYear();


function generateMarkdown(data) {

  let { title, name, license, description, install, usage, contributing, tests, github, email } = data

  license = license.toString()

  let badge

  // If statements to insert badges depending on selection
  if (license === "MIT") {

    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    licenseText = `${license}. Copyright (c) ${year} ${name}`


  } else if (license === "ISC") {

    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`


    licenseText = `${license}. Copyright (c) ${year} ${name}`

  } else if (license === "Apache License 2.0") {

    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

    licenseText = `${license}. Copyright (c) ${year} ${name}`


  } else if (license === "GNU General Public License v3.0") {
    badge =  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

    licenseText = `${license}. Copyright (c) ${year} ${name}`


  } else if (license === "The Unlicense") {

    badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`

    licenseText = `${license}. Copyright (c) ${year} ${name}`


  } else if (license === "Other") {
    badge = `No license selected`
  }


// Generate readme content
  let readme = `# ${title} ${badge}\n## Table of Contents\n* [Description](#description)\n* [Installation Instructions](#installation-instructions)\n* [Usage](#usage)\n* [Contributing](#contributing) \n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n## Description\n${description}\n## Installation Instructions\n${install}\n## Usage\n${usage}\n## Contributing\n${contributing}\n## Tests\n${tests}\n## License\n${licenseText}\n## Questions\n* https://github.com/${github}\n* Email: ${email}`;

// Create a readme file
  fs.writeFile('generated-readme.md', readme, (err) => {
    if (err) {
      console.log("Error");
    }
    else {
      console.log("Readme generated!")
    }
  });

}




module.exports = generateMarkdown;
