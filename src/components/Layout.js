import { Component } from 'react'

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '1200px',
  },
}

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <div style={styles.layout}>
        <div style={styles.container}>{children}</div>
      </div>
    )
  }
}

export default Layout
