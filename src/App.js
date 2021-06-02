import React from "react"
import "./index.css"
import {Navbar} from './components/NavBar/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { ItemListContainer } from "./container/ItemListContainer";
import ItemDetailContainer from './container/ItemDetailContainer'
import Ofertas from "./components/ofertas/Ofertas";
import Cart from "./components/Cart/Cart";
import Signin from "./components/signin/Signin";
import Footer from "./components/Footer/Footer"
import Banner from "./components/banner/Banner";
import {CartProvider} from './Context/CartContext'
import PageError from "./components/pageNotFound/pageError";
import UserProvider from "./Context/UserProvider";
import ChekoutContainer from "./container/ChekoutContainer";
import Order from "./components/Order";

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
     <CartProvider>
      <Navbar />
      <Switch>
      <Route exact path='/category/:id'>
          <ItemListContainer />
      </Route>
      <Route exact  path='/item/:id'>
          <ItemDetailContainer /> 
        </Route>
        <Route exact path='/products'>
          <ItemListContainer /> 
        </Route>
        <Route exact path='/on-sale'>
          <Ofertas /> 
          <ItemListContainer /> 
        </Route>
        <Route exact path='/Cart'>
          <Cart /> 
        </Route>
        <Route exact path='/Checkout'>
          <ChekoutContainer /> 
        </Route>
        <Route exact path='/Order'>
          <Order /> 
        </Route>
        <Route exact path='/sign-up'>
          <Signin /> 
        </Route>
        <Route exact path='/'>
          <Banner />
          <ItemListContainer />   
         </Route>
         <Route>
           <PageError/>
         </Route>
         
      </Switch>
      <Footer />
      </CartProvider>
    </BrowserRouter>
    </UserProvider>
    
  );
}

export default App;
