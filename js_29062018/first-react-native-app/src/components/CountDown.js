import React, { Component } from 'react';

class CountDown extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            number: 3
        };
    };
    
    shouldComponentUpdate(nextProps, nextState) {
        this.downNumber();
        if(nextState.number === -1) {
            clearTimeout(this.timeout);  
            return false;
        }
        return true;
    };
    
    componentDidMount() {
        this.downNumber();
    };
    
    downNumber = () => {
        this.timeout = setTimeout(() => {
            this.setState(preState => ({
            number: preState.number - 1
            }));
        }, 1000);
    };
    
    onChange = (event) => {
        this.setState({value: event.target.value});
    };
    
    render() {

        return (
            <div className="App">
                <label>{this.state.number}</label>
            </div>
        );
    }
};
    
export default CountDown;
