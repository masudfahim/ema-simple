import React, { useEffect, useState } from 'react';
import Product from '../components/product/Product';
import { getStoredCArt } from '../utilities/fakedb';

const useCart = (products) => {

    const [cart, setcart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCArt();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setcart(savedCart);

    }, [products])
    return [cart, setcart];


};

export default useCart;

