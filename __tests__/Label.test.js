import React from "react";
import Label from "../src/components/Label/Label";
import renderer from "react-test-renderer";

test("Label changes the class when hovered", () => {
  const component = renderer.create(
    <Label page="http://www.facebook.com">Facebook</Label>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
