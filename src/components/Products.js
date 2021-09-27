import { Component } from 'react'

import Product from './Product'

class Products extends Component {
  render() {
    const { products, addCart } = this.props

    return (
      <div>
        {products.map((product) => (
          <Product key={product.name} product={product} addCart={addCart} />
        ))}
      </div>
    )
  }
}

export default Products
