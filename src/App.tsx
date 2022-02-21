import TodoAppHomePage from "pages/TodoAppHomePage";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Things To Do</h1>
      <TodoAppHomePage />
    </div>
  );
};

export default App;
