import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SurveyFormPage from './pages/survey-form-page';
import NotFoundPage from './pages/not-found-page';
import SurveyPreloadPage from './pages/survey-preload-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyFormPage />} />
        <Route path="//preload/:preloadId" element={<SurveyPreloadPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
