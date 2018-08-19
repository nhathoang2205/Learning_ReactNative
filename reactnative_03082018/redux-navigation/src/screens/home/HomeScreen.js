import React, { Component } from 'react';
import { View, 
    Text, 
    Button 
} from 'react-native';

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.props.getListProducts()
    }

    componentWillReceiveProps(nextProps) {

        switch (nextProps.type) {
            
            case 'GET_LIST_PRODUCTS':
                this.setState({isLoading: true})
                break;

            case 'FETCH_PRODUCTS_SUCCESSED':
            
            case 'FETCH_PRODUCTS_FAILED':
                this.setState({isLoading: false})
                break
            
            default:
                break;
        }
    }

    renderListProduct = (list, onDeleteProduct) => (
        list.map(product => (
            <View key={product.id}>
                <Text>{product.name}</Text>
                <Button 
                    title='Delete'
                    onPress={() => onDeleteProduct(product.id)}
                />
            </View>
        ))
    )

    render () {

        return (
            <View>
                <Button
                    title='get products'
                    onPress={() => this.props.getListProducts()}
                />
                {
                    this.state.isLoading ?
                        <Text>Loading</Text> :
                        <View>
                            {this.renderListProduct(this.props.list, this.props.deleteProductRequested)}
                        </View>
                }
            </View>
        )
    }
}

export default HomeScreen;