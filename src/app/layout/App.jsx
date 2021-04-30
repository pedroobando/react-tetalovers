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

import BannerPage from '../../features/banner/admin/BannerPage';
import BannerForm from '../../features/banner/admin/BannerForm';

import CategoryPage from '../../features/category/admin/CategoryPage';
import CategoryForm from '../../features/category/admin/CategoryForm';

import ProductPage from '../../features/product/admin/ProductPage';
import ProductForm from '../../features/product/admin/ProductForm';

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
              <Route
                path={['/admin/createBanner', '/admin/banner/:id']}
                component={BannerForm}
                key={`${key}BN`}
              />

              <Route exact path="/admin/category" component={CategoryPage} />
              <Route
                path={['/admin/createCategory', '/admin/category/:id']}
                component={CategoryForm}
                key={`${key}CT`}
              />

              <Route exact path="/admin/product" component={ProductPage} />
              <Route
                path={['/admin/createproduct', '/admin/product/:id']}
                component={ProductForm}
                key={`${key}PD`}
              />
              {/* <Route path="/admin/banner/:id" component={BannerForm} key={key} /> */}
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
