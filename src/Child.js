import React from 'react';
import './App.css';

function Child() {

  let transactions = [
    {amount: 500, desc: "Cash",},
    {amount: -40, desc: "Bill",},
    {amount: -200, desc: "Shopping",},
  ]

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>Your Balance<br />$260</h3>

      <div className="expense-container">
          <h3>INCOME <br /> $26</h3>
          <h3>EXPENSE<br />$240</h3>
      </div>

      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {
          transactions.map((t, index) =>{
            return(
              <li>
                <span>{t.desc}</span>
                <span>{t.amount}</span>
              </li>
            )
          })
        }
        
      </ul>

      <h3>Add new transaction</h3>
      <hr />
      <form className="transaction-form">
        <label>
          Enter Description <br />
          <input typr="text" required/>
        </label>
        <br />
        <label>
          Amount <br />
          <input typr="number" required />
        </label>
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
