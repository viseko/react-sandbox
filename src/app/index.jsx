import { useCallback, useState } from 'react';
import Button from '../shared/Button';
import MainSlide from '../widgets/MainSlide/MainSlide';
import './index.css';

const TodoList = ({
  tasks,
  addTask,
  disableCondition = true
}) => {
  return (
    <div>
      <ul>
        {
          tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))
        }
      </ul>
      <Button
        onClick={addTask}
        text="Добавить"
        disabled={disableCondition}
      />
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = useCallback(() => {
    if (newTask.length) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }, [newTask]);

  return (
    <div className="App">
      <MainSlide>
        <input type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <TodoList
          tasks={tasks}
          addTask={handleNewTask}
          disableCondition={newTask.length === 0}
        />
      </MainSlide>
    </div>
  );
}

export default App;
