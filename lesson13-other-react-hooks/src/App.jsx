import { useState } from 'react';
import ClassComponent from './components/DemoClassComponent';
import DemoFCComponent from './components/DemoFCCompnent';

import './App.css';
import DemoUseRef from './components/DemoUseRef';
import DemoUseMemo from './components/DemoUseMemo';

function App() {
  return (
    <>
      {/* <ClassComponent />
      <DemoFCComponent /> */}
      {/* <DemoUseRef /> */}
      <DemoUseMemo />
    </>
  );
}

export default App;
