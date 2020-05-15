import React, { FC } from "react";
import { Todo } from "../../types";
import { ReactComponent as TrashIcon } from "../../Assets/icons/trash.svg";
import styles from "./todo.module.css";

type TodoProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

const SingleTodo: FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const { text, completed } = todo;

  return (
    <div className={`${styles.todo} ${completed && styles.done}`}>
      <span className={styles.text} onClick={() => toggleTodo(todo)}>
        {text}
      </span>
      <button type="button" className={styles.delete} onClick={() => deleteTodo(todo)}>
        <TrashIcon className={styles.ico} />
      </button>
    </div>
  );
};

export default SingleTodo;
