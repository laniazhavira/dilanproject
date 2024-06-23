import React, { useContext } from 'react'
import './Verify.css'
import {useSearchParams} from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext'

const Verify = () => {
    const[searchParams,setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const{url} = useContext(StoreContext)
  return (
    <div className='verify'>
            <p>Thank You For Ordering!</p>
    </div>
  )
}

export default Verify
