import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import categories  from "../categories"
import Message from "../../../Message";

const schema = z.object({
    description : z.string().min(3,{message:"Description should be at  least 3 characteres"}).max(50),
    amount: z.number({invalid_type_error:"Amount is required"}).min(0.1).max(100_000),
    category: z.enum(categories,{
      errorMap: () =>({message:"Category is required"})
    })
});
type ExpenseFormData = z.infer<typeof schema>
interface Props{
  onSubmit:(data:ExpenseFormData) => void
}

const ExpenseForm = ({onSubmit}:Props) => {
  
const {register,handleSubmit,formState:{errors},reset} = useForm<ExpenseFormData>({resolver:zodResolver(schema)})
  return (
    <>
    <form onSubmit={handleSubmit(data => {onSubmit(data),reset()})}> 
    {/* handleSubmit passe des donne a onSubmit qui lui les envois au props qui l'utilise , grave cool */}
    <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input {...register("description")} type="text" className="form-control" id="description"/>
    {errors.description&&<p className="text-danger">{errors.description.message}</p>}
    </div>
    <div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount</label>
    <input {...register("amount",{valueAsNumber:true}) } type="number" className="form-control" id="amount"/>
    {errors.amount&&<p className="text-danger">{errors.amount.message}</p>}
     </div>
     <div className="mb-3">
      <label htmlFor="category" className="form-label">Category</label>
      <select {...register("category")} id="category" className="form-select">
      <option value=""> </option>
      {categories.map(cat=><option key={cat} value={cat}>{cat}</option>)}
      </select>
      {errors.category&&<p className="text-danger">{errors.category.message}</p>}
    </div>
    <button className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default ExpenseForm