import React from 'react'
import { useContext } from 'react'
import {ContextCreator} from './ContextCreator'

const ContextConsumer = () => {
    const {name} = useContext(ContextCreator)
  return (
      
    <div>
        <h1>hello {name} </h1>
        {/* hello ${namee.name} */}
       
    </div>
  )
}

export default ContextConsumer