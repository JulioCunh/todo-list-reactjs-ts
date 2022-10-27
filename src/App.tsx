import './global.css';
import { Header } from './Components/Header';
import { Tasks } from './Components/Tasks';
import { useState } from 'react';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: 'Task 1',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Task 2',
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskId(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskId} />
    </div>
  );
}
