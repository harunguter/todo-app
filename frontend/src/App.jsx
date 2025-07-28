import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Card, ConfigProvider, Space, theme, Typography } from "antd";

import Title from "~/components/Title";
import Form from "~/components/Form";

import List from "~/views/List";

import MainContext from "~/contexts/Main";
import ReactLogo from "~/components/ReactLogo";

import "~/App.css";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const body = document.body;
    body.classList.remove(...body.classList);
    body.classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <MainContext.Provider
      value={{
        windowWidth,
        setWindowWidth,
        themeMode,
        setThemeMode,
        todos,
        setTodos,
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: _.isEqual(themeMode, "dark")
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        }}
      >
        <Space
          style={{
            paddingTop: 64,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactLogo />
          <Title />
          <Card
            title={<Form />}
            style={{
              width: windowWidth < 400 ? windowWidth - 32 : 400,
              margin: "0 auto",
            }}
            actions={[
              <Typography.Text key="tasks">
                All tasks completed
              </Typography.Text>,
            ]}
          >
            <List />
          </Card>
        </Space>
      </ConfigProvider>
    </MainContext.Provider>
  );
};

export default App;
