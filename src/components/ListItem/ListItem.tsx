import React from "react";
import { TodoListItem } from "../../redux/reducers/TodoListSlice";
import "./ListItem.scss";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import RestoreIcon from '@mui/icons-material/Restore';

type Props = {
  item: TodoListItem;
  action?: (id: TodoListItem["id"]) => void;
  onDragStarted?: (started: boolean) => void;
  type: 'delete' | 'restore'
};

const ListItem: React.FC<Props> = ({
                                     item,
                                     action,
                                     onDragStarted,
                                     type
                                   }) => {
  const {title, id, description} = item;
  const IconComponent = type === 'delete' ? DeleteOutlineTwoToneIcon : RestoreIcon;

  return (
    <div
      className={"list-item"}
      draggable={true}
      onDragStart={e => {
        e.dataTransfer.setData('id', `${id}`)
        onDragStarted && onDragStarted(true)
      }}
      onDrop={() => onDragStarted && onDragStarted(false)}
      onDragEnd={() => onDragStarted && onDragStarted(false)}
      onDragOver={e => e.preventDefault()}
    >
      <div className={"content"}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={"actions"}>
        <IconComponent
          color={'info'}
          onClick={() => action && action(id)}
          className={"remove-icon"}
        />
      </div>
    </div>
  );
};

export default ListItem;
