// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import bookingPage from './components/pages/bookingPage';
// import SignUp from './components/pages/SignUp';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/services' component={Services} />
//           <Route path='/bookingPage' component={bookingPage} />
//           <Route path='/sign-up' component={SignUp} />
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import bookingPage from './components/pages/bookingPage';
import SignUp from './components/pages/SignUp';
import Confirmation from './components/pages/Confirmation'; // Adjust the path as per your project structure

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/bookingPage' component={bookingPage} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/confirmation' component={Confirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
