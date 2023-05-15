// The class identified as Shape is a parent to Circle, Triangle, and Square which are child objects that render the SVG file
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}"/> <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150 5 300 200 0 200" fill="${this.shapeColor}"/> <text xmlns="http://www.w3.org/2000/svg" x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/> <text xmlns="http://www.w3.org/2000/svg" x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
}
module.exports = { Circle, Triangle, Square };
