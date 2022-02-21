import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getAllTodo } from "store/actions";

const InputComponent = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const onChangeHandler = (e: any) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo !== "" && todo.trimStart() !== "") {
      addTodo(todo);
      setTodo("");
      dispatch(getAllTodo());
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={todo}
        onChange={onChangeHandler}
        placeholder="Add New"
        className="todo-input"
      />
    </form>
  );
};

export default InputComponent;
