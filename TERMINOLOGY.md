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

## Chapter 1 vocabulary (arithmetic, expressions, basic types)

Added while translating Chapter 1. Y Termiadur Addysg got unreliable for new lookups
(it kept returning its A-Z headword browser instead of real term-pair results), so
most of these are reasoned choices rather than freshly sourced — several are plain,
unambiguous Welsh vocabulary rather than jargon (value, type, natural/formal
language), so the risk is low; the rest are flagged for the same later check as the
OOP terms.

| English | Welsh | Status | Notes |
|---|---|---|---|
| value | gwerth | ✅ | ordinary, unambiguous Welsh word in any context |
| type (kind of value) | math | ✅ | ordinary word; already used via *math data* = data type |
| operator | gweithredydd (pl. *gweithredyddion*) | ✅ | confirmed earlier from the WJEC GCSE spec's own pseudocode text: *"gweithredyddion rhesymegol AC NEU NID"* = "logical operators AND OR NOT" |
| arithmetic operator | gweithredydd rhifyddol | 🟡 | built from the confirmed *gweithredydd* (operator) + standard *rhifyddol* (arithmetic, adj.) — not found as this exact compound |
| expression | mynegiad | 🟡 | plausible/common in Welsh-medium Maths teaching (*mynegiad algebraidd* = algebraic expression), not freshly sourced today |
| operand | gweithredyn | 🟡 | coined in parallel to *gweithredydd* (operator) — lower confidence, worth checking |
| function call | galwad swyddogaeth | 🟡 | compositional, built from confirmed *swyddogaeth* (function) |
| syntax error | gwall cystrawen | 🟡 | *cystrawen* is the standard Welsh linguistics/grammar term for "syntax" — reasonable extension, not confirmed for CS specifically |
| natural language | iaith naturiol | ✅ | transparent, unambiguous compound |
| formal language | iaith ffurfiol | ✅ | transparent, unambiguous compound |
| bug | nam | 🟡 | recognized convention in Welsh software localization (Microsoft/Mozilla Cymraeg use *nam* for "bug"), not verified against a CS-education source |
| debugging / debug | dadnamu | 🟡 | same localization convention as *nam* above (*dad-* + *nam* = "de-fault", i.e. remove the bug) |
| concatenation | cydgatenu | 🟡 | calque matching English's own Latin root (*catena* = chain) — lowest-confidence pick in this batch, worth a second look |

## Chapter 2 vocabulary (statements, modules, debugging categories)

| English | Welsh | Status | Notes |
|---|---|---|---|
| statement | gosodiad | 🟡 | *gosod* = to set/place; very standard-feeling CS sense extension, not freshly sourced |
| assignment statement | gosodiad neilltuad | 🟡 | compositional, built from confirmed *neilltuad* (assignment) |
| state diagram | diagram cyflwr | 🟡 | *cyflwr* = state/condition, transparent compound |
| keyword | allweddair | 🟡 | *allwedd* (key) + *gair* (word) — transparent, low-risk compound |
| import statement | gosodiad mewnforio | 🟡 | *mewnforio* is the standard Welsh verb for "import" generally (trade, IT) |
| dot operator | gweithredydd dot | 🟡 | "dot" borrowed directly rather than using *atalnod llawn* (full stop), since this is the punctuation-as-syntax sense, not prose punctuation |
| evaluate / evaluation | gwerthuso | 🟡 | reused from the general Welsh verb "to evaluate/assess" (same word used for "evaluating trade-offs" in ch1) — dual-use caveat: context should make clear whether it means general assessment or "compute the value of an expression" |
| execution | cyflawniad | 🟡 | *cyflawni* = to accomplish/carry out. Deliberately NOT *gweithrediad*, which is already used for "operation" — avoids a collision between two distinct CS concepts sharing one Welsh word |
| runtime error | gwall rhedeg | 🟡 | *rhedeg* = to run, already used informally for "running" a program/line of code |
| semantic error | gwall semantig | ✅ | direct cognate, low risk |

## Chapter 3 vocabulary (defining functions, stack diagrams, tracebacks)

| English | Welsh | Status | Notes |
|---|---|---|---|
| function definition | diffiniad swyddogaeth | ✅ | *diffiniad* (definition) is ordinary, unambiguous Welsh |
| header (of a function) | pennawd | ✅ | ordinary Welsh word for "header," transparent extension |
| body (of a function) | corff | ✅ | ordinary Welsh word for "body," transparent extension |
| function object | gwrthrych swyddogaeth | 🟡 | compositional, built from two already-confirmed terms |
| stack diagram | diagram pentwr | 🟡 | *pentwr* = stack/pile, transparent compound |
| traceback | hanes galwadau | 🟡 | descriptive phrase ("call history") rather than a coined single word — lowest-confidence pick in this batch, worth a second look if a sourced term turns up |

Reused without change from earlier chapters: *paramedr* (parameter), *dolen* (loop),
*newidyn lleol* (local variable), *ffram* (frame) — all already in the glossary.

## Chapter 4 vocabulary (interface design, turtle graphics)

| English | Welsh | Status | Notes |
|---|---|---|---|
| interface / interface design | rhyngwyneb / dylunio rhyngwyneb | ✅ | *rhyngwyneb* was already confirmed (GUI section) but never actually added to `glossary.md` — fixed now, same gap as *ffram* in ch3 |
| canvas | cynfas | ✅ | ordinary Welsh word for "canvas" (art sense), natural extension |
| encapsulation | amgaead | 🟡 | from *amgáu* (to enclose) — chose this over calquing "amgapsiwleiddio" since it's a real Welsh word, not a borrowing |
| generalization | cyffredinoli | ✅ | ordinary Welsh verb "to generalize" |
| keyword argument | dadl allweddair | ✅ | compositional, both roots already confirmed |
| refactoring | ailstrwythuro | ✅ | from *strwythur* (structure), already used in ch1 — natural, not a calque |
| development plan | cynllun datblygu | ✅ | ordinary words, transparent |
| implementation | sylweddoliad | 🟡 | deliberately distinct from *gweithrediad* (operation) and *cyflawniad* (execution) to avoid a three-way collision — from *sylweddoli* (to realize/bring into being), distinct in sense from *gwireddu* (already "verify") |
| docstring | llinyn dogfennu | 🟡 | compositional ("documentation string"); some Welsh CS material may just borrow "docstring" directly as a loanword instead — worth a second look |
| multiline string | llinyn aml-linell | ✅ | transparent compound |
| precondition / postcondition | rhag-amod / ôl-amod | ✅ | *amod* = condition (ordinary word, used in legal/contractual Welsh too), with standard *rhag-*/*ôl-* prefixes |

## Chapter 5 vocabulary (conditionals, recursion)

| English | Welsh | Status | Notes |
|---|---|---|---|
| modulus operator | gweithredydd modwlws | 🟡 | *modwlws* borrowed directly — reasonable since it's an international mathematical term |
| boolean expression | mynegiad Boole | ✅ | compositional, both roots already confirmed |
| relational operator | gweithredydd perthynol | ✅ | *perthynol* (relational) from *perthyn* (to relate/belong) |
| logical operator | gweithredydd rhesymegol | ✅ | already confirmed from the WJEC spec's own pseudocode ("gweithredyddion rhesymegol") |
| conditional statement | gosodiad amodol | ✅ | both roots already established |
| condition | amod | ✅ | already implicit via *rhag-amod*/*ôl-amod*, now added as its own entry |
| block | bloc | ✅ | direct cognate, unambiguous |
| branch | cangen | ✅ | ordinary Welsh word for tree branch, natural extension |
| chained conditional | amodol cadwynol | 🟡 | *cadwynol* (chained) from *cadwyn* (chain) |
| nested conditional | amodol nythol | 🟡 | *nythol* (nested) from *nyth* (nest) |
| base case | achos sylfaenol | ✅ | ordinary words |
| infinite recursion | dychweliad anfeidrol | ✅ | *dychweliad* (recursion) already confirmed; *anfeidrol* = infinite, ordinary word |
| newline | llinell newydd | ✅ | transparent |

Reused without change: *dychweliad* / *dychweliadol* (recursion/recursive, confirmed
earlier via Y Termiadur Addysg).

## Chapter 6 vocabulary (return values, incremental development, recursion)

| English | Welsh | Status | Notes |
|---|---|---|---|
| return value | gwerth dychwelyd | ✅ | compositional, both roots already confirmed |
| pure function | swyddogaeth bur | ✅ | *pur* = pure, ordinary Welsh adjective |
| dead code | cod marw | ✅ | transparent |
| incremental development | datblygiad graddol | 🟡 | *graddol* = gradual, chosen over a clunkier neologism for "incremental" |
| scaffolding | sgaffaldiau | ✅ | genuinely the ordinary Welsh word for physical scaffolding, natural metaphor extension |
| Turing complete | Turing-gyflawn | 🟡 | named technical compound — kept "Turing" capitalized/untranslated, as a proper noun |
| input validation | dilysu mewnbwn | ✅ | both roots already confirmed |

## Chapter 7 vocabulary (loops over strings/files, updating variables, doctests)

| English | Welsh | Status | Notes |
|---|---|---|---|
| loop variable | newidyn dolen | ✅ | compositional, both roots already confirmed |
| file object | gwrthrych ffeil | ✅ | compositional |
| method | dull | ✅ | already confirmed (UWTSD OOP research) |
| update (assignment) | diweddariad | ✅ | ordinary Welsh word for "update" |
| initialize | cychwyn | ✅ | ordinary Welsh verb "to start/initiate" |
| increment / decrement | cynyddu / lleihau | ✅ | ordinary Welsh verbs "increase"/"decrease" |
| augmented assignment operator | gweithredydd neilltuo estynedig | 🟡 | compositional, "estynedig" = extended/augmented |
| pass (a test) | llwyddo | ✅ | ordinary Welsh verb "to succeed" |
| fail (a test) | methu | ✅ | ordinary Welsh verb "to fail" |

Reused without change: *cyfrif* (counter), *dull* (method), *chwiliad llinol*
(linear search) — all already in the glossary.

## Chapter 8 vocabulary (string indexing/slicing, regular expressions, files)

| English | Welsh | Status | Notes |
|---|---|---|---|
| slice (noun) | sleisen | ✅ | ordinary Welsh word ("sleisen o fara" = slice of bread); verb *sleisio* already confirmed |
| empty string | llinyn gwag | ✅ | transparent |
| immutable | anghyfnewidiol | 🟡 | *an-* + *cyfnewid* (exchange/change) + *-iol* — coined but from standard roots |
| invocation (method call) | galwad dull | ✅ | compositional, both roots already confirmed |
| regular expression | mynegiad rheolaidd | ✅ | compositional |
| pattern | patrwm | ✅ | ordinary Welsh word |
| string substitution | amnewid llinynnau | ✅ | *amnewid* = ordinary Welsh word for "substitute/replace" |
| shell command | gorchymyn shell | 🟡 | "shell" kept as a loanword — this is specifically about the Unix/command-line sense, which doesn't map onto the physical "shell/husk" metaphor in Welsh |

Reused without change: *dilyniant* (sequence), *nod* (character), *mynegai*
(index), *gwrthrych* (object) — all already in the glossary.

## Chapter 9 vocabulary (lists, objects/values, aliasing)

| English | Welsh | Status | Notes |
|---|---|---|---|
| element | elfen | ✅ | ordinary Welsh word |
| nested list | rhestr nythol | ✅ | reuses *nythol* (nested) coined in ch5 |
| delimiter | terfynydd | 🟡 | from *terfyn* (boundary/end), ordinary root |
| equivalent | cyfwerth | ✅ | ordinary Welsh word, used in maths too |
| identical | unfath | ✅ | *un* (one) + *math* (type) — nice reuse of the already-confirmed *math* root |
| reference | cyfeiriad | ✅ | ordinary word, also means "address" — context disambiguates |
| aliased / to alias | arallenwi / wedi'i arallenwi | 🟡 | coined from *arall* (other) + *enw* (name) — "other-naming." Lowest-confidence pick this chapter, worth a second look |

Reused without change: *priodoledd* (attribute, from the ch1 OOP decisions).

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
