 import { Component } from "react";

class ShoppingCart extends Component{
    constructor(){
        super()

        
    }

    render(){
        const {cartContents, subTotal, tax, totalPrice} = this.props

        return
            // <div id="shopping-cart-container">
            //     <h2>Shopping Cart</h2>
            //     <ul>
            //         <li>{cartContents}</li>
            //     </ul>
            //     <div><b>Subtotal:{subTotal} </b></div>
            //     <br/>
            //     <div><b>Tax:{tax}</b></div>
            //     <br/>
            //     <div><b>Total:{totalPrice} </b></div>
            // </div>
        
    }
}

