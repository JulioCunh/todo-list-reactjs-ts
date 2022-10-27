import styles from './Task.module.css';
import { BsCircle } from 'react-icons/bs';
import { VscTrash } from 'react-icons/vsc';
import { ITask } from '../../App';

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onDelete }: Props) {
  return (
    <div className={styles.tasks}>
      <button className={styles.buttonCheck}>
        <BsCircle size={20} />
      </button>
      <p>{task.title}</p>
      <button className={styles.buttonRemove} onClick={() => onDelete(task.id)}>
        <VscTrash size={20} />
      </button>
    </div>
  );
}
