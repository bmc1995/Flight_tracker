import React from "react";
import { render, cleanup } from "../../setupTests";
import HeaderComponent from "./Header";

afterEach(cleanup);

test("HeaderComponent", () => {
  const { container } = render(<HeaderComponent />);
  expect(container).not.toBeNull();
});
