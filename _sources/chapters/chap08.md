# Llinynnau a Mynegiadau Rheolaidd

Nid yw llinynnau fel cyfanrifau, rhifau pwynt arnawf, a Booleaid. Mae llinyn yn
**{term}`dilyniant`**, sy'n golygu ei fod yn cynnwys sawl gwerth mewn trefn
benodol. Yn y bennod hon byddwn yn gweld sut i gyrchu'r gwerthoedd sy'n
cyfansoddi llinyn, a byddwn yn defnyddio swyddogaethau sy'n prosesu llinynnau.

Byddwn hefyd yn defnyddio mynegiadau rheolaidd, sy'n arf pwerus ar gyfer dod o
hyd i batrymau mewn llinyn a pherfformio gweithrediadau fel chwilio a disodli.

Fel ymarfer, cewch gyfle i gymhwyso'r arfau hyn i gêm eiriau o'r enw Wordle.

## Mae Llinyn yn Ddilyniant

Mae llinyn yn ddilyniant o nodau. Gall **{term}`nod`** fod yn llythyren (mewn
bron unrhyw wyddor), yn ddigid, yn arwydd atalnodi, neu'n fwlch gwyn.

Gallwch ddewis nod o linyn gyda'r gweithredydd cromfachau. Mae'r gosodiad
enghreifftiol hwn yn dewis nod rhif 1 o `fruit` ac yn ei neilltuo i `letter`:

```python
fruit = 'banana'
letter = fruit[1]
```

Gelwir y mynegiad mewn cromfachau yn **{term}`mynegai`**, a elwir felly am ei
fod yn *mynegi* pa nod yn y dilyniant i'w ddewis. Ond efallai nad yw'r
canlyniad yr hyn rydych yn ei ddisgwyl.

```python
letter
```

Mewn gwirionedd, ail lythyren y llinyn yw'r llythyren â mynegai `1`. Mae
mynegai yn atred o ddechrau'r llinyn, felly atred y llythyren gyntaf yw `0`.

```python
fruit[0]
```

Gallwch feddwl am `'b'` fel llythyren 0fed `'banana'` — ynganir "sero-ed".

Gall y mynegai mewn cromfachau fod yn newidyn.

```python
i = 1
fruit[i]
```

Neu'n fynegiad sy'n cynnwys newidynnau a gweithredyddion.

```python
fruit[i+1]
```

Ond mae'n rhaid i werth y mynegai fod yn gyfanrif — fel arall cewch
`TypeError`.

```python
%%expect TypeError

fruit[1.5]
```

Fel y gwelsom ym Mhennod 1, gallwn ddefnyddio'r swyddogaeth gynhenid `len` i
gael hyd llinyn.

```python
n = len(fruit)
n
```

I gael llythyren olaf llinyn, efallai y cewch eich temtio i ysgrifennu hyn:

```python
%%expect IndexError

fruit[n]
```

Ond mae hynny'n achosi `IndexError` am nad oes llythyren yn `'banana'` â'r
mynegai 6. Am ein bod wedi dechrau cyfrif o `0`, rhifir y chwe llythyren o `0`
i `5`. I gael y nod olaf, mae'n rhaid i chi dynnu `1` o `n`:

```python
fruit[n-1]
```

Ond mae ffordd haws. I gael llythyren olaf llinyn, gallwch ddefnyddio mynegai
negatif, sy'n cyfrif yn ôl o'r diwedd.

```python
fruit[-1]
```

Mae'r mynegai `-1` yn dewis y llythyren olaf, `-2` yn dewis yr ail-olaf, ac yn
y blaen.

## Sleisys Llinyn

Gelwir segment o linyn yn **{term}`sleisen`**. Mae dewis sleisen yn debyg i
ddewis nod.

```python
fruit = 'banana'
fruit[0:3]
```

Mae'r gweithredydd `[n:m]` yn dychwelyd rhan o'r llinyn o'r `n`fed nod i'r
`m`fed nod, gan gynnwys y cyntaf ond eithrio'r ail. Mae'r ymddygiad hwn yn
wrthreddfol, ond gall helpu dychmygu'r mynegeion yn pwyntio *rhwng* y nodau,
fel yn y ffigur hwn:

```python
from diagram import make_binding, Element, Value

binding = make_binding("fruit", ' b a n a n a ')
elements = [Element(Value(i), None) for i in range(7)]
```

```python
import matplotlib.pyplot as plt
from diagram import diagram, adjust
from matplotlib.transforms import Bbox

width, height, x, y = [1.35, 0.54, 0.23, 0.39]

ax = diagram(width, height)
bbox = binding.draw(ax, x, y)
bboxes = [bbox]

def draw_elts(x, y, elements):
    for elt in elements:
        bbox = elt.draw(ax, x, y, draw_value=False)
        bboxes.append(bbox)

        x1 = (bbox.xmin + bbox.xmax) / 2
        y1 = bbox.ymax + 0.02
        y2 = y1 + 0.14
        handle = plt.plot([x1, x1], [y1, y2], ':', lw=0.5, color='gray')
        x += 0.105
    
draw_elts(x + 0.48, y - 0.25, elements)
bbox = Bbox.union(bboxes)
# adjust(x, y, bbox)
```

Er enghraifft, mae'r sleisen `[3:6]` yn dewis y llythrennau `ana`, sy'n golygu
bod `6` yn gyfreithlon fel rhan o sleisen, ond nid yn gyfreithlon fel mynegai.

Os hepgorwch y mynegai cyntaf, mae'r sleisen yn dechrau ar ddechrau'r llinyn.

```python
fruit[:3]
```

Os hepgorwch yr ail fynegai, mae'r sleisen yn mynd i ddiwedd y llinyn:

```python
fruit[3:]
```

Os yw'r mynegai cyntaf yn fwy na neu'n hafal i'r ail, y canlyniad yw
**{term}`llinyn gwag`**, a gynrychiolir gan ddau ddyfynnod:

```python
fruit[3:3]
```

Nid yw llinyn gwag yn cynnwys unrhyw nodau ac mae ganddo hyd 0.

Gan barhau â'r enghraifft hon, beth ydych chi'n meddwl mae `fruit[:]` yn ei
olygu? Rhowch gynnig arni a gweld.

```python
fruit[:]
```

## Mae Llinynnau'n Anghyfnewidiol

Mae'n demtasiwn defnyddio'r gweithredydd `[]` ar ochr chwith neilltuad, gyda'r
bwriad o newid nod mewn llinyn, fel hyn:

```python
%%expect TypeError

greeting = 'Hello, world!'
greeting[0] = 'J'
```

`TypeError` yw'r canlyniad. Yn y neges wall, y "gwrthrych" yw'r llinyn a'r
"eitem" yw'r nod y ceisiom ei neilltuo. Am y tro, mae **{term}`gwrthrych`** yr
un peth â gwerth, ond byddwn yn mireinio'r diffiniad hwnnw'n ddiweddarach.

Rheswm y gwall hwn yw bod llinynnau'n **{term}`anghyfnewidiol`**, sy'n golygu
na allwch newid llinyn presennol. Y gorau y gallwch ei wneud yw creu llinyn
newydd sy'n amrywiad o'r gwreiddiol.

```python
new_greeting = 'J' + greeting[1:]
new_greeting
```

Mae'r enghraifft hon yn cydgatenu llythyren gyntaf newydd ar sleisen o
`greeting`. Nid oes ganddi unrhyw effaith ar y llinyn gwreiddiol.

```python
greeting
```

## Cymharu Llinynnau

Mae'r gweithredyddion perthynol yn gweithio ar linynnau. I weld a yw dau
linyn yn hafal, gallwn ddefnyddio'r gweithredydd `==`.

```python
word = 'banana'

if word == 'banana':
    print('All right, banana.')
```

Mae gweithrediadau perthynol eraill yn ddefnyddiol ar gyfer rhoi geiriau mewn
trefn yr wyddor:

```python
def compare_word(word):
    if word < 'banana':
        print(word, 'comes before banana.')
    elif word > 'banana':
        print(word, 'comes after banana.')
    else:
        print('All right, banana.')
```

```python
compare_word('apple')
```

Nid yw Python yn trin priflythrennau a llythrennau bach yn yr un ffordd â
phobl. Mae pob priflythyren yn dod cyn pob llythyren fach, felly:

```python
compare_word('Pineapple')
```

I ddatrys y broblem hon, gallwn drosi llinynnau i fformat safonol, fel pob
llythyren fach, cyn perfformio'r gymhariaeth. Cadwch hynny mewn cof os bydd
raid i chi amddiffyn eich hun yn erbyn dyn arfog ag Pineapple.

## Dulliau Llinynnau

Mae llinynnau'n darparu dulliau sy'n perfformio amrywiaeth o weithrediadau
defnyddiol. Mae dull yn debyg i swyddogaeth — mae'n cymryd dadleuon ac yn
dychwelyd gwerth — ond mae'r gystrawen yn wahanol. Er enghraifft, mae'r dull
`upper` yn cymryd llinyn ac yn dychwelyd llinyn newydd gyda phob llythyren yn
briflythyren.

Yn lle'r gystrawen swyddogaeth `upper(word)`, mae'n defnyddio'r gystrawen
dull `word.upper()`.

```python
word = 'banana'
new_word = word.upper()
new_word
```

Mae'r defnydd hwn o'r gweithredydd dot yn nodi enw'r dull, `upper`, ac enw'r
llinyn i gymhwyso'r dull iddo, `word`. Mae'r cromfachau gwag yn nodi nad yw'r
dull hwn yn cymryd unrhyw ddadleuon.

Gelwir galwad dull yn **{term}`galwad dull`**; yn yr achos hwn, byddem yn
dweud ein bod yn galw `upper` ar `word`.

## Ysgrifennu Ffeiliau

Mae gweithredyddion a dulliau llinynnau'n ddefnyddiol ar gyfer darllen ac
ysgrifennu ffeiliau testun. Fel enghraifft, byddwn yn gweithio gyda thestun
*Dracula*, nofel gan Bram Stoker sydd ar gael o Project Gutenberg
(<https://www.gutenberg.org/ebooks/345>).

```python
download('https://github.com/AllenDowney/ThinkPython/raw/v3/pg345.txt');
```

Rwyf wedi lawrlwytho'r llyfr mewn ffeil testun plaen o'r enw `pg345.txt`, y
gallwn ei hagor i'w darllen fel hyn:

Nid yw'r ddadl allweddair `encoding='utf-8'` yn y llyfr printiedig. Dim ond ar
Windows mae ei hangen.

```python
reader = open('pg345.txt', encoding='utf-8')
```

Yn ogystal â thestun y llyfr, mae'r ffeil hon yn cynnwys adran ar y dechrau
gyda gwybodaeth am y llyfr ac adran ar y diwedd gyda gwybodaeth am y
drwydded. Cyn i ni brosesu'r testun, gallwn dynnu'r deunydd ychwanegol hwn
drwy ddarganfod y llinellau arbennig ar y dechrau a'r diwedd sy'n dechrau
gyda `'***'`.

Mae'r swyddogaeth ganlynol yn cymryd llinell ac yn gwirio a yw'n un o'r
llinellau arbennig. Mae'n defnyddio'r dull `startswith`, sy'n gwirio a yw
llinyn yn dechrau gyda dilyniant penodol o nodau.

```python
def is_special_line(line):
    return line.startswith('*** ')
```

Gallwn ddefnyddio'r swyddogaeth hon i ddolennu drwy'r llinellau yn y ffeil ac
argraffu dim ond y llinellau arbennig.

```python
for line in reader:
    if is_special_line(line):
        print(line.strip())
```

Nawr gadewch i ni greu ffeil newydd, o'r enw `pg345_cleaned.txt`, sy'n
cynnwys dim ond testun y llyfr. Er mwyn dolennu drwy'r llyfr eto, mae'n rhaid
i ni ei hagor eto i'w darllen. Ac, i ysgrifennu ffeil newydd, gallwn ei
hagor i ysgrifennu.

```python
reader = open('pg345.txt', encoding='utf-8')
writer = open('pg345_cleaned.txt', 'w', encoding='utf-8')
```

Mae `open` yn cymryd paramedr dewisol sy'n nodi'r "modd" — yn yr enghraifft
hon, mae `'w'` yn nodi ein bod yn agor y ffeil i ysgrifennu. Os nad yw'r ffeil
yn bodoli, caiff ei chreu; os yw eisoes yn bodoli, disodlir y cynnwys.

Fel cam cyntaf, byddwn yn dolennu drwy'r ffeil nes i ni ddarganfod y llinell
arbennig gyntaf.

```python
for line in reader:
    if is_special_line(line):
        break
```

Mae'r gosodiad `break` yn "torri" allan o'r ddolen — hynny yw, mae'n achosi
i'r ddolen ddod i ben ar unwaith, cyn i ni gyrraedd diwedd y ffeil.

Pan ddaw'r ddolen i ben, mae `line` yn cynnwys y llinell arbennig a wnaeth yr
amod yn wir.

```python
line
```

Am fod `reader` yn cadw golwg ar ble mae yn y ffeil, gallwn ddefnyddio ail
ddolen i godi lle gadawom.

Mae'r ddolen ganlynol yn darllen gweddill y ffeil, un llinell ar y tro. Pan
ddarganfyddir y llinell arbennig sy'n nodi diwedd y testun, mae'n torri allan
o'r ddolen. Fel arall, mae'n ysgrifennu'r llinell i'r ffeil allbwn.

```python
for line in reader:
    if is_special_line(line):
        break
    writer.write(line)
```

Pan ddaw'r ddolen hon i ben, mae `line` yn cynnwys yr ail linell arbennig.

```python
line
```

Ar hyn o bryd mae `reader` a `writer` yn dal ar agor, sy'n golygu y gallem
barhau i ddarllen llinellau o `reader` neu ysgrifennu llinellau i `writer`. I
nodi ein bod wedi gorffen, gallwn gau'r ddwy ffeil drwy alw'r dull `close`.

```python
reader.close()
writer.close()
```

I wirio a fu'r broses hon yn llwyddiannus, gallwn ddarllen ychydig linellau
cyntaf y ffeil newydd a grëwyd gennym.

```python
for line in open('pg345_cleaned.txt', encoding='utf-8'):
    line = line.strip()
    if len(line) > 0:
        print(line)
    if line.endswith('Stoker'):
        break
```

Mae'r dull `endswith` yn gwirio a yw llinyn yn gorffen gyda dilyniant penodol
o nodau.

## Dod o Hyd a Disodli

Yng nghyfieithiad Islandeg *Dracula* o 1901, newidiwyd enw un o'r cymeriadau
o "Jonathan" i "Thomas". I wneud y newid hwn yn y fersiwn Saesneg, gallwn
ddolennu drwy'r llyfr, defnyddio'r dull `replace` i ddisodli un enw ag un
arall, ac ysgrifennu'r canlyniad i ffeil newydd.

Byddwn yn dechrau drwy gyfrif y llinellau yn fersiwn lanhaedig y ffeil.

```python
total = 0
for line in open('pg345_cleaned.txt', encoding='utf-8'):
    total += 1
    
total
```

I weld a yw llinell yn cynnwys "Jonathan", gallwn ddefnyddio'r gweithredydd
`in`, sy'n gwirio a yw'r dilyniant hwn o nodau'n ymddangos yn unrhyw le yn y
llinell.

```python
total = 0
for line in open('pg345_cleaned.txt', encoding='utf-8'):
    if 'Jonathan' in line:
        total += 1

total
```

Mae 199 llinell sy'n cynnwys yr enw, ond nid yw hynny'n gwbl gywir fel cyfanswm
nifer y troeon y mae'n ymddangos, am ei fod yn gallu ymddangos fwy nag unwaith
mewn llinell. I gael y cyfanswm, gallwn ddefnyddio'r dull `count`, sy'n
dychwelyd nifer y troeon y mae dilyniant yn ymddangos mewn llinyn.

```python
total = 0
for line in open('pg345_cleaned.txt', encoding='utf-8'):
    total += line.count('Jonathan')

total
```

Nawr gallwn ddisodli `'Jonathan'` â `'Thomas'` fel hyn:

```python
writer = open('pg345_replaced.txt', 'w', encoding='utf-8')

for line in open('pg345_cleaned.txt', encoding='utf-8'):
    line = line.replace('Jonathan', 'Thomas')
    writer.write(line)
```

Y canlyniad yw ffeil newydd o'r enw `pg345_replaced.txt` sy'n cynnwys fersiwn
o *Dracula* lle gelwir Jonathan Harker yn Thomas.

```python
total = 0
for line in open('pg345_replaced.txt', encoding='utf-8'):
    total += line.count('Thomas')

total
```

## Mynegiadau Rheolaidd

Os gwyddom yn union pa ddilyniant o nodau rydym yn chwilio amdano, gallwn
ddefnyddio'r gweithredydd `in` i'w ddarganfod a'r dull `replace` i'w ddisodli.
Ond mae arf arall, o'r enw **{term}`mynegiad rheolaidd`**, sy'n gallu
perfformio'r gweithrediadau hyn hefyd — a llawer mwy.

I ddangos hyn, byddaf yn dechrau gydag enghraifft syml ac yn gweithio ein
ffordd ymlaen. Tybiwch, unwaith eto, ein bod am ddarganfod pob llinell sy'n
cynnwys gair penodol. Am newid, gadewch i ni chwilio am gyfeiriadau at
brif gymeriad y llyfr, Count Dracula. Dyma linell sy'n ei grybwyll.

```python
text = "I am Dracula; and I bid you welcome, Mr. Harker, to my house."
```

A dyma'r **{term}`patrwm`** y byddwn yn ei ddefnyddio i chwilio.

```python
pattern = 'Dracula'
```

Mae modiwl o'r enw `re` yn darparu swyddogaethau sy'n ymwneud â mynegiadau
rheolaidd. Gallwn ei fewnforio fel hyn a defnyddio'r swyddogaeth `search` i
wirio a yw'r patrwm yn ymddangos yn y testun.

```python
import re

result = re.search(pattern, text)
result
```

Os yw'r patrwm yn ymddangos yn y testun, mae `search` yn dychwelyd gwrthrych
`Match` sy'n cynnwys canlyniadau'r chwiliad. Ymhlith gwybodaeth arall, mae
ganddo newidyn o'r enw `string` sy'n cynnwys y testun a chwiliwyd.

```python
result.string
```

Mae hefyd yn darparu dull o'r enw `group` sy'n dychwelyd y rhan o'r testun a
gydweddodd â'r patrwm.

```python
result.group()
```

Ac mae'n darparu dull o'r enw `span` sy'n dychwelyd y mynegai yn y testun lle
mae'r patrwm yn dechrau ac yn gorffen.

```python
result.span()
```

Os nad yw'r patrwm yn ymddangos yn y testun, `None` yw'r gwerth dychwelyd o
`search`.

```python
result = re.search('Count', text)
print(result)
```

Felly gallwn wirio a fu'r chwiliad yn llwyddiannus drwy wirio a yw'r
canlyniad yn `None`.

```python
result == None
```

Gan roi hynny i gyd at ei gilydd, dyma swyddogaeth sy'n dolennu drwy'r
llinellau yn y llyfr nes iddi ddarganfod un sy'n cydweddu â'r patrwm penodol,
ac yn dychwelyd y gwrthrych `Match`.

```python
def find_first(pattern):
    for line in open('pg345_cleaned.txt', encoding='utf-8'):
        result = re.search(pattern, line)
        if result != None:
            return result
```

Gallwn ei defnyddio i ddarganfod y cyfeiriad cyntaf at gymeriad.

```python
result = find_first('Harker')
result.string
```

Ar gyfer yr enghraifft hon, nid oedd angen i ni ddefnyddio mynegiadau
rheolaidd — gallem fod wedi gwneud yr un peth yn haws gyda'r gweithredydd
`in`. Ond gall mynegiadau rheolaidd wneud pethau na all y gweithredydd `in`
eu gwneud.

Er enghraifft, os yw'r patrwm yn cynnwys y nod bar fertigol, `'|'`, gall
gydweddu naill ai â'r dilyniant ar y chwith neu'r dilyniant ar y dde. Tybiwch
ein bod am ddarganfod y cyfeiriad cyntaf at Mina Murray yn y llyfr, ond nad
ydym yn siŵr a gyfeirir ati wrth ei henw cyntaf neu ei chyfenw. Gallwn
ddefnyddio'r patrwm canlynol, sy'n cydweddu ag un o'r ddau enw.

```python
pattern = 'Mina|Murray'
result = find_first(pattern)
result.string
```

Gallwn ddefnyddio patrwm fel hwn i weld faint o weithiau y crybwyllir
cymeriad gan y naill enw neu'r llall. Dyma swyddogaeth sy'n dolennu drwy'r
llyfr ac yn cyfrif nifer y llinellau sy'n cydweddu â'r patrwm penodol.

```python
def count_matches(pattern):
    count = 0
    for line in open('pg345_cleaned.txt', encoding='utf-8'):
        result = re.search(pattern, line)
        if result != None:
            count += 1
    return count
```

Nawr gadewch i ni weld sawl gwaith y crybwyllir Mina.

```python
count_matches('Mina|Murray')
```

Mae'r nod arbennig `'^'` yn cydweddu â dechrau llinyn, felly gallwn
ddarganfod llinell sy'n dechrau gyda phatrwm penodol.

```python
result = find_first('^Dracula')
result.string
```

A'r nod arbennig `'$'` yn cydweddu â diwedd llinyn, felly gallwn ddarganfod
llinell sy'n gorffen gyda phatrwm penodol (gan anwybyddu'r llinell newydd ar
y diwedd).

```python
result = find_first('Harker$')
result.string
```

## Amnewid Llinynnau

Ganed Bram Stoker yn Iwerddon, a phan gyhoeddwyd *Dracula* yn 1897, roedd yn
byw yn Lloegr. Felly byddem yn disgwyl iddo ddefnyddio'r sillafiad Prydeinig
o eiriau fel "centre" a "colour". I wirio, gallwn ddefnyddio'r patrwm
canlynol, sy'n cydweddu naill ai â "centre" neu'r sillafiad Americanaidd
"center".

```python
pattern = 'cent(er|re)'
```

Yn y patrwm hwn, mae'r cromfachau'n amgáu'r rhan o'r patrwm y mae'r bar
fertigol yn gymwys iddi. Felly mae'r patrwm hwn yn cydweddu â dilyniant sy'n
dechrau gyda `'cent'` ac yn gorffen gyda naill ai `'er'` neu `'re'`.

```python
result = find_first(pattern)
result.string
```

Fel y disgwylid, defnyddiodd y sillafiad Prydeinig.

Gallwn hefyd wirio a ddefnyddiodd y sillafiad Prydeinig o "colour". Mae'r
patrwm canlynol yn defnyddio'r nod arbennig `'?'`, sy'n golygu bod y nod
blaenorol yn ddewisol.

```python
pattern = 'colou?r'
```

Mae'r patrwm hwn yn cydweddu naill ai â "colour" gyda'r `'u'` neu "color"
hebddo.

```python
result = find_first(pattern)
line = result.string
line
```

Unwaith eto, fel y disgwylid, defnyddiodd y sillafiad Prydeinig.

Nawr tybiwch ein bod am gynhyrchu argraffiad o'r llyfr gyda sillafiadau
Americanaidd. Gallwn ddefnyddio'r swyddogaeth `sub` yn y modiwl `re`, sy'n
gwneud **{term}`amnewid llinynnau`**.

```python
re.sub(pattern, 'color', line)
```

Y ddadl gyntaf yw'r patrwm rydym am ei ddarganfod a'i ddisodli, yr ail yw'r
hyn rydym am ei ddisodli ag ef, a'r drydedd yw'r llinyn rydym am ei chwilio.
Yn y canlyniad, gallwch weld bod "colour" wedi'i ddisodli â "color".

```python
# I used this function to search for lines to use as examples

def all_matches(pattern):
    for line in open('pg345_cleaned.txt', encoding='utf-8'):
        result = re.search(pattern, line)
        if result:
            print(line.strip())
```

```python
# Here's the pattern I used (which uses some features we haven't seen)

names = r'(?<!\.\s)[A-Z][a-zA-Z]+'

all_matches(names)
```

## Dadnamu

Pan fyddwch yn darllen ac yn ysgrifennu ffeiliau, gall dadnamu fod yn anodd.
Os ydych yn gweithio mewn llyfr nodiadau Jupyter, gallwch ddefnyddio
**{term}`gorchymyn shell`**au i helpu. Er enghraifft, i ddangos ychydig
linellau cyntaf ffeil, gallwch ddefnyddio'r gorchymyn `!head`, fel hyn:

```python
!head pg345_cleaned.txt
```

Mae'r ebychnod cychwynnol, `!`, yn nodi mai gorchymyn shell yw hwn, nad yw'n
rhan o Python. I ddangos ychydig linellau olaf, gallwch ddefnyddio `!tail`.

```python
!tail pg345_cleaned.txt
```

Pan fyddwch yn gweithio gyda ffeiliau mawr, gall dadnamu fod yn anodd am y
gallai fod gormod o allbwn i'w wirio â llaw. Strategaeth dadnamu dda yw
dechrau gyda dim ond rhan o'r ffeil, cael y rhaglen i weithio, ac yna ei
rhedeg gyda'r ffeil gyfan.

I wneud ffeil fach sy'n cynnwys rhan o ffeil fwy, gallwn ddefnyddio `!head`
eto gyda'r gweithredydd ailgyfeirio, `>`, sy'n nodi y dylid ysgrifennu'r
canlyniadau i ffeil yn hytrach na'u dangos.

```python
!head pg345_cleaned.txt > pg345_cleaned_10_lines.txt
```

Yn ddiofyn, mae `!head` yn darllen y 10 llinell gyntaf, ond mae'n cymryd dadl
ddewisol sy'n nodi nifer y llinellau i'w darllen.

```python
!head -100 pg345_cleaned.txt > pg345_cleaned_100_lines.txt
```

Mae'r gorchymyn shell hwn yn darllen y 100 llinell gyntaf o
`pg345_cleaned.txt` ac yn eu hysgrifennu i ffeil o'r enw
`pg345_cleaned_100_lines.txt`.

Sylwch: Nid yw'r gorchmynion shell `!head` a `!tail` ar gael ar bob system
weithredu. Os nad ydynt yn gweithio i chi, gallwn ysgrifennu swyddogaethau
tebyg yn Python. Gweler yr ymarfer cyntaf ar ddiwedd y bennod hon am
awgrymiadau.

## Rhestr Termau'r Bennod

**dilyniant:**
Casgliad trefnus o werthoedd lle mae pob gwerth yn cael ei adnabod gan fynegai
cyfanrif.

**nod:**
Elfen o linyn, gan gynnwys llythrennau, rhifau, a symbolau.

**mynegai:**
Gwerth cyfanrif a ddefnyddir i ddewis eitem mewn dilyniant, fel nod mewn
llinyn. Yn Python mae mynegeion yn dechrau o `0`.

**sleisen:**
Rhan o linyn a nodir gan ystod o fynegeion.

**llinyn gwag:**
Llinyn nad yw'n cynnwys unrhyw nodau ac sydd â hyd `0`.

**gwrthrych:**
Rhywbeth y gall newidyn gyfeirio ato. Mae gan wrthrych fath a gwerth.

**anghyfnewidiol:**
Os na ellir newid elfennau gwrthrych, mae'r gwrthrych yn anghyfnewidiol.

**galwad dull:**
Mynegiad — neu ran o fynegiad — sy'n galw dull.

**mynegiad rheolaidd:**
Dilyniant o nodau sy'n diffinio patrwm chwilio.

**patrwm:**
Rheol sy'n nodi'r gofynion y mae'n rhaid i linyn eu bodloni i gyfansoddi
cydweddiad.

**amnewid llinynnau:**
Disodli llinyn, neu ran o linyn, â llinyn arall.

**gorchymyn shell:**
Gosodiad mewn iaith shell, sef iaith a ddefnyddir i ryngweithio â system
weithredu.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Yn y bennod hon, dim ond crafu wyneb yr hyn y gall mynegiadau rheolaidd ei
wneud a wnaethom. I gael syniad o'r hyn sy'n bosibl, gofynnwch i gynorthwyydd
rhithwir, "Beth yw'r nodau arbennig mwyaf cyffredin a ddefnyddir mewn
mynegiadau rheolaidd Python?"

Gallwch hefyd ofyn am batrwm sy'n cydweddu â mathau penodol o linynnau. Er
enghraifft, ceisiwch ofyn:

* Ysgrifennwch fynegiad rheolaidd Python sy'n cydweddu â rhif ffôn 10-digid
  gyda chysylltnodau.

* Ysgrifennwch fynegiad rheolaidd Python sy'n cydweddu â chyfeiriad stryd
  gyda rhif ac enw stryd, wedi'i ddilyn gan `ST` neu `AVE`.

* Ysgrifennwch fynegiad rheolaidd Python sy'n cydweddu ag enw llawn gydag
  unrhyw deitl cyffredin fel `Mr` neu `Mrs` wedi'i ddilyn gan unrhyw nifer o
  enwau sy'n dechrau â phriflythrennau, o bosibl gyda chysylltnodau rhwng
  rhai enwau.

Ac os hoffech weld rhywbeth mwy cymhleth, ceisiwch ofyn am fynegiad rheolaidd
sy'n cydweddu ag unrhyw URL cyfreithlon.

Yn aml mae gan fynegiad rheolaidd y llythyren `r` cyn y dyfynnod, sy'n nodi
mai "llinyn crai" ydyw. Am fwy o wybodaeth, gofynnwch i gynorthwyydd rhithwir,
"Beth yw llinyn crai yn Python?"

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)
```

### Ymarfer

Gweler a allwch ysgrifennu swyddogaeth sy'n gwneud yr un peth â'r gorchymyn
shell `!head`. Dylai gymryd fel dadleuon enw ffeil i'w darllen, nifer y
llinellau i'w darllen, ac enw'r ffeil i ysgrifennu'r llinellau iddi. Os yw'r
trydydd paramedr yn `None`, dylai ddangos y llinellau yn hytrach na'u
hysgrifennu i ffeil.

Ystyriwch ofyn i gynorthwyydd rhithwir am help, ond os gwnewch, dywedwch wrtho
i beidio â defnyddio gosodiad `with` na gosodiad `try`.

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau canlynol i brofi eich swyddogaeth.

```python
head('pg345_cleaned.txt', 10)
```

```python
head('pg345_cleaned.txt', 100, 'pg345_cleaned_100_lines.txt')
```

```python
!tail pg345_cleaned_100_lines.txt
```

### Ymarfer

Mae "Wordle" yn gêm eiriau ar-lein lle mae'r nod yn dyfalu gair pum llythyren
mewn chwe chynnig neu lai. Mae'n rhaid i bob cynnig gael ei adnabod fel gair,
heb gynnwys enwau priod.

Ar ôl pob cynnig, cewch wybodaeth am ba rai o'r llythrennau a ddyfalwyd sy'n
ymddangos yn y gair targed, a pha rai sydd yn y safle cywir.

Er enghraifft, tybiwch mai `MOWER` yw'r gair targed a'ch bod yn dyfalu
`TRIED`. Byddech yn dysgu bod `E` yn y gair ac yn y safle cywir, bod `R` yn y
gair ond nid yn y safle cywir, a nad yw `T`, `I`, na `D` yn y gair.

Fel enghraifft wahanol, tybiwch eich bod wedi dyfalu'r geiriau `SPADE` a
`CLERK`, a'ch bod wedi dysgu bod `E` yn y gair, ond nid yn yr un o'r
safleoedd hynny, ac nad yw unrhyw un o'r llythrennau eraill yn ymddangos yn
y gair. O'r geiriau yn y rhestr eiriau, sawl un allai fod y gair targed?
Ysgrifennwch swyddogaeth o'r enw `check_word` sy'n cymryd gair pum llythyren
ac yn gwirio a allai fod y gair targed, o gael y dyfaliadau hyn.

```python
# Ateb yma
```

Gallwch ddefnyddio unrhyw un o'r swyddogaethau o'r bennod flaenorol, fel
`uses_any`.

```python
def uses_any(word, letters):
    for letter in word.lower():
        if letter in letters.lower():
            return True
    return False
```

Gallwch ddefnyddio'r ddolen ganlynol i brofi eich swyddogaeth.

```python
for line in open('words.txt'):
    word = line.strip()
    if len(word) == 5 and check_word(word):
        print(word)
```

### Ymarfer

Gan barhau â'r ymarfer blaenorol, tybiwch eich bod yn dyfalu'r gair `TOTEM`
ac yn dysgu bod `E` yn *dal* ddim yn y lle cywir, ond bod `M` yn y lle cywir.
Sawl gair sydd ar ôl?

```python
# Ateb yma
```

```python
# Ateb yma
```

### Ymarfer

Mae *The Count of Monte Cristo* yn nofel gan Alexandre Dumas a ystyrir yn
glasur. Serch hynny, yn rhagymadrodd cyfieithiad Saesneg o'r llyfr, mae'r
awdur Umberto Eco yn cyfaddef iddo ganfod y llyfr yn "un o'r nofelau sydd
wedi'u hysgrifennu waethaf erioed".

Yn benodol, mae'n dweud ei bod yn "ddigywilydd o ran ei hailadrodd o'r un
ansoddair," gan sôn yn benodol am y nifer o weithiau y mae "ei chymeriadau
naill ai'n crynu neu'n gwelwi."

I weld a yw ei wrthwynebiad yn ddilys, gadewch i ni gyfrif nifer y
llinellau sy'n cynnwys y gair `pale` ar unrhyw ffurf, gan gynnwys `pale`,
`pales`, `paled`, a `paleness`, yn ogystal â'r gair cysylltiedig `pallor`.
Defnyddiwch un mynegiad rheolaidd sengl sy'n cydweddu ag unrhyw un o'r
geiriau hyn. Fel her ychwanegol, gwnewch yn siŵr nad yw'n cydweddu ag unrhyw
eiriau eraill, fel `impale` — efallai yr hoffech ofyn i gynorthwyydd rhithwir
am help.

Mae'r gell ganlynol yn lawrlwytho'r llyfr o Project Gutenberg
<https://www.gutenberg.org/ebooks/1184>.

```python
download('https://github.com/AllenDowney/ThinkPython/raw/v3/pg1184.txt');
```

Mae'r gell ganlynol yn rhedeg swyddogaeth sy'n darllen y ffeil o Project
Gutenberg ac yn ysgrifennu ffeil sy'n cynnwys dim ond testun y llyfr, nid y
wybodaeth ychwanegol am y llyfr.

```python
def clean_file(input_file, output_file):
    reader = open(input_file, encoding='utf-8')
    writer = open(output_file, 'w', encoding='utf-8')

    for line in reader:
        if is_special_line(line):
            break

    for line in reader:
        if is_special_line(line):
            break
        writer.write(line)
        
    reader.close()
    writer.close()

clean_file('pg1184.txt', 'pg1184_cleaned.txt')
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

Yn ôl y cyfrif hwn, mae'r geiriau hyn yn ymddangos ar `223` llinell o'r
llyfr, felly efallai bod gan Mr. Eco bwynt.

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
