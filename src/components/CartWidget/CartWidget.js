import React from 'react'
import cart from "./assets/cartwidget.svg"

const CartWidget = () => {
    return (
    <div>
        <img src={cart} alt="cart-widget" className='w-8'/>
        0
    </div>
    )
}

export default CartWidget