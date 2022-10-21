import styles from './Tasks.module.css';
import { BsCircle } from 'react-icons/bs';
import { VscTrash } from 'react-icons/vsc';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <button className={styles.buttonCheck}>
        <BsCircle size={20} />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.buttonRemove}>
        <VscTrash size={20} />
      </button>
    </div>
  );
}
