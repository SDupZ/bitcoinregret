import {fetchPrice, fetchCurrentPrice} from '../lib/fetchingServices'
import {updateLoading} from './meta'
import moment from 'moment'

// Initial State
const initState = {
    initialInvestment: 10,
    amountToday: 0,
    currentExchangeRate: 0,
    exchangeRate: 0,
    timeValue: 1,
    timeUnit: 'day',
    percentageDifference: 0
}

// Actions
const UPDATE_AMOUNT = 'value/UPDATE_AMOUNT'
export const UPDATE_EXCHANGE_RATE = 'value/UPDATE_EXCHANGE_RATE'
const UPDATE_CURRENT_EXCHANGE_RATE = 'value/UPDATE_CURRENT_EXCHANGE_RATE'
const UPDATE_TIME_VALUE = 'value/UPDATE_TIME_VALUE'
const UPDATE_TIME_UNIT = 'value/UPDATE_TIME_UNIT'


// Action Creators
export const updateAmount = (val) => ({type: UPDATE_AMOUNT, payload: val})
export const updateExchangeRate = (val) => ({type: UPDATE_EXCHANGE_RATE, payload: val})
export const updateCurrentExchangeRate = (val) => ({type: UPDATE_CURRENT_EXCHANGE_RATE, payload: val})
export const updateTimeValue = (val) => ({type: UPDATE_TIME_VALUE, payload: val})
export const updateTimeUnit = (val) => ({type: UPDATE_TIME_UNIT, payload: val})



// Thunks
export const fetchCurrentExchangeRate = () => {
  return (dispatch) => {
    dispatch(updateLoading(true))
    fetchCurrentPrice()
        .then(res => {
            dispatch(updateExchangeRate(res.bpi.USD.rate_float))
            dispatch(updateCurrentExchangeRate(res.bpi.USD.rate_float))
        })
  }
}
export const timeValueUpdated = (val) => (dispatch, getState) => {
    dispatch(updateTimeValue(val))
    dispatch(updateLoading(true))
    fetchPrice(moment().add(-val, getState().value.timeUnit))
        .then(res => {
            dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
        })
}
export const timeUnitUpdated = (val) => (dispatch, getState) => {
    dispatch(updateTimeUnit(val))
    dispatch(updateLoading(true))
    fetchPrice(moment().add(-getState().value.timeValue, val))
        .then(res => {
            dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
        })
}



// Reducer
export default(state = initState, action) => {
    switch(action.type) {
        case UPDATE_AMOUNT: {
            const newAmount = (action.payload * (1 / state.exchangeRate) * state.currentExchangeRate).toFixed(2);
            const percentage = (((newAmount - action.payload) / action.payload) * 100).toFixed(2);
            console.log(newAmount);
            return {...state, initialInvestment: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_EXCHANGE_RATE: {
            const newAmount = (state.initialInvestment * (1 / action.payload) * state.currentExchangeRate).toFixed(2);
            const percentage = (((newAmount - state.initialInvestment) / state.initialInvestment) * 100).toFixed(2);
            return {...state, exchangeRate: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_CURRENT_EXCHANGE_RATE: {
            const newAmount = (state.initialInvestment * (1 / state.exchangeRate) * action.payload).toFixed(2);
            const percentage = (((newAmount - state.initialInvestment) / state.initialInvestment) * 100).toFixed(2);
            return {...state, currentExchangeRate: action.payload, amountToday: newAmount, percentageDifference: percentage}
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


