var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                  <li className="menu-text">React Timer</li>
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                </ul>
              </div>
              <div className="top-bar-right">
                <ul className="menu">
                  <li className="menu-text">Created by <a href="" target="_blank">Michael Claus</a></li>
                </ul>
              </div>
            </div>
            );
    }
});

module.exports = Nav;