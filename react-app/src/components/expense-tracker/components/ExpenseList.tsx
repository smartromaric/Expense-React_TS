
interface expense{
    id : number
    description:string
    amount:number
    category:string
}
interface Props{
    expenses:expense[]
    onDelete : (id:number) =>void
}

const ItemTable = ({expenses,onDelete}:Props) => {
    if(expenses.length == 0) return null 
  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {expenses.map((item) => <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
            <button className='btn btn-outline-danger' onClick={()=>onDelete(item.id)}>Delete</button>
            </td>
        </tr>)}
        </tbody>
        <tfoot>
           <tr>
             <td>Totale</td>
            <td>${expenses.reduce((acc,expense) => expense.amount + acc,0).toFixed(2)}</td>
           </tr>
        </tfoot>
    </table>
  )
}

export default ItemTable