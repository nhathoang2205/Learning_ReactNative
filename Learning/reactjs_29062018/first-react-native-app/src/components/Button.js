import React from 'react';

const Button = (props) => {
    
    return(
        <button onClick={props.onClickBtn}>{props.nameBtn}</button>
    );
};

export default Button;