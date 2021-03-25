import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import Header from './compomnent/header/header.jsx';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuthauth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }
  
  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/signin' component={SignInAndSignUp}/>
          <Route  path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
