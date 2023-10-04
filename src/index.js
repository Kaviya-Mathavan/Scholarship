import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
          <Routes>
              <Route path="/" element={<Register />}>
              <Route path="signIn" element={<SignIn />} />
              </Route>
          </Routes> 
      </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

