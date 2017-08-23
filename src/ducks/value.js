import {fetchPrice} from '../lib/fetchingServices'
import moment from 'moment'

// Initial State
const initState = {
    initialInvestment: 1,
    amountToday: 1000,
    exchangeRate: 10,
    timeValue: 10,
    timeUnit: 'day'
}

// Actions
const UPDATE_AMOUNT = 'value/UPDATE_AMOUNT'
const UPDATE_EXCHANGE_RATE = 'value/UPDATE_EXCHANGE_RATE'
const UPDATE_TIME_VALUE = 'value/UPDATE_TIME_VALUE'
const UPDATE_TIME_UNIT = 'value/UPDATE_TIME_UNIT'


// Action Creators
export const updateAmount = (val) => ({type: UPDATE_AMOUNT, payload: val})
export const updateExchangeRate = (val) => ({type: UPDATE_EXCHANGE_RATE, payload: val})
export const updateTimeValue = (val) => ({type: UPDATE_TIME_VALUE, payload: val})
export const updateTimeUnit = (val) => ({type: UPDATE_TIME_UNIT, payload: val})


// Thunks
export const timeValueUpdated = (val) => (dispatch, getState) => {
    dispatch(updateTimeValue(val))
    fetchPrice(moment().add(-val, getState().timeUnit))
        .then(res => {
            dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
        })
}
export const timeUnitUpdated = (val) => (dispatch, getState) => {
    dispatch(updateTimeUnit(val))
    fetchPrice(moment().add(-getState().timeValue, val))
        .then(res => {
            dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
        })
}



// Reducer
export default(state = initState, action) => {
    switch(action.type) {
        case UPDATE_AMOUNT: {
            const newAmount = action.payload * state.exchangeRate
            return {...state, initialInvestment: action.payload, amountToday: newAmount}
        }
        case UPDATE_EXCHANGE_RATE: {
            const newAmount = state.initialInvestment * action.payload
            return {...state, exchangeRate: action.payload, amountToday: newAmount}
        }
        case UPDATE_TIME_VALUE: {
            return {...state, timeValue: action.payload}
        }
        case UPDATE_TIME_UNIT: {
            return {...state, timeUnit: action.payload}
        }
        default: {
            return state;
        }
    }
}


