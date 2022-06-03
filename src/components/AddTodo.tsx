import React, { useContext, useRef } from "react";

import classes from "./AddTodo.module.css";

import { TodosContext } from "../contexts/todos-contexts";

const AddTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const TodoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    TodoCtx.addTodo(enteredText);

    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
