function Stats({ transactions }) {
  let total = transactions.reduce((acc, item) => (acc += item.amount), 0);
  let income = transactions.reduce((acc, transaction) => {
    if (transaction.amount >= 0) {
      return (acc += transaction.amount);
    }
    return acc; // Add a default return value
  }, 0);
  let expense = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      return (acc += transaction.amount);
    }
    return acc; // Add a default return value
  }, 0);
  return (
    <div>
      <h2>Income Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1 id="balance">$ {total}</h1>
      <div className="inc-exp-container">
        <div className="inc">
          <h4>Income</h4>
          <p id="inc-amt" className="amt plus">
            $ {income}
          </p>
        </div>
        <div className="exp">
          <h4>Expense</h4>
          <p id="exp-amt" className="amt minus">
            $ {expense}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
