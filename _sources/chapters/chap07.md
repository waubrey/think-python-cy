# Iteriad a Chwilio

Yn 1939 cyhoeddodd Ernest Vincent Wright nofel 50,000 gair o'r enw *Gadsby* nad
yw'n cynnwys y llythyren "e". Gan mai "e" yw'r llythyren fwyaf cyffredin yn
Saesneg, mae ysgrifennu hyd yn oed ychydig eiriau heb ei defnyddio'n anodd. I
gael syniad o ba mor anodd, yn y bennod hon byddwn yn cyfrifo'r ffracsiwn o
eiriau Saesneg sydd ag o leiaf un "e".

I wneud hynny, byddwn yn defnyddio gosodiadau `for` i ddolennu drwy'r
llythrennau mewn llinyn a'r geiriau mewn ffeil, a byddwn yn diweddaru
newidynnau mewn dolen i gyfrif nifer y geiriau sy'n cynnwys "e". Byddwn yn
defnyddio'r gweithredydd `in` i wirio a yw llythyren yn ymddangos mewn gair, a
byddwch yn dysgu patrwm rhaglennu o'r enw "chwiliad llinol".

Fel ymarfer, byddwch yn defnyddio'r arfau hyn i ddatrys pos geiriau o'r enw
"Spelling Bee".

## Dolenni a Llinynnau

Ym Mhennod 3 gwelsom ddolen `for` sy'n defnyddio'r swyddogaeth `range` i
ddangos dilyniant o rifau.

```python
for i in range(3):
    print(i, end=' ')
```

Mae'r fersiwn hon yn defnyddio'r ddadl allweddair `end` fel bod y swyddogaeth
`print` yn rhoi bwlch ar ôl pob rhif yn hytrach na llinell newydd.

Gallwn hefyd ddefnyddio dolen `for` i ddangos y llythrennau mewn llinyn.

```python
for letter in 'Gadsby':
    print(letter, end=' ')
```

Sylwch i mi newid enw'r newidyn o `i` i `letter`, sy'n rhoi mwy o wybodaeth
am y gwerth y mae'n cyfeirio ato. Gelwir y newidyn a ddiffinnir mewn dolen
`for` yn **{term}`newidyn dolen`**.

Nawr ein bod yn gallu dolennu drwy'r llythrennau mewn gair, gallwn wirio a
yw'n cynnwys y llythyren "e".

```python
for letter in "Gadsby":
    if letter == 'E' or letter == 'e':
        print('This word has an "e"')
```

Cyn i ni fynd ymlaen, gadewch i ni amgáu'r ddolen honno mewn swyddogaeth.

```python
def has_e():
    for letter in "Gadsby":
        if letter == 'E' or letter == 'e':
            print('This word has an "e"')
```

A gadewch i ni ei gwneud yn swyddogaeth bur sy'n dychwelyd `True` os yw'r gair
yn cynnwys "e" a `False` fel arall.

```python
def has_e():
    for letter in "Gadsby":
        if letter == 'E' or letter == 'e':
            return True
    return False
```

Gallwn ei chyffredinoli i gymryd y gair fel paramedr.

```python
def has_e(word):
    for letter in word:
        if letter == 'E' or letter == 'e':
            return True
    return False
```

Nawr gallwn ei phrofi fel hyn:

```python
has_e('Gadsby')
```

```python
has_e('Emma')
```

## Darllen y Rhestr Eiriau

I weld sawl gair sy'n cynnwys "e", bydd angen rhestr eiriau arnom. Yr un y
byddwn yn ei defnyddio yw rhestr o tua 114,000 o eiriau croesair swyddogol;
hynny yw, geiriau a ystyrir yn ddilys mewn posau croesair a gemau geiriau
eraill.

Mae'r gell ganlynol yn lawrlwytho'r rhestr eiriau, sy'n fersiwn addasedig o
restr a gasglwyd ac a gyfrannwyd i'r parth cyhoeddus gan Grady Ward fel rhan o
brosiect geiriadur Moby (gweler
<http://wikipedia.org/wiki/Moby_Project>).

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt');
```

Mae'r rhestr eiriau mewn ffeil o'r enw `words.txt`, a lawrlwythir yn y
llyfr nodiadau ar gyfer y bennod hon. I'w darllen, byddwn yn defnyddio'r
swyddogaeth gynhenid `open`, sy'n cymryd enw'r ffeil fel paramedr ac yn
dychwelyd **{term}`gwrthrych ffeil`** y gallwn ei ddefnyddio i ddarllen y
ffeil.

```python
file_object = open('words.txt')
```

Mae'r gwrthrych ffeil yn darparu swyddogaeth o'r enw `readline`, sy'n darllen
nodau o'r ffeil nes iddi gyrraedd llinell newydd ac yn dychwelyd y canlyniad
fel llinyn:

```python
file_object.readline()
```

Sylwch fod y gystrawen ar gyfer galw `readline` yn wahanol i swyddogaethau
rydym wedi'u gweld hyd yn hyn. Mae hynny am ei bod yn **{term}`dull`**, sef
swyddogaeth sy'n gysylltiedig â gwrthrych. Yn yr achos hwn mae `readline`
ynghlwm wrth y gwrthrych ffeil, felly rydym yn ei galw gan ddefnyddio enw'r
gwrthrych, y gweithredydd dot, ac enw'r dull.

Y gair cyntaf yn y rhestr yw "aa", math o lafa. Mae'r dilyniant `\n` yn
cynrychioli'r nod llinell newydd sy'n gwahanu'r gair hwn oddi wrth y nesaf.

Mae'r gwrthrych ffeil yn cadw golwg ar ble mae yn y ffeil, felly os galwch
`readline` eto, cewch y gair nesaf:

```python
line = file_object.readline()
line
```

I dynnu'r llinell newydd o ddiwedd y gair, gallwn ddefnyddio `strip`, sy'n
ddull sy'n gysylltiedig â llinynnau, felly gallwn ei alw fel hyn.

```python
word = line.strip()
word
```

Mae `strip` yn tynnu nodau gwag — gan gynnwys bylchau, tabiau, a llinellau
newydd — o ddechrau a diwedd y llinyn.

Gallwch hefyd ddefnyddio gwrthrych ffeil fel rhan o ddolen `for`. Mae'r
rhaglen hon yn darllen `words.txt` ac yn argraffu pob gair, un bob llinell:

```python
for line in open('words.txt'):
    word = line.strip()
    print(word)
```

Nawr ein bod yn gallu darllen y rhestr eiriau, y cam nesaf yw eu cyfrif. I
wneud hynny, bydd angen y gallu i ddiweddaru newidynnau.

## Diweddaru Newidynnau

Fel y gwnaethoch efallai ddarganfod, mae'n gyfreithlon gwneud mwy nag un
neilltuad i'r un newidyn. Mae neilltuad newydd yn gwneud i newidyn presennol
gyfeirio at werth newydd (a pheidio â chyfeirio at yr hen werth).

Er enghraifft, dyma neilltuad cychwynnol sy'n creu newidyn.

```python
x = 5
x
```

A dyma neilltuad sy'n newid gwerth newidyn.

```python
x = 7
x
```

Mae'r ffigur canlynol yn dangos sut mae'r neilltuadau hyn yn edrych mewn
diagram cyflwr.

```python
from diagram import make_rebind, draw_bindings

bindings = make_rebind('x', [5, 7])
```

```python
from diagram import diagram, adjust

width, height, x, y = [0.54, 0.61, 0.07, 0.45]
ax = diagram(width, height)
bbox = draw_bindings(bindings, ax, x, y)
# adjust(x, y, bbox)
```

Mae'r saeth ddotiog yn dangos nad yw `x` yn cyfeirio at `5` mwyach. Mae'r
saeth solet yn dangos ei bod bellach yn cyfeirio at `7`.

Math cyffredin o neilltuad yw **{term}`diweddariad`**, lle mae gwerth newydd
y newidyn yn dibynnu ar yr hen un.

```python
x = 7
```

```python
x = x + 1
x
```

Mae'r gosodiad hwn yn golygu "cymerwch werth cyfredol `x`, ychwanegwch un, a
neilltuwch y canlyniad yn ôl i `x`."

Os ceisiwch ddiweddaru newidyn nad yw'n bodoli, cewch wall, am fod Python yn
gwerthuso'r mynegiad ar y dde cyn iddo neilltuo gwerth i'r newidyn ar y
chwith.

```python
%%expect NameError

z = z + 1
```

Cyn y gallwch ddiweddaru newidyn, mae'n rhaid i chi ei **{term}`cychwyn`**,
fel arfer gyda neilltuad syml:

```python
z = 0
z = z + 1
z
```

Gelwir cynyddu gwerth newidyn yn **{term}`cynyddu`**; gelwir lleihau'r gwerth
yn **{term}`lleihau`**. Am fod y gweithrediadau hyn mor gyffredin, mae Python
yn darparu **{term}`gweithredydd neilltuo estynedig`**ion sy'n diweddaru
newidyn yn fwy cryno. Er enghraifft, mae'r gweithredydd `+=` yn cynyddu
newidyn gan y swm penodol.

```python
z += 2
z
```

Mae gweithredyddion neilltuo estynedig ar gyfer y gweithredyddion rhifyddol
eraill, gan gynnwys `-=` a `*=`.

## Dolennu a Chyfrif

Mae'r rhaglen ganlynol yn cyfrif nifer y geiriau yn y rhestr eiriau.

```python
total = 0

for line in open('words.txt'):
    word = line.strip()
    total += 1
```

Mae'n dechrau drwy gychwyn `total` i `0`. Bob tro drwy'r ddolen, mae'n cynyddu
`total` gan `1`. Felly pan fydd y ddolen yn dod i ben, mae `total` yn cyfeirio
at gyfanswm nifer y geiriau.

```python
total
```

Gelwir newidyn fel hwn, a ddefnyddir i gyfrif nifer y troeon y mae rhywbeth yn
digwydd, yn **{term}`cyfrif`**.

Gallwn ychwanegu ail gyfrif at y rhaglen i gadw golwg ar nifer y geiriau sy'n
cynnwys "e".

```python
total = 0
count = 0

for line in open('words.txt'):
    word = line.strip()
    total = total + 1
    if has_e(word):
        count += 1
```

Gadewch i ni weld faint o eiriau sy'n cynnwys "e".

```python
count
```

Fel canran o `total`, mae tua dwy ran o dair o'r geiriau'n defnyddio'r
llythyren "e".

```python
count / total * 100
```

Felly gallwch ddeall pam ei bod yn anodd llunio llyfr heb ddefnyddio
unrhyw eiriau o'r fath.

## Y Gweithredydd in

Mae'r fersiwn o `has_e` a ysgrifennom yn y bennod hon yn fwy cymhleth nag
sydd angen. Mae Python yn darparu gweithredydd, `in`, sy'n gwirio a yw nod yn
ymddangos mewn llinyn.

```python
word = 'Gadsby'
'e' in word
```

Felly gallwn ailysgrifennu `has_e` fel hyn.

```python
def has_e(word):
    if 'E' in word or 'e' in word:
        return True
    else:
        return False
```

Ac am fod gan amod y gosodiad `if` werth Boole, gallwn ddileu'r gosodiad `if`
a dychwelyd y Boole yn uniongyrchol.

```python
def has_e(word):
    return 'E' in word or 'e' in word
```

Gallwn symleiddio'r swyddogaeth hon hyd yn oed yn fwy gan ddefnyddio'r dull
`lower`, sy'n trosi'r llythrennau mewn llinyn yn llythrennau bach. Dyma
enghraifft.

```python
word.lower()
```

Mae `lower` yn gwneud llinyn newydd — nid yw'n addasu'r llinyn presennol —
felly nid yw gwerth `word` yn newid.

```python
word
```

Dyma sut gallwn ddefnyddio `lower` yn `has_e`.

```python
def has_e(word):
    return 'e' in word.lower()
```

```python
has_e('Gadsby')
```

```python
has_e('Emma')
```

## Chwilio

Ar sail y fersiwn symlach hon o `has_e`, gadewch i ni ysgrifennu swyddogaeth
fwy cyffredinol o'r enw `uses_any` sy'n cymryd ail baramedr sy'n llinyn o
lythrennau. Mae'n dychwelyd `True` os yw'r gair yn defnyddio unrhyw un o'r
llythrennau a `False` fel arall.

```python
def uses_any(word, letters):
    for letter in word.lower():
        if letter in letters.lower():
            return True
    return False
```

Dyma enghraifft lle mae'r canlyniad yn `True`.

```python
uses_any('banana', 'aeiou')
```

Ac un arall lle mae'n `False`.

```python
uses_any('apple', 'xyz')
```

Mae `uses_any` yn trosi `word` a `letters` yn llythrennau bach, felly mae'n
gweithio gydag unrhyw gyfuniad o briflythrennau a llythrennau bach.

```python
uses_any('Banana', 'AEIOU')
```

Mae strwythur `uses_any` yn debyg i `has_e`. Mae'n dolennu drwy'r llythrennau
yn `word` ac yn eu gwirio fesul un. Os yw'n darganfod un sy'n ymddangos yn
`letters`, mae'n dychwelyd `True` ar unwaith. Os yw'n mynd yr holl ffordd
drwy'r ddolen heb ddarganfod yr un, mae'n dychwelyd `False`.

Gelwir y patrwm hwn yn **{term}`chwiliad llinol`**. Yn yr ymarferion ar
ddiwedd y bennod hon, byddwch yn ysgrifennu rhagor o swyddogaethau sy'n
defnyddio'r patrwm hwn.

## Doctest

Ym Mhennod 4 ({ref}`section_docstring`) defnyddiom linyn dogfennu i ddogfennu
swyddogaeth — hynny yw, i esbonio beth mae'n ei wneud. Mae hefyd yn bosibl
defnyddio llinyn dogfennu i *brofi* swyddogaeth. Dyma fersiwn o `uses_any`
gyda llinyn dogfennu sy'n cynnwys profion.

```python
def uses_any(word, letters):
    """Checks if a word uses any of a list of letters.
    
    >>> uses_any('banana', 'aeiou')
    True
    >>> uses_any('apple', 'xyz')
    False
    """
    for letter in word.lower():
        if letter in letters.lower():
            return True
    return False
```

Mae pob prawf yn dechrau gyda `>>>`, a ddefnyddir fel anogiad mewn rhai
amgylcheddau Python i nodi ble gall y defnyddiwr deipio cod. Mewn doctest,
caiff yr anogiad ei ddilyn gan fynegiad, fel arfer galwad swyddogaeth. Mae'r
llinell ganlynol yn dangos y gwerth y dylai fod gan y mynegiad os yw'r
swyddogaeth yn gweithio'n gywir.

Yn yr enghraifft gyntaf, mae `'banana'` yn defnyddio `'a'`, felly dylai'r
canlyniad fod yn `True`. Yn yr ail enghraifft, nid yw `'apple'` yn defnyddio
unrhyw un o `'xyz'`, felly dylai'r canlyniad fod yn `False`.

I redeg y profion hyn, mae'n rhaid i ni fewnforio'r modiwl `doctest` a rhedeg
swyddogaeth o'r enw `run_docstring_examples`. I wneud y swyddogaeth hon yn
haws ei defnyddio, ysgrifennais y swyddogaeth ganlynol, sy'n cymryd gwrthrych
swyddogaeth fel dadl.

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)
```

Nid ydym wedi dysgu am `globals` ac `__name__` eto — gallwch eu hanwybyddu.
Nawr gallwn brofi `uses_any` fel hyn.

```python
run_doctests(uses_any)
```

Mae `run_doctests` yn darganfod y mynegiadau yn y llinyn dogfennu ac yn eu
gwerthuso. Os yw'r canlyniad yn werth disgwyliedig, mae'r prawf yn
**{term}`llwyddo`**. Fel arall mae'n **{term}`methu`**.

Os yw pob prawf yn llwyddo, nid yw `run_doctests` yn dangos unrhyw allbwn —
yn yr achos hwnnw, dim newyddion yw newyddion da. I weld beth sy'n digwydd
pan fydd prawf yn methu, dyma fersiwn anghywir o `uses_any`.

```python
def uses_any_incorrect(word, letters):
    """Checks if a word uses any of a list of letters.
    
    >>> uses_any_incorrect('banana', 'aeiou')
    True
    >>> uses_any_incorrect('apple', 'xyz')
    False
    """
    for letter in word.lower():
        if letter in letters.lower():
            return True
        else:
            return False     # INCORRECT!
```

A dyma beth sy'n digwydd pan brofwn hi.

```python
run_doctests(uses_any_incorrect)
```

Mae'r allbwn yn cynnwys yr enghraifft a fethodd, y gwerth yr oedd disgwyl i'r
swyddogaeth ei gynhyrchu, a'r gwerth a gynhyrchodd y swyddogaeth mewn
gwirionedd.

Os nad ydych yn siŵr pam methodd y prawf hwn, cewch gyfle i'w ddadnamu fel
ymarfer.

## Rhestr Termau'r Bennod

**newidyn dolen:**
Newidyn a ddiffinnir ym mhennawd dolen `for`.

**gwrthrych ffeil:**
Gwrthrych sy'n cynrychioli ffeil agored ac yn cadw golwg ar ba rannau o'r
ffeil sydd wedi'u darllen neu eu hysgrifennu.

**dull:**
Swyddogaeth sy'n gysylltiedig â gwrthrych ac a elwir gan ddefnyddio'r
gweithredydd dot.

**diweddariad:**
Gosodiad neilltuad sy'n rhoi gwerth newydd i newidyn sydd eisoes yn bodoli, yn
hytrach na chreu newidyn newydd.

**cychwyn:**
Creu newidyn newydd a rhoi gwerth iddo.

**cynyddu:**
Cynyddu gwerth newidyn.

**lleihau:**
Lleihau gwerth newidyn.

**cyfrif:**
Newidyn a ddefnyddir i gyfrif rhywbeth, fel arfer wedi'i gychwyn i sero ac yna
wedi'i gynyddu.

**chwiliad llinol:**
Patrwm cyfrifiadurol sy'n chwilio drwy ddilyniant o elfennau ac yn stopio pan
ddarganfyddir yr hyn y mae'n chwilio amdano.

**llwyddo:**
Os yw prawf yn rhedeg a'r canlyniad fel y disgwylir, mae'r prawf yn llwyddo.

**methu:**
Os yw prawf yn rhedeg a'r canlyniad heb fod fel y disgwylir, mae'r prawf yn
methu.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Yn `uses_any`, efallai eich bod wedi sylwi bod y gosodiad `return` cyntaf y
tu mewn i'r ddolen a'r ail y tu allan.

```python
def uses_any(word, letters):
    for letter in word.lower():
        if letter in letters.lower():
            return True
    return False
```

Pan fydd pobl yn ysgrifennu swyddogaethau fel hyn am y tro cyntaf, camgymeriad
cyffredin yw rhoi'r ddau osodiad `return` y tu mewn i'r ddolen, fel hyn.

```python
def uses_any_incorrect(word, letters):
    for letter in word.lower():
        if letter in letters.lower():
            return True
        else:
            return False     # INCORRECT!
```

Gofynnwch i gynorthwyydd rhithwir beth sydd o'i le gyda'r fersiwn hon.

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `uses_none` sy'n cymryd gair a llinyn o
lythrennau gwaharddedig, ac yn dychwelyd `True` os nad yw'r gair yn defnyddio
unrhyw un o'r llythrennau gwaharddedig.

Dyma amlinelliad o'r swyddogaeth sy'n cynnwys dau doctest. Llenwch y
swyddogaeth fel ei bod yn pasio'r profion hyn, ac ychwanegwch o leiaf un
doctest arall.

```python
def uses_none(word, forbidden):
    """Checks whether a word avoid forbidden letters.
    
    >>> uses_none('banana', 'xyz')
    True
    >>> uses_none('apple', 'efg')
    False
    """
    return None
```

```python
# Ateb yma
```

```python
run_doctests(uses_none)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `uses_only` sy'n cymryd gair a llinyn o
lythrennau, ac sy'n dychwelyd `True` os yw'r gair yn cynnwys dim ond
llythrennau yn y llinyn.

Dyma amlinelliad o'r swyddogaeth sy'n cynnwys dau doctest. Llenwch y
swyddogaeth fel ei bod yn pasio'r profion hyn, ac ychwanegwch o leiaf un
doctest arall.

```python
def uses_only(word, available):
    """Checks whether a word uses only the available letters.
    
    >>> uses_only('banana', 'ban')
    True
    >>> uses_only('apple', 'apl')
    False
    """
    return None
```

```python
# Ateb yma
```

```python
run_doctests(uses_only)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `uses_all` sy'n cymryd gair a llinyn o
lythrennau, ac sy'n dychwelyd `True` os yw'r gair yn cynnwys pob un o'r
llythrennau yn y llinyn o leiaf unwaith.

Dyma amlinelliad o'r swyddogaeth sy'n cynnwys dau doctest. Llenwch y
swyddogaeth fel ei bod yn pasio'r profion hyn, ac ychwanegwch o leiaf un
doctest arall.

```python
def uses_all(word, required):
    """Checks whether a word uses all required letters.
    
    >>> uses_all('banana', 'ban')
    True
    >>> uses_all('apple', 'api')
    False
    """
    return None
```

```python
# Ateb yma
```

```python
run_doctests(uses_all)
```

### Ymarfer

Mae *The New York Times* yn cyhoeddi pos dyddiol o'r enw "Spelling Bee" sy'n
herio darllenwyr i sillafu cymaint o eiriau â phosibl gan ddefnyddio dim ond
saith llythyren, lle mae un o'r llythrennau'n ofynnol. Mae'n rhaid i'r geiriau
gael o leiaf pedair llythyren.

Er enghraifft, ar y diwrnod yr ysgrifennais hyn, y llythrennau oedd `ACDLORT`,
gyda `R` fel y llythyren ofynnol. Felly mae "color" yn air derbyniol, ond nid
yw "told", am nad yw'n defnyddio `R`, ac nid yw "rat" am mai dim ond tair
llythyren sydd ganddo. Gall llythrennau gael eu hailadrodd, felly mae
"ratatat" yn dderbyniol.

Ysgrifennwch swyddogaeth o'r enw `check_word` sy'n gwirio a yw gair penodol yn
dderbyniol. Dylai gymryd fel paramedrau y gair i'w wirio, llinyn o saith
llythyren ar gael, a llinyn sy'n cynnwys yr unig lythyren ofynnol. Gallwch
ddefnyddio'r swyddogaethau a ysgrifennoch mewn ymarferion blaenorol.

Dyma amlinelliad o'r swyddogaeth sy'n cynnwys doctestau. Llenwch y swyddogaeth
ac yna gwiriwch fod pob prawf yn llwyddo.

```python
def check_word(word, available, required):
    """Check whether a word is acceptable.
    
    >>> check_word('color', 'ACDLORT', 'R')
    True
    >>> check_word('ratatat', 'ACDLORT', 'R')
    True
    >>> check_word('rat', 'ACDLORT', 'R')
    False
    >>> check_word('told', 'ACDLORT', 'R')
    False
    >>> check_word('bee', 'ACDLORT', 'R')
    False
    """
    return False
```

```python
# Ateb yma
```

```python
run_doctests(check_word)
```

Yn ôl rheolau "Spelling Bee",

* Mae geiriau pedair-llythyren yn werth 1 pwynt yr un.

* Mae geiriau hirach yn ennill 1 pwynt y llythyren.

* Mae pob pos yn cynnwys o leiaf un "pangram" sy'n defnyddio pob llythyren.
  Mae'r rhain yn werth 7 pwynt ychwanegol!

Ysgrifennwch swyddogaeth o'r enw `score_word` sy'n cymryd gair a llinyn o
lythrennau ar gael ac yn dychwelyd ei sgôr. Gallwch dybio bod y gair yn
dderbyniol.

Unwaith eto, dyma amlinelliad o'r swyddogaeth gyda doctestau.

```python
def word_score(word, available):
    """Compute the score for an acceptable word.
    
    >>> word_score('card', 'ACDLORT')
    1
    >>> word_score('color', 'ACDLORT')
    5
    >>> word_score('cartload', 'ACDLORT')
    15
    """
    return 0
```

```python
# Ateb yma
```

```python
run_doctests(word_score)
```

Pan fo pob un o'ch swyddogaethau'n pasio eu profion, defnyddiwch y ddolen
ganlynol i chwilio'r rhestr eiriau am eiriau derbyniol ac adio eu sgoriau.

```python
available = 'ACDLORT'
required = 'R'

total = 0

file_object = open('words.txt')
for line in file_object:
    word = line.strip()    
    if check_word(word, available, required):
        score = word_score(word, available)
        total = total + score
        print(word, score)
        
print("Total score", total)
```

Ewch i dudalen "Spelling Bee" yn <https://www.nytimes.com/puzzles/spelling-bee>
a theipiwch y llythrennau sydd ar gael y diwrnod hwnnw. Mae'r llythyren yn y
canol yn ofynnol.

Darganfyddais set o lythrennau sy'n sillafu geiriau â chyfanswm sgôr o 5820.
Allwch chi guro hynny? Efallai bod darganfod y set orau o lythrennau yn rhy
anodd — mae'n rhaid i chi fod yn realydd.

### Ymarfer

Efallai eich bod wedi sylwi bod gan y swyddogaethau a ysgrifennoch yn yr
ymarferion blaenorol lawer yn gyffredin. Mewn gwirionedd, maent mor debyg fel
y gallwch yn aml ddefnyddio un swyddogaeth i ysgrifennu un arall.

Er enghraifft, os nad yw gair yn defnyddio unrhyw un o set o lythrennau
gwaharddedig, mae hynny'n golygu nad yw'n defnyddio unrhyw un ohonynt. Felly
gallwn ysgrifennu fersiwn o `uses_none` fel hyn.

```python
def uses_none(word, forbidden):
    """Checks whether a word avoids forbidden letters.
    
    >>> uses_none('banana', 'xyz')
    True
    >>> uses_none('apple', 'efg')
    False
    >>> uses_none('', 'abc')
    True
    """
    return not uses_any(word, forbidden)
```

```python
run_doctests(uses_none)
```

Mae yna hefyd debygrwydd rhwng `uses_only` ac `uses_all` y gallwch fanteisio
arno. Os oes gennych fersiwn o `uses_only` sy'n gweithio, gweler a allwch
ysgrifennu fersiwn o `uses_all` sy'n galw `uses_only`.

### Ymarfer

Os aethoch yn sownd ar y cwestiwn blaenorol, ceisiwch ofyn i gynorthwyydd
rhithwir, "O gael swyddogaeth, `uses_only`, sy'n cymryd dau linyn ac yn gwirio
bod y cyntaf ond yn defnyddio'r llythrennau yn yr ail, ei defnyddio i
ysgrifennu `uses_all`, sy'n cymryd dau linyn ac yn gwirio a yw'r cyntaf yn
defnyddio pob un o lythrennau'r ail, gan ganiatáu ailadrodd."

Defnyddiwch `run_doctests` i wirio'r ateb.

```python
# Ateb yma
```

```python
run_doctests(uses_all)
```

### Ymarfer

Nawr gadewch i ni weld a allwn ysgrifennu `uses_all` ar sail `uses_any`.

Gofynnwch i gynorthwyydd rhithwir, "O gael swyddogaeth, `uses_any`, sy'n
cymryd dau linyn ac yn gwirio a yw'r cyntaf yn defnyddio unrhyw un o
lythrennau'r ail, allwch chi ei defnyddio i ysgrifennu `uses_all`, sy'n
cymryd dau linyn ac yn gwirio a yw'r cyntaf yn defnyddio pob un o lythrennau'r
ail, gan ganiatáu ailadrodd."

Os yw'n dweud y gall, gwnewch yn siŵr eich bod yn profi'r canlyniad!

```python
# Ateb yma
```

```python
# Here's what I got from ChatGPT 4o December 26, 2024
# It's correct, but it makes multiple calls to uses_any 

def uses_all(s1, s2):
    """Checks if all characters in s2 are in s1, allowing repeats."""
    for char in s2:
        if not uses_any(s1, char):
            return False
    return True

```

```python
# Ateb yma
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
