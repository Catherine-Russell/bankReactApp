import Title from "../components/Title";
import { render, screen } from "@testing-library/react";

describe("Title component", () => {
  it("display Bank Account title", () => {
    render(<Title />);
    const appTitle = screen.getByText("Bank Account");
    expect(appTitle).toBeInTheDocument;
  });
});
