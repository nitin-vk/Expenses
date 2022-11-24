import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense=(props)=>
{
    const gotNewExp=(items)=>
    {
        const newItems={
            ...items,
            id:Math.random().toString()
        }
        props.onSomething(newItems)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onReturn={gotNewExp}></ExpenseForm>
        </div>
    )
}

export default NewExpense