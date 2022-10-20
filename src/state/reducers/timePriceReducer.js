const reducer = (state = { time:0, price:0}, action) =>{
    switch (action.type) {
        case "changeTimePrice":
            let timePrice = {
                time: action.payload.time,
                price: action.payload.price
            }
            return timePrice;
        default: 
            return state;
    }
}

export default reducer;