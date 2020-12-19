import React from "react";
import { Inner, Pane, Title, Subtitle, Image, Item, Container } from "./styles";

const Jumbotron = ({ children, direction = "row", ...restProps }) => (
  <Item {...restProps}>
    <Inner direction={direction}>{children}</Inner>
  </Item>
);

Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);

Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Jumbotron.Subtitle = ({ children, ...restProps }) => (
  <Subtitle {...restProps}>{children}</Subtitle>
);

Jumbotron.Image = ({ ...restProps }) => <Image {...restProps} />;

export default Jumbotron;
