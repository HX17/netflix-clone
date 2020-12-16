import React from "react";
import { render } from "@testing-library/react";
import OptForm from "../../components/opt-form";

describe("<OptForm />", () => {
  it("renders the <OptForm /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Text>
          Ready to watch Netflix? Enter you email to create or restart your
          membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>GET STARTED</OptForm.Button>
      </OptForm>
    );

    expect(getByText("GET STARTED")).toBeTruthy();
    expect(
      getByText(
        "Ready to watch Netflix? Enter you email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
