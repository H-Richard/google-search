import React, { ReactElement, useState, useCallback, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import SearchNav from './components/NavBar/NavBar';

const App: React.FC = (): ReactElement => {
  const [state, setState] = useState({
    search: !(window.location.pathname === '/'),
  });

  const search = useCallback(() => {
    setState(() => ({
      search: true,
    }));
  }, []);

  useEffect(() => {
    setTimeout(search, 2900);
  });

  if (!state.search) {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(): ReactElement => <Hero search={search} />}
        />
      </Switch>
    );
  }
  return (
    <div>
      <SearchNav />
    </div>
  );
};

export default App;
