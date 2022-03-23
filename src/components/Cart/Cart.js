import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.cartTotal)
  console.log('items', items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <CartItem key={item.title} item={item} />
        ))}
      </ul>
      <div>Cart Total: ${total.toFixed(2)}</div>
    </Card>
  )
}

export default Cart
