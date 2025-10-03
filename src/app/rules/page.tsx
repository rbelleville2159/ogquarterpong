import React from 'react';

// Define common styles for enhanced readability and dark theme aesthetics
const primaryTextColor = "text-gray-100";
const primaryBg = "bg-gray-950";
const cardBg = "bg-gray-800";
const neonAccent = "text-cyan-400";
const neonHighlight = "text-pink-500";
const dangerText = "text-red-500";

/**
 * QuarterPongRulesPage Component
 * Displays the official rules and game modes with a high-contrast dark theme.
 */
export default function QuarterPongRulesPage() {
  return (
    <main className={`min-h-screen ${primaryBg} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title Section */}
        <header className="text-center pb-6 border-b border-gray-700">
          <h1 className={`text-5xl font-extrabold tracking-wider uppercase ${neonAccent} drop-shadow-lg`}>
            Quarter Pong
          </h1>
          <p className="text-xl mt-2 text-gray-400">Official Rules & Game Modes</p>
        </header>

        {/* Objective */}
        <section className={`p-6 rounded-xl ${cardBg} shadow-2xl`}>
          <h2 className={`text-3xl font-semibold mb-4 ${neonHighlight} border-b border-pink-500/30 pb-2`}>
            &#9642; Objective
          </h2>
          <p className={`${primaryTextColor} text-lg`}>
            The goal is to <span className="font-bold text-cyan-400">bounce your ball into the raised cup</span> each round. When all balls are made, any player who did not score is <span className={`font-extrabold ${dangerText}`}>eliminated</span>. The <span className="font-extrabold text-white">last player standing wins!</span>
          </p>
        </section>
        
        {/* Setup Section */}
        <section className={`p-8 rounded-xl ${cardBg} shadow-2xl`}>
          <h2 className={`text-3xl font-semibold mb-6 ${neonHighlight} border-b border-pink-500/30 pb-2`}>
            &#9642; Setup
          </h2>
          <ol className="space-y-4 list-none p-0">
            {/* Using custom list styling for steps */}
            {[
              "Place the **raised base** in the center of the table.",
              "Remove the cup from inside the base, close the lid, and place the **cup on top of the lid**.",
              "Players stand **evenly spaced** around the table.",
              "Each player starts with the required number of balls (which **varies by game mode**).",
              "A round begins after a **3...2...1 countdown**. Once the countdown is over, all players may bounce at will.",
            ].map((step, index) => (
              <li key={index} className={`flex items-start p-3 rounded-lg border-l-4 border-cyan-400 ${primaryTextColor} text-lg bg-gray-700/50`}>
                <span className={`text-2xl font-bold mr-3 ${neonAccent}`}>{index + 1}.</span>
                <span dangerouslySetInnerHTML={{ 
                  __html: step.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-white">$1</span>') 
                }} />
              </li>
            ))}
          </ol>
        </section>

        {/* Rebounds Section */}
        <section className={`p-8 rounded-xl ${cardBg} shadow-2xl`}>
          <h2 className={`text-3xl font-semibold mb-6 ${neonHighlight} border-b border-pink-500/30 pb-2`}>
            &#9642; Rebounds (Default Rule)
          </h2>
          <p className={`${primaryTextColor} mb-6`}>
            If a player misses a shot, any <span className="font-bold text-cyan-400">active player</span> can grab the ball and take a rebound shot. The rules for grabbing a ball differ slightly by game mode.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Eligible for Rebound */}
            <div className="md:col-span-1 p-4 rounded-lg bg-gray-700/50">
              <h3 className={`text-xl font-bold mb-3 ${neonAccent}`}>Eligible ("Live" Ball):</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Bounces off the cup, base, or lid.</li>
                <li>Lands on the top surface of the lid/base.</li>
                <li>Misses everything and hits the table or floor again.</li>
              </ul>
            </div>

            {/* Rebound Rules by Mode */}
            <div className="md:col-span-1 p-4 rounded-lg bg-gray-700/50">
              <h3 className={`text-xl font-bold mb-3 ${neonAccent}`}>Rules by Mode:</h3>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="font-bold text-white">Duel / Triad Mode:</li>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                    <li>On table: Free rebound.</li>
                    <li>Off table: Goes <span className="font-semibold text-cyan-300">back to the shooter</span>.</li>
                </ul>
                <li className="font-bold text-white mt-2">Party Mode (4-6):</li>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                    <li>All rebounds (on/off table) are <span className="font-semibold text-cyan-300">free game</span>.</li>
                </ul>
              </ul>
            </div>

            {/* Rebound Restrictions */}
            <div className="md:col-span-1 p-4 rounded-lg bg-gray-700/50">
              <h3 className={`text-xl font-bold mb-3 ${neonAccent}`}>Restrictions:</h3>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-pink-500">!</span>
                  <span className="text-gray-300">
                    <span className="font-bold text-white">Goal-Tending:</span> Ball is returned to the shooter.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-pink-500">!!</span>
                  <span className="text-gray-300">
                    <span className="font-bold text-white">Excessive Goal-Tending:</span> Can result in <span className={dangerText}>elimination by group vote</span>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Penalty Rule */}
        <section className={`p-6 rounded-xl ${cardBg} shadow-2xl border-2 border-red-500/50`}>
          <h2 className={`text-3xl font-semibold mb-4 ${dangerText} border-b border-red-500/30 pb-2`}>
            &#9642; Penalty Rule
          </h2>
          <p className={`${primaryTextColor} text-lg mb-4`}>
            If a player **knocks over the cup or base**, they are <span className={`font-extrabold ${dangerText}`}>immediately eliminated</span>.
          </p>
          <div className="bg-gray-700 p-3 rounded text-gray-300 text-sm italic">
            <p>The game pauses to reset the cup. Players keep any ball still in hand. Any unaccounted balls are placed on the lid nearest the eliminated player for the restart.</p>
          </div>
        </section>

        {/* Game Modes Section (Grid Layout) */}
        <section>
          <h2 className={`text-3xl font-semibold mb-8 ${neonHighlight} border-b border-pink-500/30 pb-2`}>
            &#9642; Game Modes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Duel Mode */}
            <GameModeCard 
              mode="Duel Mode (1 vs. 1)"
              players="2"
              balls="3 per player"
              rules={[
                "First player to make a total of **4 balls wins the round**.",
                "Best of 3 rounds wins the match.",
              ]}
              accent={neonAccent}
            />

            {/* 2. Triad Mode */}
            <GameModeCard 
              mode="Triad Mode (3 Players)"
              players="3"
              balls="2 per player"
              rules={[
                "**Clear Winner:** One player makes 4+ balls total, they immediately win.",
                "**Tie Rule:** If all players make the same number of balls, the round **resets**.",
                "**Advancement:** Lowest scorer is eliminated. Remaining 2 players move to Duel Mode (first to 3 balls wins).",
              ]}
              accent={neonHighlight}
            />

            {/* 3. Party Mode */}
            <GameModeCard 
              mode="Party Mode (4–6 Players)"
              players="4–6"
              balls="1 per player"
              rules={[
                "Play continues until all balls are made.",
                "**Elimination:** Any player who has not made a shot when the round ends is eliminated.",
                "**Victor Rule:** Winner stays on, up to 5 new challengers rotate in by least shots made.",
                "**Optional Variation – Last Chance Rebound:** Eliminated player rejoins if they make one rebound shot in the next round.",
              ]}
              accent={neonAccent}
            />
          </div>
        </section>

      </div>
    </main>
  );
}

/**
 * GameModeCard Component for reusable mode display
 */
const GameModeCard = ({ mode, players, balls, rules, accent }) => (
    <div className={`p-6 rounded-xl ${cardBg} shadow-2xl transition duration-300 hover:scale-[1.02] hover:shadow-cyan-400/30 border-t-4 border-b-4 border-transparent hover:border-cyan-400`}>
        <h3 className={`text-2xl font-extrabold mb-4 uppercase ${accent}`}>
            {mode}
        </h3>
        
        <div className="text-sm text-gray-400 mb-4 space-y-1">
            <p><span className="font-semibold text-white">Players:</span> {players}</p>
            <p><span className="font-semibold text-white">Starting Balls:</span> {balls}</p>
        </div>

        <ul className="list-none space-y-3 pt-3 border-t border-gray-700">
            {rules.map((rule, index) => (
                <li key={index} className="flex items-start text-gray-300">
                    <span className={`text-lg leading-none mr-2 ${accent}`}>&raquo;</span>
                    <span dangerouslySetInnerHTML={{ 
                        __html: rule.replace(/\*\*(.*?)\*\*/g, `<span class="font-bold ${accent} block sm:inline">$1</span>`) 
                    }} />
                </li>
            ))}
        </ul>
    </div>
);
