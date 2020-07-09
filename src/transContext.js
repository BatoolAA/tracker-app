import React, {createContext, useReducer} from 'react';
import TransactioReducer from './transReducer';
import {generatedId} from './generateId'

const initialTransactions = [
    {id: generatedId(), amount: 500, desc: "Cash",},
    {id: generatedId(), amount: -40, desc: "Bill",},
    {id: generatedId(), amount: -200, desc: "Shopping",},
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactioReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: transObj.id,
                amount: transObj.amount,
                desc: transObj.desc,
            },
        })
    }
    function deleteTransaction(transObj){
        dispatch({
            type: "DELETE_TRANSACTION",
            id: transObj.id,
           
        })
    }
    
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction,
        }}>
            {children}
        </TransactionContext.Provider>
    )
}