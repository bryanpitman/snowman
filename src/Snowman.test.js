import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("matches snapshot", function () {
  const { container, debug } = render(<Snowman
  />);
  debug()
  expect(container).toMatchSnapshot();
});

it("renders without crashing", function () {
  // this is a low-value test smoke test
  render(<Snowman
  />);
});

//use maxWrong

it("shows the message You Lose", function () {
  const { container, debug } = render(
    <Snowman
    />);

    expect(
      container.querySelector(".loseGame")
    ).toContainHTML(<p> You Lose </p>);

    expect(
      container.querySelector('button')
    ).not.toBeInTheDocument();

    });