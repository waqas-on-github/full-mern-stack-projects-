import { CardElement , useElements, useStripe } from "@stripe/react-stripe-js"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import * as S from '../../css/genral.module.css'


const Card= () => {
const element = useElements()
const stripe = useStripe()

const [clintSecret , setclintSecret ] = useState('')


const {mutate , error  } = useMutation({
  mutationFn :  async () => {
    return   await  axios.post("/api/v1/orders//payment_intent" , {}) 
  }      , 

  onSuccess : async (data ) => {
    console.log(data.data.paymentIntent);
       setclintSecret(data.data.paymentIntent)
  }

  , onError :() => {
    return <h2> errror createing clintSecret</h2>

  }
})


if(error) {
    return <h2> errror createing clintSecret</h2>
}

  



const submitHandler = async (e) => {
    e.preventDefault()
  
  if(!element ||!stripe) {
    return;
  }
     
await mutate()
  
if(clintSecret){
    var {paymentIntent , error  : stripeError }= await stripe.confirmCardPayment( clintSecret, {
        payment_method : {
            card : element.getElement(CardElement)

        }
    } )

}
   


if(stripeError) {
    return <h2> faid to suceed in payment {stripeError.message} </h2>
}



if(paymentIntent) {

 console.log(paymentIntent);
 }


}


  return ( 
  <>
   <form className={S.payment_form} onSubmit={submitHandler}>
      <div className={S.container}>
        <label className={S.label} htmlFor="card-element">Card</label>
        <CardElement className={S.payment_card} />
        <button className={S.button}>Pay</button>
      </div>
    </form>
    </>
  )
}

export default Card