import * as Semantic from "semantic-ui-react";

const Button = ({
  text,
  color,
  onClick,
  disabled = false
}) => <Semantic.Button
  onClick={onClick}
  disabled={disabled}
  color={color}>
  {text}
</Semantic.Button>;

export default Button;
