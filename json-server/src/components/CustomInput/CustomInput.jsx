import React from 'react'
import './CustomInput.css'
const CustomInput = ({ref,onChange,value}) => {
  return (
<input value={value} onChange={onChange} ref={ref} type="text" className='custom-input'/>
  )
}

export default CustomInput