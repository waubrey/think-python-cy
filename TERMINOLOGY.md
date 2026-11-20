# Think Python → Welsh: Technical Glossary (sourcing notes)

Sourced from official WJEC/CBAC Welsh-medium exam specifications — the terms actually
used in Welsh-medium Computer Science classrooms in Wales — not invented or
machine-translated.

This file is the research record (sources, status, reasoning). The actual rendered
glossary page shown to readers lives in [`glossary.md`](glossary.md) as a Sphinx
`{glossary}` directive, paired with `{term}`...`` markup throughout the chapters for
hover tooltips (via `sphinx-tippy`).

- **GCSE Computer Science (3460CS), Welsh-medium specification** —
  https://www.cbac.co.uk/media/e1jb2llb/wjec-gcse-computer-science-specification-w.pdf
- **GCSE Unit 2 Example Assessment Materials (Python-specific, pseudocode glossary)** —
  https://www.cbac.co.uk/media/h2wpgb4g/tgau-cyfrifiadureg-uned-2-rhaglennu-cyfrifiadurol.pdf
- **A-level Computer Science (1500CS), Welsh-medium specification** —
  https://www.cbac.co.uk/media/dbrcm5ur/wjec-gce-comp-science-spec-from-2015-w.pdf
- **Y Termiadur Addysg** (Welsh Government education terminology database) —
  https://www.termiaduraddysg.cymru/ — used for the few terms not found in the specs.
- **UWTSD MSc Software Engineering programme page** (Welsh + English versions, compared
  side by side) — real OOP vocabulary from a Welsh university, though note the course
  itself is taught in English, so this is a marketing translation rather than live
  pedagogical/exam terminology:
  https://www.uwtsd.ac.uk/cy/rhaglen-chyrsiau/ol-raddedig/cyfrifiadura/peirianneg-meddalwedd-llawn-amser-llawn-amser-abertawe

Status key: **✅ confirmed** = found directly in an official spec. **🟡 adopted (working
term)** = decided on deliberately, but not backed by a found source — good enough to
start translating with, revisit if a better-sourced term surfaces. **⚠️ unconfirmed** =
genuinely open; don't commit to it without checking with a Welsh-medium CS teacher, the
CBAC subject officer (cyfrifiadureg@cbac.co.uk), or the Atebol A-level Welsh-medium CS
textbook.

## Core language / data

| English | Welsh | Status | Notes |
|---|---|---|---|
| variable | newidyn (pl. *newidynnau*) | ✅ | |
| assignment | neilltuad | ✅ | |
| data type | math data (pl. *mathau data*) | ✅ | |
| integer | cyfanrif | ✅ | |
| float / real number | real | ✅ | used as the data-type name in the Python unit |
| string | llinyn | ✅ | |
| character | nod | ✅ | |
| boolean | Boole / boole | ✅ | True/False rendered as CYWIR/ANGHYWIR in pseudocode |
| list | rhestr (pl. *rhestri*) | ✅ | spec notes it "works like arrays in other languages" |
| array | arae (pl. *araeau*) | ✅ | |
| tuple | tŵpl (pl. *tŵpls*) | ✅ | |
| dictionary | geiriadur | ✅ | same word as "dictionary" (book) |
| index | mynegai (pl. *mynegeion*) | ✅ | spec context is DB indexes, but same term applies |
| slicing | sleisio | ✅ | |
| key (dict/DB) | allwedd (pl. *allweddi*) | ✅ | |

## Control flow

| English | Welsh | Status | Notes |
|---|---|---|---|
| sequence | dilyniant | ✅ | one of the 3 constructs: *dilyniant, detholiad, iteriad* |
| selection (if/else) | detholiad | ✅ | |
| iteration | iteriad | ✅ | used in running prose |
| loop | dolen | ✅ | e.g. *dolen ddiddiwedd* = infinite loop |
| iteration (as a heading) | Ailadrodd | ✅ | the spec's own pseudocode-glossary heading for the loop-construct table |
| counter | cyfrif | ✅ | |
| sentinel/rogue value | gwalchwerth | ✅ | nice precise CS term, not a literal translation |

## Functions / procedures

| English | Welsh | Status | Notes |
|---|---|---|---|
| function | swyddogaeth | ✅ | used for programming functions in the Python unit |
| function (mathematical) | ffwythiant | ✅ | reserve this for the maths sense, not `def` |
| procedure / subroutine | isreolwaith (pl. *isreolweithiau*) | ✅ | |
| parameter | paramedr (pl. *paramedrau*) | ✅ | |
| argument | dadl (pl. *dadleuon*) | ✅ | |
| return (verb) | dychwelyd | ✅ | |
| input (verb / noun) | mewnbynnu / mewnbwn (pl. *mewnbynnau*) | ✅ | |
| output (verb / noun) | allbynnu / allbwn (pl. *allbynnau*) | ✅ | |
| comment (noun, in code) | sylwad (pl. *sylwadau*) | ✅ | |
| annotate code (verb) | anodi | ✅ | distinct from *sylwad* — annotating/commenting as an action |
| self-documenting identifier | dynodwr hunanddogfennu | ✅ | |

## OOP (Think Python ch. 14–17)

| English | Welsh | Status | Notes |
|---|---|---|---|
| class | dosbarth | ✅ | from A-level spec: *perthynas rhwng gwrthrych, dosbarth a dull* |
| object | gwrthrych | ✅ | |
| method | dull (pl. *dulliau*) | ✅ | |
| inheritance | etifeddiaeth | ✅ | confirmed by UWTSD MSc page: *"patrymau dylunio, etifeddiaeth, a pholymorffiaeth"* (design patterns, inheritance, polymorphism) in a genuine OOP module description |
| polymorphism | polymorffiaeth | ✅ | UWTSD MSc page, same sentence as above |
| object-oriented programming | Rhaglennu Gwrthrych-gyfeiriadol / Rhaglennu sy'n Canolbwyntio ar Wrthrychau | ✅ | UWTSD uses both forms — the first as the formal module title, the second in body prose |
| attribute (object property) | priodoledd | 🟡 | Wayne's call, not found in an official source — revisit if a better-sourced term turns up |
| constructor (`__init__`) | Adeiladydd | 🟡 | Wayne's call, not found in an official source — revisit if a better-sourced term turns up |
| instance | enghraifft | 🟡 | Wayne's call. Considered *achlysur* (rejected — wrong metaphor, means "occasion") and *gwireddu* (rejected — already confirmed elsewhere as "verify", would collide with the testing/QA sense). *Enghraifft* fits the pattern of ordinary words taking on precise technical senses (cf. *dull* = method, *dadl* = argument), and matches English's own "instance ≈ example" metaphor, but isn't confirmed in any source yet. Adopted as the working term until something better turns up; for the verb "instantiate", consider paraphrasing as "creu enghraifft o [ddosbarth]" rather than inventing a dedicated verb. |

## Errors / testing / files

| English | Welsh | Status | Notes |
|---|---|---|---|
| exception | eithriad (pl. *eithriadau*) | ✅ | "trin eithriadau" = exception handling |
| validate | dilysu | ✅ | |
| verify | gwireddu | ✅ | |
| file handling | trin ffeiliau | ✅ | |
| string manipulation | trin llinynnau / manipiwleiddio llinynnau | ✅ | both forms appear |
| test data | prawf-ddata | ✅ | |
| recursion | dychweliad | ✅ | Y Termiadur Addysg |
| recursive | dychweliadol | ✅ | Y Termiadur Addysg |
| recursive algorithm | algorithm dychweliadol | ✅ | Y Termiadur Addysg |

## Misc / infrastructure

| English | Welsh | Status | Notes |
|---|---|---|---|
| program / programming / programmer | rhaglen / rhaglennu / rhaglennydd | ✅ | |
| module | modiwl (pl. *modiwlau*) | ✅ | |
| library | llyfrgell (pl. *llyfrgelloedd*) | ✅ | |
| algorithm | algorithm | ✅ | direct borrowing |
| linear search / binary search | chwiliad llinol / chwiliad deuaidd | ✅ | |
| bubble / selection / insertion sort | trefniad bwrlwm / trefniad detholiadol / trefniad mewnosod | ✅ | |
| local / global variable | newidyn lleol / newidyn eang | ✅ | |
| GUI | Rhyngwyneb Defnyddiwr Graffigol (GUI) | ✅ | |
| widget | teclyn (pl. *teclynnau*) | ✅ | |
| window / frame / button | ffenestr(i) / ffram(iau) / botwm (*botymau*) | ✅ | |

## Important pattern to carry into translation

In the official WJEC pseudocode (used throughout the Welsh-medium exam), **programming
keywords themselves stay in English** even in an otherwise fully-Welsh document —
`Declare`, `Set`, `Input`, `Output`, `If/Then/Else`, `For/To/Next`, `Exit For`, etc. are
never translated; only the surrounding explanatory prose is Welsh. This is useful
precedent for translating Think Python: Python code stays as real Python (obviously),
and code comments can go either way, but there's no expectation in Welsh-medium CS
teaching that keywords/syntax get Welsh names.

## Next steps before locking the 🟡 terms in

1. Run the 🟡 adopted terms (attribute → priodoledd, constructor → Adeiladydd,
   instance → enghraifft) past a Welsh-medium CS teacher or CBAC's subject officer
   (cyfrifiadureg@cbac.co.uk) when the opportunity arises, or check the Atebol A-level
   Welsh-medium textbook (*UG/Safon Uwch Cyfrifiadureg ar gyfer CBAC*) if you can get a
   copy. They're good enough to translate with now — no need to block on this. Other
   Welsh university computing programme pages (compare Welsh vs English versions, like
   the UWTSD one above) are worth trying too if one surfaces.
2. When terms go into actual sentences (not just this dictionary-form table), run them
   through Cysill Ar-lein (https://www.cysgliad.com/cysill/arlein/) to check mutations
   (treiglad) are correct in context.
3. Keep "swyddogaeth" vs "ffwythiant" distinction consistent throughout — easy to slip
   and use the wrong one once translation is underway.
