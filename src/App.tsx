import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import TodoContextProvider from "./contexts/todos-contexts";

function App() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
