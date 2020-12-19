import React from "react";
import { Container, Column, Row, Link, Title, Text, Break } from "./styles";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Column = ({ children, ...restProps }) => (
  <Column {...restProps}>{children}</Column>
);

Footer.Row = ({ children, ...restProps }) => (
  <Row {...restProps}>{children}</Row>
);

Footer.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);

Footer.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Footer.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

Footer.Break = ({ children, ...restProps }) => (
  <Break {...restProps}>{children}</Break>
);

export default Footer;
