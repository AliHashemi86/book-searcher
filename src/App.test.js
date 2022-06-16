import { render, screen } from "@testing-library/react";
import App from "./App";

test("App function", () => {
  render(<App />);
  const dataPicker = screen.getByPlaceholderText("type here");
  expect(dataPicker).toBeInTheDocument();
});
