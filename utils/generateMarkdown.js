// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Unlicense":
      badge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "None":
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  return `
  # ${data.projectTitle}-${data.Name}
${badge}
## Description 
${data.projectDescription}


## Table of Contents 🧙

- [installation](#installation)
- [Usage](#usage)
- [Tests](#Tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#Questions)

## Installation
${data.installation}

## Usage

${data.usage}

## Tests
${data.tests}

## Credits

${data.credits}

## License
This project uses the ${data.license} license.

## Questions
Feel free to contact me with any questions or concerns!
 - email: ${data.email}
 - GitHub: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
