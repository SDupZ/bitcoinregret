import {UPDATE_EXCHANGE_RATE} from './value'

// Initial State
const initState = {
    loading: false
}


// Actions
const IS_LOADING = 'meta/IS_LOADING'
const IS_INVALID_TIME = 'meta/IS_INVALID_TIME'

// Action Creators
export const updateLoading = (val) => ({type: IS_LOADING, payload: val})
export const updateIsInvalidTime = (val) => ({ type: IS_INVALID_TIME, payload: val })

// Reducer
export default(state = initState, action) => {
    switch(action.type) {
        case IS_LOADING: {
            return {...state, loading: action.payload}
        }
        case IS_INVALID_TIME: {
            return { ...state, invalidTime: action.payload }
        }
        case UPDATE_EXCHANGE_RATE:
            return {...state, loading: false}
        default: {
            return state;
        }
    }
}


