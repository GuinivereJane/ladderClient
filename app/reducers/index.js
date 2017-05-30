import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player-reducer';
import shopReducer from './shop-reducer';
import gameReducer from './game-reducer';
import errorReducer from './error-reducer';
import searchReducer from './search-reducer';
import allianceReducer from './alliance-reducer';
import factionReducer from './faction-reducer';
import challengeReducer from './challenge-reducer';




// import widgetReducer from './widget-reducer';
// import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    playerState: playerReducer,
    shopState: shopReducer,
    gameState: gameReducer,
    errorState: errorReducer,
    searchState: searchReducer,
    factionState: factionReducer,
    allianceState: allianceReducer,
    challengeState: challengeReducer
});

export default reducers;
