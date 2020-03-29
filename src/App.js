import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'
import Header from './components/header/header.component.jsx';

import { auth } from './firebase/firebase.util.js';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser : null
    }

  }

  unSubscribeFromAuth = null

  componentDidMount(){
     this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
        this.setState({ currentUser:user });

        console.log(user);
     })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
  
        
        </Switch>
      </div>
    );
  }

}

export default App;
