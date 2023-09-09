import React from 'react';
import ReactDOM from 'react-dom/client';
import {StyleRoot} from 'radium';
import JSXRule from './JSXRule';
import JSXEventOperations from './JSXEventOperations';
import DataLoop from './DataLoop';
import StyleProcessing from './StyleProcessing';
// import './style1.css' // StyleProcessing中使用的外部模块
import ComponentCreation from './ComponentCreation';
import ComponentLayout from './ComponentLayout';
// import './style2.css' // ComponentLayout中使用的外部模块
import ComponentStatus from './ComponentStatus';
import UnidirectionalDataFlow from './UnidirectionalDataFlow';
import ControlledForms from './ControlledForms';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <JSXRule />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <JSXEventOperations />
  </React.StrictMode>
);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
    <DataLoop />
  </React.StrictMode>
);

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  <React.StrictMode>
    <StyleRoot><StyleProcessing /></StyleRoot>
  </React.StrictMode>
);

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(
  <React.StrictMode>
    <StyleRoot><ComponentCreation /></StyleRoot>
  </React.StrictMode>
);

const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(
  <React.StrictMode>
    <StyleRoot><ComponentLayout /></StyleRoot>
  </React.StrictMode>
);

const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(
  <React.StrictMode>
    <StyleRoot><ComponentStatus /></StyleRoot>
  </React.StrictMode>
);

const root8 = ReactDOM.createRoot(document.getElementById('root8'));
root8.render(
  <React.StrictMode>
    <StyleRoot><UnidirectionalDataFlow /></StyleRoot>
  </React.StrictMode>
);

const root9 = ReactDOM.createRoot(document.getElementById('root9'));
root9.render(
  <React.StrictMode>
    <StyleRoot><ControlledForms /></StyleRoot>
  </React.StrictMode>
);