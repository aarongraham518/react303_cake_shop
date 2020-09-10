import React from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

//will act as our selector (react docs)
//Note, this is our state
/*
    state from our redux store is mapped to our component props
    so apart from any props this component was receiving, it will
    now recieve an additional prop called numOfCakes which reflects
    the number of cakes in the redux store
*/  
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//note, this is our dispatch of our action creator
/*
    maps our dispatch of an action creator to a prop in 
    our component. So our component will receive a 2nd 
    additional prop called buyCake, that will dispatch
    the buyCake action. 
*/
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//connects this component to the redux store!!!
export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(CakeContainer);
