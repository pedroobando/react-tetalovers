import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ModalManager from '../common/modals/ModalManager';
import MenuBar from '../../features/nav/MenuBar';
import StartPage from '../../features/start/StartPage';
import Sandbox from '../../features/sandox/Sandbox';
import ErrorComponent from '../common/error/ErrorComponent';
import ProductPage from '../../features/product/ProductPage';

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
              <Route exact path="/product" component={ProductPage} />
              <Route exact path="/sandbox" component={Sandbox} />
              {/* <Route path="/events/:id" component={EventDetailedPage} /> */}
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
