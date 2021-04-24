import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'semantic-ui-react';

import ModalManager from '../common/modals/ModalManager';
import MenuBar from '../../features/nav/MenuBar';
import StartPage from '../../features/start/StartPage';
import Sandbox from '../../features/sandox/Sandbox';
import ErrorComponent from '../common/error/ErrorComponent';
// import ProductPage from '../../features/product/ProductPage';
import HomePage from '../../features/home/HomePage';
import BannerPage from '../../features/admin/banner/BannerPage';

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
              <div as="section" className="mt-5">
                <Route exact path="/sandbox" component={Sandbox} />
                <Route exact path="/admin/banner" component={BannerPage} />
                {/* <Route path="/events/:id" component={EventDetailedPage} /> */}
                {/* <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} /> */}
              </div>
              <Route path="/error" component={ErrorComponent} />
            </section>
          </>
        )}
      />
    </>
  );
};

export default App;
