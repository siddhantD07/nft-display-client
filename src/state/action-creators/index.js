export const setAccount = (address) => {
    return (dispatch) => {
        dispatch({
            type: "changeAccount",
            payload: address
        })
    }
}

export const setNftData = (nftData) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeNftData",
            payload: nftData
        })
    }
}

export const setTimePrice = (timePrice) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeTimePrice",
            payload: timePrice
        })
    }
}

export const setProvider = (provider) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeProvider",
            payload: provider
        })
    }
}

export const setWeb3Instance = (web3Instance) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeWeb3Instance",
            payload: web3Instance
        })
    }
}

export const setChainId = (chainId) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeChainId",
            payload: chainId
        })
    }
}


export const setContract = (contract) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeContract",
            payload: contract
        })
    }
}

export const setDisplaysOwned = (displays) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeDisplaysOwned",
            payload: displays
        })
    }
}

export const setDisplaySelected = (display) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeDisplaySelected",
            payload: display
        })
    }
}

export const setDisplayView = (displayView) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeDisplayView",
            payload: displayView
        })
    }
}

export const setDisplayExists = (displayExists) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeDisplayExists",
            payload: displayExists
        })
    }
}

export const setDisplaysLoading = (displaysLoading) =>{
    return (dispatch) =>{
        dispatch({
            type: "changeDisplaysLoading",
            payload: displaysLoading
        })
    }
}
