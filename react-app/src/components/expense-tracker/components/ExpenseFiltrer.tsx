import categories  from "../categories"
interface Props{
    SelectCategory:(category:string) => void
}

const ExpenseFiltrer = ({SelectCategory}:Props) => {
  return (
<select className="form-select mb-3"  onChange={(event)=>SelectCategory(event.target.value)}>
  <option selected>All Expense</option>
  {categories.map(cat=><option key={cat} value={cat}>{cat}</option>)}
  </select>
  )
}

export default ExpenseFiltrer