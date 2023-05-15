const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message:
        "Please provide the text that you want displayed on the logo (Limit the text to a maximum of 3 characters)",
      validate: (text) => text.length > 0 && text.length < 4,
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
  ])
  .then((data) => {
    let generatedLogo = userSelectedShape(data);
    let fileTemplate = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${generatedLogo} </svg>`;
    fs.writeFile("./examples/logo.svg", fileTemplate, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  });

function userSelectedShape(data) {
  switch (data.shape) {
    case "Circle":
      const circleLogo = new Circle(data.text, data.textColor, data.shapeColor);
      return circleLogo.render();

    case "Triangle":
      const triangleLogo = new Triangle(
        data.text,
        data.textColor,
        data.shapeColor
      );
      return triangleLogo.render();

    case "Square":
      const squareLogo = new Square(data.text, data.textColor, data.shapeColor);
      return squareLogo.render();
  }
}
