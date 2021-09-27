import { Component } from 'react'

import Layout from './components/Layout'
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomatoe', price: 1.5, img: '/products/tomatoe.jpg' },
      { name: 'Chickpeas', price: 2.5, img: '/products/chickpeas.jpg' },
      { name: 'Lettuce', price: 0.5, img: '/products/lettuce.jpg' },
    ],
  }

  render() {
    return (
      <div>
        <Layout>
          <Products
            addCart={() => console.log('do nothing')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
