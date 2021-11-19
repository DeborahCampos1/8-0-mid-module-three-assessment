import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class ShoppingCart extends Component{
    constructor(){
        super()

        this.state ={

            cartContents: [],

            subTotal: 0,
            tax: 0,
            totalPrice: 0,
      
        }

    }

    render(){
        return(
            <div id="shopping-cart-container">
                <h2>Shopping Cart</h2>
                <ul>
                    <li>shopping cart goes here</li>
                </ul>
                <div><b>Subtotal: {formatPrice(this.state.subTotal)}</b></div>
                <br/>
                <div><b>Tax: {formatPrice(this.state.tax)}</b></div>
                <br/>
                <div><b>Total: {formatPrice(this.state.totalPrice)}</b></div>
            </div>
        )
    }
}

export default ShoppingCart