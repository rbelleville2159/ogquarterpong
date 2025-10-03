// app/rules/page.tsx

export default function QuarterPongRulesPage() {
  return (
    <div className="quarter-pong-rules">
      <h1>Quarter Pong – Official Rules & Game Modes</h1>
      <hr />

      <h2>&#9642; Objective</h2>
      {<div class="quarter-pong-rules">
    <h1>Quarter Pong – Official Rules & Game Modes</h1>

    <hr>

    <h2>&#9642; Objective</h2>
    <p>The goal is to **bounce your ball into the raised cup** each round. When all balls are made, any player who did not score is **eliminated**. The **last player standing wins!**</p>

    <hr>

    <h2>&#9642; Setup</h2>
    <ol>
        <li>Place the **raised base** in the center of the table.</li>
        <li>Remove the cup from inside the base, close the lid, and place the **cup on top of the lid**.</li>
        <li>Players stand **evenly spaced** around the table.</li>
        <li>Each player starts with the required number of balls (which **varies by game mode**).</li>
        <li>A round begins after a **3...2...1 countdown**. Once the countdown is over, all players may bounce at will.</li>
    </ol>

    <hr>

    <h2>&#9642; Rebounds (Default Rule)</h2>
    <p>If a player misses a shot, any **active player** can grab the ball and take a rebound shot. The rules for grabbing a ball differ slightly by game mode.</p>

    <section>
        <h3>When a Ball is Eligible for Rebound (It's a "Live" Ball):</h3>
        <ul>
            <li>It bounces off the cup, base, or lid (even if it deflects upward).</li>
            <li>It lands on the top surface of the lid/base.</li>
            <li>It misses everything and then hits the table or floor again.</li>
        </ul>
    </section>

    <section>
        <h3>Rebound Rules by Game Mode:</h3>
        <ul>
            <li>**Duel Mode (1v1) & Triad Mode (3 Players):**
                <ul>
                    <li>If the ball stays on the table, any player may rebound it.</li>
                    <li>If the ball falls off the table to the floor, it goes **back to the original shooter**.</li>
                </ul>
            </li>
            <li>**Party Mode (4–6 Players):**
                <ul>
                    <li>All rebounds are **free game** for any active player, including those that go off the table.</li>
                </ul>
            </li>
        </ul>
    </section>

    <section>
        <h3>Rebound Restrictions:</h3>
        <ul>
            <li>**Goal-Tending:** If a player tries to grab a ball **before it is eligible** (i.e., before it's a "live" ball), the ball is **returned to the shooter**.</li>
            <li>**Excessive Goal-Tending:** Repeated or intentional interference can result in a player's **elimination by group vote**.</li>
        </ul>
    </section>

    <hr>

    <h2>&#9642; Penalty Rule</h2>
    <p>If a player **knocks over the cup or base**, they are **immediately eliminated**.</p>
    <p>The game then pauses to reset the cup. Players keep any balls they still have in hand. Any balls that are not accounted for are placed on the lid nearest the eliminated player for the restart.</p>

    <hr>

    <h2>&#9642; Game Modes</h2>

    <section>
        <h3>1. Duel Mode (1 vs. 1)</h3>
        <ul>
            <li>**Players:** 2</li>
            <li>**Starting Balls:** 3 per player.</li>
            <li>**Winning a Round:** The first player to make a total of **4 balls wins the round**.</li>
            <li>**Winning the Match:** Best of 3 rounds wins the match.</li>
        </ul>
    </section>

    <section>
        <h3>2. Triad Mode (3 Players)</h3>
        <ul>
            <li>**Players:** 3</li>
            <li>**Starting Balls:** 2 per player.</li>
            <li>**Clear Winner:** If one player makes a total of **4 or more balls**, they win the round immediately.</li>
            <li>**Tie Rule:** If all players make the same number of balls, the round **resets**.</li>
            <li>**Advancement to Duel Mode:** If one player makes only **1 ball** while the others make 2 or more, the lowest scorer is eliminated. The remaining two players move on to **Duel Mode** with **2 balls each**. The first to make **3 total balls wins** the round.</li>
        </ul>
    </section>

    <section>
        <h3>3. Party Mode (4–6 Players)</h3>
        <ul>
            <li>**Players:** 4–6</li>
            <li>**Starting Balls:** 1 per player.</li>
            <li>**Gameplay:** Play continues until all balls are made.</li>
            <li>**Elimination:** Any player who has **not made a shot** when the round ends is eliminated. Continue playing rounds until only one player remains.</li>
            <li>**Victor Rule (For Large Groups):** The winner stays in the game. Up to 5 new challengers can rotate in, starting with those who made the fewest shots in the last round.</li>
            <li>**Optional Variation – Last Chance Rebound:** At the start of the next round, any previously eliminated player may attempt **one rebound shot**. If they make it, they rejoin the game. After that round, elimination proceeds as normal.</li>
        </ul>
    </section>
</div>
}
    </div>
  );
}
