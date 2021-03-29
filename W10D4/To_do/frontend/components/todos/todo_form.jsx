import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: new Date().getTime(), title: "", body: "", done: false}
  }
}