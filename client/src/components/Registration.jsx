import React, { Component } from 'react';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      pw_digest: '',
      username: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange(e) {
  const {name, value} = e.target;
  this.setState({
    [name]: value
  });
}

handleSubmit(e) {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({
    email: '',
    pw_digest: '',
    username: ''
  });
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>

        <input
        type='text'
        onChange={this.handleInputChange}
        value={this.state.username}
        name='username'
        placeholder="Register username"
        />
      </label>
      <label>

      <input
        type='text'
        onChange={this.handleInputChange}
        value={this.state.email}
        name='email'
        placeholder="Register email"
      />
      </label>
      <label>

      <input
        type='password'
        onChange={this.handleInputChange}
        value={this.state.password}
        name='pw_digest'
        placeholder="Register password"
      />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}
}
export default Registration;
