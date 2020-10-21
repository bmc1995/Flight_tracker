import React from "react";
import { render, cleanup } from "../../setupTests";
import App from "./App";

afterEach(cleanup);

test("App.js should render", () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
