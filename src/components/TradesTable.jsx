function TradesTable({trades}){
    return(
        <div className="tradesTable">
            <h2>Trades Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Buy Order ID</th>
                            <th>Sell Order ID</th>
                            <th>Executed Price</th>
                            <th>Executed Quantity</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trades.map((trade) => (
                            <tr key={trade.id}>
                                <td>{trade.id}</td>
                                <td>{trade.buyerOrderID}</td>
                                <td>{trade.sellerOrderID}</td>
                                <td>{trade.executedPrice}</td>
                                <td>{trade.executedQuantity}</td>
                                <td>{trade.executedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default TradesTable