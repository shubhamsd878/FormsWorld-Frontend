import React, { useEffect, useState } from 'react'
import Orders_tablerow from './Orders/Orders_tablerow'

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

  

  return (
    <div>
      <div className="text">Orders</div>

      <table className='table table-hover .table-bordered m-3'>
        <tr>
          <th>uid</th>
          <th>email</th>
          <th>form_id</th>
          <th>Applying dateTime</th>
          <th>payment</th>
          <th>Whatsapp_Phone---remaining</th>
        </tr>
        {orders.map(e =>
          <Orders_tablerow key={e._id} dateTime={e.dateTime} payment_done={e.payment_done} 
            uid={e.uid._id} name={e.uid.name} email={e.uid.email} 
            form_id={e.form_id._id} form_title={e.form_id.title} />
        )}

      </table>

      {orders.length === 0 && <div className='d-flex justify-content-center text-muted'><h6 className=''>No Data in Database</h6></div>}

    </div>
  )
}

export default Orders