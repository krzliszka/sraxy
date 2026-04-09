import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import PhotoPage from './pages/PhotoPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Standalone pages (no nav, no password) */}
        <Route path="/zaproszenie" element={<InvitationPage />} />
        <Route path="/zdjecia" element={<PhotoPage />} />

        {/* Main landing page with all sections */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
