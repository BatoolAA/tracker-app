import React, { useState } from 'react';
import './App.css';
import {useContext} from 'react';
import {TransactionContext} from './transContext';
import { generatedId } from './generateId';

function Child() {

  let {transactions, addTransaction, deleteTransaction} = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleTransaction = (event) => {
    event.preventDefault();
    console.log(newDesc, newAmount);
    if(Number(newAmount) === 0){
      alert("Enter value greater than 0");
      document.getElementById("desc").value = "";
      document.getElementById("amount").value = "";
      return false;
    }
    addTransaction({
      id: generatedId(),
      desc: newDesc,
      amount: Number(newAmount),
    })

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

  }

  const handleDeleteTransaction = (id) => {
    deleteTransaction({
      id,
    })

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

  }

  const getIncome = () => {
    let income = 0;
    for(let i=0; i<transactions.length; i++){
      if(transactions[i].amount > 0)
        income += transactions[i].amount
    }
    return income;
  }

  const getExpense = () => {
    let expense = 0;
    for(let i=0; i<transactions.length; i++){
      if(transactions[i].amount < 0)
        expense += transactions[i].amount
    }
    return expense;
  }

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>Your Balance<br />{getIncome() + getExpense()}</h3>

      <div className="expense-container">
          <h3>INCOME <br />{getIncome()}</h3>
          <h3>EXPENSE<br />{getExpense()}</h3>
      </div>

      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {
          transactions.map((t, index) =>{
            return(
              <li key={index}>
                <span>{t.desc}</span>
                <span>{t.amount}</span>
                <span><button onClick={()=>handleDeleteTransaction(t.id)}>X</button></span>
              </li>
            )
          })
        }
        
      </ul>

      <h3>Add new transaction</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleTransaction}>
        <label>
          Enter Description <br />
          <input type="text" id="desc" onChange={(ev)=>setDesc(ev.target.value)} required/>
        </label>
        <br />
        <label>
          Amount <br />
          <input type="number" id="amount" onChange={(ev)=>setAmount(ev.target.value)} required />
        </label>
        <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
