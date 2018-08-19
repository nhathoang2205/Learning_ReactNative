// Library
import React, { Component } from 'react';

// Style
import './App.css';

// Components
import Header from './../components/Header.js';
import Intro from './../components/Intro.js';
import NumberHandling from './../components/NumberHandling.js';
import Selector from './../components/Selector.js';
import Form from './../components/Form.js';
import CountDown from './../components/CountDown.js';
import products from './../data/products.js'; 
import Products from './../components/Products.js';
import Rating from './../components/Rating.js';
import FormProduct from './../components/FormProduct.js';
import Button from './../components/Button.js';
import TextInput from './../components/TextInput.js';
import NumberInput from './../components/NumberInput.js';

// Stateful component: Có thao tác với this
class ProductHandling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: products,
            isOpenForm:false,
            editingProduct: {
                id: null,
                name: '',
                price: 0,
                rating: 0
            }
        };
    };

    filterProducts = (value) => {
        let filteredProducts = value === 'all' ? products : products.filter(pro => pro.price >= value);
        this.setState({ products: filteredProducts }); 
    };
    
    filterByName = (name) => {
        let filteredProducts = products.filter(product => product.name.includes(name));
        this.setState({ products: filteredProducts });   
    };
    
    handleForm = (isOpen) => {
        this.setState({ isOpenForm: isOpen })
    };
    
    saveProduct = (product) => {
        let products = this.state.products
        const index = products.findIndex(pro => pro.id === product.id)
        if(index >= 0) {
            products[index] = product
            this.setState({ products })
        }
        else {
            product.id = new Date().valueOf()
            this.setState(preState => ({
            products: [product, ...preState.products]
        }))
        };
        this.handleForm(false);
    };
    
    onClickEdit = (product) => {
        this.setState({editingProduct: product});
        this.handleForm(true);
    };

    render() {
        
        return (
            <div className="App">

            {/*Render header*/}
            {/* <Header name={this.state.value} job='Student' />
            <input
                value={this.state.value}
                onChange={this.onChange}
            />  */}
            <Header/>
            
            {/*Render intro*/}
            <Intro list='GMK Keysets & Artisan Keycaps' />

            {/*Render up down number*/}
            <NumberHandling />
            
            {/*Render from*/}
            <Form />

            {/*Render countdown*/}
            <CountDown />

            {/*Render Product*/}
            {
                this.state.isOpenForm ? 
                <FormProduct 
                    backProducts={() => this.handleForm(false)}
                    saveProduct={this.saveProduct}
                    editingProduct={this.state.editingProduct}
                /> :
                <div>

                    {/*Render text input filter*/}
                    <TextInput onChangeText={(name) => this.filterByName(name)}/>

                    {/*Render number input filter*/}
                    <NumberInput filterPrice={(value) => this.filterProducts(value)}/>

                    {/*Render selector filter*/}
                    <Selector filter={(value) => this.filterProducts(value)}/>

                    {/*Render product list*/}
                    <Products 
                        products={this.state.products}
                        onClickEdit={(product) => this.onClickEdit(product)}
                    />

                    {/*Render product rating*/}
                    <Rating />

                    {/*Render open form button*/}
                    <Button nameBtn='Import Products' onClickBtn={() => this.handleForm(true)} />

                </div>
            }
            </div>
        );
    };
};

export default ProductHandling;