import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayout from './components/layouts/search-layout';

// Pages
import PlayerListContainer from './components/containers/player-list-container';
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
          <IndexRoute component={PlayerListContainer} />
          <Route path="new" component = {NewPlayerContainer} />
          <Route path=":playerId" component={PlayerProfile} />
        </Route>

        <Route path="shops">
            <IndexRoute component={ShopListContainer} />
        </Route>
    </Route>
  </Router>
);
