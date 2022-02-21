import "./App.scss";
import TodoAppHomePage from "./pages/TodoAppHomePage";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Things To Do</h1>
      <TodoAppHomePage />
    </div>
  );
};

export default App;
