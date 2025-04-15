import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
