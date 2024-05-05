function Form({ handleSubmit }) {
  function addTransaction(e) {
    e.preventDefault();
    const desc = document.getElementById("desc").value;
    const amount = document.getElementById("amount").value;
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
      <div class="form-control">
        <label for="desc">Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter Description"
        />
      </div>

      <div class="form-control">
        <label for="amount">Amount</label>
        <input type="number" name="amount" id="amount" placeholder="Amount" />
      </div>
      <button class="btn" type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default Form;
