import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import SignupCard from './Pages/SignUp';
import VerifyEmailForm from './Pages/EmailVerification';
import LoginCard from './Pages/Login';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/register',
    element: <SignupCard />,
  },
  {
    path: '/verification/:token',
    element: <VerifyEmailForm />,
  },
  {
    path: '/login',
    element: <LoginCard />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
