import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
// import SurveyPage from '.pages/SurveyPage';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<HomePage />} 
          />
          <Route 
            path='/admin' 
            element={<AdminPage />} 
          />
          <Route 
            path='/users' 
            element={<UserPage />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
