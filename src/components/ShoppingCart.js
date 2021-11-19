import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class ShoppingCart extends Component{
    constructor(props){
        super()

        
    }

    render(){
        const {cartConyents, subTotal, tax, totalPrice} = this.props

        return(
            <div id="shopping-cart-container">
                <h2>Shopping Cart</h2>
                <ul>
                    <li>shopping cart goes here</li>
                </ul>
                <div><b>Subtotal:{subTotal} </b></div>
                <br/>
                <div><b>Tax: </b></div>
                <br/>
                <div><b>Total: </b></div>
            </div>
        )
    }
}

export default ShoppingCart