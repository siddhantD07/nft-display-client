const reducer = (state = "", action) =>{
    switch (action.type) {
        case "changeDisplaySelected":
            return action.payload;
        default: 
            return state;
    }
}

export default reducer;