# Think Python → Cymraeg

Welsh translation of *Think Python*, 3rd edition (Allen B. Downey, CC BY-NC-SA 4.0),
for free distribution to UK higher-education students — target audience is year 2 CS
undergrads who've completed C and Java modules. Hosted on GitHub Pages from this repo
(`waubrey/think-python-cy`).

## Status

All 19 chapters are translated, built, and pushed. The book builds with zero warnings.
Outstanding: the 🟡 "reasoned" glossary terms (see below) haven't been checked by a
Welsh-medium CS teacher or CBAC yet — that's the one piece of this project that needs
a human, not Claude.

## Build

```bash
pip install -r requirements.txt   # jupyter-book<2 (classic Sphinx-based, NOT v2/Node) + sphinx-tippy
jupyter-book build .
```

Always check the build output for warnings — `WARNING: term not in glossary: 'X'`
means a `{term}`...`` role was added in a chapter but the matching entry was never
added to `glossary.md`, and a cross-reference warning means a `(label)=` anchor is
missing or misplaced. Grep output with:

```bash
jupyter-book build . 2>&1 | grep -iE "WARNING|ERROR|CRITICAL" | grep -v "NotOpenSSL\|urllib3\|^\[01m"
```

Pushing to `main` auto-deploys via `.github/workflows/` to GitHub Pages. Pushing
requires `gh` CLI authenticated (`gh auth login`, then `gh auth refresh -s
repo,workflow` — plain PATs without the `workflow` scope will be rejected by GitHub
when a workflow file is touched).

## Where things live

- `chapters/chapNN.md` — the chapters themselves (MyST Markdown).
- `glossary.md` — the live Sphinx `{glossary}` directive. Every `{term}`...`` role
  used in a chapter must have an *exactly matching* headword here (see gotcha below).
- `TERMINOLOGY.md` — research/sourcing notes, one section per chapter. This is the
  real record of *why* each Welsh term was chosen and how confident the choice is.
  Excluded from the book build (`exclude_patterns` in `_config.yml`).
- `notes/` — personal, gitignored scratch space (e.g. review documents). Never commit
  anything from here.
- `_toc.yml` — chapter order/numbering. `numbered: true` only on the `Penodau` part,
  not the `Atodiadau` (appendices) part.

## Translation conventions

- **Sourcing hierarchy**, most to least authoritative: WJEC/CBAC Welsh-medium GCSE
  (3460CS) and A-level (1500CS) specs → Y Termiadur Addysg
  (termiaduraddysg.cymru — must be driven via a real browser, direct fetches return a
  stale homepage) → Welsh university programme pages (compare Welsh/English versions)
  → reasoned compositional coinage.
- **Confidence flags** in `TERMINOLOGY.md`: ✅ confirmed (sourced from the above) · 🟡
  adopted/reasoned (built from confirmed roots, not itself sourced — good enough to
  ship, flagged for later review) · ⚠️ unconfirmed (don't currently have any of
  these — everything reached at least 🟡).
- **Python code stays in English, always** — keywords, builtins, string literals,
  variable names. This mirrors WJEC's own Welsh-medium pseudocode, which keeps
  `Declare`, `If/Then/Else`, `For/To/Next` etc. in English even in otherwise fully
  Welsh exam materials. Only the surrounding prose is Welsh.
- **Card game vocabulary (ch. 17–18) stays in English** — Spades, Hearts, Jack, Queen,
  King, Ace — because the Python code itself uses these as English string literals
  (`'Spades'`, `'Queen'`). Translating the prose names while the code output stays
  English would disconnect what students read from what they run.
- **Keep `swyddogaeth` (function, programming) and `ffwythiant` (function,
  mathematical) distinct** — easy to slip and use the wrong one.
- When genuinely unsure of a translation, cross-check with Google Translate and note
  the discrepancy rather than guessing.

### Gotcha: `{term}` roles must match the glossary headword exactly

Sphinx-tippy links a `{term}`word`` role to its glossary entry by exact text match.
A mutated Welsh form (treiglad) — e.g. `{term}`ddosbarth rhiant`` when the glossary
headword is `dosbarth rhiant` — breaks the link and produces a
`WARNING: term not in glossary` build warning even though the entry exists. Fix by
rewording the sentence to avoid triggering the mutation inside the role (e.g. swap
`yn ddosbarth rhiant` for `fel dosbarth rhiant`), not by adding a duplicate glossary
entry for the mutated form.

## Next step

Get the 🟡 terms in `TERMINOLOGY.md` checked by a Welsh-medium CS teacher or CBAC's
subject officer (`cyfrifiadureg@cbac.co.uk`). Highest priority: *priodoledd*
(attribute), *Adeiladydd* (constructor), and *enghraifft* (instance) — these recur in
nearly every chapter from 14 onward, so confirming just these three de-risks most of
the book.
