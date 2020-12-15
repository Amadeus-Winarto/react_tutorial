import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload, comments: []};
        case ActionTypes.ADD_COMMENT:
            action.payload.id = state.comments.length; 
            action.payload.date = new Date().toISOString();
            return {...state, isLoading: false, comments: state.concat(action.payload)};

        default: 
            return state;
    }
};