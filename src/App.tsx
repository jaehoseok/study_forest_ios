import React from 'react';
import {Navigator, Screen} from 'karrotframe'
import styled from '@emotion/styled'

import Home from './Components/Home'
import Detail from './Components/Detail'

const App: React.FC = () => {
  return (
    <Navigator theme='Cupertino'>
      <Screen path='/' component={Home} />
      <Screen path='/detail' component={Detail} />
    </Navigator>
  );
}

export default App;
