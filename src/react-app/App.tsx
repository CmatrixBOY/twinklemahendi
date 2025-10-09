import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import GalleryPage from "@/react-app/pages/GalleryPage";
import PrivacyPolicyPage from "@/react-app/pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "@/react-app/pages/TermsAndConditionsPage";

export default function App() {
  return (
    <Router>
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsAndConditionsPage />} />
      </Routes>
    </Router>
  );
}

