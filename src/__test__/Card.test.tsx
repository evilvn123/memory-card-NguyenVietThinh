import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

it("Render Card with face up", () => {
  render(<Card isFaceUp={true} />);
  expect(screen.getByTestId("card")).toBeInTheDocument();
  expect(screen.getByTestId("card")).toHaveClass("face-up");
});

it("Render Card with face down", () => {
  render(<Card isFaceUp={false} />);
  expect(screen.getByTestId("card")).not.toHaveClass("face-up");
});