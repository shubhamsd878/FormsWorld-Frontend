import React, { useEffect, useState } from 'react'
import Orders_tablerow from './Orders/Orders_tablerow'
import './table.css'

const Orders = () => {
  const BACKEND = process.env.REACT_APP_BACKEND

  // ---------- fetching orders ----------
  const [orders, setOrders] = useState([])
  useEffect(() => {
    async function fetc() {
      let response = await fetch(`${BACKEND}/order`)

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

      <table className='table table-hover .table-bordered'>
        <thead>

          <tr>
            <th>name</th>
            <th>email</th>
            <th>form_id</th>
            <th>Applying dateTime</th>
            <th>payment</th>
            {/* <th>Whatsapp_Phone---remaining</th> */}
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {orders.map(e =>
            <Orders_tablerow key={e._id} _id={e._id} dateTime={e.dateTime} payment_done={e.payment_done}
              uid={e.uid._id} name={e.uid.name} email={e.uid.email}
              form_id={e.form_id._id} form_title={e.form_id.title} />
          )}
        </tbody>

      </table>

      {orders.length === 0 && <div className='d-flex justify-content-center text-muted'><h6 className=''>No Data in Database</h6></div>}

    </div>
  )
}

export default Orders