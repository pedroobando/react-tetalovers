import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ModalManager from '../common/modals/ModalManager';
import MenuBar from '../../features/nav/MenuBar';
import StartPage from '../../features/start/StartPage';
import Sandbox from '../../features/sandox/Sandbox';
import ErrorComponent from '../common/error/ErrorComponent';
// import ProductPage from '../../features/product/ProductPage';
import HomePage from '../../features/home/HomePage';
import BannerPage from '../../features/banner/BannerPage';
import BannerForm from '../../features/banner/BannerForm';

const App = () => {
  const { key } = useLocation();
  return (
    <>
      <ModalManager />
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route exact path="/" component={StartPage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <MenuBar />
            <section className="mt-10">
              <Route exact path="/home" component={HomePage} />

              <Route exact path="/sandbox" component={Sandbox} />
              <Route exact path="/admin/banner" component={BannerPage} />
              <Route path="/admin/banner/:id" component={BannerForm} key={key} />
              {/* <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} /> */}
              <Route path="/error" component={ErrorComponent} />
            </section>
          </>
        )}
      />
    </>
  );
};

export default App;
