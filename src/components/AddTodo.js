import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  };

  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.submitTodo} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: '10', padding: '10px' }}
          value={this.state.title}
          onChange={this.changeTitle}
        />
        <input
          type="submit"
          value="Add Todo"
          className="btn"
          style={{ flex: '2' }}
        />
      </form>
    );
  }
}

export default AddTodo;
