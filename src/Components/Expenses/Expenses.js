import ExpenseItem from "./ExpenseItems";
import React, { useState } from "react"
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'
const Expenses = (props) => {
    const [filterYear, yearFiltering] = useState('2020')
    const setNewYear = (year) => {
        yearFiltering(year)
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return (
        <div className="expenses">
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} yearChanged={setNewYear}></ExpenseFilter>
                {filteredExpenses.length === 0 ? <p>NO EXPENSES FOR THE YEAR</p> :  filteredExpenses.map((expense) => (<ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />)) }

            </Card>
        </div>
    )
}

export default Expenses;