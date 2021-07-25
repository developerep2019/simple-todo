import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(+event.target.value);
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskToDelete));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
