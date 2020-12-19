import React from "react";
import { Container, Input, Break, Button, Text } from "./styles";

const OptForm = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

OptForm.Input = ({ ...restProps }) => <Input {...restProps} />;

OptForm.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children}{" "}
    <img
      src={`${process.env.PUBLIC_URL}/images/icons/chevron-right.png`}
      alt="Try Now"
    />
  </Button>
);

OptForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

OptForm.Break = ({ ...restProps }) => <Break {...restProps} />;

export default OptForm;
