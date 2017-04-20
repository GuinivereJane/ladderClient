import React from 'react';
import { Link } from 'react-router';


export class ShopList extends React.Component {
  render() {
    return (
      <ul className = "shop-list">
       {this.props.searchResults.map((shop)=>{
          return (
            <li key={shop.id}>
              <Link to={'/shops/' + shop.id}>{shop.name}</Link>
           </li>
           );
        })}
      </ul>
    );
  }
};

export default ShopList;
