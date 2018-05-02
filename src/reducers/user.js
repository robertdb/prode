import * as types from '../actions/types';

const initialState = {
    token: '',
    favoritos: [],
    profile:{}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.SET_TOKEN:
            return { ...state, token : action.payload }

        case types.SET_FAVORITES:
            return { ...state, favoritos : action.payload }

        case types.SET_USER_PROFILE:
            return { ...state, profile : action.payload }

        default: return state;
    }
};
