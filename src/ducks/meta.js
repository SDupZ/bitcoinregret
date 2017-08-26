import {UPDATE_EXCHANGE_RATE} from './value'

// Initial State
const initState = {
    loading: false
}


// Actions
const IS_LOADING = 'meta/IS_LOADING'


// Action Creators
export const updateLoading = (val) => ({type: IS_LOADING, payload: val})

// Reducer
export default(state = initState, action) => {
    switch(action.type) {
        case IS_LOADING: {
            return {...state, loading: action.payload}
        }
        case UPDATE_EXCHANGE_RATE:
            return {...state, loading: false}
        default: {
            return state;
        }
    }
}


