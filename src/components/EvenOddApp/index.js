// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  incrementNumber = () => {
    const {count, text} = this.state
    const number = Math.random()
    const intiger = Math.ceil(number * 100)
    const wanted = count + intiger
    if (wanted % 2 === 0) {
      this.setState(prevState => ({
        count: wanted,
        text: 'Even',
      }))
    } else {
      this.setState(prevState => ({
        count: wanted,
        text: 'Odd',
      }))
    }
  }

  render() {
    const {count, text} = this.state
    console.log(text)
    console.log(count)
    return (
      <div className="main-counter">
        <div className="bg-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {text}</p>
          <button
            className="button"
            type="button"
            onClick={this.incrementNumber}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
