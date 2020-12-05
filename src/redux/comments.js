import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    let comment = action.payload;
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment); 
        default: 
            return state;
    }
};
