import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'semantic-ui-react';

import StartPage from '../../features/start/StartPage';

const App = () => {
  const { key } = useLocation();
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route exact path="/" component={StartPage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Container className="main"></Container>
          </>
        )}
      />
    </>
  );
};

export default App;
