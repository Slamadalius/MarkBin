import React, { Component } from 'react';

import Accounts from './accounts';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">MarkBin</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
            <li>
              <a>Create Bin</a>
            </li>
          </ul>
          </div>
        </nav>
    );
  }
};

export default Header;
