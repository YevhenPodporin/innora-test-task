import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import ListItem from "../components/ListItem/ListItem";
import { TodoListItem, todoListSlice } from "../redux/reducers/TodoListSlice";

const Deleted = () => {
  const { deleted } = useAppSelector((state) => state.TodoListSlice);
  const dispatch = useAppDispatch();

  const restoreElement = (id: TodoListItem['id']) => {
    dispatch(todoListSlice.actions.restore(id))
  }

  return (
    <div className={'todo_list'}>
      {deleted.map((item) => {
        return <ListItem item={item} key={item.id} action={restoreElement}/>;
      })}
    </div>
  );
};

export default Deleted;
