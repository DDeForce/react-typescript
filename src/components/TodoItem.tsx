import { FC } from "react";

import classes from "./TodoItem.module.css";

const TodoItem: FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
