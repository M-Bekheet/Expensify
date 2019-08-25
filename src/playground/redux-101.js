/*
  Summary:
    
    - Store >> it's the container of all different states of components (think of it as the state variable in react of the top parent component)
    
    - createStore & subscribe takes a function as a parameter and returns a value
    
    - Action >> it's an object contains data to change the store states
      Action must contain 'type' property
      It can also have other properties

*/

import { createStore } from 'redux'; 


/*
  Reducer: It's the function that specifies how the app's states change depending on the actions
    - Reducer should be a pure function >> means that it doesn't affect other stuff such as variables out of its scope
*/

const countReducer = (state = { count: 0 }, action) => {

  //making dynamic changes depending on the action
  switch (action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }

    case 'RESET': return { count: 0 }

    case 'SET': return { count: action.count }

    default: return state
  }

  // return state;

}


// store( stateObj, action )
const store = createStore( countReducer );


//subscribe: watching changes in the store. 
const unsubscribe = store.subscribe( () => console.log(store.getState() ) )


const incrementCount = ( { incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = ( ) => ({
  type: 'RESET'
})

const setCount = ( { count = 100 } = {} ) => ({
  type: 'SET',
  count
})

//store.dispatch(action) >> here we send an action to the store so we can make changes in the store states
store.dispatch( incrementCount() );

store.dispatch( incrementCount( { incrementBy: 5 } ) );

store.dispatch( decrementCount({ decrementBy: 3 }) )

store.dispatch( resetCount() )

store.dispatch( setCount( { count: 300 } ) )

unsubscribe(); // to unsubscribe listening to changes we just needed to call the unsubscribe function we declared above