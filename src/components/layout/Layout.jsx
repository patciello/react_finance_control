import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import styles from '../../styles/Layout.module.css';

function Layout() {
  return (
    <div className={styles.container}>
      <TopBar />
      <main className={styles.content}>
        <Outlet />
      </main>
      <BottomBar />
    </div>
  );
}

export default Layout;
