import { useContext, useState } from "react";
import { Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import MainContext from "~/contexts/Main";

import http from "~/utils/http";
import _ from "lodash";

const Form = () => {
  const { setTodos } = useContext(MainContext);
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("");
  const [adding, setAdding] = useState(false);

  const getTodos = async () => {
    const response = await http.get();
    if (response?.success) {
      setTodos(response?.data);
    }
  };

  const addTodo = async (todo) => {
    setAdding(true);
    const response = await http.post("", todo);
    if (response?.success) {
      await getTodos();
      setTodo("");
    }
    setAdding(false);
  };

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
      <Input
        status={status}
        value={todo}
        placeholder="Enter new todo item"
        style={{ marginRight: 16 }}
        onChange={(e) => {
          setTodo(e.target.value);
          if (!_.isEmpty(e.target.value)) setStatus("");
        }}
      />
      <Button
        type="primary"
        icon={<PlusCircleOutlined />}
        loading={adding}
        onClick={async () => {
          if (!_.isEmpty(todo)) {
            await addTodo({
              content: todo,
            });
          } else {
            setStatus("error");
          }
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Form;
