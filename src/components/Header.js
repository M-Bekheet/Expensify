import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create-expense" activeClassName="is-active" exact={true}>Create Expense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispathToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispathToProps)(Header);
