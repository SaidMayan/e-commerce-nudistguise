import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Registration from './components/Registration';
import Products from './components/products/products';
import Categories from './components/categories/categories';
import ProductsView from './components/products/productsView';
import { login, register, logout} from './services/apiService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
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

fetchCategories() {
  fetch('api/categories')
  .then(resp => {
    if(!resp.ok) throw new Error('There was an error. Take 5...');
  return resp.json()
  })
  .then(respBody => {
    this.setState({
      categories: respBody.data
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
  .then(user => {
    this.setState({currentUser: user})
    this.props.history.push('/')
  });
 }

handleRegister(creds) {
  register(creds)
  .then(user => {
    this.setState({currentUser: user})
    this.props.history.push('/')
  });
 }

componentDidMount() {
  this.checkToken();
  this.fetchProducts();
  this.fetchCategories();
}


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<LandingPage user={this.state.currentUser} logout={this.logOut} />)} />
        <Route path="/products" render={({ match }) => (
        <div>
        <LandingPage user={this.state.currentUser} logout={this.logOut} />
                <Products
                match={ match }
                viewAll={this.state.products}
                category={this.state.categories}
              /></div>)}
        />

        <Route path="/login" render={({ history }) => (
          <div>
          <LandingPage user={this.state.currentUser} logout={this.logOut} />
          <Login
            user={this.state.currentUser}
            history={history}
            onSubmit={this.handleLogin}
          /></div>)}
          />
        <Route path="/register" render={({ history }) => (
          <div>
          <LandingPage user={this.state.currentUser} logout={this.logOut} />
          <Registration
            history={history}
            onSubmit={this.handleRegister}
          /></div>)}
          />
        <Route exact path="/categories" render={() => (
          <div>
          <LandingPage user={this.state.currentUser} logout={this.logOut} />
          <Categories
            categories={this.state.categories}
          />
          </div>
          )}
        />
      </div>
    );
  }
}

export default App;
