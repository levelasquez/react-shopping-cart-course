import { Component } from 'react'

const styles = {
  cartDetails: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa',
  },
}

class CartDetails extends Component {
  render() {
    const { cart } = this.props

    return (
      <div style={styles.cartDetails}>
        <ul style={styles.ul}>
          {cart.map((product) => (
            <li style={styles.product} key={product.name}>
              <img
                src={product.img}
                alt={product.name}
                width="50"
                height="32"
              />
              {product.name} <span>{product.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CartDetails
