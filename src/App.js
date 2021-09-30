
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import chatBot from './components/first-screen';
import secondScreen from './components/second-screen';
import thirdScreen from './components/third-screen';
import formScreen from './components/form-screen';
import CalenderScreen from './components/calender-screen';
const App = () => {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={chatBot}
          />
           <Route
            path="/secondscreen"
            component={secondScreen}
          />
          <Route
            path="/thirdscreen"
            component={thirdScreen}
          />
           <Route
            path="/form"
            component={formScreen}
          />
           <Route
            path="/calender"
            component={CalenderScreen}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
