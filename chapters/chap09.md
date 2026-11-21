# Rhestri

Mae'r bennod hon yn cyflwyno un o fathau cynhenid mwyaf defnyddiol Python,
rhestri. Byddwch hefyd yn dysgu mwy am wrthrychau a beth all ddigwydd pan fydd
sawl newidyn yn cyfeirio at yr un gwrthrych.

Yn yr ymarferion ar ddiwedd y bennod, byddwn yn gwneud rhestr eiriau ac yn ei
defnyddio i chwilio am eiriau arbennig fel palindromau ac anagramau.

## Mae Rhestr yn Ddilyniant

Fel llinyn, mae **{term}`rhestr`** yn ddilyniant o werthoedd. Mewn llinyn,
nodau yw'r gwerthoedd; mewn rhestr, gallant fod yn unrhyw fath. Gelwir y
gwerthoedd mewn rhestr yn **{term}`elfen`**nau.

Mae sawl ffordd o greu rhestr newydd; y symlaf yw amgáu'r elfennau mewn
cromfachau sgwâr (`[` a `]`). Er enghraifft, dyma restr o ddau gyfanrif.

```python
numbers = [42, 123]
```

A dyma restr o dri llinyn.

```python
cheeses = ['Cheddar', 'Edam', 'Gouda']
```

Nid oes rhaid i elfennau rhestr fod o'r un math. Mae'r rhestr ganlynol yn
cynnwys llinyn, rhif pwynt arnawf, cyfanrif, a hyd yn oed rhestr arall.

```python
t = ['spam', 2.0, 5, [10, 20]]
```

Gelwir rhestr o fewn rhestr arall yn **{term}`rhestr nythol`**.

Gelwir rhestr nad yw'n cynnwys unrhyw elfennau yn rhestr wag; gallwch greu un
gyda chromfachau gwag, `[]`.

```python
empty = []
```

Mae'r swyddogaeth `len` yn dychwelyd hyd rhestr.

```python
len(cheeses)
```

Hyd rhestr wag yw `0`.

```python
len(empty)
```

Mae'r ffigur canlynol yn dangos y diagram cyflwr ar gyfer `cheeses`, `numbers`
ac `empty`.

```python
from diagram import make_list, Binding, Value

list1 = make_list(cheeses, dy=-0.3, offsetx=0.17)
binding1 = Binding(Value('cheeses'), list1)

list2 = make_list(numbers, dy=-0.3, offsetx=0.17)
binding2 = Binding(Value('numbers'), list2)

list3 = make_list(empty, dy=-0.3, offsetx=0.1)
binding3 = Binding(Value('empty'), list3)
```

```python
from diagram import diagram, adjust, Bbox

width, height, x, y = [3.66, 1.58, 0.45, 1.2]
ax = diagram(width, height)
bbox1 = binding1.draw(ax, x, y)
bbox2 = binding2.draw(ax, x+2.25, y)
bbox3 = binding3.draw(ax, x+2.25, y-1.0)

bbox = Bbox.union([bbox1, bbox2, bbox3])
#adjust(x, y, bbox)
```

Cynrychiolir rhestri gan flychau gyda'r gair "list" y tu allan a'r elfennau
rhifiedig y tu mewn.

## Mae Rhestri'n Gyfnewidiol

I ddarllen elfen o restr, gallwn ddefnyddio'r gweithredydd cromfachau. `0` yw
mynegai'r elfen gyntaf.

```python
cheeses[0]
```

Yn wahanol i linynnau, mae rhestri'n gyfnewidiol. Pan fydd y gweithredydd
cromfachau'n ymddangos ar ochr chwith neilltuad, mae'n nodi elfen y rhestr y
caiff gwerth ei neilltuo iddi.

```python
numbers[1] = 17
numbers
```

Mae ail elfen `numbers`, a arferai fod yn `123`, bellach yn `17`.

Mae mynegeion rhestr yn gweithio yn yr un ffordd â mynegeion llinyn:

* Gellir defnyddio unrhyw fynegiad cyfanrif fel mynegai.

* Os ceisiwch ddarllen neu ysgrifennu elfen nad yw'n bodoli, cewch
  `IndexError`.

* Os oes gan fynegai werth negatif, mae'n cyfrif yn ôl o ddiwedd y rhestr.

Mae'r gweithredydd `in` yn gweithio ar restri — mae'n gwirio a yw elfen
benodol yn ymddangos yn unrhyw le yn y rhestr.

```python
'Edam' in cheeses
```

```python
'Wensleydale' in cheeses
```

Er y gall rhestr gynnwys rhestr arall, mae'r rhestr nythol yn dal i gyfrif
fel un elfen sengl — felly yn y rhestr ganlynol, dim ond pedair elfen sydd
yna.

```python
t = ['spam', 2.0, 5, [10, 20]]
len(t)
```

Ac nid ystyrir `10` yn elfen o `t` am ei fod yn elfen o restr nythol, nid
`t`.

```python
10 in t
```

## Sleisys Rhestr

Mae'r gweithredydd sleisio'n gweithio ar restri yn yr un ffordd ag y mae'n
gweithio ar linynnau. Mae'r enghraifft ganlynol yn dewis yr ail a'r drydedd
elfen o restr o bedair llythyren.

```python
letters = ['a', 'b', 'c', 'd']
letters[1:3]
```

Os hepgorwch y mynegai cyntaf, mae'r sleisen yn dechrau ar y dechrau.

```python
letters[:2]
```

Os hepgorwch yr ail, mae'r sleisen yn mynd i'r diwedd.

```python
letters[2:]
```

Felly os hepgorwch y ddau, mae'r sleisen yn gopi o'r rhestr gyfan.

```python
letters[:]
```

Ffordd arall o gopïo rhestr yw defnyddio'r swyddogaeth `list`.

```python
list(letters)
```

Am mai `list` yw enw swyddogaeth gynhenid, dylech osgoi ei defnyddio fel enw
newidyn.

## Gweithrediadau Rhestr

Mae'r gweithredydd `+` yn cydgatenu rhestri.

```python
t1 = [1, 2]
t2 = [3, 4]
t1 + t2
```

Mae'r gweithredydd `*` yn ailadrodd rhestr nifer penodol o weithiau.

```python
['spam'] * 4
```

Nid oes unrhyw weithredyddion mathemategol eraill yn gweithio gyda rhestri,
ond mae'r swyddogaeth gynhenid `sum` yn adio'r elfennau.

```python
sum(t1)
```

A `min` a `max` yn darganfod yr elfennau lleiaf a mwyaf.

```python
min(t1)
```

```python
max(t2)
```

## Dulliau Rhestr

Mae Python yn darparu dulliau sy'n gweithredu ar restri. Er enghraifft, mae
`append` yn ychwanegu elfen newydd at ddiwedd rhestr:

```python
letters.append('e')
letters
```

Mae `extend` yn cymryd rhestr fel dadl ac yn ychwanegu pob un o'r elfennau:

```python
letters.extend(['f', 'g'])
letters
```

Mae dau ddull sy'n tynnu elfennau o restr. Os gwyddoch fynegai'r elfen rydych
ei heisiau, gallwch ddefnyddio `pop`.

```python
t = ['a', 'b', 'c']
t.pop(1)
```

Y gwerth dychwelyd yw'r elfen a dynnwyd. A gallwn gadarnhau bod y rhestr
wedi'i haddasu.

```python
t
```

Os gwyddoch yr elfen rydych am ei thynnu (ond nid y mynegai), gallwch
ddefnyddio `remove`:

```python
t = ['a', 'b', 'c']
t.remove('b')
```

`None` yw'r gwerth dychwelyd o `remove`. Ond gallwn gadarnhau bod y rhestr
wedi'i haddasu.

```python
t
```

Os nad yw'r elfen rydych yn gofyn amdani yn y rhestr, mae hynny'n
`ValueError`.

```python
%%expect ValueError

t.remove('d')
```

## Rhestri a Llinynnau

Mae llinyn yn ddilyniant o nodau ac mae rhestr yn ddilyniant o werthoedd, ond
nid yr un peth yw rhestr o nodau a llinyn. I drosi o linyn i restr o nodau,
gallwch ddefnyddio'r swyddogaeth `list`.

```python
s = 'spam'
t = list(s)
t
```

Mae'r swyddogaeth `list` yn torri llinyn yn llythrennau unigol. Os ydych am
dorri llinyn yn eiriau, gallwch ddefnyddio'r dull `split`:

```python
s = 'pining for the fjords'
t = s.split()
t
```

Mae dadl ddewisol o'r enw **{term}`terfynydd`** yn nodi pa nodau i'w
defnyddio fel ffiniau gair. Mae'r enghraifft ganlynol yn defnyddio
cysylltnod fel terfynydd.

```python
s = 'ex-parrot'
t = s.split('-')
t
```

Os oes gennych restr o linynnau, gallwch eu cydgatenu'n un llinyn gan
ddefnyddio `join`. Mae `join` yn ddull llinyn, felly mae'n rhaid i chi ei
alw ar y terfynydd a phasio'r rhestr fel dadl.

```python
delimiter = ' '
t = ['pining', 'for', 'the', 'fjords']
s = delimiter.join(t)
s
```

Yn yr achos hwn bwlch yw'r terfynydd, felly mae `join` yn rhoi bwlch rhwng
geiriau. I gydio llinynnau heb fylchau, gallwch ddefnyddio'r llinyn gwag,
`''`, fel terfynydd.

## Dolennu Drwy Restr

Gallwch ddefnyddio gosodiad `for` i ddolennu drwy elfennau rhestr.

```python
for cheese in cheeses:
    print(cheese)
```

Er enghraifft, ar ôl defnyddio `split` i wneud rhestr o eiriau, gallwn
ddefnyddio `for` i ddolennu drwyddynt.

```python
s = 'pining for the fjords'

for word in s.split():
    print(word)
```

Nid yw dolen `for` dros restr wag byth yn rhedeg y gosodiadau mewnoledig.

```python
for x in []:
    print('This never happens.')
```

## Trefnu Rhestri

Mae Python yn darparu swyddogaeth gynhenid o'r enw `sorted` sy'n trefnu
elfennau rhestr.

```python
scramble = ['c', 'a', 'b']
sorted(scramble)
```

Mae'r rhestr wreiddiol heb newid.

```python
scramble
```

Mae `sorted` yn gweithio gydag unrhyw fath o ddilyniant, nid dim ond
rhestri. Felly gallwn drefnu'r llythrennau mewn llinyn fel hyn.

```python
sorted('letters')
```

Rhestr yw'r canlyniad. I drosi'r rhestr yn llinyn, gallwn ddefnyddio `join`.

```python
''.join(sorted('letters'))
```

Gyda llinyn gwag fel y terfynydd, cydir elfennau'r rhestr heb ddim
rhyngddynt.

## Gwrthrychau a Gwerthoedd

Os rhedwn y gosodiadau neilltuad hyn:

```python
a = 'banana'
b = 'banana'
```

Gwyddom fod `a` a `b` ill dau'n cyfeirio at linyn, ond nid ydym yn gwybod a
ydynt yn cyfeirio at yr *un* llinyn. Mae dau gyflwr posibl, a ddangosir yn y
ffigur canlynol.

```python
from diagram import Frame, Stack

s = 'banana'
bindings = [Binding(Value(name), Value(repr(s))) for name in 'ab']
frame1 = Frame(bindings, dy=-0.25)

binding1 = Binding(Value('a'), Value(repr(s)), dy=-0.11)
binding2 = Binding(Value('b'), draw_value=False, dy=0.11)
frame2 = Frame([binding1, binding2], dy=-0.25)

stack = Stack([frame1, frame2], dx=1.7, dy=0)
```

```python
width, height, x, y = [2.85, 0.76, 0.17, 0.51]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)
# adjust(x, y, bbox)
```

Yn y diagram ar y chwith, mae `a` a `b` yn cyfeirio at ddau wrthrych
gwahanol sydd â'r un gwerth. Yn y diagram ar y dde, maent yn cyfeirio at yr
un gwrthrych. I wirio a yw dau newidyn yn cyfeirio at yr un gwrthrych,
gallwch ddefnyddio'r gweithredydd `is`.

```python
a = 'banana'
b = 'banana'
a is b
```

Yn yr enghraifft hon, dim ond un gwrthrych llinyn a greodd Python, ac mae
`a` a `b` ill dau'n cyfeirio ato. Ond pan grewch ddwy restr, cewch ddau
wrthrych.

```python
a = [1, 2, 3]
b = [1, 2, 3]
a is b
```

Felly mae'r diagram cyflwr yn edrych fel hyn.

```python
t = [1, 2, 3]
binding1 = Binding(Value('a'), Value(repr(t)))
binding2 = Binding(Value('b'), Value(repr(t)))
frame = Frame([binding1, binding2], dy=-0.25)
```

```python
width, height, x, y = [1.16, 0.76, 0.21, 0.51]
ax = diagram(width, height)
bbox = frame.draw(ax, x, y)
# adjust(x, y, bbox)
```

Yn yr achos hwn byddem yn dweud bod y ddwy restr yn **{term}`cyfwerth`**, am
fod ganddynt yr un elfennau, ond nid yn **{term}`unfath`**, am nad ydynt yr
un gwrthrych. Os yw dau wrthrych yn unfath, maent hefyd yn gyfwerth, ond os
ydynt yn gyfwerth, nid ydynt o reidrwydd yn unfath.

## Arallenwi

Os yw `a` yn cyfeirio at wrthrych a'ch bod yn neilltuo `b = a`, mae'r ddau
newidyn yn cyfeirio at yr un gwrthrych.

```python
a = [1, 2, 3]
b = a
b is a
```

Felly mae'r diagram cyflwr yn edrych fel hyn.

```python
t = [1, 2, 3]
binding1 = Binding(Value('a'), Value(repr(t)), dy=-0.11)
binding2 = Binding(Value('b'), draw_value=False, dy=0.11)
frame = Frame([binding1, binding2], dy=-0.25)
```

```python
width, height, x, y = [1.11, 0.81, 0.17, 0.56]
ax = diagram(width, height)
bbox = frame.draw(ax, x, y)
# adjust(x, y, bbox)
```

Gelwir y cysylltiad rhwng newidyn a gwrthrych yn **{term}`cyfeiriad`**. Yn yr
enghraifft hon, mae dau gyfeiriad at yr un gwrthrych.

Mae gan wrthrych â mwy nag un cyfeiriad fwy nag un enw, felly rydym yn dweud
bod y gwrthrych wedi'i **{term}`arallenwi`**. Os yw'r gwrthrych
arallenwog yn gyfnewidiol, mae newidiadau a wnaed gydag un enw'n effeithio
ar y llall. Yn yr enghraifft hon, os newidiwn y gwrthrych y mae `b` yn
cyfeirio ato, rydym hefyd yn newid y gwrthrych y mae `a` yn cyfeirio ato.

```python
b[0] = 5
a
```

Felly byddem yn dweud bod `a` yn "gweld" y newid hwn. Er y gall yr ymddygiad
hwn fod yn ddefnyddiol, mae'n dueddol o achosi gwallau. Yn gyffredinol, mae'n
fwy diogel osgoi arallenwi wrth weithio gyda gwrthrychau cyfnewidiol.

Ar gyfer gwrthrychau anghyfnewidiol fel llinynnau, nid yw arallenwi cymaint
o broblem. Yn yr enghraifft hon:

```python
a = 'banana'
b = 'banana'
```

Nid yw bron byth yn gwneud gwahaniaeth a yw `a` a `b` yn cyfeirio at yr un
llinyn ai peidio.

## Dadleuon Rhestr

Pan basiwch restr i swyddogaeth, mae'r swyddogaeth yn cael cyfeiriad at y
rhestr. Os yw'r swyddogaeth yn addasu'r rhestr, mae'r galwr yn gweld y
newid. Er enghraifft, mae `pop_first` yn defnyddio dull rhestr `pop` i dynnu'r
elfen gyntaf o restr.

```python
def pop_first(lst):
    return lst.pop(0)
```

Gallwn ei defnyddio fel hyn.

```python
letters = ['a', 'b', 'c']
pop_first(letters)
```

Y gwerth dychwelyd yw'r elfen gyntaf, sydd wedi'i thynnu o'r rhestr — fel y
gallwn weld drwy ddangos y rhestr a addaswyd.

```python
letters
```

Yn yr enghraifft hon, mae'r paramedr `lst` a'r newidyn `letters` yn
arallenwau o'r un gwrthrych, felly mae'r diagram cyflwr yn edrych fel hyn:

```python
lst = make_list('abc', dy=-0.3, offsetx=0.1)
binding1 = Binding(Value('letters'), draw_value=False)
frame1 = Frame([binding1], name='__main__', loc='left')

binding2 = Binding(Value('lst'), draw_value=False, dx=0.61, dy=0.35)
frame2 = Frame([binding2], name='pop_first', loc='left', offsetx=0.08)

stack = Stack([frame1, frame2], dx=-0.3, dy=-0.5)
```

```python
width, height, x, y = [2.04, 1.24, 1.06, 0.85]
ax = diagram(width, height)
bbox1 = stack.draw(ax, x, y)
bbox2 = lst.draw(ax, x+0.5, y)
bbox = Bbox.union([bbox1, bbox2])
adjust(x, y, bbox)
```

Mae pasio cyfeiriad at wrthrych fel dadl i swyddogaeth yn creu math o
arallenwi. Os yw'r swyddogaeth yn addasu'r gwrthrych, mae'r newidiadau hynny'n
parhau ar ôl i'r swyddogaeth ddod i ben.

## Gwneud Rhestr Eiriau

Yn y bennod flaenorol, darllenom y ffeil `words.txt` a chwilio am eiriau â
phriodweddau penodol, fel defnyddio'r llythyren `e`. Ond fe wnaethom ddarllen
y ffeil gyfan sawl gwaith, nad yw'n effeithlon. Mae'n well darllen y ffeil
unwaith a rhoi'r geiriau mewn rhestr. Mae'r ddolen ganlynol yn dangos sut.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt');
```

```python
word_list = []

for line in open('words.txt'):
    word = line.strip()
    word_list.append(word)
    
len(word_list)
```

Cyn y ddolen, cychwynnir `word_list` gyda rhestr wag. Bob tro drwy'r ddolen,
mae'r dull `append` yn ychwanegu gair at y diwedd. Pan fydd y ddolen wedi
gorffen, mae mwy na 113,000 o eiriau yn y rhestr.

Ffordd arall o wneud yr un peth yw defnyddio `read` i ddarllen y ffeil
gyfan i mewn i linyn.

```python
string = open('words.txt').read()
len(string)
```

Y canlyniad yw un llinyn sengl gyda mwy na miliwn o nodau. Gallwn ddefnyddio'r
dull `split` i'w rannu'n rhestr o eiriau.

```python
word_list = string.split()
len(word_list)
```

Nawr, i wirio a yw llinyn yn ymddangos yn y rhestr, gallwn ddefnyddio'r
gweithredydd `in`. Er enghraifft, mae `'demotic'` yn y rhestr.

```python
'demotic' in word_list
```

Ond nid yw `'contrafibularities'`.

```python
'contrafibularities' in word_list
```

A rhaid i mi ddweud, rwy'n anaspeptig am y peth.

## Dadnamu

Sylwch fod y rhan fwyaf o ddulliau rhestr yn addasu'r ddadl ac yn dychwelyd
`None`. Mae hyn yn groes i ddulliau llinyn, sy'n dychwelyd llinyn newydd ac
yn gadael yr un gwreiddiol fel y mae.

Os ydych yn arfer ysgrifennu cod llinyn fel hyn:

```python
word = 'plumage!'
word = word.strip('!')
word
```

Mae'n demtasiwn ysgrifennu cod rhestr fel hyn:

```python
t = [1, 2, 3]
t = t.remove(3)           # WRONG!
```

Mae `remove` yn addasu'r rhestr ac yn dychwelyd `None`, felly mae'n debygol
y bydd y gweithrediad nesaf a berfformiwch gyda `t` yn methu.

```python
%%expect AttributeError

t.remove(2)
```

Mae'r neges wall hon angen tipyn o esbonio. Mae **{term}`priodoledd`** o
wrthrych yn newidyn neu'n ddull sy'n gysylltiedig ag ef. Yn yr achos hwn,
`None` yw gwerth `t`, sy'n wrthrych `NoneType`, nad oes ganddo briodoledd o'r
enw `remove`, felly `AttributeError` yw'r canlyniad.

Os gwelwch neges wall fel hon, dylech edrych yn ôl drwy'r rhaglen a gweld a
allech fod wedi galw dull rhestr yn anghywir.

## Rhestr Termau'r Bennod

**rhestr:**
Gwrthrych sy'n cynnwys dilyniant o werthoedd.

**elfen:**
Un o'r gwerthoedd mewn rhestr neu ddilyniant arall.

**rhestr nythol:**
Rhestr sy'n elfen o restr arall.

**terfynydd:**
Nod neu linyn a ddefnyddir i nodi ble y dylid rhannu llinyn.

**cyfwerth:**
Yn meddu ar yr un gwerth.

**unfath:**
Bod yr un gwrthrych (sy'n awgrymu cyfwerthedd).

**cyfeiriad:**
Y cysylltiad rhwng newidyn a'i werth.

**wedi'i arallenwi:**
Os oes mwy nag un newidyn yn cyfeirio at wrthrych, mae'r gwrthrych wedi'i
arallenwi.

**priodoledd:**
Un o'r gwerthoedd wedi'u henwi sy'n gysylltiedig â gwrthrych.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Yn y bennod hon, defnyddiais y geiriau "contrafibularities" ac "anaspeptic",
ond nid ydynt mewn gwirionedd yn eiriau Saesneg go iawn. Fe'u defnyddiwyd yn
y rhaglen deledu Brydeinig *Black Adder*, Cyfres 3, Pennod 2, "Ink and
Incapability".

Fodd bynnag, pan ofynnais i ChatGPT 3.5 (fersiwn Awst 3, 2023) o ble y daeth
y geiriau hynny, honnodd i ddechrau eu bod o Monty Python, ac yn ddiweddarach
honnodd eu bod o ddrama Tom Stoppard, *Rosencrantz and Guildenstern Are
Dead*.

Os gofynnwch nawr, efallai y cewch ganlyniadau gwahanol. Ond mae'r
enghraifft hon yn atgoffâd nad yw cynorthwywyr rhithwir bob amser yn gywir,
felly dylech wirio a yw'r canlyniadau'n gywir. Wrth i chi ennill profiad,
cewch synnwyr o ba gwestiynau y gall cynorthwywyr rhithwir eu hateb yn
ddibynadwy. Yn yr enghraifft hon, gall chwiliad gwe confensiynol adnabod
tarddiad y geiriau hyn yn gyflym.

Os ewch yn sownd ar unrhyw un o ymarferion y bennod hon, ystyriwch ofyn i
gynorthwyydd rhithwir am help. Os cewch ganlyniad sy'n defnyddio nodweddion
nad ydym wedi'u dysgu eto, gallwch roi "rôl" i'r cynorthwyydd rhithwir.

Er enghraifft, cyn i chi ofyn cwestiwn, ceisiwch deipio "Role: Basic Python
Programming Instructor". Ar ôl hynny, dylai'r ymatebion a gewch ddefnyddio
dim ond nodweddion sylfaenol. Os gwelwch o hyd nodweddion nad ydych wedi'u
dysgu, gallwch ddilyn i fyny gyda "Can you write that using only basic
Python features?"

### Ymarfer

Mae dau air yn anagramau os gallwch ad-drefnu llythrennau un i sillafu'r
llall. Er enghraifft, mae `tops` yn anagram o `stop`.

Un ffordd o wirio a yw dau air yn anagramau yw trefnu'r llythrennau yn y
ddau air. Os yw'r rhestri o lythrennau wedi'u trefnu'r un fath, mae'r
geiriau'n anagramau.

Ysgrifennwch swyddogaeth o'r enw `is_anagram` sy'n cymryd dau linyn ac yn
dychwelyd `True` os ydynt yn anagramau.

I'ch helpu ddechrau, dyma amlinelliad o'r swyddogaeth gyda doctestau.

```python
def is_anagram(word1, word2):
    """Checks whether two words are anagrams.
    
    >>> is_anagram('tops', 'stop')
    True
    >>> is_anagram('skate', 'takes')
    True
    >>> is_anagram('tops', 'takes')
    False
    >>> is_anagram('skate', 'stop')
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

run_doctests(is_anagram)
```

Gan ddefnyddio eich swyddogaeth a'r rhestr eiriau, darganfyddwch holl
anagramau `takes`.

```python
# Ateb yma
```

### Ymarfer

Mae Python yn darparu swyddogaeth gynhenid o'r enw `reversed` sy'n cymryd fel
dadl ddilyniant o elfennau — fel rhestr neu linyn — ac yn dychwelyd gwrthrych
`reversed` sy'n cynnwys yr elfennau mewn trefn wrthdro.

```python
reversed('parrot')
```

Os ydych am gael yr elfennau wedi'u gwrthdroi mewn rhestr, gallwch ddefnyddio'r
swyddogaeth `list`.

```python
list(reversed('parrot'))
```

Neu os ydych eu heisiau mewn llinyn, gallwch ddefnyddio'r dull `join`.

```python
''.join(reversed('parrot'))
```

Felly gallwn ysgrifennu swyddogaeth sy'n gwrthdroi gair fel hyn.

```python
def reverse_word(word):
    return ''.join(reversed(word))
```

Mae palindrom yn air sy'n cael ei sillafu'r un fath ymlaen ac yn ôl, fel
"noon" a "rotator". Ysgrifennwch swyddogaeth o'r enw `is_palindrome` sy'n
cymryd dadl llinyn ac yn dychwelyd `True` os yw'n balindrom a `False` fel
arall.

Dyma amlinelliad o'r swyddogaeth gyda doctestau y gallwch eu defnyddio i
wirio eich swyddogaeth.

```python
def is_palindrome(word):
    """Check if a word is a palindrome.
    
    >>> is_palindrome('bob')
    True
    >>> is_palindrome('alice')
    False
    >>> is_palindrome('a')
    True
    >>> is_palindrome('')
    True
    """
    return False
```

```python
# Ateb yma
```

```python
run_doctests(is_palindrome)
```

Gallwch ddefnyddio'r ddolen ganlynol i ddarganfod holl balindromau'r rhestr
eiriau sydd ag o leiaf 7 llythyren.

```python
for word in word_list:
    if len(word) >= 7 and is_palindrome(word):
        print(word)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `reverse_sentence` sy'n cymryd fel dadl
linyn sy'n cynnwys unrhyw nifer o eiriau wedi'u gwahanu gan fylchau. Dylai
ddychwelyd llinyn newydd sy'n cynnwys yr un geiriau mewn trefn wrthdro. Er
enghraifft, os yw'r ddadl yn "Reverse this sentence", dylai'r canlyniad fod
yn "Sentence this reverse".

Awgrym: Gallwch ddefnyddio'r dull `capitalize` i wneud priflythyren o'r gair
cyntaf a throsi'r geiriau eraill yn llythrennau bach.

I'ch helpu ddechrau, dyma amlinelliad o'r swyddogaeth gyda doctestau.

```python
def reverse_sentence(input_string):
    '''Reverse the words in a string and capitalize the first.
    
    >>> reverse_sentence('Reverse this sentence')
    'Sentence this reverse'

    >>> reverse_sentence('Python')
    'Python'

    >>> reverse_sentence('')
    ''

    >>> reverse_sentence('One for all and all for one')
    'One for all and all for one'
    '''
    return None
```

```python
# Ateb yma
```

```python
run_doctests(reverse_sentence)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `total_length` sy'n cymryd rhestr o
linynnau ac yn dychwelyd cyfanswm hyd y llinynnau. Dylai cyfanswm hyd y
geiriau yn `word_list` fod yn $902{,}728$.

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
