import logo from './logo.svg';
import './App.css';
import ExpenItem from './ExpenItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"india",
    },
   
  ];

  for(let i=0; i<10; i++){
      document.write(expenses[0].title);
      document.write(expenses[0].amount);
      document.write(expenses[0].date);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenItem>
     
    </div>
  );
}

export default App;
