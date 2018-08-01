import React, { Component } from 'react';

class Selector extends Component {
    
    renderOption = () => {
        
        const data = [{
            value: 'all',
            tag: 'All'
        }, {
            value: 100000,
            tag: '>= 100000'
        }, {
            value: 50000,
            tag: '>=50000'
        }];

        return (
            data.map(option => <option value={option.value}>{option.tag}</option>)
        )
    };

    render() {
        
        return (
            <div> 
                <select onChange={(event) => this.props.filter(event.target.value)}>
                    {this.renderOption()}
                </select>
            </div>
        );
    };
};

export default Selector;

