const reducer = (state = false, action) =>{
    switch (action.type) {
        case "changeDisplayView":
            return action.payload;
        default: 
            return state;
    }
}

export default reducer;