import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  return (
    <div className="App">
      <Nav amount={amount}/>
      <Counter setAmount={setAmount} amount={amount}/>
    </div>
  );
}

export default App;
