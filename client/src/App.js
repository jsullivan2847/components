import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Counter from './components/Counter/Counter';
import { useEffect, useState } from 'react';
import io from "socket.io-client"
import supabase from './config/supabase';
import database from './config/database';

function App() {

  const [amount, setAmount] = useState(0)
  const [items, setItems] = useState([])
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const socket = io("http://localhost:5000")
    console.log(socket.on('firstEvent', (msg) => {
      console.log(msg)
    }))

    const getSmoothies = async () => {
      const {data,error} = await supabase
      .from('smoothies')
      .select()

      if(error){
      console.log(error)
      }
      if(data){
        setSmoothies(data)
      }
  }

  getSmoothies()
  },[])



  
  return (
    <div className="App">
      <Nav items={items}/>
      <Counter setAmount={setAmount} amount={amount} items={items} setItems={setItems}/>
      
    </div>
  );
}

export default App;
