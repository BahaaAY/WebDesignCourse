function Form({ handleSubmit }) {
  function addTransaction(e) {
    e.preventDefault();
    const desc = e.target.desc.value;
    const amount = e.target.amount.value;
    if (desc.trim() === "" || amount.trim() === "") {
      alert("Please enter Description and Amount");
    } else {
      const transaction = {
        id: Math.floor(Math.random() * 100000000),
        desc: desc,
        amount: Number(amount),
      };
      console.log("Transaction: ", transaction);
      e.target.reset();

      handleSubmit(transaction);
    }
  }
  return (
    <form onSubmit={addTransaction} action="#" id="form">
      <div className="form-control">
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Description"
        />
      </div>

      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" placeholder="Amount" />
      </div>

      <button className="btn" type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default Form;
