import { Space, Switch, Typography } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import MainContext from "~/contexts/Main";
import { useContext } from "react";

const Title = () => {
  const { setThemeMode, windowWidth } = useContext(MainContext);

  return (
    <Space
      style={{
        width: windowWidth < 400 ? windowWidth - 32 : 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography.Text style={{ fontSize: "1.5em" }}>
        Todo Application
      </Typography.Text>
      <Switch
        onChange={(e) => {
          if (e) setThemeMode("dark");
          else setThemeMode("light");
        }}
        checkedChildren={<MoonOutlined />}
        unCheckedChildren={<SunOutlined />}
      />
    </Space>
  );
};

export default Title;
