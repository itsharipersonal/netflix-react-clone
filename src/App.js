// import React from 'react'
// import HomeScreen from './Components/HomeScreen/HomeScreen'
// import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// const App = () => {
//   return (
//     <div className='App'>
//       <HomeScreen />
//       <Router>
//         <Switch>
//           <Route path='/'>
//             <HomeScreen />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   )
// }

// export default App
import React from "react";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
