import React, {useState, useEffect} from 'react'
import ServiceItem from './ServiceItem'
import './Services.css'

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

    // const services = [
    //     {heading : 'SSC Multi Tasking Staff Non Technical MTS & Havaldar Online Form 2022', lastDate: '30-Feb-2020',totalPosts:'3603', minimumAge:'18', maximumAge:'25 – 27'}, 

    //     {heading : 'Shubham Multi Tasking Staff Non Technical MTS & Havaldar Online Form 2022', lastDate: '30-Feb-2020',totalPosts:'3603', minimumAge:'18', maximumAge:'25 – 27'},

    //     {heading : 'Shubham Multi Tasking Staff Non Technical MTS & Havaldar Online Form 2022', lastDate: '30-Feb-2020',totalPosts:'3603', minimumAge:'18', maximumAge:'25 – 27'},
        
    //     {heading : 'Shubham Multi Tasking Staff Non Technical MTS & Havaldar Online Form 2022', lastDate: '30-Feb-2020',totalPosts:'3603', minimumAge:'18', maximumAge:'25 – 27'},

    //     {heading : 'Shubham Multi Tasking Staff Non Technical MTS & Havaldar Online Form 2022', lastDate: '30-Feb-2020',totalPosts:'3603', minimumAge:'18', maximumAge:'25 – 27'}
    // ] 

    // const serviceItems = services.map((i) =>
    //     // <li key={i.heading}>{link.endpoint}</li> 
    //     <ServiceItem heading={i.heading} lastDate={i.lastDate} totalPosts={i.totalPosts} minAge={i.minimumAge} maxAge={i.maximumAge}/>
    // );

    const serviceItems = fetchForms.map((i) =>
        // <li key={i.heading}>{link.endpoint}</li> 
        <ServiceItem _id={i._id} title={i.title} lastDate={i.last_date} totalPosts={i.total_post} age={i.age} price={i.price}/>
    );

    return (
        <div className="services">
            <div className="contain">

            </div>

            
            {/* -----------------------    GRID  CARD     ---------------------- */}

            <div className="grid-container">
                
                {serviceItems}

            </div>
        </div>
    )
}

export default Services