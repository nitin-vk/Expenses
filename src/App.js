/*function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;*/
//import ExpenseItem from '../src/Components/ExpenseItem'
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/Expenses/NewExpense';
import React,{useState} from 'react'
import ExpenseFilter from './Components/Expenses/ExpenseFilter';
const old_expenses=[
  {
    'id':1,
    'title':'Books',
    'amount':'$23.33',
    'date':new Date('2019','08','02')

  },
  {
    'id':2,
    'title':'School',
    'amount':'$233.33',
    'date':new Date('2020','11','23')

  },
  {
    'id':3,
    'title':'Food',
    'amount':'$12.33',
    'date':new Date('2019','09','13')

  },
  {
    'id':4,
    'title':'Car Insurance',
    'amount':'$203.33',
    'date':new Date('2021','08','06')

  }
]

const App=()=>
{
  const [oldItems,itemsUpdated]=useState(old_expenses)
  const gotSomething=(newExp)=>
  {
    itemsUpdated((prevExp)=>{
      return [...prevExp,newExp]
    })
  }

  return (
    <div>
      <NewExpense onSomething={gotSomething}></NewExpense>
      
      <Expenses item={oldItems}></Expenses>
    </div >
  );
}


export default App;



