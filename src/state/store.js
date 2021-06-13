import {createStore} from 'redux'
import reducers from './reducers/index'

export const store = createStore(
    reducers, 
    {}
)


// now time to access the data in every component in our application. 

