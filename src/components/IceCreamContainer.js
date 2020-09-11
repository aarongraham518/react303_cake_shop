import React from 'react'
import {connect} from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

//will act as our selector (react docs)
//Note, this is our state
/*
    state from our redux store is mapped to our component props
    so apart from any props this component was receiving, it will
    now recieve an additional prop called numOfIceCreams which reflects
    the number of cakes in the redux store
*/  
//note, our state.iceCream(from rootReducer).numOfIceCreams
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//note, this is our dispatch of our action creator
/*
    maps our dispatch of an action creator to a prop in 
    our component. So our component will receive a 2nd 
    additional prop called buyIceCream, that will dispatch
    the buyIceCream action. 
*/
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//connects this component to the redux store!!!
export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(IceCreamContainer);
