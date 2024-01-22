import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect, useHistory } from "react-router-dom";
import AuthLayout from './layouts/auth-layout';
import AppLayout from './layouts/app-layout';
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'react-circular-progressbar/dist/styles.css';
import 'react-easy-crop/react-easy-crop.css'
import './assets/scss/index.scss'
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from './configs/config'
import store from "./store"


// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function App() {
  return (
    <div className="co-mainwrap">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={AUTH_PREFIX_PATH} component={AuthLayout} />
            <Route path={APP_PREFIX_PATH} component={AppLayout} />    
            <Redirect from="/" to={AUTH_PREFIX_PATH} />   
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
