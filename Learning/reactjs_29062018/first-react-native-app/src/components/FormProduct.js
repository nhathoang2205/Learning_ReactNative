import React, { Component } from 'react';
import Button from './Button.js';
import TextInput from './TextInput.js';

class FormProduct extends Component {
    
    constructor(props) {
    super(props)
    this.state = {
        ...this.props.editingProduct
    };
};

    changeText = (value, type) => {
        this.setState({ [type]: value })
    };

    renderInput = () => {

        const inputs = [{
            label: 'Name',
            value: this.state.name,
            onChangeText: (value) => this.changeText(value, 'name')
    }, {
            label: 'Price',
            value: this.state.price,
            onChangeText: (value) => this.changeText(value, 'price')
    }, {
            label: 'Rating',
            value: this.state.rating,
            onChangeText: (value) => this.changeText(value, 'rating')
    }];

    return (
        inputs.map(input => (
        <div key={input.label}>
            <span>{input.label}</span>
            <TextInput value={input.value} onChangeText={input.onChangeText}/>
        </div>
        ))
    );
    };

    render() {

        return (
        <div style={{marginTop: 100}}>
            <p>Open Form</p>
            {this.renderInput()}
            <Button nameBtn='Save' onClickBtn={() => this.props.saveProduct(this.state)} />
            <Button nameBtn='Back' onClickBtn={this.props.backProducts} />
        </div>
        );
    };
};

export default FormProduct;