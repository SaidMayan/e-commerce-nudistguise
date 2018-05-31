import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Registration from './components/Registration';
import Products from './components/products/products.jsx';
import ProductsView from './components/products/productsView.jsx';
import { login, register, logout} from './services/apiService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentUser: null,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.logOut = this.logOut.bind(this);

  }

fetchProducts(){
  fetch('/api/products')
  .then(resp => {
    if(!resp.ok) throw new Error('There was an error. Take 5...');
  return resp.json()
  })
  .then(respBody => {
    this.setState({
      products: respBody.data
    })
  });
}


checkToken() {
    const authToken = localStorage.getItem('authToken');
    fetch('/api/auth', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(resp => {
      if (!resp.ok) throw new Error(resp.mesage);
      return resp.json();
    })
    .then(respBody => {
      this.setState({
        currentUser: respBody.user
      })
    })
    .catch(err => {
      console.log('not logged in');
      localStorage.removeItem('authToken');
      this.setState({
        currentUser: null
      })
    })
  }

logOut(){
  localStorage.setItem('authToken', '');
  this.setState ({
    currentUser: ""
  })
}

handleLogin(creds) {
  login(creds)
  .then(user => this.setState({currentUser: user}));
 }

handleRegister(creds) {
  register(creds)
  .then(user => this.setState({currentUser: user}));
 }

componentDidMount() {
  this.checkToken();
  this.fetchProducts();
}


  render() {
    let Site;
    if(this.state.currentUser){
      Site = (
        <div>
        <Route exact path="/" render={() => (<LandingPage />)} />
        <Route path="/products/all" render={({ match }) => (
                <Products
                match={ match }
                viewAll={this.state.products}
                category={this.state.categories}
              />)}
            />
        </div>
      )
    } else {
      Site = ( <div className="App">
       Login:
        <Login onSubmit = {this.handleLogin} />
        Register:
        <Registration onSubmit = {this.handleRegister} />
        </div>
      )
    }
    return (
      <div className="App">
       {Site}
      </div>
    );
  }
}

export default App;
