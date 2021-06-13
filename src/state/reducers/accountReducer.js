// simply a function that returns a state.... is a reducer 
    // reducer takes in two parameters initial state and action
        // reducers you usually use a switch statement
const reducer = (state = 0, action) => {
    switch(action.type){
        case'depost':
        return state + action.payload; 
        case "withdraw" : 
        return state - action.payload;
        default: 
        return state 

    }
}

export default reducer