import styles from '../styles/AddTransaction.module.css';

function AddTransaction() {
  return (
    <div className={styles.container}>
      <h2>Add New Transaction</h2>
      <form className={styles.form}>
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Description" />
        <select>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button type="submit">Save Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
