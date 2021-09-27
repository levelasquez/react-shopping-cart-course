import { Component } from 'react'

import './App.css'

class App extends Component {
  state = {
    products: [
      { name: 'Tomatoe', prices: 1.5, img: '/products/tomatoe.jpg' },
      { name: 'Chickpeas', prices: 2.5, img: '/products/chickpeas.jpg' },
      { name: 'Lettuce', prices: 0.5, img: '/products/lettuce.jpg' },
    ],
  }

  render() {
    return <p>Hola mundo</p>
  }
}

export default App
