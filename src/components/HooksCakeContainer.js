import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function HooksCakeContainer() {
    //useSelector gives us access to our state
    const numOfCakes = useSelector(state => state.numOfCakes);

    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
