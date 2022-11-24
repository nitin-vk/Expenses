import './ExpenseForm.css'
import React, { useState } from 'react'


const ExpenseForm = (props) => {
    const [newTitle, titleChanged] = useState('')
    const [newAmount, amountChanged] = useState('')
    const [newDate, dateChanged] = useState('')

    const titleUpdated = (event) => {
        titleChanged(event.target.value)
        //console.log(newTitle)
    }

    const amountUpdated = (event) => {
        amountChanged(event.target.value)
    }

    const dateUpdated = (event) => {
        dateChanged(event.target.value)
    }

    const updatedItems={
        title:newTitle,
        amount:newAmount,
        date:new Date(newDate)
    }

    const formSubmitted = (event) => {
        event.preventDefault()
        props.onReturn(updatedItems)
        titleChanged('')
        amountChanged('')
        dateChanged('')
    }

    return (
       
        <form onSubmit={formSubmitted}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleUpdated} value={newTitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountUpdated} value={newAmount}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" onChange={dateUpdated} value={newDate}></input>
                </div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
        
    )
}

export default ExpenseForm;