import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Counter from './components/Counter/Counter';
import { useEffect, useState } from 'react';
import io from "socket.io-client"
import supabase from './config/supabase';
import database from './config/database';
import { RealtimeClient } from '@supabase/realtime-js';

function App() {


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

  const client = new RealtimeClient('wss://trfcuesxwrtzncjzzpbh.supabase.co/realtime/v1', {
    params: {apikey: process.env.REACT_APP_ANON_KEY}
  })
  client.connect()
  // console.log(client)

  client.onOpen(() => console.log('socket opened'));
  client.onClose(() => console.log('socket closed'));
  client.onError(() => console.log('Socket error'));

  const dbChanges = client.channel('realtime:*');
  dbChanges.on('*', (e) => getSmoothies());
  dbChanges.on('INSERT', (e) => console.log(e));
  dbChanges.on('UPDATE', (e) => console.log(e));
  dbChanges.on('DELETE', (e) => console.log(e));
  dbChanges.subscribe()

  // console.log(dbChanges)

  const [amount, setAmount] = useState(0)
  const [items, setItems] = useState([])
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    // const socket = io("http://localhost:5000")
    // console.log(socket.on('firstEvent', (msg) => {
    //   console.log(msg)
    // }))

  getSmoothies()
  },[])

  if(smoothies) console.log(smoothies[0])
  
  return (
    <div className="App">
      <Nav items={items}/>
      <Counter setAmount={setAmount} amount={amount} items={items} setItems={setItems}/>
      {smoothies && smoothies.map((smoothie, id) => {
        return <h1 key={id}>{smoothie.title}</h1>
      })}
    </div>
  );
}

export default App;
