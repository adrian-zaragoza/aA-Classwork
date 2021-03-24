import React from "react"
import Clock from "./clock"

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.title = props.title
    this.content = props.content
    this.state = {
      index: 0
    }
  }

  render() {
    const titles = this.title.map((title, idx) => {

    })
    return (
      <h1><ul>titles</ul></h1>
    )
  }
}

export default Tabs;