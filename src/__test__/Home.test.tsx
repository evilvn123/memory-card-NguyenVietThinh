import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import cards from "../__mockup/cards";

it("Render Home", () => {
  render(<Home />);
  expect(screen.getByTitle("title")).toBeInTheDocument();
  expect(screen.getAllByTestId("memoryCard").length).toEqual(cards.length);
});
