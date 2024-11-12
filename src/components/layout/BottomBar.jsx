import { useNavigate } from 'react-router-dom';
import styles from '../../styles/BottomBar.module.css';

function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className={styles.bottomBar}>
      <button className={styles.homeButton} onClick={() => navigate('/')}>
        Home
      </button>
      <button className={styles.addButton} onClick={() => navigate('/add')}>
        +
      </button>
      <button className={styles.statsButton} onClick={() => navigate('/statistics')}>
        Stats
      </button>
    </div>
  );
}

export default BottomBar;
