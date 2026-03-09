# Battle page design (spec — not implemented yet)

A one-on-one battle screen where the player picks an attack and it deals damage. HP reflects how strong each Pokémon is.

---

## 1. Screen layout (concept)

```
┌─────────────────────────────────────────────────────────┐
│  BATTLE                          [Round 1 of 3] or similar
├─────────────────────────────────────────────────────────┤
│                                                         │
│   YOUR POKÉMON                    WILD / OPPONENT       │
│   ┌─────────────┐                 ┌─────────────┐       │
│   │   [sprite]  │      VS        │   [sprite]  │       │
│   │   Pikachu   │                 │   Geodude   │       │
│   └─────────────┘                 └─────────────┘       │
│   HP ████████░░ 80/100            HP ██████░░░░ 60/90   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│   Choose a move:                                        │
│   ┌──────────────┐  ┌──────────────┐                    │
│   │ Thunder Shock│  │ Quick Attack │                    │
│   │  Electric 40 │  │   Normal 40  │                    │
│   └──────────────┘  └──────────────┘                    │
│   ┌──────────────┐  ┌──────────────┐                    │
│   │  Thunderbolt │  │    Tackle    │                    │
│   │  Electric 90 │  │   Normal 50  │                    │
│   └──────────────┘  └──────────────┘                    │
├─────────────────────────────────────────────────────────┤
│   [Message: "Pikachu used Thunder Shock! It's super     │
│    effective!" then after a moment: "Geodude's HP        │
│    dropped to 45."]                                      │
└─────────────────────────────────────────────────────────┘
```

- **Top:** Battle title and round/turn info.
- **Middle:** Your Pokémon and opponent (sprites, names, **HP bars with numbers**).
- **Bottom:** Up to 4 **moves** (name + type + power). Player taps one to attack.
- **Message area:** Short line describing the move and damage (e.g. “Pikachu used Thunder Shock! It’s super effective! Geodude lost 25 HP.”).

---

## 2. HP: how much HP a Pokémon has (“how strong it is”)

**Idea:** Base HP on **base stat total** or **base HP** from PokeAPI so stronger Pokémon have more HP and feel tougher.

- **Option A — Base HP only**  
  - Use `stats[0].base_stat` (HP) from PokeAPI.  
  - In-game HP = scale it (e.g. `HP = baseHP * 2` or `baseHP * 1.5`) so numbers sit in a nice range (e.g. 40–180).  
  - Strong Pokémon (e.g. Snorlax, Chansey) have high HP; weak ones (e.g. Caterpie) have low HP.

- **Option B — Base stat total**  
  - Sum all base stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed).  
  - `maxHP = round( statTotal * 0.4 )` or similar so “strong” Pokémon have more HP.  
  - Still reflects “how strong” the species is overall.

- **Option C — Fixed bands by “tier”**  
  - No API: assign a simple tier (e.g. 1–3) per species.  
  - Tier 1 → 60 HP, Tier 2 → 90 HP, Tier 3 → 120 HP.  
  - Easiest to tune; less authentic.

**Recommendation:** Option A (base HP from PokeAPI, scaled). Show **current HP / max HP** and a **bar** (e.g. green → yellow → red as HP drops). Strength = “this species has more/less max HP.”

---

## 3. Moves: where they come from and how many

- **Source:** PokeAPI `pokemon/{id}` or `pokemon-species` → `moves` (or a small curated list per Pokémon).  
  - Each move has: **name**, **type**, **power** (or “—” for status).  
  - For a first version, you can use only moves with a numeric **power** (e.g. 4 moves per Pokémon, power 30–120).

- **Choice:** Player sees **4 moves** (or fewer if the Pokémon has fewer damaging moves).  
  - Display: **Move name**, **Type** (with a small type badge), **Power** (e.g. “40” or “90”).  
  - Tapping a move = “use this attack” for this turn.

- **Opponent:** Can use a random move from its set, or a fixed “tackle” for v1. No need to show the opponent’s full move list.

---

## 4. Damage: how an attack “does some damage”

Simple formula (can tweak later):

- **Damage** (to defender’s current HP) depends on:
  - **Move power** (from API or your list).
  - **Attacker “strength”** (e.g. attacker’s base Attack or stat total).
  - **Defender “toughness”** (e.g. defender’s base Defense or stat total).
  - **Type effectiveness** (e.g. super effective ×1.5, not very effective ×0.5, same as your existing type chart).

Example (conceptual):

- `damage = (movePower * attackerFactor / defenderFactor) * typeMultiplier`  
  then round and clamp (e.g. minimum 1, maximum = defender’s current HP).

So:
- Strong attacker + high-power move + super effective = big damage.
- Weak attacker or resisted move = small damage.
- **HP bar and number** update after each attack (e.g. “80/100 → 55/100”).

---

## 5. Flow (one turn)

1. **Your turn:**  
   - Show “Choose a move.”  
   - Player taps one of the 4 moves.  
   - Message: “{Your Pokémon} used {Move}!” (+ “It’s super effective!” etc. if applicable).  
   - Opponent’s HP bar and number animate down (e.g. 90 → 65).  
   - If opponent HP ≤ 0 → **opponent fainted** → you win this round/battle.

2. **Opponent turn** (if still alive):  
   - Message: “{Opponent} used {Move}!”  
   - Your Pokémon’s HP bar and number go down.  
   - If your HP ≤ 0 → you lose (or “your Pokémon fainted” and you can switch / end battle).

3. **Next turn** (or next round if you’re doing “best of 3” like the current wild battle).

---

## 6. Where this fits in the app

- **Entry:** From the existing **wild encounter** flow: after “Battle” you could open this **battle page** (new route or overlay) instead of (or in addition to) the current simple math round.  
- **Alternative:** A dedicated “Battle” mode from the main game menu (choose your Pokémon, choose opponent or random wild, then this screen).  

So the design is “a battling page with moves and HP,” and the product can decide whether it replaces the current battle or is an extra mode.

---

## 7. Summary table

| Element | Design choice |
|--------|----------------|
| **Layout** | Two Pokémon (sprites + names), HP bars with numbers, 4 move buttons, message line. |
| **HP amount** | Based on “how strong” the Pokémon is: **recommended** = PokeAPI base HP (scaled), so stronger species have more HP. |
| **HP display** | `current HP / max HP` + visual bar (e.g. green → yellow → red). |
| **Moves** | Up to 4 moves per Pokémon; name, type, power; from PokeAPI (or curated list). |
| **Damage** | Formula using move power, attacker/defender stats, and type effectiveness; subtract from defender’s current HP. |
| **Flow** | Choose attack → message + damage animation → opponent turn (if alive) → repeat until one side hits 0 HP. |

No implementation in the codebase yet; this is a design/spec for when you’re ready to build the battling page.
