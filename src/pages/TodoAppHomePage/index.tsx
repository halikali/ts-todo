import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTodo } from "store/actions";
import { Todo } from "types/todoTypes";
import InputComponent from "components/InputComponent";
import Filter from "components/Filter";
import Search from "components/Search";
import TodoItem from "components/TodoItem";
import LoadCheck from "components/LoadCheck";

const TodoAppHomePage = () => {
  const dispatch = useDispatch();
  const { todos, isLoad } = useSelector((state: any) => state.todoReducer);
  const { filter } = useSelector((state: any) => state.filterReducer);
  const { type } = useSelector((state: any) => state.inputReducer);
  const { searchText } = useSelector((state: any) => state.searchReducer);

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  const checkAddCondition = (filterType: string) => {
    switch (filterType) {
      case "all":
        return todos.map(
          (todo: Todo) =>
            todo.status !== "deleted" && <TodoItem key={todo.id} todo={todo} />
        );
      default:
        return todos.map(
          (todo: Todo) =>
            todo.status === filterType && <TodoItem key={todo.id} todo={todo} />
        );
    }
  };

  const checkSearchCondition = (filterType: string) => {
    switch (filterType) {
      case "all":
        return todos
          .filter((todo: any) => todo.todo.includes(searchText))
          .map(
            (filteredTodo: Todo) =>
              filteredTodo.status !== "deleted" && (
                <TodoItem key={filteredTodo.id} todo={filteredTodo} />
              )
          );
      default:
        return todos
          .filter((todo: any) => todo.todo.includes(searchText))
          .map(
            (filteredTodo: Todo) =>
              filteredTodo.status === filterType && (
                <TodoItem key={filteredTodo.id} todo={filteredTodo} />
              )
          );
    }
  };

  return (
    <>
      {type === "add" ? <InputComponent /> : <Search />}
      <LoadCheck isLoad={isLoad}>
        <div className="todo-list">
          {todos.length === 0 && <h2>No Todos</h2>}

          {todos && type === "add"
            ? checkAddCondition(filter)
            : checkSearchCondition(filter)}
        </div>
      </LoadCheck>
      <Filter count={todos.length} />
    </>
  );
};

export default TodoAppHomePage;
