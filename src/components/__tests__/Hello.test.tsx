import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "../Hello";

describe("Hello", () => {
  it("runs vitest properly", () => {
    const computation = 1 + 1;
    expect(computation).toBe(2);
  });

  it("runs testing library properly", async () => {
    render(<Hello />);
    const content = await screen.findByRole("main");
    expect(content).toHaveTextContent("Hello");
  });
});
