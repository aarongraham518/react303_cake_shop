import {BUY_CREAM} from './iceCreamTypes';

const intialState = {
    numOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default:
            return state;
    }

    export default iceCreamReducer;
}