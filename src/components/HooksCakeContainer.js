import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    //useSelector gives us access to our state
    const numOfCakes = useSelector(state => state.cake.numOfCakes);

    //access to dispatch
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
