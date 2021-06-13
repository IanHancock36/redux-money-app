// this will house all the actions 
    // you can have multiple files for larger projects
        // this is a function that dispatches an action
            // takes in the parameter of ammount since it will be called in the front-end
                // create an action then dispatch it you need to return another function
                    // return another function with the dispatch parameter in it. 
                        // its an object thats basically dispatched.
                            // you dispatch a type which is an object with a type and a payload
        export const depositMoney = (amount) => {
            return (dispatch) => {
                dispatch({
                    type: 'deposit',
                    payload: 'amount'
                })
            }

        }
        export const withdrawMoney = (amount) => {
            return (dispatch) => {
                dispatch({
                    type:'withdraw',
                    payload:'amount'
                })
            }
        }


        // combine all reducers in here. 

