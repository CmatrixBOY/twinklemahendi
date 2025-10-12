import { Outlet, ScrollRestoration } from "react-router-dom";

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      <Outlet />
    </>
  );
}

