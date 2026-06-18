function OrdersTable({orders}){
    return (
        <div className="ordersTable">
            <h2>All Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td className={order.type === 'BUY' ? 'buy-type' : 'sell-type'}>
                                    {order.type}
                                </td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td className={
                                    order.status === 'FILLED' ? 'status-filled' :
                                        order.status === 'PARTIALLY_FILLED' ? 'status-partial' :
                                            'status-open'
                                    }>
                                    {order.status}
                                </td>
                                <td>{order.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default OrdersTable