import { useEffect } from "react";
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

  return (
    <>
      {type === "add" ? <InputComponent /> : <Search />}
      <LoadCheck isLoad={isLoad}>
        <div className="todo-list">
          {todos.length === 0 && <h2>No Todos</h2>}

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
      </LoadCheck>
      <Filter count={todos.length} />
    </>
  );
};

export default TodoAppHomePage;
