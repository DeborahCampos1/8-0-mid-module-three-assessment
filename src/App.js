import "./App.css";
import { Component } from "react";
import CheckoutForm from "./components/CheckoutForm";
import productData from "./data/productData"; 
import formatPrice from "./helpers/formatPrice";




class App extends Component{
  constructor(){
    super();

    this.state = {

      productName: "",
      productPrice: 0,
      productDescription: "",

      cartContents: [],
      subTotal: 0,
    }
    
  }

  handleAddToCart=(product)=>{

    const {cartContents, subTotal, productPrice} = this.state;
     this.setState({
      subTotal: subTotal + product.price,
      cartContents: [...cartContents, product],
      tax: (subTotal + productPrice) * .05,
      totalPrice: subTotal * 1.05
     })
  }
  render(){

    let productsToDisplay = productData.map((product)=>{
      return(
        <div key={product.id}>
          <div className="products-to-display">
            <h2>{product.name}</h2>
            <p>Price: {formatPrice(product.price)}</p>
            <img src={product.img} alt={product.name}></img>
            <p>{product.description}</p>
            <button type="submit" onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
          </div>
        </div>
      )
    })
    
    let tax = this.state.subTotal * .05;
    let totalPrice= this.state.subTotal * 1.05;

    let cart = this.state.cartContents.map((item)=>{
        return(
          <div>
            <li key={item.id}>{item.name}: {formatPrice(item.price)}</li>
          </div>
        )
    })

    return(
      <div id="app-container"> 
        <h1>Garage Sale Products</h1>
        <div className="products" >
          {productsToDisplay}
        </div>
        <div id="shopping-cart-container">
                <h2>Shopping Cart</h2>
                <ul>
                    {cart}
                </ul>
                <div><b>Subtotal: {formatPrice(this.state.subTotal)} </b></div>
                <br/>
                <div><b>Tax: {formatPrice(tax)}</b></div>
                <br/>
                <div><b>Total: {formatPrice(totalPrice)} </b></div>
            </div>
       
        <CheckoutForm />
       

      </div>
    )
  }
}

export default App;
