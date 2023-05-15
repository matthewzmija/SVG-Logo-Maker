const inquirer = require("inquirer");
const fs = require("fs");
const { text } = require("stream/consumers");

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message:
      "Please provide the text that you want displayed on the logo (Limit the text to a maximum of 3 characters)",
    validate: (text) => text.length >= 1 && text.length <= 3,
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

//.then block -> if statement or a switch statement which will check data.shape to see which the user selected, call the render function
// const generatedLogo = square.render()
// let template = <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${generatedLogo} </svg>
