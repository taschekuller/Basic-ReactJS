import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment> 
                                    <Title name="Your" title="Cart" />
                                    <CartColumns />
                                </React.Fragment>
                            ); /* React.Fragmen is necessery to fit these two items */
                        }         
                        else {
                            return(
                                <EmptyCart />
                            )
                        }                       
                    }}
                </ProductConsumer>
                
            </section>
        )
    }
}
