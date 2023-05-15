const { Circle, Triangle, Square } = require("./shapes");

// Testing the respective classes as it passes through the render function
describe("Circle test", () => {
  it("should return true for a purple circle logo with black text", () => {
    const circle = new Circle("MMZ", "black", "purple");
    expect(circle.render()).toEqual(
      `<circle cx="150" cy="100" r="95" fill="purple"/> <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="black">MMZ</text>`
    );
  });
});

describe("Triangle test", () => {
  it("should return true for a pink triangle logo with yellow text", () => {
    const triangle = new Triangle("VC", "yellow", "pink");
    expect(triangle.render()).toEqual(
      `<polygon points="150 5 300 200 0 200" fill="pink"/> <text xmlns="http://www.w3.org/2000/svg" x="150" y="150" font-size="60" text-anchor="middle" fill="yellow">VC</text>`
    );
  });
});

describe("Square test", () => {
  it("should return true for a blue square logo with white text", () => {
    const square = new Square("TAA", "white", "blue");
    expect(square.render()).toEqual(
      `<rect x="50" y="0" width="200" height="200" fill="blue"/> <text xmlns="http://www.w3.org/2000/svg" x="150" y="120" font-size="60" text-anchor="middle" fill="white">TAA</text>`
    );
  });
});
