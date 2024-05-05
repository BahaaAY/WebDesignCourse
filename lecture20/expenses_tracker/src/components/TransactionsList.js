import Transaction from "./Transaction";

function TransactionsList({ transactions, deleteHandler }) {
  return (
    <div class="transaction">
      <h3>Transaction Details</h3>
      <ul class="trans" id="trans">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionsList;
