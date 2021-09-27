import { Component } from 'react'

import BubbleAlert from './BubbleAlert'

const styles = {
  cart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
}

class Cart extends Component {
  render() {
    const { cart } = this.props
    const quantity = cart.reduce((acc, element) => acc + element.quantity, 0)

    return (
      <div>
        <span style={styles.bubble}>
          {quantity !== 0 ? <BubbleAlert value={quantity} /> : null}
        </span>
        <button style={styles.cart}>Cart</button>
      </div>
    )
  }
}

export default Cart
