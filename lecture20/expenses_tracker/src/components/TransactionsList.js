import Transaction from "./Transaction";

function TransactionsList({ transactions, deleteHandler }) {
  return (
    <div className="transaction">
      <h3>Transaction Details</h3>
      <ul className="trans" id="trans">
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
