import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import PhotoUploadSection from './sections/PhotoUploadSection';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Invitation - standalone page */}
        <Route path="/zaproszenie" element={<InvitationPage />} />

        {/* Photo upload - with full navigation, accessible via QR code */}
        <Route
          path="/zdjecia"
          element={
            <Layout>
              <PhotoUploadSection />
            </Layout>
          }
        />

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
