import {createStore ,applyMiddleware} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

export const store = createStore(
    reducers, 
    {},
    applyMiddleware(thunk)
)


// now time to access the data in every component in our application. 

