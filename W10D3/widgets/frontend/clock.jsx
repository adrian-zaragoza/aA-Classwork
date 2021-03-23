import React from "react"

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    }
    this.interval = null;
    this.tick = this.tick.bind(this)
  }

  tick(){
    this.setState({ time: new Date()})
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render(){
    let hours = this.state.time.getHours()
    let minutes = this.state.time.getMinutes()
    let seconds = this.state.time.getSeconds()
    return(
    <div>
      <h1>Clock</h1>
      {/* <p>{`${hours}:${minutes}:${seconds}`}</p> */}
      <p>{this.state.time.toLocaleTimeString()}</p>
    </div>
    )
  }
}

export default Clock;