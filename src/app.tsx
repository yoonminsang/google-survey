import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SurveyFormPage from './pages/survey-form-page';
import NotFoundPage from './pages/not-found-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyFormPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
