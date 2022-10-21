import todoLogo from '../../assets/Logo.svg';
import styles from './Header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt={'Logotipo do todo'} />;
        <form className={styles.newTasksForm}>
          <input
            className={styles.inputNewTasksForm}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button className={styles.buttonNewTasksForm}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  );
}
