import { render, screen } from "@testing-library/react";
import { useReducer } from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("1 lose -> restart -> 1 win", () => {
  render(<App />);

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByText("Restart"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));

  expect(screen.queryByText("You Lose")).not.toBeInTheDocument();
});

test("lose -> lose -> lose -> 1 win", () => {
  render(<App />);

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByText("Restart"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));

  expect(screen.queryByText("You Lose")).not.toBeInTheDocument();
});

test("1 lose -> next level -> previous level -> 1 win", () => {
  render(<App />);

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("1"));

  userEvent.click(screen.getByText("Next Level"));
  userEvent.click(screen.getByText("Previous Level"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));

  expect(screen.queryByText("You Lose")).not.toBeInTheDocument();
});

test("next level -> 1 win", () => {
  render(<App />);
  userEvent.click(screen.getByText("Next Level"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));
  userEvent.click(screen.getByTestId("16"));
  userEvent.click(screen.getByTestId("17"));
  userEvent.click(screen.getByTestId("18"));
  userEvent.click(screen.getByTestId("19"));
  userEvent.click(screen.getByTestId("20"));

  expect(screen.queryByText("You Lose")).not.toBeInTheDocument();
});

test("next level -> lose -> lose -> lose -> 1 win", () => {
  render(<App />);
  userEvent.click(screen.getByText("Next Level"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));
  userEvent.click(screen.getByTestId("16"));
  userEvent.click(screen.getByTestId("17"));
  userEvent.click(screen.getByTestId("18"));
  userEvent.click(screen.getByTestId("2"));

  userEvent.click(screen.getByText("Restart"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));
  userEvent.click(screen.getByTestId("3"));

  userEvent.click(screen.getByText("Restart"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));
  userEvent.click(screen.getByTestId("4"));

  userEvent.click(screen.getByText("Restart"));

  userEvent.click(screen.getByTestId("1"));
  userEvent.click(screen.getByTestId("2"));
  userEvent.click(screen.getByTestId("3"));
  userEvent.click(screen.getByTestId("4"));
  userEvent.click(screen.getByTestId("5"));
  userEvent.click(screen.getByTestId("6"));
  userEvent.click(screen.getByTestId("7"));
  userEvent.click(screen.getByTestId("8"));
  userEvent.click(screen.getByTestId("9"));
  userEvent.click(screen.getByTestId("10"));
  userEvent.click(screen.getByTestId("11"));
  userEvent.click(screen.getByTestId("12"));
  userEvent.click(screen.getByTestId("13"));
  userEvent.click(screen.getByTestId("14"));
  userEvent.click(screen.getByTestId("15"));
  userEvent.click(screen.getByTestId("16"));
  userEvent.click(screen.getByTestId("17"));
  userEvent.click(screen.getByTestId("18"));
  userEvent.click(screen.getByTestId("19"));
  userEvent.click(screen.getByTestId("20"));

  expect(screen.queryByText("You Lose")).not.toBeInTheDocument();
});
