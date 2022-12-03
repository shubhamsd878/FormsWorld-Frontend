import React, { useEffect, useState } from 'react'

const Orders = () => {
  // ---------- fetching orders ----------
  const [orders, setOrders] = useState([])
  useEffect(() => {
    async function fetc() {
      let response = await fetch('http://localhost:3001/order')

      response = await response.json()

      console.log(response.result)
      if (response.message === true)
        setOrders(response.result)

    }

    fetc()
  }, [])

  let arr = [1, 2, 3, 4]

  return (
    <div>
      <div className="text">Orders</div>

      <table>
        <tr>
          <th>uid</th>
          <th>form_id</th>
          <th>dateTime</th>
          <th>payment</th>
        </tr>
        {orders.map(e =>
          <tr>
            <td>{e.uid}</td>
            <td>{e.form_id}</td>
            <td>{e.dateTime}</td>
            <td>{e.payment_done? 'true' : 'false'}</td>
          </tr>
        )}

      </table>
      {/* {arr.map(i=> i)} */}
    </div>
  )
}

export default Orders