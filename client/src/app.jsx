import "semantic-ui-css/semantic.min.css";
import "./assets/styles/main.css";

import { useState } from "react";
import _ from "lodash";

import * as Semantic from "semantic-ui-react";

import MainContext from "./contexts/main";

import Title from "./components/todo/title";
import Form from "./components/todo/form";
import List from "./components/todo/list";
import Footer from "./components/footer";

const App = () => {

  const [ todos, setTodos ] = useState(null);
  const [ todo, setTodo ] = useState(null);
  const [ update, setUpdate ] = useState(null);

  const states = {
    todos,
    setTodos,
    todo,
    setTodo,
    update,
    setUpdate
  };

  return <MainContext.Provider value={states}>
    <div className="app-container">
      <Semantic.Segment className="list-container">
        <Title text="Todo Application"/>
        <Form />
        <Semantic.Divider />
        <div className="app-item-list">
          <List />
        </div>
        <Semantic.Divider />
        <Footer todos={todos}/>
      </Semantic.Segment>
    </div>
  </MainContext.Provider>;
};

export default <App />;
