import React, { Component } from 'react';

const VALUE_CONVERT = 20000;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vnd: '',
            usd: ''
        };
    };

    vnd = 0;
    usd = 0;
    
    onChangeText = (event, currency) => {
        const input = event.target.value;
        const currencyConverted = currency === 'vnd' ? 'usd' : 'vnd';
        const result = currency === 'vnd' ? input / VALUE_CONVERT : input * VALUE_CONVERT;

        this.setState({
            [currency]: event.target.value,
            [currencyConverted]: result
        });
    };

    convert = () => {
        this.usd.value =  this.vnd.value / VALUE_CONVERT;
    };
    
    render () {
        return (
            <div style={{marginTop: 20}}>
            
            <div>
                {/*Uncontrol component*/}
                <input 
                    type="text"
                    defaultValue={10}
                    ref={(event) => this.vnd = event}
                />
                <span>VND</span>
                <button type='button' onClick={this.convert}>Convert</button>
            </div>

            <div>
                {/*Control component*/}
                {/* <input 
                    type="text"
                    value={this.state.usd}
                    onChange={(event) => this.onChangeText(event, 'usd')}
                /> */}

                {/*Uncontrol component*/}
                <input
                    type="text"
                    defaultValue={10}
                    ref={(event) => this.usd = event}
                />
                <span>USD</span>
            </div>
            </div>
        );
    };
};

export default Form;