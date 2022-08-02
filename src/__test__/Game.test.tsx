import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../components/Game";
import { ICard, Status } from "../interfaces/Card";
import react from "../img/react.svg";
import jsLogo from "../img/js-badge.svg";

const item: ICard = {
  id: 1,
  image: react,
  status: Status.FACE_DOWN,
  value: react,
};
const onClick = jest.fn();

it("Render Game", () => {
  render(<Game item={item} onClick={onClick} />);
  expect(screen.getByTestId("frontImage")).toBeInTheDocument();
  expect(screen.getByTestId("backImage")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("memoryCard"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
it("Check correct images", () => {
  render(<Game item={item} onClick={onClick} />);
  expect(screen.getByTestId("frontImage")).toHaveAttribute("src", jsLogo);
  expect(screen.getByTestId("backImage")).toHaveAttribute("src", item.image);
  expect(screen.getByTestId("backImage")).toHaveAttribute("alt", item.value);
});
