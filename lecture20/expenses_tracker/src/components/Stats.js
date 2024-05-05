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
      <div class="inc-exp-container">
        <div class="inc">
          <h4>Income</h4>
          <p id="inc-amt" class="amt plus">
            $ {income}
          </p>
        </div>
        <div class="exp">
          <h4>Expense</h4>
          <p id="exp-amt" class="amt minus">
            $ {expense}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
