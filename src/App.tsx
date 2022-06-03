import { useState } from "react";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((currentState) => {
      return currentState.concat(newTodo);
    });
  };
  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
