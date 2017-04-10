import React from 'react';
import { Link } from 'react-router';
import Header from './header-layout';

export class MainLayout extends React.Component {
  render(){
    return (
      <div className="app">
      <header className="primary-header">
        <Header/>
      </header>

        <aside className="primary-aside">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/players" activeClassName="active">Players</Link></li>
            <li><Link to="/shops" activeClassName="active">Shops</Link></li>
            <li><Link to="/games" activeClassName="active">Log a Game</Link></li>
          </ul>
        </aside>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
  test(){}
  burp(){}
}

export default MainLayout;
