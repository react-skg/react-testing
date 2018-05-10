import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "../src/App";
import renderer from "react-test-renderer";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });
console.log(App);
it("renders correctly (useing snapshot)", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

// describe("Our first snapshot test", () => {
//   it("Should compare the component with a snapshot", () => {
//     const component = "<div>Hello Jesst</div>";
//     expect(component).toMatchSnapshot();
//   });
// });
