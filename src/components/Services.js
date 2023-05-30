import React, { useState, useEffect } from 'react'
import ServiceItem from './ServiceItem'
import './Services.css'
import Footer from './Footer/Footer'

const Services = () => {
  // --------------- fetching all forms --------------------
  const [fetchForms, setFetchForms] = useState([])
  useEffect(() => {
    async function fetc() {
      let response = await fetch('http://localhost:3001/forms')
      response = await response.json()
      setFetchForms(response.results)
    }

    fetc()
  }, [])

  const serviceItems = fetchForms.map((i) =>
    <ServiceItem key={i._id} _id={i._id} title={i.title} lastDate={i.last_date} totalPosts={i.total_post} age={i.age} price={i.price} />
  );

  return (
    <div className="services ">

      {/* -----------------------    GRID  CARD     ---------------------- */}
      <div className="d-flex justify-content-center">
        <div className="grid-container">
          {serviceItems}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services