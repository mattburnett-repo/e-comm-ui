// FIXME: ->
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { loadStripe } from '@stripe/stripe-js'

import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, resetCart } from '../../redux/cartReducer'

import { CartItem } from '../../redux/Types'
import { RootState } from '../../redux/store'

import './Cart.scss'
import makeRequest from '../../hooks/makeRequest'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

function Cart() {
  const dispatch = useDispatch()

  // const data = useSelector((state: RootState) => state.cart.cartItems)
  const data = useSelector((state: RootState) => state.cart.cartItems)

  const cartTotal = () => {
    let total = 0
    // eslint-disable-next-line no-return-assign
    data.forEach((item) => (total += item.productQuantity * item.price))

    return total.toFixed(2)
  }

  const lineItemTotal = (quantity: number, price: number) => {
    let total = 0
    total = quantity * price

    return total.toFixed(2)
  }

  const handlePayment = async () => {
    const checkoutButton = document.getElementById('proceed-to-checkout-button')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    checkoutButton!.style.backgroundColor = '#66EE22'
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    checkoutButton!.style.color = 'black'
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    checkoutButton!.innerHTML = 'Connecting to checkout page...'

    try {
      const stripe = await stripePromise

      const res = await makeRequest.post('/order/create-stripe-order', {
        cartItems: data
      })

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })
    } catch (err) {
      // FIXME: add error handling / messaging to UI
      // eslint-disable-next-line no-console
      console.log('error in component Cart: ', err)
    }
  }

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item: CartItem) => (
        <div className="item" key={item.product_id}>
          <img src={item.image_01_url} alt="" />
          <div className="details">
            <h1>{item.name}</h1>
            <p>{item.description?.substring(0, 75)}...</p>
            <div className="price">
              {item.productQuantity} x ${item.price} = $
              {lineItemTotal(item.productQuantity, item.price)}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeFromCart(item))}
          />
        </div>
      ))}
      {data?.length > 0 ? (
        <>
          <div
            className="total"
            role="presentation"
            aria-label="subtotal-display"
          >
            <span>SUBTOTAL</span>
            <span>${cartTotal()}</span>
          </div>
          <button
            id="proceed-to-checkout-button"
            type="button"
            aria-label="proceed-to-checkout-button"
            onClick={handlePayment}
          >
            PROCEED TO CHECKOUT
          </button>
        </>
      ) : null}

      <span
        className="reset"
        role="link"
        aria-label="reset-cart-link"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  )
}

export default Cart
