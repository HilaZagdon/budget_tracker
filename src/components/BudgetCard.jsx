
function BudgetCard(props) {
  const handleRemove = () => {
    props.onRemove(props.budget);
  };

  return (
    <div>
      <h2>{props.budget.title}</h2>
      <p>{props.budget.amount + props.budget.typeOfCurrency}</p>
      <p>Catagory: {props.budget.catagory}</p>
      <p>{props.budget.types}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default BudgetCard;