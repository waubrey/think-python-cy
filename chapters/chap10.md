# Geiriaduron

Mae'r bennod hon yn cyflwyno math cynhenid o'r enw geiriadur. Mae'n un o
nodweddion gorau Python — ac yn floc adeiladu llawer o algorithmau effeithlon
a chain.

Byddwn yn defnyddio geiriaduron i gyfrifo nifer y geiriau unigryw mewn llyfr
a nifer y troeon y mae pob un yn ymddangos. Ac yn yr ymarferion, byddwn yn
defnyddio geiriaduron i ddatrys posau geiriau.

## Mae Geiriadur yn Fapio

Mae **{term}`geiriadur`** yn debyg i restr, ond yn fwy cyffredinol. Mewn
rhestr, mae'n rhaid i'r mynegeion fod yn gyfanrifau; mewn geiriadur gallant
fod yn (bron) unrhyw fath. Er enghraifft, tybiwch ein bod yn gwneud rhestr o
eiriau rhifau, fel hyn.

```python
lst = ['zero', 'one', 'two']
```

Gallwn ddefnyddio cyfanrif fel mynegai i gael y gair cyfatebol.

```python
lst[1]
```

Ond tybiwch ein bod am fynd i'r cyfeiriad arall, a chwilio am air i gael y
cyfanrif cyfatebol. Ni allwn wneud hynny gyda rhestr, ond gallwn gyda
geiriadur. Byddwn yn dechrau drwy greu geiriadur gwag a'i neilltuo i
`numbers`.

```python
numbers = {}
numbers
```

Mae'r cromfachau cyrliog, `{}`, yn cynrychioli geiriadur gwag. I ychwanegu
eitemau at y geiriadur, byddwn yn defnyddio cromfachau sgwâr.

```python
numbers['zero'] = 0
```

Mae'r neilltuad hwn yn ychwanegu **{term}`eitem`** at y geiriadur, sy'n
cynrychioli cysylltiad **{term}`allwedd`** a **{term}`gwerth`**. Yn yr
enghraifft hon, y llinyn `'zero'` yw'r allwedd a'r cyfanrif `0` yw'r gwerth.
Os dangoswn y geiriadur, gwelwn ei fod yn cynnwys un eitem, sy'n cynnwys
allwedd a gwerth wedi'u gwahanu gan golon, `:`.

```python
numbers
```

Gallwn ychwanegu mwy o eitemau fel hyn.

```python
numbers['one'] = 1
numbers['two'] = 2
numbers
```

Nawr mae'r geiriadur yn cynnwys tair eitem.

I chwilio am allwedd a chael y gwerth cyfatebol, rydym yn defnyddio'r
gweithredydd cromfachau.

```python
numbers['two']
```

Os nad yw'r allwedd yn y geiriadur, cawn `KeyError`.

```python
%%expect KeyError
numbers['three']

```

Mae'r swyddogaeth `len` yn gweithio ar eiriaduron; mae'n dychwelyd nifer yr
eitemau.

```python
len(numbers)
```

Mewn iaith fathemategol, mae geiriadur yn cynrychioli **{term}`mapio`** o
allweddi i werthoedd, felly gallwch hefyd ddweud bod pob allwedd yn "mapio
i" werth. Yn yr enghraifft hon, mae pob gair rhif yn mapio i'r cyfanrif
cyfatebol.

Mae'r ffigur canlynol yn dangos y diagram cyflwr ar gyfer `numbers`.

```python
from diagram import make_dict, Binding, Value

d1 = make_dict(numbers, dy=-0.3, offsetx=0.37)
binding1 = Binding(Value('numbers'), d1)
```

```python
from diagram import diagram, adjust, Bbox

width, height, x, y = [1.83, 1.24, 0.49, 0.85]
ax = diagram(width, height)
bbox = binding1.draw(ax, x, y)
# adjust(x, y, bbox)
```

Cynrychiolir geiriadur gan flwch gyda'r gair "dict" y tu allan a'r eitemau y
tu mewn. Cynrychiolir pob eitem gan allwedd a saeth yn pwyntio at werth. Mae'r
dyfynodau'n nodi mai llinynnau yw'r allweddi yma, nid enwau newidynnau.

## Creu Geiriaduron

Yn yr adran flaenorol fe wnaethom greu geiriadur gwag ac ychwanegu eitemau un
ar y tro gan ddefnyddio'r gweithredydd cromfachau. Yn lle hynny, gallem fod
wedi creu'r geiriadur i gyd ar unwaith fel hyn.

```python
numbers = {'zero': 0, 'one': 1, 'two': 2}
```

Mae pob eitem yn cynnwys allwedd a gwerth wedi'u gwahanu gan golon. Mae'r
eitemau wedi'u gwahanu gan atalnodau ac wedi'u hamgáu mewn cromfachau cyrliog.

Ffordd arall o greu geiriadur yw defnyddio'r swyddogaeth `dict`. Gallwn
wneud geiriadur gwag fel hyn.

```python
empty = dict()
empty
```

A gallwn wneud copi o eiriadur fel hyn.

```python
numbers_copy = dict(numbers)
numbers_copy
```

Mae'n aml yn ddefnyddiol gwneud copi cyn perfformio gweithrediadau sy'n
addasu geiriaduron.

(section_dictionary_in_operator)=
## Y Gweithredydd in

Mae'r gweithredydd `in` yn gweithio ar eiriaduron hefyd; mae'n dweud wrthych
a yw rhywbeth yn ymddangos fel *allwedd* yn y geiriadur.

```python
'one' in numbers
```

Nid yw'r gweithredydd `in` yn gwirio a yw rhywbeth yn ymddangos fel gwerth.

```python
1 in numbers
```

I weld a yw rhywbeth yn ymddangos fel gwerth mewn geiriadur, gallwch
ddefnyddio'r dull `values`, sy'n dychwelyd dilyniant o werthoedd, ac yna
ddefnyddio'r gweithredydd `in`.

```python
1 in numbers.values()
```

Mae'r eitemau mewn geiriadur Python yn cael eu storio mewn **{term}`tabl hash`**,
sef ffordd o drefnu data sydd â phriodwedd ryfeddol: mae'r gweithredydd `in`
yn cymryd tua'r un faint o amser ni waeth faint o eitemau sydd yn y geiriadur.
Mae hynny'n ei gwneud hi'n bosibl ysgrifennu rhai algorithmau rhyfeddol o
effeithlon.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt');
```

I ddangos hyn, byddwn yn cymharu dau algorithm ar gyfer darganfod parau o
eiriau lle mae un yn wrthdro'r llall — fel `stressed` a `desserts`. Byddwn
yn dechrau drwy ddarllen y rhestr eiriau.

```python
word_list = open('words.txt').read().split()
len(word_list)
```

A dyma `reverse_word` o'r bennod flaenorol.

```python
def reverse_word(word):
    return ''.join(reversed(word))
```

Mae'r swyddogaeth ganlynol yn dolennu drwy'r geiriau yn y rhestr. Ar gyfer
pob un, mae'n gwrthdroi'r llythrennau ac yna'n gwirio a yw'r gair wedi'i
wrthdroi yn y rhestr eiriau.

```python
def too_slow():
    count = 0
    for word in word_list:
        if reverse_word(word) in word_list:
            count += 1
    return count
```

Mae'r swyddogaeth hon yn cymryd mwy na munud i redeg. Y broblem yw bod y
gweithredydd `in` yn gwirio'r geiriau yn y rhestr un ar y tro, gan ddechrau
ar y dechrau. Os nad yw'n darganfod yr hyn mae'n chwilio amdano — sy'n
digwydd y rhan fwyaf o'r amser — mae'n rhaid iddo chwilio yr holl ffordd i'r
diwedd.

I fesur pa mor hir y mae swyddogaeth yn ei gymryd, gallwn ddefnyddio `%time`,
sef un o "orchmynion hud cynhenid" Jupyter. Nid yw'r gorchmynion hyn yn rhan
o iaith Python, felly efallai na fyddant yn gweithio mewn amgylcheddau
datblygu eraill.

```python
# %time too_slow()
```

Ac mae'r gweithredydd `in` y tu mewn i'r ddolen, felly mae'n rhedeg unwaith
ar gyfer pob gair. Gan fod mwy na 100,000 o eiriau yn y rhestr, ac ar gyfer
pob un rydym yn gwirio mwy na 100,000 o eiriau, cyfanswm nifer y cymariaethau
yw nifer y geiriau wedi'i sgwario — yn fras — sy'n bron 13 biliwn.

```python
len(word_list)**2
```

Gallwn wneud y swyddogaeth hon yn llawer cyflymach gyda geiriadur. Mae'r
ddolen ganlynol yn creu geiriadur sy'n cynnwys y geiriau fel allweddi.

```python
word_dict = {}
for word in word_list:
    word_dict[word] = 1
```

Mae'r gwerthoedd yn `word_dict` i gyd yn `1`, ond gallent fod yn unrhyw
beth, am na fyddwn byth yn chwilio amdanynt — dim ond i wirio a yw allwedd
yn bodoli y byddwn yn defnyddio'r geiriadur hwn.

Nawr dyma fersiwn o'r swyddogaeth flaenorol sy'n disodli `word_list` â
`word_dict`.

```python
def much_faster():
    count = 0
    for word in word_dict:
        if reverse_word(word) in word_dict:
            count += 1
    return count
```

Mae'r swyddogaeth hon yn cymryd llai na chanfed ran o eiliad, felly mae tua
10,000 o weithiau'n gyflymach na'r fersiwn flaenorol.

Yn gyffredinol, mae'r amser y mae'n ei gymryd i ddarganfod elfen mewn rhestr
yn gymesur â hyd y rhestr. Mae'r amser y mae'n ei gymryd i ddarganfod
allwedd mewn geiriadur bron yn gyson — waeth beth fo nifer yr eitemau.

```python
%time much_faster()
```

## Casgliad o Gyfrifon

Tybiwch fod gennych linyn a'ch bod am gyfrif sawl gwaith y mae pob llythyren
yn ymddangos. Mae geiriadur yn arf da ar gyfer y gwaith hwn. Byddwn yn
dechrau gyda geiriadur gwag.

```python
counter = {}
```

Wrth i ni ddolennu drwy'r llythrennau yn y llinyn, tybiwch ein bod yn gweld
y llythyren `'a'` am y tro cyntaf. Gallwn ei hychwanegu at y geiriadur fel
hyn.

```python
counter['a'] = 1
```

Mae'r gwerth `1` yn nodi ein bod wedi gweld y llythyren unwaith. Yn
ddiweddarach, os gwelwn yr un llythyren eto, gallwn gynyddu'r cyfrif fel hyn.

```python
counter['a'] += 1
```

Nawr mae'r gwerth sy'n gysylltiedig ag `'a'` yn `2`, am ein bod wedi gweld y
llythyren ddwywaith.

```python
counter
```

Mae'r swyddogaeth ganlynol yn defnyddio'r nodweddion hyn i gyfrif nifer y
troeon y mae pob llythyren yn ymddangos mewn llinyn.

```python
def value_counts(string):
    counter = {}
    for letter in string:
        if letter not in counter:
            counter[letter] = 1
        else:
            counter[letter] += 1
    return counter
```

Bob tro drwy'r ddolen, os nad yw `letter` yn y geiriadur, rydym yn creu
eitem newydd gydag allwedd `letter` a gwerth `1`. Os yw `letter` eisoes yn y
geiriadur rydym yn cynyddu'r gwerth sy'n gysylltiedig â `letter`.

Dyma enghraifft.

```python
counter = value_counts('brontosaurus')
counter
```

Mae'r eitemau yn `counter` yn dangos bod y llythyren `'b'` yn ymddangos
unwaith, `'r'` yn ymddangos ddwywaith, ac yn y blaen.

## Dolennu a Geiriaduron

Os defnyddiwch eiriadur mewn gosodiad `for`, mae'n traversio allweddi'r
geiriadur. I ddangos hyn, gadewch i ni wneud geiriadur sy'n cyfrif y
llythrennau yn `'banana'`.

```python
counter = value_counts('banana')
counter
```

Mae'r ddolen ganlynol yn argraffu'r allweddi, sef y llythrennau.

```python
for key in counter:
    print(key)
```

I argraffu'r gwerthoedd, gallwn ddefnyddio'r dull `values`.

```python
for value in counter.values():
    print(value)
```

I argraffu'r allweddi a'r gwerthoedd, gallwn ddolennu drwy'r allweddi a
chwilio am y gwerthoedd cyfatebol.

```python
for key in counter:
    value = counter[key]
    print(key, value)
```

Yn y bennod nesaf, fe welwn ffordd fwy cryno o wneud yr un peth.

## Rhestri a Geiriaduron

Gallwch roi rhestr mewn geiriadur fel gwerth. Er enghraifft, dyma eiriadur
sy'n mapio o'r rhif `4` i restr o bedair llythyren.

```python
d = {4: ['r', 'o', 'u', 's']}
d
```

Ond ni allwch roi rhestr mewn geiriadur fel allwedd. Dyma beth sy'n digwydd
os ceisiwn.

```python
%%expect TypeError
letters = list('abcd')
d[letters] = 4
```

Soniais yn gynharach bod geiriaduron yn defnyddio tablau hash, a bod hynny'n
golygu bod yn rhaid i'r allweddi fod yn **{term}`hashadwy`**.

Mae **hash** yn swyddogaeth sy'n cymryd gwerth (o unrhyw fath) ac yn
dychwelyd cyfanrif. Mae geiriaduron yn defnyddio'r cyfanrifau hyn, a elwir
yn werthoedd hash, i storio ac i chwilio am allweddi.

Dim ond os yw allwedd yn anghyfnewidiol y mae'r system hon yn gweithio, fel
bod ei gwerth hash bob amser yr un fath. Ond os yw allwedd yn gyfnewidiol,
gallai ei gwerth hash newid, ac ni fyddai'r geiriadur yn gweithio. Dyna pam
mae'n rhaid i allweddi fod yn hashadwy, a pham nad yw mathau cyfnewidiol fel
rhestri.

Gan fod geiriaduron yn gyfnewidiol, ni ellir eu defnyddio fel allweddi,
chwaith. Ond *gallant* gael eu defnyddio fel gwerthoedd.

## Casglu Rhestr

Ar gyfer llawer o dasgau rhaglennu, mae'n ddefnyddiol dolennu drwy un rhestr
neu eiriadur wrth adeiladu un arall. Fel enghraifft, byddwn yn dolennu drwy'r
geiriau yn `word_dict` ac yn gwneud rhestr o balindromau — hynny yw, geiriau
sy'n cael eu sillafu'r un fath ymlaen ac yn ôl, fel "noon" a "rotator".

Yn y bennod flaenorol, gofynnodd un o'r ymarferion i chi ysgrifennu
swyddogaeth sy'n gwirio a yw gair yn balindrom. Dyma ddatrysiad sy'n
defnyddio `reverse_word`.

```python
def is_palindrome(word):
    """Check if a word is a palindrome."""
    return reverse_word(word) == word
```

Os dolennwn drwy'r geiriau yn `word_dict`, gallwn gyfrif nifer y
palindromau fel hyn.

```python
count = 0

for word in word_dict:
    if is_palindrome(word):
        count +=1
        
count
```

Erbyn hyn, mae'r patrwm hwn yn gyfarwydd.

* Cyn y ddolen, cychwynnir `count` i `0`.

* Y tu mewn i'r ddolen, os yw `word` yn balindrom, rydym yn cynyddu
  `count`.

* Pan ddaw'r ddolen i ben, mae `count` yn cynnwys cyfanswm nifer y
  palindromau.

Gallwn ddefnyddio patrwm tebyg i wneud rhestr o balindromau.

```python
palindromes = []

for word in word_dict:
    if is_palindrome(word):
        palindromes.append(word)

palindromes[:10]
```

Dyma sut mae'n gweithio:

* Cyn y ddolen, cychwynnir `palindromes` gyda rhestr wag.

* Y tu mewn i'r ddolen, os yw `word` yn balindrom, rydym yn ei ychwanegu at
  ddiwedd `palindromes`.

* Pan ddaw'r ddolen i ben, mae `palindromes` yn rhestr o balindromau.

Yn y ddolen hon, defnyddir `palindromes` fel **{term}`cronwr`**, sef newidyn
sy'n casglu neu'n cronni data yn ystod cyfrifiant.

Nawr tybiwch ein bod am ddewis dim ond palindromau sydd â saith llythyren
neu fwy. Gallwn ddolennu drwy `palindromes` a gwneud rhestr newydd sy'n
cynnwys dim ond palindromau hir.

```python
long_palindromes = []

for word in palindromes:
    if len(word) >= 7:
        long_palindromes.append(word)
        
long_palindromes
```

Gelwir dolennu drwy restr fel hyn, gan ddewis rhai elfennau a hepgor eraill,
yn **{term}`hidlo`**.

## Nodiadau

Os rhedoch y swyddogaeth `fibonacci` o Bennod 6 ({ref}`section_fibonacci`),
efallai eich bod wedi sylwi, po fwyaf yw'r ddadl a roddwch, hwyaf yr amser y
mae'r swyddogaeth yn ei gymryd i redeg.

```python
def fibonacci(n):
    if n == 0:
        return 0
    
    if n == 1:
        return 1

    return fibonacci(n-1) + fibonacci(n-2)
```

Hefyd, mae'r amser rhedeg yn cynyddu'n gyflym. I ddeall pam, ystyriwch y
ffigur canlynol, sy'n dangos y **{term}`graff galwadau`** ar gyfer
`fibonacci` gyda `n=4`:

```python
from diagram import make_binding, Frame, Arrow

bindings = [make_binding('n', i) for i in range(5)]
frames = [Frame([binding]) for binding in bindings]
```

```python
arrowprops = dict(arrowstyle="-", color='gray', alpha=0.5, ls='-', lw=0.5)

def left_arrow(ax, bbox1, bbox2):
    x = bbox1.xmin + 0.1
    y = bbox1.ymin
    dx = bbox2.xmax - x - 0.1
    dy = bbox2.ymax - y
    arrow = Arrow(dx=dx, dy=dy, arrowprops=arrowprops)
    return arrow.draw(ax, x, y)

def right_arrow(ax, bbox1, bbox2):
    x = bbox1.xmax - 0.1
    y = bbox1.ymin
    dx = bbox2.xmin - x + 0.1
    dy = bbox2.ymax - y
    arrow = Arrow(dx=dx, dy=dy, arrowprops=arrowprops)
    return arrow.draw(ax, x, y)
```

```python
from diagram import diagram, adjust, Bbox

width, height, x, y = [4.94, 2.16, -1.03, 1.91]
ax = diagram(width, height)

dx = 0.6
dy = 0.55

bboxes = []
bboxes.append(frames[4].draw(ax, x+6*dx, y))

bboxes.append(frames[3].draw(ax, x+4*dx, y-dy))
bboxes.append(frames[2].draw(ax, x+8*dx, y-dy))

bboxes.append(frames[2].draw(ax, x+3*dx, y-2*dy))
bboxes.append(frames[1].draw(ax, x+5*dx, y-2*dy))
bboxes.append(frames[1].draw(ax, x+7*dx, y-2*dy))
bboxes.append(frames[0].draw(ax, x+9*dx, y-2*dy))

bboxes.append(frames[1].draw(ax, x+2*dx, y-3*dy))
bboxes.append(frames[0].draw(ax, x+4*dx, y-3*dy))

left_arrow(ax, bboxes[0], bboxes[1])
left_arrow(ax, bboxes[1], bboxes[3])
left_arrow(ax, bboxes[3], bboxes[7])
left_arrow(ax, bboxes[2], bboxes[5])

right_arrow(ax, bboxes[0], bboxes[2])
right_arrow(ax, bboxes[1], bboxes[4])
right_arrow(ax, bboxes[2], bboxes[6])
right_arrow(ax, bboxes[3], bboxes[8])

bbox = Bbox.union(bboxes)
# adjust(x, y, bbox)
```

Mae graff galwadau'n dangos set o fframiau swyddogaeth, gyda llinellau'n
cysylltu pob ffram â fframiau'r swyddogaethau y mae'n eu galw. Ar frig y
graff, mae `fibonacci` gyda `n=4` yn galw `fibonacci` gyda `n=3` ac `n=2`.
Yn ei dro, mae `fibonacci` gyda `n=3` yn galw `fibonacci` gyda `n=2` ac
`n=1`. Ac yn y blaen.

Cyfrwch sawl gwaith y gelwir `fibonacci(0)` a `fibonacci(1)`. Mae hwn yn
ddatrysiad aneffeithlon i'r broblem, ac mae'n gwaethygu wrth i'r ddadl fynd
yn fwy.

Un datrysiad yw cadw golwg ar werthoedd sydd eisoes wedi'u cyfrifo drwy eu
storio mewn geiriadur. Gelwir gwerth a gyfrifwyd o'r blaen ac a storir i'w
ddefnyddio'n ddiweddarach yn **{term}`nodyn`**. Dyma fersiwn "nodyn-ol" o
`fibonacci`:

```python
known = {0:0, 1:1}

def fibonacci_memo(n):
    if n in known:
        return known[n]

    res = fibonacci_memo(n-1) + fibonacci_memo(n-2)
    known[n] = res
    return res
```

Mae `known` yn eiriadur sy'n cadw golwg ar rifau Fibonacci rydym eisoes yn
eu gwybod. Mae'n dechrau gyda dwy eitem: mae `0` yn mapio i `0` ac mae `1`
yn mapio i `1`.

Pryd bynnag y gelwir `fibonacci_memo`, mae'n gwirio `known`. Os yw'r
canlyniad eisoes yno, gall ddychwelyd ar unwaith. Fel arall mae'n rhaid
iddo gyfrifo'r gwerth newydd, ei ychwanegu at y geiriadur, a'i ddychwelyd.

Wrth gymharu'r ddwy swyddogaeth, mae `fibonacci(40)` yn cymryd tua 30
eiliad i redeg. Mae `fibonacci_memo(40)` yn cymryd tua 30 microeiliad,
felly mae tua miliwn o weithiau'n gyflymach. Yn llyfr nodiadau'r bennod hon,
cewch weld o ble daw'r mesuriadau hyn.

```python
# %time fibonacci(40)
```

```python
%time fibonacci_memo(40)
```

## Dadnamu

Wrth i chi weithio gyda setiau data mwy, gall ddod yn drwsgl dadnamu drwy
argraffu a gwirio'r allbwn â llaw. Dyma rai awgrymiadau ar gyfer dadnamu
setiau data mawr:

1. Lleihewch y mewnbwn: Os yn bosibl, lleihewch faint y set ddata. Er
   enghraifft, os yw'r rhaglen yn darllen ffeil destun, dechreuwch gyda dim
   ond y 10 llinell gyntaf, neu gyda'r enghraifft leiaf y gallwch ei
   darganfod. Gallwch naill ai olygu'r ffeiliau eu hunain, neu (yn well)
   addasu'r rhaglen fel ei bod ond yn darllen y `n` llinell gyntaf.

   Os oes gwall, gallwch leihau `n` i'r gwerth lleiaf lle mae'r gwall yn
   digwydd. Wrth i chi ddarganfod a chywiro gwallau, gallwch gynyddu `n`
   yn raddol.

2. Gwiriwch grynodebau a mathau: Yn lle argraffu a gwirio'r set ddata
   gyfan, ystyriwch argraffu crynodebau o'r data — er enghraifft, nifer yr
   eitemau mewn geiriadur neu gyfanswm rhestr o rifau.

   Achos cyffredin o wallau rhedeg yw gwerth nad yw o'r math cywir. I
   ddadnamu'r math hwn o wall, mae'n aml yn ddigon argraffu math gwerth.

3. Ysgrifennwch hunan-wiriadau: Weithiau gallwch ysgrifennu cod i wirio am
   wallau'n awtomatig. Er enghraifft, os ydych yn cyfrifo cyfartaledd
   rhestr o rifau, gallech wirio nad yw'r canlyniad yn fwy na'r elfen fwyaf
   yn y rhestr nac yn llai na'r lleiaf. Gelwir hyn yn "wiriad synnwyr" am ei
   fod yn canfod canlyniadau sy'n "ddiynsawdd".

   Math arall o wiriad sy'n cymharu canlyniadau dau gyfrifiant gwahanol i
   weld a ydynt yn gyson. Gelwir hyn yn "wiriad cysondeb".

4. Fformatiwch yr allbwn: Gall fformatio allbwn dadnamu ei gwneud yn haws
   sylwi ar wall. Gwelsom enghraifft ym Mhennod 6 ({ref}`section_debugging_factorial`).
   Arf arall y gallech ei chael yn ddefnyddiol yw'r modiwl `pprint`, sy'n
   darparu swyddogaeth `pprint` sy'n dangos mathau cynhenid mewn fformat
   mwy darllenadwy i bobl (saif `pprint` am "pretty print").

   Unwaith eto, gall amser a dreuliwch yn adeiladu sgaffaldiau leihau'r
   amser a dreuliwch yn dadnamu.

## Rhestr Termau'r Bennod

**geiriadur:**
Gwrthrych sy'n cynnwys parau allwedd-gwerth, a elwir hefyd yn eitemau.

**eitem:**
Mewn geiriadur, enw arall ar bâr allwedd-gwerth.

**allwedd:**
Gwrthrych sy'n ymddangos mewn geiriadur fel rhan gyntaf pâr allwedd-gwerth.

**gwerth:**
Gwrthrych sy'n ymddangos mewn geiriadur fel ail ran pâr allwedd-gwerth. Mae
hyn yn fwy penodol na'n defnydd blaenorol o'r gair "gwerth".

**mapio:**
Perthynas lle mae pob elfen o un set yn cyfateb i elfen o set arall.

**tabl hash:**
Casgliad o barau allwedd-gwerth wedi'u trefnu fel y gallwn chwilio am
allwedd a darganfod ei gwerth yn effeithlon.

**hashadwy:**
Mae mathau anghyfnewidiol fel cyfanrifau, rhifau pwynt arnawf, a llinynnau'n
hashadwy. Nid yw mathau cyfnewidiol fel rhestri a geiriaduron.

**swyddogaeth hash:**
Swyddogaeth sy'n cymryd gwrthrych ac yn cyfrifo cyfanrif a ddefnyddir i
leoli allwedd mewn tabl hash.

**cronwr:**
Newidyn a ddefnyddir mewn dolen i adio neu gronni canlyniad.

**hidlo:**
Dolennu drwy ddilyniant a dewis neu hepgor elfennau.

**graff galwadau:**
Diagram sy'n dangos pob ffram a grëwyd yn ystod cyflawniad rhaglen, gyda
saeth o bob galwr i bob swyddogaeth a elwir.

**nodyn:**
Gwerth a gyfrifwyd i'w storio er mwyn osgoi cyfrifiant diangen yn y
dyfodol.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Yn y bennod hon, dywedais fod yn rhaid i'r allweddi mewn geiriadur fod yn
hashadwy a rhoddais esboniad byr. Os hoffech ragor o fanylion, gofynnwch i
gynorthwyydd rhithwir, "Pam mae'n rhaid i allweddi mewn geiriaduron Python
fod yn hashadwy?"

Mewn adran flaenorol, fe wnaethom storio rhestr o eiriau fel allweddi mewn
geiriadur fel y gallem ddefnyddio fersiwn effeithlon o'r gweithredydd `in`.
Gallem fod wedi gwneud yr un peth gan ddefnyddio `set`, sy'n fath data
cynhenid arall. Gofynnwch i gynorthwyydd rhithwir, "Sut rwy'n gwneud set
Python o restr o linynnau a gwirio a yw llinyn yn elfen o'r set?"

### Ymarfer

Mae gan eiriaduron ddull o'r enw `get` sy'n cymryd allwedd a gwerth
rhagosodedig. Os yw'r allwedd yn ymddangos yn y geiriadur, mae `get` yn
dychwelyd y gwerth cyfatebol; fel arall mae'n dychwelyd y gwerth
rhagosodedig. Er enghraifft, dyma eiriadur sy'n mapio o'r llythrennau mewn
llinyn i nifer y troeon y maent yn ymddangos.

```python
counter = value_counts('brontosaurus')
```

Os chwiliwn am lythyren sy'n ymddangos yn y gair, mae `get` yn dychwelyd
nifer y troeon y mae'n ymddangos.

```python
counter.get('b', 0)
```

Os chwiliwn am lythyren nad yw'n ymddangos, cawn y gwerth rhagosodedig, `0`.

```python
counter.get('c', 0)
```

Defnyddiwch `get` i ysgrifennu fersiwn fwy cryno o `value_counts`. Dylech
allu dileu'r gosodiad `if`.

### Ymarfer

Beth yw'r gair hiraf y gallwch feddwl amdano lle mae pob llythyren yn
ymddangos unwaith yn unig? Gadewch i ni weld a allwn ddarganfod un hirach
na `unpredictably`.

Ysgrifennwch swyddogaeth o'r enw `has_duplicates` sy'n cymryd dilyniant —
fel rhestr neu linyn — fel paramedr ac yn dychwelyd `True` os oes unrhyw
elfen sy'n ymddangos yn y dilyniant fwy nag unwaith.

I'ch helpu ddechrau, dyma amlinelliad o'r swyddogaeth gyda doctestau.

```python
def has_duplicates(t):
    """Check whether any element in a sequence appears more than once.
    
    >>> has_duplicates('banana')
    True
    >>> has_duplicates('ambidextrously')
    False
    >>> has_duplicates([1, 2, 2])
    True
    >>> has_duplicates([1, 2, 3])
    False
    """
    return None
```

```python
# Ateb yma
```

Gallwch ddefnyddio `doctest` i brofi eich swyddogaeth.

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)

run_doctests(has_duplicates)
```

Gallwch ddefnyddio'r ddolen hon i ddarganfod y geiriau hiraf heb lythrennau
wedi'u hailadrodd.

```python
no_repeats = []

for word in word_list:
    if len(word) > 12 and not has_duplicates(word):
        no_repeats.append(word)
        
no_repeats
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `find_repeats` sy'n cymryd geiriadur sy'n
mapio o bob allwedd i gyfrif, fel y canlyniad o `value_counts`. Dylai
ddolennu drwy'r geiriadur a dychwelyd rhestr o allweddi sydd â chyfrifon
mwy nag `1`. Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
def find_repeats(counter):
    """Makes a list of keys with values greater than 1.
    
    counter: dictionary that maps from keys to counts
    
    returns: list of keys
    """
    return []
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau canlynol i brofi eich cod. Yn gyntaf,
byddwn yn gwneud geiriadur sy'n mapio o lythrennau i gyfrifon.

```python
counter1 = value_counts('banana')
counter1
```

Dylai'r canlyniad o `find_repeats` fod yn `['a', 'n']`.

```python
repeats = find_repeats(counter1)
repeats
```

Dyma enghraifft arall sy'n dechrau gyda rhestr o rifau. Dylai'r canlyniad
fod yn `[1, 2]`.

```python
counter1 = value_counts([1, 2, 3, 2, 1])
repeats = find_repeats(counter1)
repeats
```

### Ymarfer

Tybiwch eich bod yn rhedeg `value_counts` gyda dau air gwahanol ac yn
cadw'r canlyniadau mewn dau eiriadur.

```python
counter1 = value_counts('brontosaurus')
counter2 = value_counts('apatosaurus')
```

Mae pob geiriadur yn mapio o set o lythrennau i nifer y troeon y maent yn
ymddangos. Ysgrifennwch swyddogaeth o'r enw `add_counters` sy'n cymryd dau
eiriadur fel hyn ac yn dychwelyd geiriadur newydd sy'n cynnwys pob un o'r
llythrennau a chyfanswm nifer y troeon y maent yn ymddangos yn y naill air
neu'r llall.

Mae yna sawl ffordd o ddatrys y broblem hon. Unwaith y bydd gennych
ddatrysiad sy'n gweithio, ystyriwch ofyn i gynorthwyydd rhithwir am
ddatrysiadau gwahanol.

```python
# Ateb yma
```

```python
# Ateb yma
```

### Ymarfer

Mae gair yn "ymgysylltol" os gallwn ei rannu'n ddau air drwy gymryd
llythrennau bob yn ail. Er enghraifft, mae "schooled" yn air ymgysylltol am
y gellir ei rannu'n "shoe" a "cold".

I ddewis llythrennau bob yn ail o linyn, gallwch ddefnyddio gweithredydd
sleisio gyda thri chydran sy'n nodi ble i ddechrau, ble i stopio, a'r
"maint cam" rhwng y llythrennau.

Yn y sleisen ganlynol, `0` yw'r cydran cyntaf, felly rydym yn dechrau
gyda'r llythyren gyntaf. `None` yw'r ail gydran, sy'n golygu y dylem fynd yr
holl ffordd i ddiwedd y llinyn. A `2` yw'r trydydd cydran, felly mae dau
gam rhwng y llythrennau rydym yn eu dewis.

```python
word = 'schooled'
first = word[0:None:2]
first
```

Yn lle darparu `None` fel yr ail gydran, gallwn gael yr un effaith drwy ei
adael allan yn gyfan gwbl. Er enghraifft, mae'r sleisen ganlynol yn dewis
llythrennau bob yn ail, gan ddechrau gyda'r ail lythyren.

```python
second = word[1::2]
second
```

Ysgrifennwch swyddogaeth o'r enw `is_interlocking` sy'n cymryd gair fel dadl
ac yn dychwelyd `True` os gellir ei rannu'n ddau air ymgysylltol.

```python
# Ateb yma
```

Gallwch ddefnyddio'r ddolen ganlynol i ddarganfod y geiriau ymgysylltol yn
y rhestr eiriau.

```python
for word in word_list:
    if len(word) >= 8 and is_interlocking(word):
        first = word[0::2]
        second = word[1::2]
        print(word, first, second)
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
