import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import ReviedItem from '../ReviewItem/ReviedItem';
import './Orders.css'

const Orders = () => {
    const [products, setproducts] = useProducts();
    const [cart, setcart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setcart(rest)
        removeFromDb(product.id)


    }
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviedItem
                        key={product.id}
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