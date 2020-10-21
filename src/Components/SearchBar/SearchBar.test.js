import React from "react";
import { render, cleanup, fireEvent } from "../../setupTests";

import SearchBar from "./SearchBar";

afterEach(cleanup);

test("should accept user input", () => {
  const { getByLabelText } = render(<SearchBar />);
  const Input = getByLabelText(/Find Flight/i);

  fireEvent.change(Input, { target: { value: "DL1234" } });

  expect(Input.value).toMatch(/^DL1234$/i);
});

//skipped to prevent unwanted API calls
test.skip("should console log input value on submit", () => {
  const { getByLabelText, getByText, debug } = render(<SearchBar />);
  const Input = getByLabelText(/Find Flight/i);
  const submitButton = getByText(/^Search$/i);
  const consoleSpy = jest.spyOn(console, "log");

  fireEvent.change(Input, { target: { value: "DL1234" } });
  fireEvent.click(submitButton);

  expect(consoleSpy).toHaveBeenCalledWith("DL1234");
  consoleSpy.mockClear();
});
