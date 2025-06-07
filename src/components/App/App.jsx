import { useState, useEffect } from 'react'
import style from "./App.module.css"
import { lazy, Suspense } from 'react'
import "modern-normalize";


import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import { Route, Routes} from 'react-router-dom'
import { refreshUser } from '../../redux/auth/operations.js';
import { selectRefreshing } from '../../redux/auth/selectors.js';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const NotFoundPage  = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function App() {  

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
      <p> Refreshing user... </p>
  ): (
      <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />} />
              <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} />} />
              <Route path='/login' element={<RestrictedRoute component={<LoginPage />} />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
  )
}

export default App