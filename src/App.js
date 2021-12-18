import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Component/Header/Header';
import Footer from './Pages/Footer';
import Whatsapp from './Component/Whatsapp/Whatsapp';
import { Helmet } from 'react-helmet';
import Home from './Component/Home';
import Tourism from './Component/Tourism/Tourism';
import Gallery from './Component/Gallery/Gallery';
import Rooms from './Pages/Rooms';
import Account from './Component/Account/Account';
import Resto from './Pages/Resto';
import Hall from './Pages/Hall';
import Lawn from './Pages/Lawn';

 
function App() {
   
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>Om Executive</title>
          <meta name='description' content='best hotel in satara to make a buisness trip or vacation more relaxig & affordable'/>
          <meta name='keyword' content='hotels ,hotels near me ,holiday inn ,booking ,google hotels ,booking hotel ,comfort suites ,hotel rooms'/>
        </Helmet>
        <Header />
        <Whatsapp />
        <Route path='/' exact component={Home} />
        <Route path='/Tourism' exact component={Tourism} />
        <Route path='/Gallery' exact component={Gallery} />
        <Route path='/Rooms' exact component={Rooms} />
        <Route path='/Resto' exact component={Resto} />
        <Route path='/Hall' exact component={Hall} />
        <Route path='/Lawn' exact component={Lawn} />
        <Route path='/Account' exact component={Account} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
