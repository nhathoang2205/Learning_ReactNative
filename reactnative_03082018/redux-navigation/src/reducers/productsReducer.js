import { createActions, 
    createReducer 
} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    list: [],
    type: 'INITIAL_STATE'
})

export const { Types, Creators } = createActions({

    // Fetch products
    getListProducts: null,
    fetchProductsSuccessed: null,
    fetchProductsFailed: null,

    // add a product
    addProductRequested: ['product'],
    addProductSuccessed: null,
    addProductFailed: null,

    // delete a product
    deleteProductRequested: ['id'],
    deleteProductSuccessed: null,
    deleteProductFailed: null,

    // edit a product
    editProductRequested: ['product'],
    editProductSuccessed: null,
    editProductFailed: null,

})

// fetch
const getListProducts = (state, action) => {
    return state.merge({
        type: action.type  
    })
}
const fetchProductsSuccessed = (state, action) => {
    return state.merge({
        list: action.products,
        type: action.type 
    })
}

const fetchProductsFailed = (state, action) => {
    return state.merge({
        type: action.type,
        error: action.error 
    })
}

// add
const addProductRequested = (state, action) => {
    return state.merge({
        type: action.type  
    })
}

const addProductSuccessed = (state, action) => {
    return state.merge({
        list: [{
            id: new Date().valueOf(),
            name: action.name,
            type: action.type
            },
            ...state.list
        ],
        type: action.type  
    })
}

const addProductFailed = (state, action) => {
    return state.merge({
        type: action.type,
        error: action.error
    })
}

// delete
const deleteProductRequested = (state, action) => {
    return state.merge({
        type: action.type  
    })
}

const deleteProductSuccessed = (state, action) => {
    return state.merge({
        list: state.list.filter(product => product.id !== action.id),
        type: action.type  
    })
}

const deleteProductFailed = (state, action) => {
    return state.merge({
        type: action.type,
        error: action.error
    })
}

// edit
const editProductRequested = (state, action) => {
    return state.merge({
        type: action.type  
    })
}

const editProductSuccessed = (state, action) => {
    return state.merge({
        list: state.list.filter(product => product.id !== action.id),
        type: action.type  
    })
}

const editProductFailed = (state, action) => {
    return state.merge({
        type: action.type,
        error: action.error
    })
}


const HANDELER = {

    // Fetch
    [Types.GET_LIST_PRODUCTS]: getListProducts,
    [Types.FETCH_PRODUCTS_SUCCESSED]: fetchProductsSuccessed,
    [Types.FETCH_PRODUCTS_FAILED]: fetchProductsFailed,

    // Add
    [Types.ADD_PRODUCT_REQUESTED]: addProductRequested,
    [Types.ADD_PRODUCT_SUCCESSED]: addProductSuccessed,
    [Types.ADD_PRODUCT_FAILED]: addProductFailed,

    // Delete
    [Types.DELETE_PRODUCT_REQUESTED]: deleteProductRequested,
    [Types.DELETE_PRODUCT_SUCCESSED]: deleteProductSuccessed,
    [Types.DELETE_PRODUCT_FAILED]: deleteProductFailed,

    // Edit
    [Types.EDIT_PRODUCT_REQUESTED]: editProductRequested,
    [Types.EDIT_PRODUCT_SUCCESSED]: editProductSuccessed,
    [Types.EDIT_PRODUCT_FAILED]: editProductFailed,
}

const productsReducer = createReducer(INITIAL_STATE, HANDELER)

export default productsReducer