import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
