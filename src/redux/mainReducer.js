import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn43146571Reducer from '../features/SignIn43146571/redux/reducers'
import SignUp13146570Reducer from '../features/SignUp13146570/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn43146571: SignIn43146571Reducer,
SignUp13146570: SignUp13146570Reducer,

});