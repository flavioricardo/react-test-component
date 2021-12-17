import { render, screen } from "@testing-library/react";
import Counter from "./index.js";

describe("Counter component", () => {
  test("should fill the title with 0", () => {
    render(<Counter />);

    const counterTitle = screen.getByText("0");

    expect(counterTitle).toBeInTheDocument();
  });
});
