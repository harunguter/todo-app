import { Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const Form = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 0",
      }}
    >
      <Input placeholder="Enter new todo item" style={{ marginRight: 16 }} />
      <Button type="primary" icon={<PlusCircleOutlined />}>
        Add
      </Button>
    </div>
  );
};

export default Form;
