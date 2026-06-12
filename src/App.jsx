import './App.css'
import { useState, useEffect} from 'react'

function App() {

  const [orders, setOrders] = useState([])
  const [trades, setTrades] = useState([])

  useEffect(() => {
    fetchOrders()
    fetchTrades()
  }, [])

  async function fetchOrders(){
    try{
      const response = await fetch('http://localhost:8080/api/v1/orders');
      const orders = await response.json();
      setOrders(orders);
      console.log(orders);
    } catch(error){
      console.log("Eror: ", error);
    }
  }

  async function fetchTrades(){
    try{
      const response = await fetch('http://localhost:8080/api/v1/trades');
      const trades = await response.json();
      setTrades(trades);
      console.log(trades);
    } catch(error){
      console.log("Error: ", error);
    }
  }
  return (
    <div className="app">
      <h1>Order Matching Engine</h1>
      <p>Orders loaded: {orders.length}</p>
      <p>Trades loaded: {trades.length}</p>
    </div>
  )
}

export default App
