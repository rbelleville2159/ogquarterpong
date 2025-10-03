import React from 'react';

// Define theme constants for consistency with page.tsx
const primaryBg = "bg-gray-950";    // Deepest black background
const cardBg = "bg-gray-800";       // Slightly lighter card background
const neonAccent = "text-cyan-400"; // Primary neon color (Cyan)
const neonHighlight = "text-pink-500"; // Secondary neon color (Pink)

/**
 * Home Page Component for QuarterPong.com
 * Features the main logo and navigation links styled with a dark, neon theme.
 */
export default function Home() {
  // Calculated dimensions from the original scaled Image component (883*0.7 and 577*0.7)
  const logoWidth = 618;
  const logoHeight = 404;

  return (
    // Apply full-screen dark background and spacing
    <main className={`flex min-h-screen flex-col items-center justify-center p-8 sm:p-12 md:p-24 ${primaryBg} text-white`}>
      
      {/* Logo Section */}
      <div className="relative flex place-items-center mb-16 md:mb-24 transition-transform duration-300 hover:scale-[1.03] max-w-full h-auto">
        <img
          className="relative drop-shadow-[0_0_2.5rem_#22d3ee90] max-w-full h-auto" // Cyan neon glow remains on the logo
          src="/qpbwlogo.svg"
          alt="Quarter Pong Logo"
          width={logoWidth}
          height={logoHeight}
          // The intrinsic size is large, but max-w-full ensures it scales down on mobile.
        />
      </div>

      {/* Navigation Links Grid (Updated to lg:grid-cols-3) */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-3 lg:text-left">
        
        {/* 1. Rules Link (target="_blank" and rel="noopener noreferrer" removed for same-window navigation) */}
        <a href="/rules"
          className={`group rounded-xl p-6 transition-all duration-300 ${cardBg} border border-gray-700 hover:border-pink-500 hover:bg-gray-700/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)]`}
        >
          <h2 className={`mb-3 text-3xl font-bold ${neonHighlight} group-hover:text-white`}>
            Rules
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none ml-2">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-base text-gray-300">
            Check out the official rules and game modes for the greatest party game ever played.
          </p>
        </a>

        {/* 2. Store Link (Already opens in same window) */}
        <a href="/store"
          className={`group rounded-xl p-6 transition-all duration-300 ${cardBg} border border-gray-700 hover:border-cyan-400 hover:bg-gray-700/50 hover:shadow-[0_0_15px_rgba(45,212,255,0.7)]`}
        >
          <h2 className={`mb-3 text-3xl font-bold ${neonAccent} group-hover:text-white`}>
            Store
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none ml-2">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-base text-gray-300">
            Shop for official Quarter Pong gear and game sets. Gear up for your next tournament!
          </p>
        </a>

        {/* 3. Contact/Community Link (Already opens in same window) */}
        <a href="/community"
          className={`group rounded-xl p-6 transition-all duration-300 ${cardBg} border border-gray-700 hover:border-pink-500 hover:bg-gray-700/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.7)]`}
        >
          <h2 className={`mb-3 text-3xl font-bold ${neonHighlight} group-hover:text-white`}>
            Community
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none ml-2">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-base text-gray-300">
            Join the conversation, find local tournaments, or submit your feedback.
          </p>
        </a>
      </div>
    </main>
  );
}
