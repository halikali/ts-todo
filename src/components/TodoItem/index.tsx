import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  delTodo,
  getAllTodo,
  notCompleteTodo,
  softDelTodo,
  updateTodo,
} from "store/actions";
import { Todo } from "types/todoTypes";

import "./todo-item.scss";

interface ITodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { todo } = props;

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setText(todo.todo);
  }, []);

  const checkCompeleted = (e: any, id: string) => {
    if (todo.completed) {
      dispatch(notCompleteTodo(id));
    }

    if (!todo.completed) {
      dispatch(completeTodo(id));
    }

    dispatch(getAllTodo());
  };

  const removeTodo = (e: any, id: string) => {
    e.stopPropagation();
    
    dispatch(softDelTodo(id));

    if (todo.deleted) {
      dispatch(delTodo(id));
    }

    dispatch(getAllTodo());
  };

  const onClickHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const changeTodoContent = (e: any, id: string) => {
    if (e.key === "Enter") {
      dispatch(updateTodo(id, text));
      dispatch(getAllTodo());
    }
  };

  return (
    <div className="todo" onClick={(e) => checkCompeleted(e, todo.id)}>
      <input type="checkbox" checked={todo.completed} name="todo" />
      <input
        className={`todo__content ${todo.completed && "completed"}`}
        onClick={(e) => onClickHandler(e)}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          changeTodoContent(e, todo.id);
        }}
      />
      <FontAwesomeIcon
        icon={faTrashAlt}
        className={"todo__icon todo__icon--thrash"}
        onClick={(e) => {
          removeTodo(e, todo.id);
        }}
      />
    </div>
  );
};

export default TodoItem;
