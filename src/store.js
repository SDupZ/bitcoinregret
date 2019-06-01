import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import valueReducer from "./ducks/value";
import metaReducer from "./ducks/meta";

const reducer = combineReducers({
  value: valueReducer,
  meta: metaReducer
});

// const reducer = valueReducer;

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
