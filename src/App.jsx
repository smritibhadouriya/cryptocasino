import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Main = lazy(()=> import('./pages/mainpage'))
const Guide = lazy(()=> import('./pages/Guide'))
const GuideDetail = lazy(()=> import('./pages/GuideDetail'))
const CasinoDetail = lazy(()=> import('./pages/CasinoDetail'))
const GamesPage = lazy(()=> import('./pages/GamesPage'))
const Reviewpage =lazy(()=>import('./pages/Reviewpage'))
const Terms =lazy(()=>import('./components/terms'))
const Privacy =lazy(()=>import('./components/privacypolicy'))
const Contact =lazy(()=>import('./components/contactus'))
function App() {
  return (
      <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-r from-[#0A0F2B] via-[#1A2A44] to-[#0A0F2B] text-gray-200">
            <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/guide" element={<Guide />} />
                 <Route path="/guide/:id" element={<GuideDetail />} />
                 <Route path="/casino/:id" element={<CasinoDetail />} />
                <Route path="/games/:gameType" element={<GamesPage />} />
                 <Route path="/reviews" element={<Reviewpage />} />
                 <Route path="/terms" element={<Terms />} />
                 <Route path="/privacy" element={<Privacy/>} />
                 <Route path="/contact" element={<Contact/>} />
              </Routes>
              <Footer />
            </Suspense>
          </div>
        </BrowserRouter>
  );
}

export default App;