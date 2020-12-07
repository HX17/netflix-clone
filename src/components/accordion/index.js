/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useContext, useState } from "react";

import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

// Item is the primary container
Accordion.Item = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  // share this with all items
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

// click on header will toggle the accordion
Accordion.Header = ({ children, ...restProps }) => {
  // consume the context
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)} // pass prev state
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/cancel.png" alt="Close" />
      ) : (
        <img src="/images/icons/plus.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export default Accordion;
