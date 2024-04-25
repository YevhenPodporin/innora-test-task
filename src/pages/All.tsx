import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { TodoListItem, todoListSlice } from "../redux/reducers/TodoListSlice";
import TodoListJson from "../TodoListData.json";
import ListItem from "../components/ListItem/ListItem";
import "./pages.scss";
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

const All = () => {
  const dispatch = useAppDispatch();
  const {all} = useAppSelector((state) => state.TodoListSlice);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  useEffect(() => {
    if (!all.length) {
      dispatch(todoListSlice.actions.setTodoList(TodoListJson));
    }
  }, []);

  const deleteElement = (id: TodoListItem["id"]) => {
    dispatch(todoListSlice.actions.remove(id));
    setShowDeleteIcon(false)
  };

  const onDragStarted = (isStarted: boolean) => {
    setShowDeleteIcon(isStarted)
  }

  return (
    <div className={"todo_list"}>
      {all.map((item) => {
        return <ListItem
          item={item}
          key={item.id}
          action={deleteElement}
          onDragStarted={onDragStarted}
        />;
      })}

      <div
        className={showDeleteIcon ? 'delete-icon__fixed visible' : 'delete-icon__fixed hidden'}
        onDragOver={e => e.preventDefault()}
        onDrop={e => deleteElement(+e.dataTransfer.getData('id'))}
      >
        <RemoveCircleOutlineTwoToneIcon
          color={'error'}
          className={"remove-icon"}
        />
      </div>

    </div>
  );
};

export default All;
