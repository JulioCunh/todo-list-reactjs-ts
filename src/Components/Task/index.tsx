import styles from './Task.module.css';
import { BsCircle } from 'react-icons/bs';
import { VscTrash } from 'react-icons/vsc';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ITask } from '../../App';

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.buttonCheck}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill size={20} />
        ) : (
          <BsCircle size={20} />
        )}
      </button>

      <p className={task.isCompleted ? styles.TextCompleted : ''}>
        {task.title}
      </p>

      <button className={styles.buttonRemove} onClick={() => onDelete(task.id)}>
        <VscTrash size={20} />
      </button>
    </div>
  );
}
