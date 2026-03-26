import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';
import RSVPPage from './pages/RSVPPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Invitation - standalone page without navigation */}
        <Route path="/zaproszenie" element={<InvitationPage />} />
        
        {/* Seating chart page */}
        <Route
          path="/stoliki"
          element={
            <Layout>
              <RSVPPage />
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

export default App;
