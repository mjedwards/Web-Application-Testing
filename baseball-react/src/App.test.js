import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);
it("renders without crashing", () => {});
it("renders elements", () => {
  const wrap = rtl.render(<App />);

  console.log(wrap.debug());
});

it("renders Display", () => {
  const wrap = rtl.render(<div>Display</div>);
  const element = wrap.queryByText(/Display/i);
  console.log(wrap.debug());

  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
