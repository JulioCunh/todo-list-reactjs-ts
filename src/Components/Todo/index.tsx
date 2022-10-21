import { Tasks } from '../Tasks';
import styles from './Todo.module.css';

export function Todo() {
  return (
    <section className={styles.todo}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>05</span>
        </div>

        <div>
          <p className={styles.textPurple}>concluídas</p>
          <span>03</span>
        </div>
      </header>

      <div className={styles.list}>
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </section>
  );
}
