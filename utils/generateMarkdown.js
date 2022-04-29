// This function decides what correct badge to use when a license is picked
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



// This function calls the correct license badge to display while also generating the readMe file with the users data
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
This project uses the ${data.license} license. For more information, click the badge at the top.

## Questions
Feel free to contact me with any questions or concerns!
 - email: ${data.email}
 - GitHub: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
