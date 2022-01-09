import { Route, Switch } from 'react-router-dom';

import AllBraidPage from './pages/AllBraids';
import PopularBraids from './pages/PopularBraids';
import LatestBraids from './pages/LatestBraids';
import Layout from './components/layout/Layout';
import Details from './pages/Details';
import { DetailsContext } from './store/DetailsContext';
import { useState } from 'react';

function App() {
  const [braid, setBraid] = useState('hello');
  const [allBraids, setAllBraids] = useState('hello');

  return (
    <DetailsContext.Provider value={{ braid, setBraid, allBraids, setAllBraids }}>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllBraidPage />
          </Route>

          <Route path='/latest-braids'>
            <LatestBraids />
          </Route>

          <Route path='/popular-braids'>
            <PopularBraids />
          </Route>


          <Route path='/details'>
            <Details />
          </Route>



        </Switch>
      </Layout>
    </DetailsContext.Provider>);
}


export default App;
