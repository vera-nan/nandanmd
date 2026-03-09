# My Pokémon Collection

A simple collector site for a Pokémon fan. Uses [PokeAPI](https://pokeapi.co) for Gen 1 (151) Pokémon and official artwork.

## How to use

1. Open `index.html` in a browser (or run a local server from this folder, e.g. `python3 -m http.server 8080` then visit http://localhost:8080). The site root is the **landing page**; click **Play the game** to open the game.
2. In the game (`game.html`): tap/click a Pokémon card to add it to your collection (tap again to remove).
3. Progress bar and badges update as you collect. Your collection is saved in the browser (localStorage).
4. Use **All** / **Collected** / **Missing** to filter the grid.

## Files

- `index.html` – landing page (hero, CTA to play, links to Teachers/Students/Families)
- `game.html` – playable game (grid, trivia, math challenge, catch flow)
- `styles.css` – layout and theme
- `app.js` – fetches PokeAPI, handles collection and filters

No build step. Works offline after first load (images are from PokeAPI CDN).

## Deploy to the web (e.g. game.veralogiq.com)

To put the whole site on GitHub and serve it at a subdomain like **game.veralogiq.com**, see **DEPLOY.md** in this folder for step-by-step: create repo, push the **veralogiq** folder (the game app), enable GitHub Pages, and point the subdomain in DNS.
