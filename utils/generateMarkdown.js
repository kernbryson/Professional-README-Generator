// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}-${data.Name}

## Description
${data.projectDescription}


## Table of Contents

- [installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage

${data.usage}

## Tests Performed
${data.tests}

## Credits

${data.credits}

## License
This project uses the ${data.license} license.

## Questions
Feel free to contact me with any questions or concerns
 - email: ${data.email}
 - GitHub: github.com/${data.github}
`;
}

module.exports = generateMarkdown;
