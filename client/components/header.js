import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from './accounts';


class Header extends Component {
  handleClick(e) {
    e.preventDefault();

    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`)
    });
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">MarkBin</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
            <li>
              <a href="#" onClick={this.handleClick.bind(this)}>Create Bin</a>
            </li>
          </ul>
          </div>
        </nav>
    );
  }
};

export default Header;
