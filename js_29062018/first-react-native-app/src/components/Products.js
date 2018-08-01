import React from 'react';
import Button from './Button.js';
import Rating from './Rating.js'

// Stateless component
const Products = (props) => {

    const renderProducts = () => (
        props.products.map(product => (
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p style={{color: 'red'}}>{product.price} $</p>
            <Rating point={product.rating} />
            <Button
                nameBtn='Edit'
                onClickBtn={() => props.onClickEdit(product)}
            />
        </div>
        ))
    );
    
    return (

        <div className="App">
            {renderProducts()}
        </div>
    );
};

export default Products;