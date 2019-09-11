import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';

export default class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path="/cart" component={Cart} />
         <Route exact path="/details" component={Details} /> 
         <Route exact path="/" component={ProductList} />
         <Route exact component={Default} />
       </Switch>    
       <Modal />      
     </React.Fragment>
    )
  }
}
