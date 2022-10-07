import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Counter from './components/Counter/Counter';
import { useEffect, useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const [items, setItems] = useState([])
  
  return (
    <div className="App">
      <Nav items={items}/>
      <Counter setAmount={setAmount} amount={amount} items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
