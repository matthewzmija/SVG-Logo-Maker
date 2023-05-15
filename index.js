const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message:
      "Please provide the text that you want displayed on the logo (Limit the text to a maximum of 3 characters)",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please provide a color keyword or a hexadecimal number so that the text can be displayed in that color on your logo",
  },
  {
    type: "list",
    name: "shape",
    message:
      "Please choose one of the three shapes that you want your logo to be",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please provide a color keyword or a hexadecimal number so that the shape can be displayed in that color on your logo",
  },
]);

//Need to add a function to provide an error message when more that 3 characters are displayed
