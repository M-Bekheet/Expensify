import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'react-redux';

export const PrivateRoute = ({ 
  isAuthenticated,
  component: Component,
  ...rest
 }) => (
  <Route {...rest} component={props => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props}/>
      </div>
    ) : (
      <div>
        <Redirect to="/"/>
      </div>
    )
  )} />
)


const mapStateToProps = (state) => {
  return{
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(PrivateRoute);
