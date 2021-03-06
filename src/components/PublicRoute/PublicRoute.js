// React imports
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Redux imports
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

// Helpers imports
import PropTypes from 'prop-types';

export default function PublicRoute({ redirectTo, children, ...routeProps }) {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}

PublicRoute.defaultProps = {
  restricted: true,
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.node,
  routeProps: PropTypes.shape({
    path: PropTypes.string.isRequired,
    restricted: PropTypes.bool,
  }),
};