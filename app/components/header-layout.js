import React from 'react';

export class Header extends React.Component {

  render() {
    return (
      <div className="home-page">
        <h1>Age of Sixmar Ladder League</h1>
        <p>
         LADDER LEAGUE HOME PAGE !  ADD SOME FLASHY GRAPHICS AND AN INTRODUCTION
        </p>
      
          {this.props.children}

        
      </div>
    );
  }
};

export default Home;
