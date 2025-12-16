import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingActionButton from "./components/FloatingActionButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Construction = lazy(() => import("./pages/Construction.jsx"));
const RealEstate = lazy(() => import("./pages/RealEstate.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const WarrantyServicePolicy = lazy(() =>
  import("./pages/WarrantyServicePolicy.jsx")
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bgWhite">
      {/* Fixed Navbar */}
      <Navbar />

      <ScrollToTop />

      {/* ✅ Global offset for fixed navbar */}
      <div className="pt-[72px] md:pt-[96px] flex-1 flex flex-col">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Products" element={<Construction />} />
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
<Route
  path="/warranty-service-policy"
  element={<WarrantyServicePolicy />}
/>
          </Routes>
        </Suspense>
      </div>
          <ScrollToTopButton />
      <FloatingActionButton />
      <Footer />
    </div>
  );
}

export default App;
