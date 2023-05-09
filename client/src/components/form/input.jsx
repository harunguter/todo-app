import * as Semantic from "semantic-ui-react";

const Input = ({
  onChange,
  value,
  error = false
}) => <Semantic.Form.Input
  value={value}
  error={error}
  onChange={onChange}
  placeholder="Enter your new todo item..."
  type="text"
  width={15}
/>;

export default Input;
