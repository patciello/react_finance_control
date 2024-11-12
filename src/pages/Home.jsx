import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.balanceCard}>
        <h2>Monthly Balance</h2>
        <div className={styles.amount}>$2,500.00</div>
        <div className={styles.stats}>
          <div className={styles.income}>
            <span>Income</span>
            <span>$3,000.00</span>
          </div>
          <div className={styles.expenses}>
            <span>Expenses</span>
            <span>$500.00</span>
          </div>
        </div>
      </div>
      <div className={styles.transactionsList}>
        {/* Transactions list will go here */}
      </div>
    </div>
  );
}

export default Home;
