# Meddwl yn Python

Cyfieithiad Cymraeg o [*Think Python*, 3ydd Argraffiad](https://allendowney.github.io/ThinkPython/)
gan Allen B. Downey, ar gael am ddim i fyfyrwyr addysg uwch yn y DU.

A Welsh translation of *Think Python*, 3rd Edition, by Allen B. Downey, made freely
available to UK higher education students.

## Trwydded / License

Mae'r gwaith hwn, fel y gwaith gwreiddiol, wedi'i drwyddedu dan
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — gweler
[`LICENSE`](LICENSE). Nid yw ar gael i'w ddefnyddio at ddibenion masnachol, a rhaid i
unrhyw waith sy'n deillio ohono gario'r un drwydded.

This work, like the original, is licensed under CC BY-NC-SA 4.0 — see
[`LICENSE`](LICENSE). No commercial use, and any derivative work must carry the same
license.

## Strwythur / Structure

- `chapters/` — pob pennod (`chap00.md` = Rhagair, `chap01.md`–`chap19.md`). Mae pob
  ffeil eto i'w chyfieithu yn cario bocs rhybudd "Statws cyfieithu" ar y brig.
- `glossary.md` — tudalen restr termau'r llyfr (Sphinx `{glossary}` directive), wedi'i
  pharu â marcio `{term}`...`` drwy'r penodau i roi bybls hofran dros dermau technegol.
- `TERMINOLOGY.md` — nodiadau ymchwil llawn ar gyfer pob term: ffynhonnell, lefel
  hyder, a rhesymeg. Dechreuwch yma cyn ychwanegu term newydd i `glossary.md`.

- `chapters/` — every chapter (`chap00.md` = Preface, `chap01.md`–`chap19.md`). Each
  not-yet-translated file carries a "translation status" warning box at the top.
- `glossary.md` — the book's glossary page (a Sphinx `{glossary}` directive), paired
  with `{term}`...`` markup throughout the chapters to give hover tooltips.
- `TERMINOLOGY.md` — full research notes for every term: source, confidence level,
  reasoning. Start here before adding a new term to `glossary.md`.

## Sut i gyfieithu pennod / How to translate a chapter

Ym mhob ffeil pennod, ysgrifennwch ryddiaith Gymraeg a lapiwch unrhyw derm technegol
sydd eisoes yn `glossary.md` mewn marcio `{term}`...``` fel hyn:

In each chapter file, write Welsh prose and wrap any technical term that's already in
`glossary.md` in `` {term}`...` `` markup like this:

```markdown
Mae angen i ni storio gwerthoedd mewn {term}`newidyn`.
```

Mae cod Python yn aros fel y mae — peidiwch â'i gyfieithu.
Python code stays exactly as-is — don't translate it.

## Adeiladu'n lleol / Build locally

```bash
pip install -r requirements.txt
jupyter-book build .
```

Agorwch `_build/html/index.html` mewn porwr i weld y canlyniad.
Open `_build/html/index.html` in a browser to see the result.

## Cyhoeddi / Publishing

Mae `.github/workflows/deploy.yml` yn adeiladu ac yn cyhoeddi'r llyfr i GitHub Pages
yn awtomatig ar bob push i `main`. Ar ôl creu'r repo go iawn ar GitHub:

The included GitHub Actions workflow builds and publishes the book to GitHub Pages
automatically on every push to `main`. After creating the real repo on GitHub:

1. Diweddarwch `repository.url` yn `_config.yml` i gyfeiriad eich repo.
   Update `repository.url` in `_config.yml` to point at your repo.
2. Ewch i Settings → Pages ar GitHub, a gosodwch y ffynhonnell i gangen `gh-pages`.
   Go to Settings → Pages on GitHub and set the source to the `gh-pages` branch.

## Diolchiadau / Acknowledgements

Gwaith gwreiddiol: *Think Python*, 3ydd Argraffiad, (c) 2023 Allen B. Downey.
https://allendowney.github.io/ThinkPython/

Terminoleg wedi'i ffynonellu o fanylebau cyfrwng Cymraeg WJEC/CBAC — gweler
`TERMINOLOGY.md` am y manylion llawn.

Original work: *Think Python*, 3rd Edition, © 2023 Allen B. Downey.
Terminology sourced from WJEC/CBAC Welsh-medium specifications — see `TERMINOLOGY.md`
for full details.
