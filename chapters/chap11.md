# Tŵpls

Mae'r bennod hon yn cyflwyno un math cynhenid arall, y tŵpl, ac yna'n dangos
sut mae rhestri, geiriaduron, a thŵpls yn gweithio gyda'i gilydd. Mae hefyd yn
cyflwyno neilltuad tŵpl a nodwedd ddefnyddiol ar gyfer swyddogaethau â
rhestrau dadleuon o hyd amrywiol: y gweithredyddion pacio a dadbacio.

Yn yr ymarferion, byddwn yn defnyddio tŵpls, ynghyd â rhestri a geiriaduron,
i ddatrys rhagor o bosau geiriau a gweithredu algorithmau effeithlon.

## Mae Tŵpls yn Debyg i Restri

Mae tŵpl yn ddilyniant o werthoedd. Gall y gwerthoedd fod yn unrhyw fath, ac
fe'u mynegeir â chyfanrifau, felly mae tŵpls yn debyg iawn i restri. Y
gwahaniaeth pwysig yw bod tŵpls yn anghyfnewidiol.

I greu tŵpl, gallwch ysgrifennu rhestr o werthoedd wedi'u gwahanu gan
atalnodau.

```python
t = 'l', 'u', 'p', 'i', 'n'
type(t)
```

Er nad yw'n angenrheidiol, mae'n gyffredin amgáu tŵpls mewn cromfachau.

```python
t = ('l', 'u', 'p', 'i', 'n')
type(t)
```

I greu tŵpl ag un elfen sengl, mae'n rhaid i chi gynnwys atalnod terfynol.

```python
t1 = 'p',
type(t1)
```

Nid yw gwerth sengl mewn cromfachau yn dŵpl.

```python
t2 = ('p')
type(t2)
```

Ffordd arall o greu tŵpl yw'r swyddogaeth gynhenid `tuple`. Heb ddadl, mae'n
creu tŵpl gwag.

```python
t = tuple()
t
```

Os yw'r ddadl yn ddilyniant (llinyn, rhestr, neu dŵpl), y canlyniad yw tŵpl
ag elfennau'r dilyniant.

```python
t = tuple('lupin')
t
```

Am mai `tuple` yw enw swyddogaeth gynhenid, dylech osgoi ei defnyddio fel
enw newidyn.

Mae'r rhan fwyaf o weithredyddion rhestr hefyd yn gweithio gyda thŵpls. Er
enghraifft, mae'r gweithredydd cromfachau'n mynegeio elfen.

```python
t[0]
```

A'r gweithredydd sleisio'n dewis ystod o elfennau.

```python
t[1:3]
```

Mae'r gweithredydd `+` yn cydgatenu tŵpls.

```python
tuple('lup') + ('i', 'n')
```

A'r gweithredydd `*` yn dyblygu tŵpl nifer penodol o weithiau.

```python
tuple('spam') * 2 
```

Mae'r swyddogaeth `sorted` yn gweithio gyda thŵpls — ond rhestr yw'r
canlyniad, nid tŵpl.

```python
sorted(t)
```

Mae'r swyddogaeth `reversed` hefyd yn gweithio gyda thŵpls.

```python
reversed(t)
```

Gwrthrych `reversed` yw'r canlyniad, y gallwn ei drosi'n rhestr neu'n dŵpl.

```python
tuple(reversed(t))
```

Ar sail yr enghreifftiau hyd yn hyn, efallai yr ymddengys bod tŵpls yr un
peth â rhestri.

## Ond Mae Tŵpls yn Anghyfnewidiol

Os ceisiwch addasu tŵpl gyda'r gweithredydd cromfachau, cewch `TypeError`.

```python
%%expect TypeError
t[0] = 'L'
```

Ac nid oes gan dŵpls unrhyw un o'r dulliau sy'n addasu rhestri, fel `append`
a `remove`.

```python
%%expect AttributeError

t.remove('l')
```

Cofiwch mai newidyn neu ddull sy'n gysylltiedig â gwrthrych yw
"priodoledd" — mae'r neges wall hon yn golygu nad oes gan dŵpls ddull o'r
enw `remove`.

Am fod tŵpls yn anghyfnewidiol, maent yn hashadwy, sy'n golygu y gellir eu
defnyddio fel allweddi mewn geiriadur. Er enghraifft, mae'r geiriadur
canlynol yn cynnwys dau dŵpl fel allweddi sy'n mapio i gyfanrifau.

```python
d = {}
d[1, 2] = 3
d[3, 4] = 7
```

Gallwn chwilio am dŵpl mewn geiriadur fel hyn:

```python
d[1, 2]
```

Neu os oes gennym newidyn sy'n cyfeirio at dŵpl, gallwn ei ddefnyddio fel
allwedd.

```python
t = (3, 4)
d[t]
```

Gall tŵpls hefyd ymddangos fel gwerthoedd mewn geiriadur.

```python
t = tuple('abc')
d = {'key': t}
d
```

## Neilltuad Tŵpl

Gallwch roi tŵpl o newidynnau ar ochr chwith neilltuad, a thŵpl o
werthoedd ar y dde.

```python
a, b = 1, 2
```

Neilltuir y gwerthoedd i'r newidynnau o'r chwith i'r dde — yn yr
enghraifft hon, mae `a` yn cael y gwerth `1` ac mae `b` yn cael y gwerth
`2`. Gallwn ddangos y canlyniadau fel hyn:

```python
a, b
```

Yn fwy cyffredinol, os yw ochr chwith neilltuad yn dŵpl, gall yr ochr dde
fod yn unrhyw fath o ddilyniant — llinyn, rhestr, neu dŵpl. Er enghraifft, i
rannu cyfeiriad e-bost yn enw defnyddiwr a pharth, gallech ysgrifennu:

```python
email = 'monty@python.org'
username, domain = email.split('@')
```

Rhestr â dwy elfen yw'r gwerth dychwelyd o `split` — neilltuir yr elfen
gyntaf i `username`, a'r ail i `domain`.

```python
username, domain
```

Mae'n rhaid i nifer y newidynnau ar y chwith a nifer y gwerthoedd ar y dde
fod yr un fath — fel arall cewch `ValueError`.

```python
%%expect ValueError
a, b = 1, 2, 3
```

Mae neilltuad tŵpl yn ddefnyddiol os ydych am gyfnewid gwerthoedd dau
newidyn. Gyda neilltuadau confensiynol, mae'n rhaid i chi ddefnyddio
newidyn dros dro, fel hyn:

```python
temp = a
a = b
b = temp
```

Mae hynny'n gweithio, ond gyda neilltuad tŵpl gallwn wneud yr un peth heb
newidyn dros dro.

```python
a, b = b, a
```

Mae hyn yn gweithio am fod pob un o'r mynegiadau ar y dde yn cael eu
gwerthuso cyn unrhyw un o'r neilltuadau.

Gallwn hefyd ddefnyddio neilltuad tŵpl mewn gosodiad `for`. Er enghraifft, i
ddolennu drwy eitemau mewn geiriadur, gallwn ddefnyddio'r dull `items`.

```python
d = {'one': 1, 'two': 2}

for item in d.items():
    key, value = item
    print(key, '->', value)
```

Bob tro drwy'r ddolen, neilltuir tŵpl sy'n cynnwys allwedd a'r gwerth
cyfatebol i `item`.

Gallwn ysgrifennu'r ddolen hon yn fwy cryno, fel hyn:

```python
for key, value in d.items():
    print(key, '->', value)
```

Bob tro drwy'r ddolen, neilltuir allwedd a'r gwerth cyfatebol yn
uniongyrchol i `key` ac i `value`.

## Tŵpls fel Gwerthoedd Dychwelyd

A siarad yn fanwl gywir, dim ond un gwerth y gall swyddogaeth ei ddychwelyd,
ond os yw'r gwerth yn dŵpl, mae'r effaith yr un fath â dychwelyd sawl gwerth.
Er enghraifft, os ydych am rannu dau gyfanrif a chyfrifo'r cyniferydd a'r
gweddill, mae'n aneffeithlon cyfrifo `x//y` ac yna `x%y`. Mae'n well eu
cyfrifo ill dau ar yr un pryd.

Mae'r swyddogaeth gynhenid `divmod` yn cymryd dwy ddadl ac yn dychwelyd tŵpl
o ddau werth, y cyniferydd a'r gweddill.

```python
divmod(7, 3)
```

Gallwn ddefnyddio neilltuad tŵpl i storio elfennau'r tŵpl mewn dau newidyn.

```python
quotient, remainder = divmod(7, 3)
quotient
```

```python
remainder
```

Dyma enghraifft o swyddogaeth sy'n dychwelyd tŵpl.

```python
def min_max(t):
    return min(t), max(t)
```

Mae `max` a `min` yn swyddogaethau cynhenid sy'n darganfod elfennau mwyaf a
lleiaf dilyniant. Mae `min_max` yn cyfrifo'r ddau ac yn dychwelyd tŵpl o
ddau werth.

```python
min_max([2, 4, 1, 3])
```

Gallwn neilltuo'r canlyniadau i newidynnau fel hyn:

```python
low, high = min_max([2, 4, 1, 3])
low, high
```

## Pacio Dadleuon

Gall swyddogaethau gymryd nifer amrywiol o ddadleuon. Mae enw paramedr sy'n
dechrau gyda'r gweithredydd `*` yn **{term}`pacio`** dadleuon mewn tŵpl. Er
enghraifft, mae'r swyddogaeth ganlynol yn cymryd unrhyw nifer o ddadleuon ac
yn cyfrifo eu cymedr rhifyddol — hynny yw, eu swm wedi'i rannu â nifer y
dadleuon.

```python
def mean(*args):
    return sum(args) / len(args)
```

Gall y paramedr gael unrhyw enw a hoffech, ond mae `args` yn gonfensiynol.
Gallwn alw'r swyddogaeth fel hyn:

```python
mean(1, 2, 3)
```

Os oes gennych ddilyniant o werthoedd a'ch bod am eu pasio i swyddogaeth fel
sawl dadl, gallwch ddefnyddio'r gweithredydd `*` i **{term}`dadbacio`**'r
tŵpl. Er enghraifft, mae `divmod` yn cymryd union ddwy ddadl — os pasiwch
dŵpl fel paramedr, cewch wall.

```python
%%expect TypeError
t = (7, 3)
divmod(t)
```

Er bod y tŵpl yn cynnwys dwy elfen, mae'n cyfrif fel un ddadl sengl. Ond os
dadbaciwch y tŵpl, caiff ei drin fel dwy ddadl.

```python
divmod(*t)
```

Gall pacio a dadbacio fod yn ddefnyddiol os ydych am addasu ymddygiad
swyddogaeth bresennol. Er enghraifft, mae'r swyddogaeth hon yn cymryd
unrhyw nifer o ddadleuon, yn dileu'r isaf a'r uchaf, ac yn cyfrifo cymedr
y gweddill.

```python
def trimmed_mean(*args):
    low, high = min_max(args)
    trimmed = list(args)
    trimmed.remove(low)
    trimmed.remove(high)
    return mean(*trimmed)
```

Yn gyntaf mae'n defnyddio `min_max` i ddarganfod yr elfennau isaf ac uchaf.
Yna mae'n trosi `args` yn rhestr fel y gall ddefnyddio'r dull `remove`. Yn
olaf mae'n dadbacio'r rhestr fel bod yr elfennau'n cael eu pasio i `mean`
fel dadleuon ar wahân, yn hytrach nag fel un rhestr sengl.

Dyma enghraifft sy'n dangos yr effaith.

```python
mean(1, 2, 3, 10)
```

```python
trimmed_mean(1, 2, 3, 10)
```

Defnyddir y math hwn o gymedr "wedi'i docio" mewn rhai chwaraeon gyda
beirniadaeth oddrychol — fel plymio a gymnasteg — i leihau effaith
beirniad y mae ei sgôr yn gwyro oddi wrth y lleill.

## Zip

Mae tŵpls yn ddefnyddiol ar gyfer dolennu drwy elfennau dau ddilyniant a
pherfformio gweithrediadau ar elfennau cyfatebol. Er enghraifft, tybiwch fod
dau dîm yn chwarae cyfres o saith gêm, a'n bod yn cofnodi eu sgoriau mewn
dwy restr, un ar gyfer pob tîm.

```python
scores1 = [1, 2, 4, 5, 1, 5, 2]
scores2 = [5, 5, 2, 2, 5, 2, 3]
```

Gadewch i ni weld sawl gêm a enillodd pob tîm. Byddwn yn defnyddio `zip`,
sy'n swyddogaeth gynhenid sy'n cymryd dau ddilyniant neu fwy ac yn
dychwelyd **{term}`gwrthrych zip`**, a enwir felly am ei fod yn paru
elfennau'r dilyniannau fel dannedd sip.

```python
zip(scores1, scores2)
```

Gallwn ddefnyddio'r gwrthrych zip i ddolennu drwy'r gwerthoedd yn y
dilyniannau mewn parau.

```python
for pair in zip(scores1, scores2):
     print(pair)
```

Bob tro drwy'r ddolen, neilltuir tŵpl o sgoriau i `pair`. Felly gallwn
neilltuo'r sgoriau i newidynnau, a chyfrif buddugoliaethau'r tîm cyntaf, fel
hyn:

```python
wins = 0
for team1, team2 in zip(scores1, scores2):
    if team1 > team2:
        wins += 1
        
wins
```

Yn anffodus, dim ond tair gêm a enillodd y tîm cyntaf a chollodd y gyfres.

Os oes gennych ddwy restr a'ch bod am gael rhestr o barau, gallwch ddefnyddio
`zip` a `list`.

```python
t = list(zip(scores1, scores2))
t
```

Rhestr o dŵpls yw'r canlyniad, felly gallwn gael canlyniad y gêm olaf fel
hyn:

```python
t[-1]
```

Os oes gennych restr o allweddi a rhestr o werthoedd, gallwch ddefnyddio
`zip` a `dict` i wneud geiriadur. Er enghraifft, dyma sut y gallwn wneud
geiriadur sy'n mapio o bob llythyren i'w safle yn yr wyddor.

```python
letters = 'abcdefghijklmnopqrstuvwxyz'
numbers = range(len(letters))
letter_map = dict(zip(letters, numbers))
```

Nawr gallwn chwilio am lythyren a chael ei mynegai yn yr wyddor.

```python
letter_map['a'], letter_map['z']
```

Yn y mapio hwn, `0` yw mynegai `'a'` a `25` yw mynegai `'z'`.

Os oes angen i chi ddolennu drwy elfennau dilyniant a'u mynegeion, gallwch
ddefnyddio'r swyddogaeth gynhenid `enumerate`.

```python
enumerate('abc')
```

**{term}`gwrthrych enumerate`** yw'r canlyniad sy'n dolennu drwy ddilyniant o
barau, lle mae pob pâr yn cynnwys mynegai (yn dechrau o 0) ac elfen o'r
dilyniant penodol.

```python
for index, element in enumerate('abc'):
    print(index, element)
```

## Cymharu a Threfnu

Mae'r gweithredyddion perthynol yn gweithio gyda thŵpls a dilyniannau eraill.
Er enghraifft, os defnyddiwch y gweithredydd `<` gyda thŵpls, mae'n dechrau
drwy gymharu'r elfen gyntaf o bob dilyniant. Os ydynt yn hafal, mae'n mynd
ymlaen i'r pâr nesaf o elfennau, ac yn y blaen, nes iddo ddarganfod pâr
sy'n wahanol.

```python
(0, 1, 2) < (0, 3, 4)
```

Nid ystyrir elfennau dilynol — hyd yn oed os ydynt yn fawr iawn.

```python
(0, 1, 2000000) < (0, 3, 4)
```

Mae'r ffordd hon o gymharu tŵpls yn ddefnyddiol ar gyfer trefnu rhestr o
dŵpls, neu ddarganfod y lleiaf neu'r mwyaf. Fel enghraifft, gadewch i ni
ddarganfod y llythyren fwyaf cyffredin mewn gair. Yn y bennod flaenorol,
ysgrifennom `value_counts`, sy'n cymryd llinyn ac yn dychwelyd geiriadur
sy'n mapio o bob llythyren i nifer y troeon y mae'n ymddangos.

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

Dyma'r canlyniad ar gyfer y llinyn `'banana'`.

```python
counter = value_counts('banana')
counter
```

Gyda dim ond tair eitem, gallwn weld yn hawdd mai `'a'` yw'r llythyren fwyaf
aml, sy'n ymddangos deirgwaith. Ond pe bai mwy o eitemau, byddai'n ddefnyddiol
eu trefnu'n awtomatig.

Gallwn gael yr eitemau o `counter` fel hyn.

```python
items = counter.items()
items
```

Gwrthrych `dict_items` yw'r canlyniad sy'n ymddwyn fel rhestr o dŵpls, felly
gallwn ei drefnu fel hyn.

```python
sorted(items)
```

Yr ymddygiad rhagosodedig yw defnyddio elfen gyntaf pob tŵpl i drefnu'r
rhestr, a defnyddio'r ail elfen i dorri cysylltiadau.

Fodd bynnag, i ddarganfod yr eitemau â'r cyfrifon uchaf, rydym am ddefnyddio'r
ail elfen i drefnu'r rhestr. Gallwn wneud hynny drwy ysgrifennu swyddogaeth
sy'n cymryd tŵpl ac yn dychwelyd yr ail elfen.

```python
def second_element(t):
    return t[1]
```

Yna gallwn basio'r swyddogaeth honno i `sorted` fel dadl ddewisol o'r enw
`key`, sy'n nodi y dylid defnyddio'r swyddogaeth hon i gyfrifo'r
**{term}`allwedd trefnu`** ar gyfer pob eitem.

```python
sorted_items = sorted(items, key=second_element)
sorted_items
```

Mae'r allwedd drefnu'n pennu trefn yr eitemau yn y rhestr. Mae'r llythyren
â'r cyfrif isaf yn ymddangos gyntaf, a'r llythyren â'r cyfrif uchaf yn
ymddangos olaf. Felly gallwn ddarganfod y llythyren fwyaf cyffredin fel hyn.

```python
sorted_items[-1]
```

Os mai dim ond y mwyafswm rydym ei eisiau, nid oes rhaid i ni drefnu'r
rhestr. Gallwn ddefnyddio `max`, sydd hefyd yn cymryd `key` fel dadl
ddewisol.

```python
max(items, key=second_element)
```

I ddarganfod y llythyren â'r cyfrif isaf, gallem ddefnyddio `min` yn yr un
modd.

## Gwrthdroi Geiriadur

Tybiwch eich bod am wrthdroi geiriadur fel y gallwch chwilio am werth a
chael yr allwedd gyfatebol. Er enghraifft, os oes gennych gyfrifydd geiriau
sy'n mapio o bob gair i nifer y troeon y mae'n ymddangos, gallech wneud
geiriadur sy'n mapio o gyfanrifau i'r geiriau sy'n ymddangos y nifer
hwnnw o weithiau.

Ond mae problem — mae'n rhaid i'r allweddi mewn geiriadur fod yn unigryw,
ond nid yw'r gwerthoedd. Er enghraifft, mewn cyfrifydd geiriau, gallai fod
llawer o eiriau â'r un cyfrif.

Felly un ffordd o wrthdroi geiriadur yw creu geiriadur newydd lle mae'r
gwerthoedd yn rhestri o allweddi o'r gwreiddiol. Fel enghraifft, gadewch i
ni gyfrif y llythrennau yn `parrot`.

```python
d =  value_counts('parrot')
d
```

Os gwrthdrown y geiriadur hwn, dylai'r canlyniad fod yn
`{1: ['p', 'a', 'o', 't'], 2: ['r']}`, sy'n dangos mai `'p'`, `'a'`, `'o'`,
ac `'t'` yw'r llythrennau sy'n ymddangos unwaith, a mai `'r'` yw'r
llythyren sy'n ymddangos ddwywaith.

Mae'r swyddogaeth ganlynol yn cymryd geiriadur ac yn dychwelyd ei wrthdro
fel geiriadur newydd.

```python
def invert_dict(d):
    new = {}
    for key, value in d.items():
        if value not in new:
            new[value] = [key]
        else:
            new[value].append(key)
    return new
```

Mae'r gosodiad `for` yn dolennu drwy'r allweddi a'r gwerthoedd yn `d`. Os
nad yw'r gwerth eisoes yn y geiriadur newydd, caiff ei ychwanegu a'i
gysylltu â rhestr sy'n cynnwys un elfen sengl. Fel arall caiff ei ychwanegu
at y rhestr bresennol.

Gallwn ei phrofi fel hyn:

```python
invert_dict(d)
```

A chawn y canlyniad a ddisgwyliwyd gennym.

Dyma'r enghraifft gyntaf i ni ei gweld lle mae'r gwerthoedd yn y geiriadur
yn rhestri. Fe welwn fwy!

## Dadnamu

Mae rhestri, geiriaduron, a thŵpls yn **{term}`strwythur data`**. Yn y
bennod hon rydym yn dechrau gweld strwythurau data cyfansawdd, fel rhestri
o dŵpls, neu eiriaduron sy'n cynnwys tŵpls fel allweddi a rhestri fel
gwerthoedd. Mae strwythurau data cyfansawdd yn ddefnyddiol, ond maent yn
dueddol o achosi gwallau pan fydd strwythur data o'r math, maint, neu
strwythur anghywir. Er enghraifft, os yw swyddogaeth yn disgwyl rhestr o
gyfanrifau a chi'n rhoi cyfanrif plaen iddi (nid mewn rhestr), mae'n debygol
na fydd yn gweithio.

I helpu dadnamu'r mathau hyn o wallau, ysgrifennais fodiwl o'r enw
`structshape` sy'n darparu swyddogaeth, a elwir hefyd yn `structshape`, sy'n
cymryd unrhyw fath o strwythur data fel dadl ac yn dychwelyd llinyn sy'n
crynhoi ei strwythur. Gallwch ei lawrlwytho o
<https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/structshape.py>.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/structshape.py');
```

Gallwn ei fewnforio fel hyn.

```python
from structshape import structshape
```

Dyma enghraifft gyda rhestr syml.

```python
t = [1, 2, 3]
structshape(t)
```

Dyma restr o restri.

```python
t2 = [[1,2], [3,4], [5,6]]
structshape(t2)
```

Os nad yw elfennau'r rhestr o'r un math, mae `structshape` yn eu grwpio yn
ôl math.

```python
t3 = [1, 2, 3, 4.0, '5', '6', [7], [8], 9]
structshape(t3)
```

Dyma restr o dŵpls.

```python
s = 'abc'
lt = list(zip(t, s))
structshape(lt)
```

A dyma eiriadur â thair eitem sy'n mapio cyfanrifau i linynnau.

```python
d = dict(lt) 
structshape(d)
```

Os ydych yn cael trafferth cadw golwg ar eich strwythurau data, gall
`structshape` helpu.

## Rhestr Termau'r Bennod

**pacio:**
Casglu sawl dadl mewn tŵpl.

**dadbacio:**
Trin tŵpl (neu ddilyniant arall) fel sawl dadl.

**gwrthrych zip:**
Canlyniad galw'r swyddogaeth gynhenid `zip`, y gellir ei ddefnyddio i
ddolennu drwy ddilyniant o dŵpls.

**gwrthrych enumerate:**
Canlyniad galw'r swyddogaeth gynhenid `enumerate`, y gellir ei ddefnyddio i
ddolennu drwy ddilyniant o dŵpls.

**allwedd trefnu:**
Gwerth, neu swyddogaeth sy'n cyfrifo gwerth, a ddefnyddir i drefnu elfennau
casgliad.

**strwythur data:**
Casgliad o werthoedd, wedi'u trefnu i berfformio gweithrediadau penodol yn
effeithlon.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Efallai y bydd ymarferion y bennod hon yn fwy anodd nag ymarferion penodau
blaenorol, felly rwy'n eich annog i gael help gan gynorthwyydd rhithwir. Wrth
i chi ofyn cwestiynau mwy anodd, efallai y gwelwch nad yw'r atebion yn gywir
ar yr ymgais gyntaf, felly dyma gyfle i ymarfer llunio anogiadau da a dilyn i
fyny gyda mireiniadau da.

Un strategaeth y gallech ei hystyried yw rhannu problem fawr yn ddarnau y
gellir eu datrys gyda swyddogaethau syml. Gofynnwch i'r cynorthwyydd
rhithwir ysgrifennu'r swyddogaethau a'u profi. Yna, unwaith y byddant yn
gweithio, gofynnwch am ddatrysiad i'r broblem wreiddiol.

Ar gyfer rhai o'r ymarferion isod, rwy'n awgrymu pa strwythurau data ac
algorithmau i'w defnyddio. Efallai y gwelwch yr awgrymiadau hyn yn
ddefnyddiol wrth i chi weithio ar y problemau, ond maent hefyd yn anogiadau
da i'w trosglwyddo i gynorthwyydd rhithwir.

### Ymarfer

Yn y bennod hon dywedais y gellir defnyddio tŵpls fel allweddi mewn
geiriaduron am eu bod yn hashadwy, ac maent yn hashadwy am eu bod yn
anghyfnewidiol. Ond nid yw hynny bob amser yn wir.

Os yw tŵpl yn cynnwys gwerth cyfnewidiol, fel rhestr neu eiriadur, nid yw'r
tŵpl yn hashadwy mwyach am ei fod yn cynnwys elfennau nad ydynt yn hashadwy.
Fel enghraifft, dyma dŵpl sy'n cynnwys dwy restr o gyfanrifau.

```python
list0 = [1, 2, 3]
list1 = [4, 5]

t = (list0, list1)
t
```

Ysgrifennwch linell o god sy'n ychwanegu'r gwerth `6` at ddiwedd yr ail
restr yn `t`. Os dangoswch `t`, dylai'r canlyniad fod yn
`([1, 2, 3], [4, 5, 6])`.

```python
# Ateb yma
```

Ceisiwch greu geiriadur sy'n mapio o `t` i linyn, a chadarnhewch eich bod
yn cael `TypeError`.

```python
# Ateb yma
```

Am fwy ar y pwnc hwn, gofynnwch i gynorthwyydd rhithwir, "A yw tŵpls Python
bob amser yn hashadwy?"

### Ymarfer

Yn y bennod hon fe wnaethom eiriadur sy'n mapio o bob llythyren i'w mynegai
yn yr wyddor.

```python
letters = 'abcdefghijklmnopqrstuvwxyz'
numbers = range(len(letters))
letter_map = dict(zip(letters, numbers))
```

Er enghraifft, `0` yw mynegai `'a'`.

```python
letter_map['a']
```

I fynd i'r cyfeiriad arall, gallwn ddefnyddio mynegeio rhestr. Er
enghraifft, `'b'` yw'r llythyren ym mynegai `1`.

```python
letters[1]
```

Gallwn ddefnyddio `letter_map` a `letters` i amgodio a datgodio geiriau gan
ddefnyddio seiffr Cesar.

Mae seiffr Cesar yn fath gwan o amgryptio sy'n golygu symud pob llythyren
nifer penodol o leoedd yn yr wyddor, gan lapio'n ôl i'r dechrau os oes
angen. Er enghraifft, `'c'` yw `'a'` wedi'i symud 2 ac `'a'` yw `'z'` wedi'i
symud 1.

Ysgrifennwch swyddogaeth o'r enw `shift_word` sy'n cymryd fel paramedrau
linyn a chyfanrif, ac yn dychwelyd llinyn newydd sy'n cynnwys llythrennau'r
llinyn wedi'u symud y nifer penodol o leoedd.

I brofi eich swyddogaeth, cadarnhewch fod "cheer" wedi'i symud 7 yn "jolly"
a "melon" wedi'i symud 16 yn "cubed".

Awgrymiadau: Defnyddiwch y gweithredydd modwlws i lapio'n ôl o `'z'` i
`'a'`. Dolennwch drwy lythrennau'r gair, symudwch bob un, a'u hychwanegu at
restr o lythrennau. Yna defnyddiwch `join` i gydgatenu'r llythrennau'n
llinyn.

Gallwch ddefnyddio'r amlinelliad hwn i ddechrau.

```python
def shift_word(word, n):
    """Shift the letters of `word` by `n` places.
    
    >>> shift_word('cheer', 7)
    'jolly'
    >>> shift_word('melon', 16)
    'cubed'
    """
    return None
```

```python
# Ateb yma
```

```python
shift_word('cheer', 7)
```

```python
shift_word('melon', 16)
```

Gallwch ddefnyddio `doctest` i brofi eich swyddogaeth.

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)

run_doctests(shift_word)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `most_frequent_letters` sy'n cymryd llinyn
ac yn argraffu'r llythrennau yn nhrefn leihaol amlder.

I gael yr eitemau mewn trefn leihaol, gallwch ddefnyddio `reversed` ynghyd â
`sorted`, neu gallwch basio `reverse=True` fel paramedr allweddair i
`sorted`.

Gallwch ddefnyddio'r amlinelliad hwn o'r swyddogaeth i ddechrau.

```python
def most_frequent_letters(string):
    return None
```

```python
# Ateb yma
```

A'r enghraifft hon i brofi eich swyddogaeth.

```python
most_frequent_letters('brontosaurus')
```

Unwaith y bydd eich swyddogaeth yn gweithio, gallwch ddefnyddio'r cod
canlynol i argraffu'r llythrennau mwyaf cyffredin yn *Dracula*, y gallwn ei
lawrlwytho o Project Gutenberg.

```python
download('https://github.com/AllenDowney/ThinkPython/raw/v3/pg345.txt');
```

Nid yw'r ddadl allweddair `encoding='utf-8'` yn y llyfr printiedig. Dim ond
ar Windows mae ei hangen.

```python
string = open('pg345.txt', encoding='utf-8').read()
most_frequent_letters(string)
```

Yn ôl "Codes and Secret Writing" gan Zim, mae'r dilyniant o lythrennau yn
nhrefn leihaol amlder yn Saesneg yn dechrau gyda "ETAONRISH". Sut mae'r
dilyniant hwn yn cymharu â'r canlyniadau o *Dracula*?

(section_exercise_11)=
### Ymarfer

Mewn ymarfer blaenorol, profom a yw dau linyn yn anagramau drwy drefnu
llythrennau'r ddau air a gwirio a yw'r llythrennau wedi'u trefnu'r un fath.
Nawr gadewch i ni wneud y broblem ychydig yn fwy heriol.

Byddwn yn ysgrifennu rhaglen sy'n cymryd rhestr o eiriau ac yn argraffu pob
set o eiriau sy'n anagramau. Dyma enghraifft o sut y gallai'r allbwn edrych:

```
['deltas', 'desalt', 'lasted', 'salted', 'slated', 'staled']
['retainers', 'ternaries']
['generating', 'greatening']
['resmelts', 'smelters', 'termless']
```

Awgrym: Ar gyfer pob gair yn y rhestr eiriau, trefnwch y llythrennau a'u
cydio'n ôl yn llinyn. Gwnewch eiriadur sy'n mapio o'r llinyn hwn, wedi'i
drefnu, i restr o eiriau sy'n anagramau ohono.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt');
```

```python
word_list = open('words.txt').read().split()
```

Dyma'r swyddogaeth `sort_word` rydym wedi'i defnyddio o'r blaen.

```python
def sort_word(word):
    return ''.join(sorted(word))
```

```python
# Ateb yma
```

I ddarganfod y rhestr hiraf o anagramau, gallwch ddefnyddio'r swyddogaeth
ganlynol, sy'n cymryd pâr allwedd-gwerth lle mae'r allwedd yn llinyn a'r
gwerth yn rhestr o eiriau. Mae'n dychwelyd hyd y rhestr.

```python
def value_length(pair):
    key, value = pair
    return len(value)
```

Gallwn ddefnyddio'r swyddogaeth hon fel allwedd drefnu i ddarganfod
rhestrau hiraf yr anagramau.

```python
anagram_items = sorted(anagram_dict.items(), key=value_length)
for key, value in anagram_items[-10:]:
    print(value)
```

Os ydych am wybod y geiriau hiraf sydd ag anagramau, gallwch ddefnyddio'r
ddolen ganlynol i argraffu rhai ohonynt.

```python
longest = 7

for key, value in anagram_items:
    if len(value) > 1:
        word_len = len(value[0])
        if word_len > longest:
            longest = word_len
            print(value)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `word_distance` sy'n cymryd dau air â'r un
hyd ac yn dychwelyd nifer y mannau lle mae'r ddau air yn wahanol.

Awgrym: Defnyddiwch `zip` i ddolennu drwy lythrennau cyfatebol y geiriau.

Dyma amlinelliad o'r swyddogaeth gyda doctestau y gallwch eu defnyddio i
wirio eich swyddogaeth.

```python
def word_distance(word1, word2):
    """Computes the number of places where two word differ.

    >>> word_distance("hello", "hxllo")
    1
    >>> word_distance("ample", "apply")
    2
    >>> word_distance("kitten", "mutton")
    3
    """
    return None
```

```python
# Ateb yma
```

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)
    
run_doctests(word_distance)
```

### Ymarfer

Mae "metathesis" yn drawsosodiad llythrennau mewn gair. Mae dau air yn
ffurfio "pâr metathesis" os gallwch drawsnewid un yn y llall drwy gyfnewid
dwy lythyren, fel `converse` a `conserve`. Ysgrifennwch raglen sy'n
darganfod pob un o'r parau metathesis yn y rhestr eiriau.

Awgrym: Mae'n rhaid i eiriau mewn pâr metathesis fod yn anagramau o'i
gilydd.

Diolch: Ysbrydolwyd yr ymarfer hwn gan enghraifft yn <http://puzzlers.org>.

```python
# Ateb yma
```

### Ymarfer

Mae hwn yn ymarfer bonws nad yw yn y llyfr. Mae'n fwy heriol na'r
ymarferion eraill yn y bennod hon, felly efallai yr hoffech ofyn i
gynorthwyydd rhithwir am help, neu ddychwelyd ato ar ôl i chi ddarllen
ychydig mwy o benodau.

Dyma Bos Car Talk arall (<http://www.cartalk.com/content/puzzlers>):

> Beth yw'r gair Saesneg hiraf, sy'n parhau i fod yn air Saesneg dilys, wrth
> i chi dynnu ei lythrennau un ar y tro?
>
> Nawr, gellir tynnu llythrennau o'r naill ben neu'r llall, neu o'r canol,
> ond ni allwch ad-drefnu unrhyw un o'r llythrennau. Bob tro y gollyngwch
> lythyren, rydych yn dod i ben gyda gair Saesneg arall. Os gwnewch hynny,
> byddwch yn y pen draw yn dod i ben gydag un llythyren a bydd honno hefyd
> yn air Saesneg — un sydd i'w ganfod yn y geiriadur. Rwyf am wybod beth
> yw'r gair hiraf a sawl llythyren sydd ganddo?
>
> Rwy'n mynd i roi enghraifft fach wylaidd i chi: Sprite. Iawn? Rydych yn
> dechrau gyda sprite, rydych yn tynnu llythyren i ffwrdd, un o fewn y gair,
> tynnu'r r i ffwrdd, ac mae gennym spite, yna rydym yn tynnu'r e o'r
> diwedd, mae gennym spit, rydym yn tynnu'r s i ffwrdd, mae gennym pit, it,
> ac I.

Ysgrifennwch raglen i ddarganfod pob gair y gellir ei leihau fel hyn, ac
yna darganfod yr hiraf.

Mae'r ymarfer hwn ychydig yn fwy heriol na'r rhan fwyaf, felly dyma rai
awgrymiadau:

1. Efallai yr hoffech ysgrifennu swyddogaeth sy'n cymryd gair ac yn cyfrifo
   rhestr o'r holl eiriau y gellir eu ffurfio drwy dynnu un llythyren.
   Dyma "blant" y gair.

2. Yn ddychweliadol, mae gair yn ostyngadwy os yw unrhyw un o'i blant yn
   ostyngadwy. Fel achos sylfaenol, gallwch ystyried y llinyn gwag yn
   ostyngadwy.

3. Nid yw'r rhestr eiriau rydym wedi bod yn ei defnyddio'n cynnwys geiriau
   un llythyren. Felly efallai y bydd yn rhaid i chi ychwanegu "I" ac "a".

4. I wella perfformiad eich rhaglen, efallai yr hoffech wneud nodiadau o'r
   geiriau y gwyddys eu bod yn ostyngadwy.

```python
# Ateb yma
```

```python
# Ateb yma
```

```python
# Ateb yma
```

```python
# Ateb yma
```

```python
# Ateb yma
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
