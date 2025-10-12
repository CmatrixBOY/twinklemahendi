
import { createBrowserRouter } from "react-router-dom";
import App from "@/react-app/App";
import HomePage from "@/react-app/pages/Home";
import GalleryPage from "@/react-app/pages/GalleryPage";
import PrivacyPolicyPage from "@/react-app/pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "@/react-app/pages/TermsAndConditionsPage";
import DesignDetailPage from "@/react-app/pages/DesignDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/terms",
        element: <TermsAndConditionsPage />,
      },
      {
        path: "/design/:id",
        element: <DesignDetailPage />,
      },
    ],
  },
]);

export default router;
