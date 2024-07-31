import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button color="primary" />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
  test("renders with classname primary", () => {
    const { container } = render(<Button color="primary" />);
    expect(container.firstChild).toMatchSnapshot(
      `<button class="base primary" role="button" />`,
    );
  });
  test("renders with size", () => {
    const { container } = render(<Button size="small" color="secondary" />);
    expect(container.firstChild).toMatchSnapshot(
      `<button class="base secondary small" role="button" />`,
    );
  });
  test("renders with wrap", () => {
    const { container } = render(<Button color="secondary" wrap />);
    expect(container.firstChild).toMatchSnapshot(
      `<button class="base secondary wrap" role="button" />`,
    );
  });
  test("renders with outline", () => {
    const { container } = render(<Button color="secondary" outline />);
    expect(container.firstChild).toMatchSnapshot(
      `<button class="base secondary outline-secondary outline" role="button" />`,
    );
  });
  test("renders with quiet", () => {
    const { container } = render(<Button color="secondary" quiet />);
    expect(container.firstChild).toMatchSnapshot(
      `<button class="base secondary quiet" role="button" />`,
    );
  });
});
