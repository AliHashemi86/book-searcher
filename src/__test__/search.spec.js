import React from "react";
import "@testing-library/jest-dom";
import Search from "../component/Search.js";
import { render, screen, waitFor } from "@testing-library/react";

describe("Search function", () => {
  it("Should render the date picker", async () => {
    render(<Search />);
    await waitFor(() => {
      const datePicker = screen.getByPlaceholderText("type here");
      expect(datePicker).toBeInTheDocument();
    });
  });
});
