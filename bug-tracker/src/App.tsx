import { bugs } from './data';
import { BugList } from './components/BugList';
import styles from './App.module.css';

export function App() {
  return (
    <main className={styles.main}>
      <BugList bugs={bugs} />
    </main>
  );
}