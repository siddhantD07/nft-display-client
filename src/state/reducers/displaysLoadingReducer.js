const reducer = (state = false, action) =>{
    switch (action.type) {
        case "changeDisplaysLoading":
            return action.payload;
        default: 
            return state;
    }
}

export default reducer;