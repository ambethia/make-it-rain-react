import { observable } from 'mobx'

class Rain {
  @observable drops = []
  requestID = null

  start () {
    this.requestID = window.requestAnimationFrame(() => this.tick())
  }

  stop () {
    window.cancelAnimationFrame(this.requestID)
  }

  // Create a new rain drop
  drop () {
    const x = Math.random() * document.body.clientWidth
    const y = -16
    const z = Math.random() + 0.5
    this.drops.push({x, y, z})
  }

  tick () {
    for (let i = 0; i < this.drops.length; i++) {
      const drop = this.drops[i]
      if (drop.x > document.body.clientWidth || drop.y > document.body.clientHeight) {
        this.drops.splice(i, 1)
      } else {
        drop.x += drop.z
        drop.y += drop.z
      }
    }
    this.requestID = window.requestAnimationFrame(() => this.tick())
  }
}

const rain = new Rain()
window.rain = rain
export default rain
