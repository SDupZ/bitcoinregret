// Initial State
const initState = {
    initialInvestment: 100,
    amountToday: 1000
}

// Actions
const UPDATE_AMOUNT = 'value/UPDATE_AMOUNT'
// const UPDATE_INVEST_DATE = 'value/UPDATE_INVEST_DATE'


// Action Creators
export const updateAmount = (val) => ({type: UPDATE_AMOUNT, payload: val})
// export const updateInvestDate = (val) => ({type: UPDATE_INVEST_DATE, payload: val})


// Reducer
export default(state = initState, action) => {
    switch(action.type){
        case UPDATE_AMOUNT:
            const newAmount = action.payload * 10
            return {...state, initialInvestment: action.payload, amountToday: newAmount}
        default:
            return state;
    }
}