import {fetchPrice, fetchCurrentPrice} from '../lib/fetchingServices'
import { updateLoading, updateIsInvalidTime} from './meta'
import moment from 'moment'

// Initial State
const initState = {
    initialInvestment: 1000,
    amountToday: 7713.35,
    currentExchangeRate: 4386.3238,
    exchangeRate: 568.6663,
    timeValue: 1,
    timeUnit: 'day',
    percentageDifference: 671.34,
    pastDateInvested: moment(),
}

// Actions
const UPDATE_AMOUNT = 'value/UPDATE_AMOUNT'
export const UPDATE_EXCHANGE_RATE = 'value/UPDATE_EXCHANGE_RATE'
const UPDATE_CURRENT_EXCHANGE_RATE = 'value/UPDATE_CURRENT_EXCHANGE_RATE'
const UPDATE_TIME_VALUE = 'value/UPDATE_TIME_VALUE'
const UPDATE_TIME_UNIT = 'value/UPDATE_TIME_UNIT'
const UPDATE_DATETIME = 'value/UPDATE_DATETIME'

// Action Creators
export const updateAmount = (val) => ({type: UPDATE_AMOUNT, payload: val})
export const updateExchangeRate = (val) => ({type: UPDATE_EXCHANGE_RATE, payload: val})
export const updateCurrentExchangeRate = (val) => ({type: UPDATE_CURRENT_EXCHANGE_RATE, payload: val})
export const updateTimeValue = (val) => ({type: UPDATE_TIME_VALUE, payload: val})
export const updateTimeUnit = (val) => ({type: UPDATE_TIME_UNIT, payload: val})
export const updateDatetime = (val) => ({ type: UPDATE_DATETIME, payload: val })


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

    const dayDifference = moment().diff(moment("2010-07-17"), 'days');
    if (val < dayDifference) {
        dispatch(updateIsInvalidTime(false));
        dispatch(updateLoading(true))
        if (Number(val) === 0) {
            fetchCurrentPrice()
                .then(res => {
                    dispatch(updateExchangeRate(res.bpi.USD.rate_float))
                })
        } else {
            fetchPrice(moment().add(-val, getState().value.timeUnit))
                .then(res => {
                    dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
                })
        }
    } else {
        dispatch(updateIsInvalidTime(true));
    }
}
export const timeUnitUpdated = (val) => (dispatch, getState) => {
    dispatch(updateTimeUnit(val))
    dispatch(updateLoading(true))
    fetchPrice(moment().add(-getState().value.timeValue, val))
        .then(res => {
            dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
        })
}
export const datetimeUpdated = (val) => (dispatch, getState) => {
    dispatch(updateDatetime(val))
    dispatch(updateIsInvalidTime(false));
    dispatch(updateLoading(true))
    if (moment().diff(val, 'days') === 0){
        fetchCurrentPrice()
            .then(res => {
                dispatch(updateExchangeRate(res.bpi.USD.rate_float))
            })
    } else {
        fetchPrice(val)
            .then(res => {
                dispatch(updateExchangeRate(res.bpi[(Object.keys(res.bpi)[0])]))
            })
    }
}



// Reducer
export default(state = initState, action) => {
    switch(action.type) {
        case UPDATE_AMOUNT: {
            const newAmount = (action.payload * (1 / state.exchangeRate) * state.currentExchangeRate);
            const percentage = (((newAmount - action.payload) / action.payload) * 100);
            return {...state, initialInvestment: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_EXCHANGE_RATE: {
            const newAmount = (state.initialInvestment * (1 / action.payload) * state.currentExchangeRate);
            const percentage = (((newAmount - state.initialInvestment) / state.initialInvestment) * 100);
            return {...state, exchangeRate: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_CURRENT_EXCHANGE_RATE: {
            const newAmount = (state.initialInvestment * (1 / state.exchangeRate) * action.payload);
            const percentage = (((newAmount - state.initialInvestment) / state.initialInvestment) * 100);
            return {...state, currentExchangeRate: action.payload, amountToday: newAmount, percentageDifference: percentage}
        }
        case UPDATE_TIME_VALUE: {
            const newPastDate = moment().add(-action.payload, state.timeUnit)
            return { ...state, timeValue: action.payload, pastDateInvested: newPastDate}
        }
        case UPDATE_TIME_UNIT: {
            const newPastDate = moment().add(-state.timevalue, action.payload)
            return { ...state, timeUnit: action.payload, pastDateInvested: newPastDate}
        }
        case UPDATE_DATETIME: {
            const timeVal = moment().add(-state.timevalue, state.timeUnit).diff(action.payload, state.timeUnit);
            return { ...state, timeValue: timeVal, pastDateInvested: action.payload }
        }
        default: {
            return state;
        }
    }
}


