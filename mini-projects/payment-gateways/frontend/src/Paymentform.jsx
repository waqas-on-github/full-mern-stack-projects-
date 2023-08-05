import { useState } from "react"
import axios from "axios"
import { CardElement  , useStripe , useElements} from "@stripe/react-stripe-js"    
export const Paymentform = () => {
const [loading , setloding] = useState(false)
const stripe = useStripe()
const handleSubmit = () => {
    console.log("handling ");
}


  return (
    <form onSubmit={handleSubmit}>
    <CardElement />
    <button type="submit" disabled={!stripe || loading}>
      Pay
    </button>
  </form>
  )
}
