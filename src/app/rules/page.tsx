// app/rules/page.tsx

import React from 'react';

import { BookOpen, Target, Box, RefreshCw, AlertTriangle, Users } from 'lucide-react';

/**
 * Quarter Pong Official Rules Webpage Component
 * Displays the rules and game modes for Quarter Pong using a modern, responsive design 
 * with Tailwind CSS.
 * * NOTE: For a Next.js App Router setup (e.g., app/rules/page.jsx), 
 * the function name should be renamed to 'default function Page()' or similar, 
 * but for a general reusable component, 'App' is used here.
 */
export default function QuarterPongRulesPage() {
  
  // Helper component to render the main rule section header
  const RuleHeader = ({ title, icon: Icon }) => (
    <div className="flex items-center space-x-3 mb-4 mt-6 border-b border-indigo-500/50 pb-2">
      <Icon className="w-6 h-6 text-indigo-400" />
      <h2 className="text-2xl font-bold tracking-tight text-indigo-300 md:text-3xl">
        {title}
      </h2>
    </div>
  );

  // Helper component for subsection headers
  const SubHeader = ({ title }) => (
    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-200 border-l-4 border-yellow-500 pl-3">
      {title}
    </h3>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center py-12 px-4 font-inter">
      {/* Main Content Card */}
      <div className="bg-gray-800 p-6 md:p-10 rounded-3xl shadow-2xl max-w-4xl w-full text-gray-100 border border-gray-700">
        
        {/* Title Block */}
        <header className="text-center mb-8">
          <BookOpen className="w-12 h-12 mx-auto text-indigo-400 mb-2" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider mb-2">
            Quarter Pong
          </h1>
          <p className="text-indigo-300 text-xl font-medium">Official Rules & Game Modes</p>
        </header>

        {/* Objective */}
        <RuleHeader title="Objective" icon={Target} />
        <p className="text-lg leading-relaxed mb-6 bg-gray-700/50 p-4 rounded-xl border-l-4 border-indigo-400">
          The primary goal is to <strong className="font-extrabrabold text-yellow-400">bounce your ball into the raised cup</strong> each round. When all balls are successfully made, any player who did not score is <strong className="font-extrabrabold text-red-400">immediately eliminated</strong>. The <strong className="font-extrabrabold text-green-400">last player standing wins!</strong>
        </p>

        {/* Setup */}
        <RuleHeader title="Setup" icon={Box} />
        <ol className="list-decimal list-inside space-y-3 pl-4 text-lg">
          <li className="bg-gray-700/30 p-2 rounded">Place the <strong className="text-indigo-300">raised base</strong> in the center of the table.</li>
          <li className="bg-gray-700/30 p-2 rounded">Remove the cup from inside the base, close the lid, and place the <strong className="text-indigo-300">cup on top of the lid</strong>.</li>
          <li className="bg-gray-700/30 p-2 rounded">Players stand <strong className="text-indigo-300">evenly spaced</strong> around the table.</li>
          <li className="bg-gray-700/30 p-2 rounded">Each player starts with the required number of balls (which <strong className="text-indigo-300">varies by game mode</strong>).</li>
          <li className="bg-gray-700/30 p-2 rounded">A round begins after a <strong className="text-indigo-300">3...2...1 countdown</strong>. Once the countdown is over, all players may bounce at will.</li>
        </ol>

        {/* Rebounds */}
        <RuleHeader title="Rebounds (Default Rule)" icon={RefreshCw} />
        <p className="mb-4">
          If a player misses a shot, any <strong className="text-yellow-400">active player</strong> can grab the ball and take a rebound shot. The rules for grabbing a ball differ slightly by game mode.
        </p>

        <section className="mt-6 p-4 bg-gray-700 rounded-xl">
          <SubHeader title="Eligible for Rebound (A 'Live' Ball)" />
          <ul className="list-disc list-inside pl-4 space-y-1 text-base">
            <li>It bounces off the cup, base, or lid (even if it deflects upward).</li>
            <li>It lands on the top surface of the lid/base.</li>
            <li>It misses everything and then hits the table or floor again.</li>
          </ul>
        </section>
        
        <section className="mt-6 p-4 bg-gray-700 rounded-xl">
          <SubHeader title="Rebound Rules by Game Mode" />
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg text-yellow-300">Duel Mode & Triad Mode:</p>
              <ul className="list-disc list-inside pl-6 text-base">
                <li>If the ball stays on the table, any player may rebound it.</li>
                <li>If the ball falls off the table to the floor, it goes <strong className="text-red-300">back to the original shooter</strong>.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg text-yellow-300">Party Mode:</p>
              <ul className="list-disc list-inside pl-6 text-base">
                <li>All rebounds are <strong className="text-green-300">free game</strong> for any active player, including those that go off the table.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6 p-4 bg-red-900/40 rounded-xl border border-red-700">
          <SubHeader title="Rebound Restrictions" />
          <ul className="list-disc list-inside pl-4 space-y-2 text-base">
            <li><strong className="text-red-300">Goal-Tending:</strong> If a player tries to grab a ball <strong className="text-red-300">before it is eligible</strong> (i.e., before it's a "live" ball), the ball is returned to the shooter.</li>
            <li><strong className="text-red-300">Excessive Goal-Tending:</strong> Repeated or intentional interference can result in a player's <strong className="text-red-400">elimination by group vote</strong>.</li>
          </ul>
        </section>

        {/* Penalty Rule */}
        <RuleHeader title="Penalty Rule" icon={AlertTriangle} />
        <div className="p-4 bg-red-800/30 rounded-xl border border-red-600">
            <p className="text-lg mb-2">
                If a player <strong className="text-red-400 font-bold">knocks over the cup or base</strong>, they are <strong className="text-red-400 font-bold">immediately eliminated</strong>.
            </p>
            <p className="text-sm italic text-gray-300">
                The game pauses to reset the cup. Players keep any balls still in hand for the restart. Any balls that are not accounted for are placed on the lid nearest the eliminated player.
            </p>
        </div>
        

        {/* Game Modes */}
        <RuleHeader title="Game Modes" icon={Users} />
        
        {/* Duel Mode */}
        <section className="mt-6 p-4 bg-gray-700/50 rounded-xl border-l-4 border-blue-400">
          <h3 className="text-2xl font-bold text-blue-300 mb-2">1. Duel Mode (1 vs. 1)</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li><strong className="font-semibold text-white">Players:</strong> 2</li>
            <li><strong className="font-semibold text-white">Starting Balls:</strong> 3 per player.</li>
            <li><strong className="font-semibold text-white">Winning a Round:</strong> First player to make a total of <strong className="text-yellow-400">4 balls wins the round</strong>.</li>
            <li><strong className="font-semibold text-white">Winning the Match:</strong> Best of 3 rounds wins the match.</li>
          </ul>
        </section>

        {/* Triad Mode */}
        <section className="mt-6 p-4 bg-gray-700/50 rounded-xl border-l-4 border-green-400">
          <h3 className="text-2xl font-bold text-green-300 mb-2">2. Triad Mode (3 Players)</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li><strong className="font-semibold text-white">Players:</strong> 3</li>
            <li><strong className="font-semibold text-white">Starting Balls:</strong> 2 per player.</li>
            <li><strong className="font-semibold text-white">Clear Winner:</strong> If one player makes a total of <strong className="text-yellow-400">4 or more balls</strong>, they win the round immediately.</li>
            <li><strong className="font-semibold text-white">Tie Rule:</strong> If all players make the same number of balls, the round <strong className="text-red-400">resets</strong>.</li>
            <li>
                <strong className="font-semibold text-white">Advancement to Duel:</strong> If one player only makes 1 ball while the others make 2+, the lowest scorer is eliminated. The remaining two players play **Duel Mode** (first to 3 total balls wins).
            </li>
          </ul>
        </section>
        
        {/* Party Mode */}
        <section className="mt-6 p-4 bg-gray-700/50 rounded-xl border-l-4 border-yellow-400">
          <h3 className="text-2xl font-bold text-yellow-300 mb-2">3. Party Mode (4–6 Players)</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li><strong className="font-semibold text-white">Players:</strong> 4–6</li>
            <li><strong className="font-semibold text-white">Starting Balls:</strong> 1 per player.</li>
            <li><strong className="font-semibold text-white">Elimination:</strong> Any player who has <strong className="text-red-400">not made a shot</strong> when the round ends is eliminated. Continue until one player remains.</li>
            <li><strong className="font-semibold text-white">Victor Rule (Large Groups):</strong> Winner stays on; up to 5 new challengers rotate in by least shots made.</li>
            <li>
                <strong className="font-semibold text-white">Optional Variation – Last Chance Rebound:</strong> Previously eliminated players get one rebound attempt at the start of the next round to rejoin the game.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
