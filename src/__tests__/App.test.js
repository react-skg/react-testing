import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "../App";
import renderer from "react-test-renderer";

it("renders correctly (useing snapshot)", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Our first snapshot test", () => {
  it("Should compare the component with a snapshot", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
