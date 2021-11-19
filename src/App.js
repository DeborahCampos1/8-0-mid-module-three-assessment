import "./App.css";
import { Component } from "react";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";




class App extends Component{
  constructor(){
    super();

    
  }
  render(){
    return(
      <div id="app-container"> 
        <Products />
        <ShoppingCart />
        <CheckoutForm />

      </div>
    )
  }
}

export default App;
