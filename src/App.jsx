import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InvitationPage from './pages/InvitationPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Invitation - standalone page without navigation */}
        <Route path="/zaproszenie" element={<InvitationPage />} />
        
        {/* Main landing page with all sections */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
