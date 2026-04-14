import _ from "lodash";
import { useContext, useEffect } from "react";

import Todo from "~/components/Todo";
import NotFound from "~/components/NotFound";
import MainContext from "~/contexts/Main";

import http from "~/utils/http";

const List = () => {
  const { todos, setTodos } = useContext(MainContext);

  const getTodos = async () => {
    const response = await http.get("");
    if (response?.success) {
      setTodos(response?.data);
    }
  };

  const deleteTodo = async (todo) => {
    const response = await http.delete(todo?.id);
    if (response?.success) {
      await getTodos();
    }
  };

  const completeTodo = async (todo) => {
    todo.isCompleted = !todo?.isCompleted;
    const response = await http.put(todo?.id, todo);
    if (response?.success) {
      await getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return !_.isEmpty(todos) ? (
    <div
      style={{
        height: 200,
        overflowY: "auto",
        alignItems: "flex-start",
      }}
    >
      {todos?.map((todo, index) => (
        <Todo
          key={index}
          onComplete={() => completeTodo(todo)}
          onDelete={() => deleteTodo(todo)}
          content={todo?.content}
          isCompleted={todo?.isCompleted}
        />
      ))}
    </div>
  ) : (
    <NotFound />
  );
};

export default List;
