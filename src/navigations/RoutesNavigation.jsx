import React from 'react';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const RoutesNavigation = () => {
  return <>{false ? <AppNavigation /> : <AuthNavigation />}</>;
};

export default RoutesNavigation;
