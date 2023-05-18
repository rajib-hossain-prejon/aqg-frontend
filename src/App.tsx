import React from 'react';

import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './components/routes';

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
