import React from 'react';
import {registerRootComponent} from "expo";
import Feedback from './modules/Feedback/Components/index';
import Navigation from './Navigation';

function App () {
  return (
   <Navigation />
  );
}

export default registerRootComponent(App);
