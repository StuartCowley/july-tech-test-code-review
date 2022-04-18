import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("redners App component correctly", () => {
    const { asFragment } = render(<App/>);

    expect(asFragment()).toMatchSnapshot(); 
  });

  it("renders logo", () => {
    render(<App />);
    const imgElement = screen.getByAltText("nasaLogo");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveClass("nasa-logo");
  });
});
