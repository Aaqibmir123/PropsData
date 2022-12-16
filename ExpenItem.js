

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
     <div className="name">{props.title}</div>
     <div className="amount">{props.amount}</div>
     <div className="date">{props.date.toISOString()}</div>
     <div className="locatio">{props.location}</div>
    </div>
  );
}

export default ExpenseItem;