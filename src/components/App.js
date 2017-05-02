import React, { Component } from 'react'
import { observer } from 'mobx-react'
import rain from '../rain'

@observer
class App extends Component {
  componentDidMount () {
    rain.start()
  }

  componentWillUnmount () {
    rain.stop()
  }

  _click = () => {
    rain.drop()
  }

  render () {
    return <div>
      <div className='rain'>
        {rain.drops.map((drop, i) => (
          <div
            className='drop'
            style={{
              left: `${drop.x}px`,
              top: `${drop.y}px`,
              transform: `scale(${drop.z}) skewX(32deg)`
            }}
            key={i}
          />
        ))}
      </div>
      <button onClick={this._click}>Make it Rain</button>
      <h3>{rain.drops.length}</h3>
    </div>
  }
}

export default App
