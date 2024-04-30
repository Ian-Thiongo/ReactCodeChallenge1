import React from 'react'
import Transaction from './Transactions'

function TransactionList({ transactions }) {
    return (
        <div>
            <table id='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList