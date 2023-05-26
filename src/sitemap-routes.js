
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
 
export default (
       <Router>
           <Routes>
                 <Route exact path='/'  />
                 <Route exact path='/policy' />
                 <Route exact path='/contact' />
                 <Route path='policy'  />
                 <Route path='contact' />
                 <Route path='*' />
          </Routes>
       </Router>
   );
