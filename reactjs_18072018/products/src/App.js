// Library
import React, { Component } from 'react';

// Style
import './App.css';

// Developers Information
import Header from './Customization/Header';
import Footer from './Customization/Footer';

// Components
import ListProductsContainer from './screens/listProducts/containers/ListProductsContainer.js'
import FormContainer from './screens/formProducts/containers/FormContainer.js'

class App extends Component {

    state = {

        isOpenForm: false
    }
    
    render() {
        
        return (
    
            <div className="App">

                {/* Render Developer Customization - Header */}
                <Header  />
                
                {/*Render Product*/}
                <FormContainer />
                <ListProductsContainer />

                {/*Render Developer Customization - Footer*/}
                <Footer />

            </div>
        );
    };
}

export default App;
