import React from "react";
import {
  Inner,
  Pane,
  Title,
  Subtitle,
  Image,
  Item,
  Container,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item direction={direction} {...restProps}>
      <Inner>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

export default Jumbotron;
