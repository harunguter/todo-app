import { Empty } from "antd";

const NotFound = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "35px 0",
    }}
  >
    <Empty description="You don't have any todo yet." />
  </div>
);

export default NotFound;
