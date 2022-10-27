import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './Tasks.module.css';

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete }: Props) {
  const tasksQantity = tasks.length;
  const completedTaks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.todo}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>concluídas</p>
          <span>
            {completedTaks} de {tasksQantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
