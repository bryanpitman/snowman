import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("matches snapshot", function () {
  const { container, debug } = render(<Snowman
  />);
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
    const letterB = container.querySelector('[value="b"]')
    const letterC = container.querySelector('[value="c"]')
    const letterD = container.querySelector('[value="d"]')
    const letterF = container.querySelector('[value="f"]')
    const letterG = container.querySelector('[value="g"]')
    const letterH = container.querySelector('[value="h"]')

    fireEvent.click(letterB)
    fireEvent.click(letterC)
    fireEvent.click(letterD)
    fireEvent.click(letterF)
    fireEvent.click(letterG)
    fireEvent.click(letterH)
    // debug(container.querySelector(".loseGame"))
    debug(container.querySelector(".loseGame"))
    expect(
      container.querySelector(".loseGame")
    ).toContain(<div class="loseGame"> <h4>Correct Word : apple</h4><p>You Lose</p></div>);

    expect(
      container.querySelector('button')
    ).not.toBeInTheDocument();

    });