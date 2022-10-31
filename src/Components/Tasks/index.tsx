import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './Tasks.module.css';
import { TbClipboardText } from 'react-icons/tb';

interface Props {
  task: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ task, onDelete, onComplete }: Props) {
  const tasksQantity = task.length;
  const completedTaks = task.filter((task) => task.isCompleted).length;

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
        {task.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {task.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
