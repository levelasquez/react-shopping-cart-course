import { Component } from 'react'

import Title from './components/Title'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomatoe', price: 1.5, img: '/products/tomatoe.jpg' },
      { name: 'Chickpeas', price: 2.5, img: '/products/chickpeas.jpg' },
      { name: 'Lettuce', price: 0.5, img: '/products/lettuce.jpg' },
    ],
    cart: [],
    isCartVisible: false,
  }

  addCart = (product) => {
    const { cart } = this.state

    if (cart.find((element) => element.name === product.name)) {
      const newCart = cart.map((element) =>
        element.name === product.name
          ? {
              ...element,
              quantity: element.quantity + 1,
            }
          : element,
      )

      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: cart.concat({
        ...product,
        quantity: 1,
      }),
    })
  }

  showCart = () => {
    const { cart, isCartVisible } = this.state

    if (!cart.length) {
      return
    }

    return this.setState({ isCartVisible: !isCartVisible })
  }

  render() {
    const { products, cart, isCartVisible } = this.state

    return (
      <div>
        <Navbar
          cart={cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products addCart={this.addCart} products={products} />
        </Layout>
      </div>
    )
  }
}

export default App
