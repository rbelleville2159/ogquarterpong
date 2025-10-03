import React from 'react';

// Define common styles for enhanced readability and dark theme aesthetics
const primaryTextColor = "text-gray-100";
const primaryBg = "bg-gray-950"; // Deepest black background
const cardBg = "bg-gray-800";    // Slightly lighter card/header background
const neonAccent = "text-cyan-400"; // Primary neon highlight
const neonHighlight = "text-pink-500"; // Secondary neon highlight
const dangerText = "text-red-500"; // Critical warning/elimination text

// --- New Components for Website Layout ---

/**
 * Global Navigation Header Component (Sticky)
 */
const SiteHeader: React.FC = () => (
  <header className={`sticky top-0 z-10 w-full ${cardBg} border-b border-gray-700 shadow-xl`}>
    <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        {/* Site Logo/Title */}
        <h1 className={`text-2xl font-black uppercase ${neonAccent} tracking-widest`}>
          QuarterPong
        </h1>
      </div>
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className={`text-sm font-medium ${primaryTextColor} hover:${neonAccent} transition duration-150`}>Home</a>
        <a href="/rules" className={`text-sm font-medium ${neonAccent} border-b-2 border-cyan-400 pb-1`}>Rules</a>
        <a href="/store" className={`text-sm font-medium ${primaryTextColor} hover:${neonAccent} transition duration-150`}>Store</a>
        <a href="/community" className={`text-sm font-medium ${primaryTextColor} hover:${neonAccent} transition duration-150`}>Community</a>
      </nav>
    </div>
  </header>
);

/**
 * Global Footer Component
 */
const SiteFooter: React.FC = () => (
  <footer className={`w-full ${cardBg} border-t border-gray-700 mt-12`}>
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Quarter Pong. All rights reserved. | <span className={`${neonAccent}`}>Game Rules Version 1.0</span>
      </p>
      <div className="mt-2 space-x-4 text-xs">
        <a href="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</a>
        <a href="/terms" className="text-gray-500 hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

      {/* 3. Website Footer */}
      <SiteFooter />
    </div>
  );
}
