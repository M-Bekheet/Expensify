import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>{
  return (
    <div>
      <h1>Information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, earum.
      </p>
      </div>
  )
}

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponent/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    props.isAuthenticated ? <WrappedComponent {...props} /> : <h2>Please get authentication first.</h2>
  )
}

// const AdminDashboard = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminDashboard />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById('app'));