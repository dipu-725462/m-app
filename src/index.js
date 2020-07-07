import React from 'react';
import {registerRootComponent} from "expo";
import Feedback from './Components/Feedback';

function App () {
  return (
    <Feedback />
  );
}

export default registerRootComponent(App);
