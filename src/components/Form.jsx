import React, { useState } from 'react'

function Form({ onAddTransaction }) {
    const [newTransaction, setNewTransaction] = useState({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  
    function handleSubmit(event) {
      event.preventDefault();
      onAddTransaction(newTransaction);
      setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: "",
      });
    }
  
    function handleChange(event) {
      const key = event.target.id;
      const value = event.target.value;
      setNewTransaction({ ...newTransaction, [key]: value });
    }
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="date"
          id="date"
          className="form-input"
          value={newTransaction.date}
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          className="form-input"
          placeholder="Description"
          value={newTransaction.description}
          onChange={handleChange}
        />
        <input
          type="text"
          id="category"
          className="form-input"
          placeholder="Category"
          value={newTransaction.category}
          onChange={handleChange}
        />
        <input
          type="number"
          id="amount"
          className="form-input"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Add Transaction"
          className="form-input"
        />
      </form>
    );
  }
  
  export default Form;
