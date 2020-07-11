import React, { ReactElement, useState, useCallback, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Hero from './pages/Hero/Hero';
import SearchNav from './components/NavBar/NavBar';
import All from './pages/All/All';
import Footer from './components/Footer/Footer';
import Images from './pages/Images/Images';
import Videos from './pages/Videos/Videos';

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
    <div className="main-container">
      <SearchNav />
      <Switch>
        <Route path="/" exact component={All} />
        <Route path="/images" exact component={Images} />
        <Route path="/videos" exact component={Videos} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
