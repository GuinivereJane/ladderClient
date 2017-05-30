  import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayout from './components/layouts/search-layout';

// Pages
import PlayerListContainer from './components/containers/player-list-container';
import PlayerProfileContainer from './components/containers/player-profile-container';
import ShopProfileContainer from './components/containers/shop-profile-container';
import NewGameContainer from './components/containers/new-game-container';
import LoginFormContainer from './components/containers/login-form-container';


import ChallengeAcceptContainer from './components/containers/challenge-accept-container';
import ChallengeLogContainer from './components/containers/challenge-log-container';
import PlayerChallengesContainer from './components/containers/player-challenge-container';

import PlayerProfile from './components/views/player-profile';
import ShopListContainer from './components/containers/shop-list-container';
import ShopList from './components/views/shop-list';
import NewPlayerContainer from './components/containers/new-player-container';

import PlayerList from './components/views/player-list';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" />
        
        <Route path="players">
          <Route component={SearchLayout} searchType={"players"}>
           <IndexRoute component={PlayerListContainer} />
          </Route>
          <Route path="new" component = {NewPlayerContainer} />
          <Route path=":playerId//challenges" component={PlayerChallengesContainer}/>

          <Route path=":playerId" component={PlayerProfileContainer}>
          </Route>
        </Route>
        
        <Route path="login">
          <IndexRoute component={LoginFormContainer}/>
        </Route>
        
        <Route path="challenge">
          <Route path=":challengeId">
            <Route path="log" component={ChallengeLogContainer}/>
            <Route path="accept" component={ChallengeAcceptContainer}/>
          </Route>
        </Route>

        <Route path="shops">
            <Route component={SearchLayout} searchType={"shops"}>
              <IndexRoute component={ShopListContainer} />
            </Route>

            <Route path=":shopId" component={ShopProfileContainer} />
        </Route>

        <Route path="games">
          <IndexRoute component={NewGameContainer} />
        </Route>

    </Route>
  </Router>
);
