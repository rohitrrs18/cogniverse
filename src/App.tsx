import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Loader from './components/ui/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Lock scroll while the loader is up
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black flex flex-col">
        {/* Loader covers EVERYTHING — nav, page, footer */}
        <AnimatePresence>
          {loading && (
            <Loader key="loader" onComplete={() => setLoading(false)} />
          )}
        </AnimatePresence>

        <Navbar />

        <main className="relative z-10 pt-24 flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home ready={!loading} />
                  </PageWrapper>
                }
              />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}