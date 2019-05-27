import {ADD_NEW_CITY,REMOVE_CITY} from '../constants';
import ls from 'local-storage';
const initialState = ls.get('citiesList') || [];
export default function citiesList(state = initialState, action) {
    let newState;
    switch (action.type){
        case ADD_NEW_CITY:
            let existElement = state.find(element => action.city.id === element.id);
            if(existElement !== undefined)newState  = [...state];
            else newState  = [...state,action.city];
            ls.set('citiesList',newState);

            return newState;
        case REMOVE_CITY:
            newState = state.filter(element => element.id!==action.id).map(element => {return element});
            ls.set('citiesList',newState);
            return newState
        default:
            return state;
    }
}