import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
           
      
        <Switch>

            <Route exact path='/' component={App}></Route>
       
        </Switch>
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
