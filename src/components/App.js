import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Practice from './Practice.jsx';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';

const Q_KEY = 'qState';
const App = () => {
  const appState = localStorage.getItem(Q_KEY);
  const initialState = appState ? JSON.parse(appState) : [];
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem(Q_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/practice" component={Practice} />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
