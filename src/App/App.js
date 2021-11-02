import React from "react";
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "../Login/Login";
import { useStateValue } from "../StateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    (!user ? (
      <Login />
    ) : (
      <Router>
        <div className="app">
          <div className="app__body">
            <Switch>
              <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
              <Route path="/">
                <Sidebar />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
    )
  );
}

export default App;
