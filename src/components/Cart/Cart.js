import React from 'react';

const Cart = ({ cart }) => {
    // const { cart } = props;
    return (
        <div>
            <h3>this is order sumarry</h3>
            <p>Selected items:{cart.length}</p>

        </div>
    );
};

export default Cart;