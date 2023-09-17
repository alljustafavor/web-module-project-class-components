import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  onSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({
      ...this.state,
      name: ''
    })
  }

  onChange = evt => {
    const { value } = evt.target;
    this.setState({
      ...this.state,
      name: value
    })
  }



  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} placeholder='add a task' onChange={this.onChange}/>
          <input type='submit' />
        <div>
          {/* <input Completed /> */}
        </div>
      </form>
    )
  }
}
