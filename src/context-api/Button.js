// button to change name
import React from 'react'
import { useContext } from 'react'
import {ContextCreator} from './ContextCreator'


const Button = () => {
  const handledown = () => {
    setName("Dahiya")
  }
  const {setName} = useContext(ContextCreator)
  return (
    <div> 
        <button onClick={handledown}> Change Name</button>
    </div>
  )
}

export default Button