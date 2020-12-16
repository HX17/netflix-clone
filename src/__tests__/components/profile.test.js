import React from "react";
import { render } from "@testing-library/react";
import Profile from "../../components/profile";

describe("<Profile />", () => {
  it("renders the <Profile /> with populated data", () => {
    const { container, getByTestId, getByText } = render(
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User onClick={() => {}}>
            <Profile.Picture
              src="/images/movie.png"
              data-testid="profile-picture"
            />
            <Profile.Name>Xiang Hou</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Xiang Hou")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders <Profile /> with populated data but misc profile image", () => {
    const { container, getByText, getByTestId } = render(
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.User onClick={() => {}}>
            <Profile.Picture src="" data-testid="profile-picture-misc" />
            <Profile.Name>Xiang Hou</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText("Xiang Hou")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
