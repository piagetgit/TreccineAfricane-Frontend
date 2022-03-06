import { Route, Switch } from 'react-router-dom';

import AllBraidPage from './pages/AllBraids';
import PopularBraids from './pages/PopularBraids';
import LatestBraids from './pages/LatestBraids';
import FAQ from './pages/FAQ';
import BOOKING from './pages/BOOKING'
import Layout from './components/layout/Layout';
import Details from './pages/Details';
import { DetailsContext } from './store/DetailsContext';
import { useState } from 'react';

function App() {
  const [braid, setBraid] = useState('hello');
  const [allBraids, setAllBraids] = useState([]);
  const [whatsAppMessage, setWhatsAppMessage] = useState("");

  return (
    <DetailsContext.Provider value={{ braid, setBraid, allBraids, setAllBraids, whatsAppMessage, setWhatsAppMessage }}>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllBraidPage />
          </Route>

          <Route path='/latest-braids' exact>
            <LatestBraids />
          </Route>

          <Route path='/popular-braids' exact>
            <PopularBraids />
          </Route>

          <Route path='/FAQ' exact>
            <FAQ />
          </Route>

          <Route path='/BOOKING' exact>
            <BOOKING />
          </Route>
          
          <Route path="/details">
            <Details />
          </Route>

        </Switch>
      </Layout>
    </DetailsContext.Provider>);
}


export default App;
