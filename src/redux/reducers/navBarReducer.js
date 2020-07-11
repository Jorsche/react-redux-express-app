import {TOGGLE_NAVBAR} from '../actions'

const initialState={
    navBar: "home"
}

const navBarReducer = (state = initialState, action)=> {
    switch (action.type) {
        case TOGGLE_NAVBAR:
            return {
                ...state,
                navBar: action.navBarString
            };

        default:
            return state;
    }
}

export default navBarReducer


