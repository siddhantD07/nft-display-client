import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import nftDataReducer from "./nftDataReducer";
import timePriceReducer from "./timePriceReducer";
import providerReducer from "./providerReducer";
import web3InstanceReducer from "./web3InstanceReducer";
import chainIdReducer from "./chainIdReducer";
import contractReducer from "./contractReducer";
import displaysOwnedReducer from "./displaysOwnedReducer";
import displaySelectedReducer from "./displaySelectedReducer";
import displayViewReducer from "./displayViewReducer";
import displayExistsReducer from "./displayExistsReducer";
import displaysLoadingReducer from "./displaysLoadingReducer";

const reducers = combineReducers({
    account: accountReducer,
    nftData: nftDataReducer,
    timePrice: timePriceReducer,
    provider: providerReducer,
    web3Instance: web3InstanceReducer,
    chainId: chainIdReducer,
    contract: contractReducer,
    displaysOwned: displaysOwnedReducer,
    displaySelected: displaySelectedReducer,
    displayView: displayViewReducer,
    displayExists: displayExistsReducer,
    displaysLoading: displaysLoadingReducer
});

export default reducers;