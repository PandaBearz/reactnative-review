import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [], comment: ""}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.ADD_COMMENT:
                return {...state, comment: {...action.payload, id: comments.length}}

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};