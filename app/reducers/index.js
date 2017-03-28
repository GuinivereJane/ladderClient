import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player-reducer';
import shopReducer from './shop-reducer';

// import widgetReducer from './widget-reducer';
// import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    playerState: playerReducer,
    shopState: shopReducer,
    //widgetState: widgetReducer,
    //searchLayoutState: searchLayoutReducer
});

export default reducers;
