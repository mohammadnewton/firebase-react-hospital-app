import React, { useState, useEffect } from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/widgets/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './store/features/userSlice';
import NotFound from './page/NotFound';
import Doctors from './components/widgets/Doctors'
import NServices from './components/widgets/Services'
import Chatbot from './components/widgets/Chatbot';
import './App.css'


function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  // const user = "asasa";
  console.log(user);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])


  return (
    <Router>
      <div className="md:overflow-x-auto overflow-x-hidden bg-primary">
        <section>
          <div>
            <Routes>
              <Route element={<ProtectedRoute user={user} />}>
                <Route
                  path="/home"
                  element={
                    < Home />
                  }
                />

                <Route
                  path="/services"
                  element={<NServices />}
                />

                <Route
                  path="/doctors"
                  element={
                    <Doctors />
                  }
                />

              </Route>

              <Route
                  path="/chatbot"
                  element={<Chatbot />}
                />

              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={< NotFound />} />
            </Routes>
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;



