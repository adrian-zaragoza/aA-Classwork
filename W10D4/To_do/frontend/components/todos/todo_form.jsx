import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: new Date().getTime(), title: "", body: "", done: false}

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({ title: e.target.value})
  }

  updateBody(e) {
    this.setState({ body: e.target.value })
  }

  updateDone(e) {
    this.setState({ done: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){

    return(
      <div>
        {/* <input type="text" value={this.newState(title: )}/> */}
      </div>
    )
  }
}

export default TodoForm;