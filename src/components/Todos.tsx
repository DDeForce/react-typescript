import { FC } from "react";

import TodoItem from "./TodoItem";

import Todo from "../models/todo";

import classes from "./Todos.module.css";

const Todos: FC<{ items: Todo[]; onRemoveTodo: (todoId: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
