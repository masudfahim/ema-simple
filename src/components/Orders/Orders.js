import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import ReviedItem from '../ReviewItem/ReviedItem';
import './Orders.css'

const Orders = () => {

    const [cart, setcart] = useCart();

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setcart(rest)
        removeFromDb(product._id)


    }
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviedItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}


                    ></ReviedItem>)
                }




            </div>
            <div className="cart-container">


                <Cart cart={cart}>

                    <Link to='/Shipment'>
                        <button>Proceed Shipment</button>
                    </Link>
                </Cart>


            </div>

        </div>
    );
};

export default Orders;