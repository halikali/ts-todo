import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getAllTodo } from "./store/actions";

import { Todo } from "./types/todoTypes";
import TodoItem from "./components/TodoItem";
import Filter from "./components/Filter";
import "./App.scss";
import InputComponent from "./components/InputComponent";
import Search from "./components/Search";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todoReducer.todos);

  const filter = useSelector((state: any) => state.filterReducer.filter);
  const type = useSelector((state: any) => state.inputReducer.type);
  const { searchText } = useSelector((state: any) => state.searchReducer);


  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">Things To Do</h1>
      {type === "add" ? <InputComponent /> : <Search />}
      <div className="todo-list">
        {todos.length == 0 && <h2>No Todos</h2>}

        {todos &&
          filter === "all" &&
          type === "add" &&
          todos.map(
            (todo: Todo) =>
              !todo.deleted && <TodoItem key={todo.id} todo={todo} />
          )}

        {todos &&
          filter === "active" &&
          type === "add" &&
          todos.map(
            (todo: Todo) =>
              todo.completed === false &&
              !todo.deleted && <TodoItem key={todo.id} todo={todo} />
          )}

        {todos &&
          filter === "completed" &&
          type === "add" &&
          todos.map(
            (todo: Todo) =>
              todo.completed === true &&
              !todo.deleted && <TodoItem key={todo.id} todo={todo} />
          )}

        {todos &&
          type === "search" &&
          filter === "all" &&
          todos
            .filter((todo: any) => todo.todo.includes(searchText))
            .map(
              (filteredTodo: Todo) =>
                !filteredTodo.deleted && (
                  <TodoItem key={filteredTodo.id} todo={filteredTodo} />
                )
            )}

        {todos &&
          type === "search" &&
          filter === "active" &&
          todos
            .filter((todo: any) => todo.todo.includes(searchText))
            .map(
              (filteredTodo: Todo) =>
                filteredTodo.completed === false &&
                !filteredTodo.deleted && (
                  <TodoItem key={filteredTodo.id} todo={filteredTodo} />
                )
            )}

        {todos &&
          type === "search" &&
          filter === "completed" &&
          todos
            .filter((todo: any) => todo.todo.includes(searchText))
            .map(
              (filteredTodo: Todo) =>
                filteredTodo.completed === true &&
                !filteredTodo.deleted && (
                  <TodoItem key={filteredTodo.id} todo={filteredTodo} />
                )
            )}

        {todos &&
          filter === "deleted" &&
          type === "add" &&
          todos.map(
            (todo: Todo) =>
              todo.deleted && <TodoItem key={todo.id} todo={todo} />
          )}

        {todos &&
          filter === "deleted" &&
          type === "search" &&
          todos
            .filter((todo: any) => todo.todo.includes(searchText))
            .map(
              (filteredTodo: Todo) =>
                filteredTodo.deleted && (
                  <TodoItem key={filteredTodo.id} todo={filteredTodo} />
                )
            )}
      </div>
      <Filter count={todos.length} />
    </div>
  );
}

export default App;
