import { useEffect, useContext } from "react";
import _ from "lodash";

import MainContext from "../contexts/main";

import apiService from "../services/api.service";
import audio from "../assets/sounds/tick.wav";

import Button from "./form/button";

const Footer = () => {

  const { todos, setTodos } = useContext(MainContext);

  const getTodos = async() => {
    const response = await apiService.getTodo();
    setTodos(response.data);
  };

  const completeAll = async() => {
    for (const todo of todos) await apiService.updateTodo(todo._id, { "is_completed": true });
    await getTodos();
    document.getElementById("audio").play();
  };

  const deleteAll = async() => {
    for (const todo of todos) await apiService.deleteTodo(todo._id);
    await getTodos();
  };

  return <footer className="app-footer">
    <p style={{ margin: 0 }}>
      {
        _.isNil(todos) ? "All tasks completed" :
          (
            todos.filter(t => t.is_completed === false).length > 0 ?
              `You have ${todos.length}/${todos.filter(t => t.is_completed === false).length} pending task` :
              "All tasks completed"
          )
      }
      { !_.isNil(todos) && (todos.filter(t => t.is_completed === false).length > 1 && "s") }
    </p>
    {
      !_.isNil(todos) && todos.filter(t => t.is_completed === false).length > 0 ?
        <Button
          text="Complete All"
          onClick={() => completeAll()}
          color="purple"
          disabled={!_.isNil(todos) && !(todos.filter(t => t.is_completed === false).length > 0) } /> :
        <Button
          text="Delete All"
          onClick={() => deleteAll()}
          color="red"
          disabled={!_.isNil(todos) && !(todos.filter(t => t.is_completed === false).length < 1)} />
    }
    <audio src={audio} id="audio" />
  </footer>;
};

export default Footer;
