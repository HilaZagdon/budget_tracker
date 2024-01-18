import { useState, useEffect } from "react";
import BudgetCard from "../components/BudgetCard";
import "./Budget.css"
import { db } from "../Config/firebaseConfig"
import { getFirestore , addDoc, collection } from "firebase/firestore";

function Budgets() {
  const [budgets, setBudgets] = useState([])
  const [budget,setBudget] = useState({}) 
  const [showForm, setShowForm] = useState(false);
  
  const changeHandler = (e) => {
    budget[e.target.name] = e.target.value;
    setBudget({...budget})
      }
      const submitHandler = (e) => {
        e.preventDefault();
        setBudgets([...budgets, {...budget}]);
      }

      useEffect(() => {
        const budgetData = JSON.parse(localStorage.getItem("budgets"));
        console.log(budgetData);
        if (budgetData) {
          setBudgets(budgetData);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("budgets", JSON.stringify(budgets));
      }, [budgets]);
    
     
    
      const toggleForm = () => {
        setShowForm(!showForm);
       }

       const removeBudget = (removedBudget) => {
        const updatedBudgets = budgets.filter((b) => b !== removedBudget);
        setBudgets(updatedBudgets);
      };

  return(
    <div >
        <h1>Budgets components</h1>
        <div className="addBtn">
        <button id="theBtn" onClick={toggleForm} >add new budget</button>
        </div>
        {showForm?
        <form onSubmit={submitHandler} className="budgetForm">
    <input onChange={changeHandler}  type="text" name="title" placeholder="budget Title" /><br/>
    <input onChange={changeHandler}  type="number" name="amount" placeholder="amount" />
    <select onChange={changeHandler} name="typeOfCurrency" id="typeOfCurrency">
  <option  defaultChecked >Select currency</option>
  <option >$</option>
  <option> ₪</option>
</select><br/>
  <select onChange={changeHandler} placeholder="catagory" name="catagory" id="catagories">
  <option  defaultChecked>Select catagory</option>
  <option >transportation</option>
  <option >Groceries</option>
  <option >Shopping</option>
  <option >Health care</option>
  <option >Luxury</option>
</select><br/>
    <select onChange={changeHandler} placeholder="type" name="types" id="types">
  <option  defaultChecked>Select income/outcome </option>
  <option >Income</option>
  <option >Outcome</option>
</select><br/>
    <button type="submit" className="budgetFormBtn">add budget</button>

    </form>
        :null }
    {budgets.map((budget,i)=>{
      return(
        <BudgetCard
        key={`bud_${i}`}
        budget={budget}
        onRemove={removeBudget}
      />
        )})}
      </div>
  );
}
export default Budgets;