import React from 'react';
import Balance from "../components/Balance";
import { render, screen } from "@testing-library/react";

describe("balance", () => {
  it("Display initial balance", () => {
    render(<Balance />);
    const balanceAmount = screen.getByTestId("balance-amount");
    expect(balanceAmount).toContain('0');
  });

  it("Display initial balance", () => {
    render(<Balance />);
    const balanceAmount = screen.getByTestId("balance-amount");
    expect(balanceAmount).toContain('0');
  });
});

