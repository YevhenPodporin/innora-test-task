import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ListItem from "../components/ListItem/ListItem";
import { TodoListItem, todoListSlice } from "../redux/reducers/TodoListSlice";

const Deleted = () => {
  const {deleted} = useAppSelector((state) => state.TodoListSlice);
  const dispatch = useAppDispatch();

  const restoreElement = (id: TodoListItem['id']) => {
    dispatch(todoListSlice.actions.restore(id))
  }

  return deleted.length ? (
    <div className={'todo_list'}>
      {deleted.map((item) => {
        return <ListItem type={'restore'} item={item} key={item.id} action={restoreElement}/>;
      })}
    </div>
  ) : <h2>There are no deleted tasks</h2>
};

export default Deleted;
