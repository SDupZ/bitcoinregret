import {fetchPrice} from '../lib/fetchingServices'
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
const UPDATE_EXCHANGE_RATE = 'value/UPDATE_EXCHANGE_RATE'
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
    fetchPrice(moment().add(-1, 'day'))
        .then(res => {
            dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
            dispatch(updateCurrentExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
        })
  }
}
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
            const newAmount = action.payload * (1 / state.exchangeRate) * state.currentExchangeRate
            const percentage = ((newAmount - action.payload) / action.payload) * 100
            return {...state, initialInvestment: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_EXCHANGE_RATE: {
            const newAmount = state.initialInvestment * (1 / action.payload) * state.currentExchangeRate
            const percentage = ((newAmount - state.initialInvestment) / state.initialInvestment) * 100
            return {...state, exchangeRate: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_CURRENT_EXCHANGE_RATE: {
            const newAmount = state.initialInvestment * (1 / state.exchangeRate) * action.payload
            const percentage = ((newAmount - state.initialInvestment) / state.initialInvestment) * 100
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


