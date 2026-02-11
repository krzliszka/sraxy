import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import DetailsPage from './pages/DetailsPage';
import RSVPPage from './pages/RSVPPage';
import GiftsPage from './pages/GiftsPage';
import GalleryPage from './pages/GalleryPage';
import InvitationPage from './pages/InvitationPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Invitation - standalone page without navigation */}
        <Route path="/zaproszenie" element={<InvitationPage />} />
        
        {/* Main website with navigation */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/nasza-historia"
          element={
            <Layout>
              <StoryPage />
            </Layout>
          }
        />
        <Route
          path="/szczegoly"
          element={
            <Layout>
              <DetailsPage />
            </Layout>
          }
        />
        <Route
          path="/rsvp"
          element={
            <Layout>
              <RSVPPage />
            </Layout>
          }
        />
        <Route
          path="/prezenty"
          element={
            <Layout>
              <GiftsPage />
            </Layout>
          }
        />
        <Route
          path="/galeria"
          element={
            <Layout>
              <GalleryPage />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
