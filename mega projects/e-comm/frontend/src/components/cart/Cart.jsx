import useCartItems from  '../../../Apis/Cart/useCartItems'
import useCartMutate from '../../../Apis/Cart/useCartMutate'


const Cart = () => {
// getting cart data by user id  from endpoint 

const {data , isError} = useCartItems()

// deleting data from cart 
const {mutate } = useCartMutate()


if(isError) {
  return <> something went wrong </>
}


// todo make it with quantity and price calculation and also update cart on verey item posted 
 const handelDelete = (id) => {

   mutate({id:id ,cartId :data.cartItems[0]._id   })
 
 }

  return (
    <>
    {data?.cartItems[0]?.items?.map((item) => {
      let product = item.productId 
      
      return (<> 
      <div >
       <h1>{product?.name}</h1>
       <p> Quantity : {item?.quantity}</p>
        <button onClick={()=>handelDelete( product._id )} > delete  </button>
      </div>
      </>)

    })}
    
    </>
  )
}

export default Cart



