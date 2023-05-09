import { useState, useEffect, useContext } from "react";

import moment from "moment";

import * as Semantic from "semantic-ui-react";

import MainContext from "../../contexts/main";

import apiService from "../../services/api.service";
import Radio from "../form/radio";

const Item = ({ item }) => {

  const [ showControls, setShowControls ] = useState(false);
  const {
    setTodos,
    setTodo,
    setUpdate
  } = useContext(MainContext);

  const getTodos = async() => {
    const response = await apiService.getTodo();
    setTodos(response.data);
  };

  const deleteTodo = async() => {
    await apiService.deleteTodo(item._id);
    await getTodos();
  };


  return <div className="app-item"
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}>
    <Radio checked={item.is_completed} itemId={item._id}/>
    <div className="app-item-text" >
      <span style={{ textDecoration: item.is_completed ? "line-through" : "none" }}>{item.content}</span>
      <div style={{
        opacity: ".5",
        fontSize: 12
      }}>{moment(item.created_date).fromNow()}</div>
    </div>
    <br />
    {
      showControls && <div className="app-item-controls">
        <span style={{ marginRight: 5 }} onClick={() => {
          setUpdate(item._id);
          setTodo(item.content);
        }}>
          <Semantic.Icon name="edit" color="yellow"/>
        </span>
        <span onClick={() => deleteTodo()}>
          <Semantic.Icon name="delete" color="red"/>
        </span>
      </div>
    }
  </div>;
};

export default Item;
