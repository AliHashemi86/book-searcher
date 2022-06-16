import React from "react";
import "@testing-library/jest-dom";
import Result from "../component/Result.js";
import { render, screen, waitFor } from "@testing-library/react";

describe("Result function", () => {
  it("Should render the result", async () => {
    render(<Result result={[]} />);
    await waitFor(() => {
      const result = screen.getByTitle("result");
      expect(result).toBeInTheDocument();
    });
  });
});
