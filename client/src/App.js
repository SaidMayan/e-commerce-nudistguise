import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Registration from './components/Registration';
import Products from './components/products/products';
import ProductsView from './components/products/productsView';
import Categories from './components/categories/categories';
import { login, register, logout} from './services/apiService';
import Cart from './components/cart/cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      cart: [],
      total: 0,
      currentUser: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.logOut = this.logOut.bind(this);

  }

fetchProducts(){
  fetch('/api/products')
  .then(resp => {
    if(!resp.ok) throw new Error('Error: Take 5, you and your API client-side fetch call...');
  return resp.json()
  })
  .then(respBody => {
    this.setState({
      products: respBody.data
    })
  });
}

fetchCategories() {
  fetch('/api/categories')
  .then(resp => {
    // console.log(resp);
    if(!resp.ok) throw new Error('Error: Take 5, you and your API client-side fetch call...');
  return resp.json()
  })
  .then(respBody => {
    this.setState({
      categories: respBody.data
    })
  });
}

fetchCartItems() {
  fetch(`/api/cart/${this.state.currentUser.id}`)
  .then(resp => {
    if(!resp.ok) throw new Error('Error: client-side API fetch call...');
  return resp.json()
  })
  .then(data => {
    this.setState({
      cart: data.data
    })
  })
}

fetchOrderTotal() {
  fetch(`/api/cart/total/${this.state.currentUser.id}`)
  .then(resp => {
    if (!resp.ok) throw new Error('Error: client-side API fetch call...');
  return resp.json()
  })
  .then(data => {
    let sum = data.data[0].sum;
    if(sum === null) {
      sum = 0;
    }
    this.setState({
      total: sum
    })
  })
}

addToCart(info) {
  const options = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'content-type': 'application/json'
    }
  }
  fetch(`/api/cart/${this.state.currentUser.id}`, options)
  .then(resp => {
    console.log(resp);
    if (!resp.ok) throw new Error('Error: client-side API fetch call...');
  return resp.json()
  })
  .then(respBody => {
    this.updateCart();
  })
}

deleteFromCart(productId) {
  fetch(`/api/cart/${this.state.currentUser}/${productId}`, {
    method: 'Delete'
  })
  .then(resp => {
    if(!resp.ok) throw new Error('Error: client-side API fetch call...');
    return resp.json();
  })
  .then(respBody => {
    this.updateCart();
  })
}

editCart(info) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(info),
    headers: {
      'content-type': 'application/json'
    }
  }
  fetch(`/api/cart/${this.state.currentUser.id}/${info.product_id}`, options)

  .then(resp => {
    if(!resp.ok) throw new Error('Error: client-side API fetch call...');
    return resp.json();
  })
  .then(respBody => {
    this.updateCart();
  })
}

updateStockPostCheckout(product) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'applicaton/json'
    }
  }
  const userId = this.state.currentUser.id;
  const productId = product.product_id;
  fetch(`/api/cart/${userId}/update/${productId}`, options)
  .then(resp => {
    if(!resp.ok) throw new Error('Error: client-side API fetch call...');
    return resp.json();
  })
  .then(() => {
    this.deleteFromCart(product.id);
    this.fetchProducts();
  })
}

updateCart() {
  this.fetchCartItems();
  this.fetchOrderTotal();
}

handleSubmit(info) {
  this.addToCart(info);
}

handleDelete(id) {
  this.deleteFromCart(id);
}

handleEdit(info) {
  this.editCart(info);
}

handleUpdate(product) {
  this.updateStockPostCheckout(product);
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

selectCategory(category) {
  const index = this.state.categories.findIndex(perCategory => perCategory.category.toLocaleLowerCase() === category);
  return this.state.categories[index];
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
          </div>)}
        />
        <Route exact path="/categories/:id" render={({ match }) => (
          // console.log('checking', match.params.type)
          <div>
           <LandingPage user={this.state.currentUser} logout={this.logOut} />
          <Products
            match={ match }
            category={this.selectCategory(match.params.id)}
            products={this.state.products}
            view={this.singleView}
          /></div>)}
        />
        <Route path="/categories/:type/:id" render={({ match, history }) => (
          <div>
          <LandingPage user={this.state.currentUser} logout={this.logOut} />
          <ProductsView
            match={match}
            onSubmit={this.handleSubmit}
            history={history}
            user={this.state.user}
          /></div>)}
        />
        <Route path="/cart" render ={({ history }) => (
          <Cart
            cartItems={this.state.cart}
            total={this.state.total}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onUpdate={this.handleUpdate}
            history={history}
            user={this.props.currentUser}
          />
        )}
        />
      </div>
    );
  }
}

export default App;
