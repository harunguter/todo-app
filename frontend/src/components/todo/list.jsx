import { useContext, useEffect } from "react";
import _ from "lodash";

import MainContext from "../../contexts/main";

import apiService from "../../services/api.service";

import Item from "./item";
import Empty from "./empty";

const List = () => {

  const {
    todos,
    setTodos,
    setUpdate
  } = useContext(MainContext);

  const getTodos = async() => {
    const response = await apiService.getTodo();
    setTodos(response.data);
  };

  useEffect(() => {
    if (_.isNil(todos) || _.isEmpty(todos)) setUpdate(null);
  }, [ todos ]);

  useEffect(() => {
    getTodos();
  }, [ ]);

  return <>
    {
      _.isNil(todos) ?
        <Empty /> :
        (
          _.isEmpty(todos) ?
            <Empty/> :
            todos.map((item, key) => <Item item={item} key={key}/>).reverse()
        )
    }
  </>;

};

export default List;
