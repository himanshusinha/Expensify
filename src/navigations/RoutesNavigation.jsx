import React from 'react';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const RoutesNavigation = () => {
  return <>{true ? <AppNavigation /> : <AuthNavigation />}</>;
};

export default RoutesNavigation;
