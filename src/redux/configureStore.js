import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = (action) => {
    const store = createStore(Reducer, initialState);
    return store;
};
