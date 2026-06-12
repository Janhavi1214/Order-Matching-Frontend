import { useState } from "react";

function OrderForm({onOrderPlaced}){
    const [type, setType] = useState('BUY')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    async function handleSubmit(){
        try{
            const response = await fetch('http://localhost:8080/api/v1/orders',{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({type, price: parseFloat(price), quantity: parseInt(quantity)})
            });
            const orders = await response.json();
            setOrders(orders);
            console.log(orders);
        } catch(error){
            console.log("Eror: ", error);
        }
    }
    onOrderPlaced();


    return(
        <div className="Order-Form">
            <h2>Place your Order</h2>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="BUY">BUY</option>
                <option value="SELL">SELL</option>
            </select>

            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price" />

            <input 
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter Quantity" />

            <button type="button">Place Order</button>
        </div>
    )
}

export default OrderForm 

/**
 * async function placeOrder(type, price, quantity) {
  try {
    const response = await fetch('http://localhost:8080/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type, price, quantity })
    });
    
    const trades = await response.json();
    console.log("Trades executed:", trades);
  } catch (error) {
    console.log("Error:", error);
  }
}

placeOrder('BUY', 100.0, 5);
 */