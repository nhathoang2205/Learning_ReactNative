const initialState = {

    list: [{
        id: 0,
        name: 'Alphakeys Cherep Troublemind',
        price: 950000,
        rating: 4
    }, {
        id: 1,
        name: 'Simulacra_caps IronHeart Geekrilla',
        price: 900000,
        rating: 3
    }, {
        id: 2,
        name: 'Jellykey JellyPunda Jelly Bunny',
        price: 850000,
        rating: 4
    }, {
        id: 3,
        name: 'Jellykey Overseer Guardians of the East',
        price: 1050000,
        rating: 5
    }, {
        id: 4,
        name: 'Artkey Miam Bearlot',
        price: 650000,
        rating: 3
    }, {
        id: 5,
        name: 'Alphakeys Fire Nation Ablison',
        price: 800000,
        rating: 4
    }]
};

const productsReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case 'DELETE_PRODUCT':
            return {
                ...state,
                list: state.list.filter(product => product.id !== action.id)
            };

        case 'EDIT_PRODUCT':
            return {
                ...state,
                list: state.list.map(product => product.id === action.product.id ? action.product : product)
            };

        case 'ON_RATING': 
            return {
                ...state,
                list: state.list.map(product => product.id === action.id ? 
                    {
                        ...product,
                        rating: action.point
                    } : 
                    product
                )
            };

        default:
            return state;
    };
};

export default productsReducer;

