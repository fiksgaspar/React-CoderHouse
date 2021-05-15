import React from "react"
import "./index.css"
import {Navbar} from './components/NavBar/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { ItemListContainer } from "./container/ItemListContainer";
import ItemDetailContainer from './container/ItemDetailContainer'
import Ofertas from "./components/Ofertas";
import Cart from "./components/Cart/Cart";
import Signin from "./components/Signin";
import Footer from "./components/Footer/Footer"
import Banner from "./components/banner/Banner";
import {CartProvider} from './Context/CartContext'

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Navbar />
      <Switch>
      <Route exact path='/category/:id'>
          <ItemListContainer />
      </Route>
      <Route  path='/item/:id'>
          <ItemDetailContainer /> 
        </Route>
        <Route exact path='/products'>
          <Ofertas /> 
        </Route>
        <Route exact path='/on-sale'>
          <Ofertas /> 
        </Route>
        <Route exact path='/Cart'>
          <Cart /> 
        </Route>
        <Route exact path='/Sign-up'>
          <Signin /> 
        </Route>
        <Route path='/'>
          <Banner />
          <ItemListContainer />   
         </Route>
         
      </Switch>
      <Footer />
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
