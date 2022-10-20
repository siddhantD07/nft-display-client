const reducer = (state = false, action) =>{
    switch (action.type) {
        case "changeDisplayExists":
            return action.payload;
        default: 
            return state;
    }
}

export default reducer;