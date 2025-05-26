// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHide: false, isShow: false}

  onHideFN = () => {
    this.setState(prevState => ({isHide: !prevState.isHide}))
  }

  onHideLN = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {isHide, isShow} = this.state
    const fname = isHide ? 'nameshow' : null
    const lname = isShow ? 'nameshow' : null
    return (
      <div className="bg">
        <h1>Show/Hide </h1>
        <div className="container">
          <div className="names-container">
            <button type="button" onClick={this.onHideFN}>
              Show/Hide Firstname
            </button>
            {isHide ? <p className={fname}>Joe</p> : null}
          </div>
          <div>
            <button type="button" onClick={this.onHideLN}>
              Show/Hide Lastname
            </button>
            {isShow ? <p className={lname}>Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
