import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card'
const ExpenseItem=(props)=>
{
    return(
        <Card>
        <div className='expense-item'>
            <div className='expense-item__description'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
        </Card>
        
    )
}
export default ExpenseItem;