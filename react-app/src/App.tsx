import { useState } from 'react'
import ItemTable from './components/expense-tracker/components/ExpenseList'
import "bootstrap/dist/css/bootstrap.css"
import ExpenseFiltrer from './components/expense-tracker/components/ExpenseFiltrer'
import ExpenseForm from './components/expense-tracker/components/ExpenseForm'
import categories from './components/expense-tracker/categories'
import { SignatureKind } from 'typescript'

function App() {
  const [item,setItem] = useState([
    {id:0,description:"milk",amount:5,category:"Groceries"},
    {id:1,description:"eggs",amount:10.00,category:"Groceries"},
  ])
  const [selectedCategory,setSelectedCategory] = useState("")
  const selectedItemCategory = selectedCategory? item.filter(d => d.category == selectedCategory):item
 
  return (
    <>
    <div className='m-5'>
      <ExpenseForm onSubmit={expense =>setItem([...item,{...expense,id:item.length+1}])}/>
    </div>
    <div className='m-5'>
      <ExpenseFiltrer SelectCategory={(id)=> setSelectedCategory(id)}/>
    </div>
    <div className='m-5'>   
    <ItemTable expenses={selectedItemCategory} onDelete={(id) =>setItem(item.filter(i=>i.id!==id))}/>
    </div>
    </>
    
  )
}

export default App
