import React, { useEffect, Suspense, lazy, useState } from 'react';
const Header = lazy(() => import('../components/Header'));
const FeaturedCasinos = lazy(() => import('../components/FeaturedCasinos'));
const Casinos = lazy(() => import('../components/Casinos'));
const Bonuses = lazy(() => import('../components/Bonuses'));
const Games = lazy(() => import('../components/Games'));
const Guides = lazy(() => import('../components/Guides'));
const Reviews = lazy(() => import('../components/Reviews'));
const FAQ = lazy(() => import('../components/FAQ'));
const Newsletter = lazy(() => import('../components/Newsletter'));
const CasinoComparison = lazy(() => import('../components/CasinoComparison'));
const GameDemo = lazy(() => import('../components/GameDemo'));
const Quickfilter = lazy(() => import('../components/Quickfilter'));
import {casinoData} from '../data/CasinoData.js'
import SeoHelmet from '../components/seo/SeoHelmet.jsx';
const mainpage = () => {
      // Handle hash-based scrolling on page load or hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth',
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Run on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on unmount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

       const [activeFilter, setActiveFilter] = useState('all');

      const filteredCasinos = casinoData.filter((casino) => {
        if (activeFilter === 'all') return true;
        return casino.categories.includes(activeFilter);
      });
  return (
    <div>
        <SeoHelmet
    title='Casino Papa-HomePage'
    description='Home page of the website. Show the things persent in website ,quicklinks for online games, casinos and guide for knowing more about casinos, addiction and online games '
     keywords={["casino", "online gambling", `Casino review`, "casino games", "bonuses","online games","Best casino"]}
  href={`https://www.thecasinopapa/`}
    />
         <Header />
        <FeaturedCasinos />
       <Quickfilter onFilterChange={setActiveFilter} activeFilter={activeFilter} />
        <Casinos casinos={filteredCasinos} />
        <Bonuses />
        <Games />
        <GameDemo />
        <CasinoComparison />
        <Guides />
        <Reviews />
        <FAQ />
        <Newsletter />
    </div>
  )
}

export default mainpage