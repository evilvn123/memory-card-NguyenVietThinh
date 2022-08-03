import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import cards from "../__mockup/cards";
import * as enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "../components/Game";
import { Status } from "../interfaces/Card";

enzyme.configure({ adapter: new Adapter() });

it("Render Home", () => {
  render(<Home />);
  expect(screen.getByTitle("title")).toBeInTheDocument();
  expect(screen.getAllByTestId("memoryCard").length).toEqual(cards.length);
});

it("Render child", () => {
  const wrapper = enzyme.shallow(<Home />);
  expect(wrapper.find(Game)).toHaveLength(cards.length);
  const sampleCard = wrapper.find(Game).at(0);
  expect(sampleCard.prop("item").status).toEqual(Status.FACE_DOWN);
});
