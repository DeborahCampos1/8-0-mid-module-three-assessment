import { Component } from "react";

class CheckoutForm extends Component{
    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: ""
        }
    }

    render(){
        return(
            <div id="checkout-form-container">
                <h2>Checkout</h2>
                <form id="checkout" onSubmit ="this will be replaced with a method from App.js">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        // onInput={}
                        value={this.state.firstName}
                        type="text"
                        name="firstName"
                        id="fitst-name"
                    />
                    <br/>
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        // onInput={}
                        value={this.state.lastName}
                        type="text"
                        name="lastName"
                        id="last-name"
                    />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input
                        // onInput={}
                        value={this.state.email}
                        type="email"
                        name="email"
                        id="email"
                    />
                    <br/>
                    <label htmlFor="credit-card">Credit Card</label>
                    <input
                        // onInput={}
                        value={this.state.creditCard}
                        type="number"
                        name="creditCard"
                        id="credit-card"
                    />
                    <br/>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input
                        // onInput={}
                        value={this.state.zipCode}
                        type="number"
                        name="zipCode"
                        id="zip-code"
                    />
                    <br/>
                    <button type="submit">Buy Now</button>
                </form>
            </div>
        )
    }
}

export default CheckoutForm
