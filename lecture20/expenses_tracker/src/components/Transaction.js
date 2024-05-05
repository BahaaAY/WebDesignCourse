function Transaction({ transaction, deleteHandler }) {
  return (
    <li className={transaction.amount >= 0 ? "inc" : "exp"}>
      {transaction.desc}
      <span>{transaction.amount}</span>
      <button className="btn-del" onClick={() => deleteHandler(transaction.id)}>
        x
      </button>
    </li>
  );
}

export default Transaction;
