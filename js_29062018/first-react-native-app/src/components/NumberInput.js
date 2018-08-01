import React from 'react';

const NumberInput = (props) => {

    return (
        <input
            type='number'
            onChange={(event) => props.filterPrice(event.target.value)}
        />
    );
};

export default NumberInput;