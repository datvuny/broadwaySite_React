
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Policy from './components/policy'
import Contact from './components/contact';

  
class App extends Component {
  render() {
    return (
       <Router>
           <div>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/policy' element={< Policy />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route path='policy' element={< Policy />}></Route>
                 <Route path='contact' element={< Contact />}></Route>
                 <Route path='*' element={< Home />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}

export default App;