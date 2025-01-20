import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ROUTES } from './constants/routes';
import Loader from './components/uikit/Loader';
import { Toaster } from 'react-hot-toast';

// Lazy load pages
const ProjectListPage = React.lazy(() => import('./pages/ProjectListPage'));

function App() {
  return (
    <BrowserRouter>
    	<Toaster position="top-right" />
      {/* Add a Suspense component for lazy-loaded components */}
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={ROUTES.HOME} element={<ProjectListPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
