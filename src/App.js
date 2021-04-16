import React from 'react';
import Form from './components/form.js';
import getData from './components/getdata.js';

import {Provider} from "react-redux";
import store from './redux/Store.js';
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
  
    <Link style={{padding:'5px',fontSize:'25px',width:'200px'}}  className="btn btn-outline-primary" to="/database"> database</Link>
    <Link style={{padding:'5px',fontSize:'25px',width:'200px'}}  className="btn btn-outline-primary" to="/form"> Form </Link>


 <Switch>
       
       <Route exact path="/database" component={getData} />
       <Route exact path="/form" component={Form} />

       

       
       

       
      
   </Switch>



    </div>

    </Provider>
    </BrowserRouter>
  );
}

export default App;
