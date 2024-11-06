import { useState } from "react";
import store from "../../app/mobx/store";
import {observer} from "mobx-react-lite";

const Test = observer(() => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    store.addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <ul>
        {
          store.todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => store.toggleTodo(index)}
              />
              {todo.title}
            </li>
          ))
        }
      </ul>
      <div>
        Completed Todos: {store.completedTodos.length}
      </div>
    </div>
  )
})

export default Test