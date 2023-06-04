/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ toDos, toggleToDo, deleteToDo }) {
  return (
    <ul className="list">
      {toDos.length === 0 && "No Todos"}
      {toDos.map((toDo) => {
        return (
          <TodoItem
            {...toDo}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            key={toDo.id}
          />
        );
      })}
    </ul>
  );
}
