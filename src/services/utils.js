export const formatPrice = (x, currency) => {
    switch (currency) {
        case '$':
            return x.toFixed(2).replace('.', ',');
        default:
            return x.toFixed(2);
    }
};

// export const productsAPI = 'https://react-shopping-cart-67954.firebaseio.com/products.json';