import React from 'react';

export class PlayerProfile extends React.Component {
  render() {

    return (<h1>Player Profile for userId: {this.props.profile.firstname} {this.props.profile.lastname}</h1>);
  }
};

export default PlayerProfile;