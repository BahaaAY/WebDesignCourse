import "./App.css";

import { useState } from "react";

import { Container } from "reactstrap";

import Form from "./components/Form";

import TransactionsList from "./components/TransactionsList";
import Stats from "./components/Stats";

function App() {
  let [transactions, setTransactions] = useState([]);
  function handleSubmit(transaction) {
    setTransactions([...transactions, transaction]);
  }
  function handleDelete(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }
  return (
    <Container>
      <div class="ledger">
        <Stats transactions={transactions} />
        <Form handleSubmit={handleSubmit} />
      </div>
      <TransactionsList
        transactions={transactions}
        deleteHandler={handleDelete}
      />
    </Container>
  );
}

export default App;
