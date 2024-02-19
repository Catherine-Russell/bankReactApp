import App from '../App.jsx'
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";

describe("App component", () => {
  it("display Happy Birthday", () => {
    // Given
    const testComponent = (
      <App />
    );

    // When
    render(testComponent);

    // Then
    const appTitle = screen.getByText("Happy Birthday");
    expect(appTitle).toBeDefined();
    // Alternatively:
    // expect(screen.getByText("Happy Birthday")).toBeDefined();
  });
}
)