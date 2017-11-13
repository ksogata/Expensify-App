// Higher order component (HOC) - a component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract states

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// requireAuthentication
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are some details" />, document.getElementById('app'));
