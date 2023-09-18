import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import ResultPage from './Result'; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the main app */}
        <Route path="/" element={<App />} />

        {/* Route for the result page */}
        <Route path="/result" element={<ResultPage />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
