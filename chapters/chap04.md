# Swyddogaethau a Rhyngwynebau

Mae'r bennod hon yn cyflwyno modiwl o'r enw `jupyturtle`, sy'n caniatáu i chi greu
lluniadau syml drwy roi cyfarwyddiadau i grwban dychmygol. Byddwn yn defnyddio'r
modiwl hwn i ysgrifennu swyddogaethau sy'n tynnu sgwariau, polygonau, a chylchoedd
— ac i ddangos **{term}`dylunio rhyngwyneb`**, sef ffordd o ddylunio swyddogaethau
sy'n gweithio gyda'i gilydd.

(section_turtle_module)=
## Y Modiwl jupyturtle

I ddefnyddio'r modiwl `jupyturtle`, gallwn ei fewnforio fel hyn.

```python
import jupyturtle
```

Nawr gallwn ddefnyddio'r swyddogaethau a ddiffinnir yn y modiwl, fel `make_turtle`
a `forward`.

```python
jupyturtle.make_turtle()
jupyturtle.forward(100)
```

Mae `make_turtle` yn creu **{term}`cynfas`**, sef gofod ar y sgrin lle gallwn
dynnu, a chrwban, a gynrychiolir gan gragen gron a phen trionglog. Mae'r cylch yn
dangos lleoliad y crwban ac mae'r triongl yn nodi'r cyfeiriad y mae'n wynebu.

Mae `forward` yn symud y crwban bellter penodol yn y cyfeiriad y mae'n wynebu,
gan dynnu segment llinell ar hyd y ffordd. Mae'r pellter mewn unedau mympwyol —
mae'r maint gwirioneddol yn dibynnu ar sgrin eich cyfrifiadur.

Byddwn yn defnyddio swyddogaethau a ddiffinnir yn y modiwl `jupyturtle` sawl
gwaith, felly byddai'n braf pe na bai'n rhaid i ni ysgrifennu enw'r modiwl bob tro.
Mae hynny'n bosibl os mewnforiwn y modiwl fel hyn.

```python
from jupyturtle import make_turtle, forward
```

Mae'r fersiwn hon o'r gosodiad mewnforio yn mewnforio `make_turtle` a `forward` o'r
modiwl `jupyturtle` fel y gallwn eu galw fel hyn.

```python
make_turtle()
forward(100)
```

Mae `jupyturtle` yn darparu dwy swyddogaeth arall y byddwn yn eu defnyddio, o'r
enw `left` a `right`. Byddwn yn eu mewnforio fel hyn.

```python
from jupyturtle import left, right
```

Mae `left` yn achosi i'r crwban droi i'r chwith. Mae'n cymryd un ddadl, sef ongl y
tro mewn graddau. Er enghraifft, gallwn wneud tro 90 gradd i'r chwith fel hyn.

```python
make_turtle()
forward(50)
left(90)
forward(50)
```

Mae'r rhaglen hon yn symud y crwban i'r dwyrain ac yna i'r gogledd, gan adael dau
segment llinell ar ei hôl. Cyn i chi fynd ymlaen, gweler a allwch addasu'r
rhaglen flaenorol i wneud sgwâr.

## Gwneud Sgwâr

Dyma un ffordd o wneud sgwâr.

```python
make_turtle()

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)

forward(50)
left(90)
```

Gan fod y rhaglen hon yn ailadrodd yr un pâr o linellau bedair gwaith, gallwn wneud
yr un peth yn fwy cryno gyda dolen `for`.

```python
make_turtle()
for i in range(4):
    forward(50)
    left(90)
```

## Amgáu a Chyffredinoli

Gadewch i ni gymryd y cod tynnu-sgwâr o'r adran flaenorol a'i roi mewn swyddogaeth
o'r enw `square`.

```python
def square():
    for i in range(4):
        forward(50)
        left(90)
```

Nawr gallwn alw'r swyddogaeth fel hyn.

```python
make_turtle()
square()
```

Gelwir lapio darn o god mewn swyddogaeth yn **{term}`amgaead`**. Un o fanteision
amgáu yw ei fod yn clymu enw wrth y cod, sy'n gweithredu fel math o ddogfennaeth.
Mantais arall yw, os ailddefnyddiwch y cod, ei bod yn fwy cryno galw swyddogaeth
ddwywaith nag yw copïo a gludo'r corff!

Yn y fersiwn gyfredol, maint y sgwâr yw `50` bob amser. Os ydym am dynnu sgwariau
â gwahanol feintiau, gallwn gymryd hyd yr ochrau fel paramedr.

```python
def square(length):
    for i in range(4):
        forward(length)
        left(90)
```

Nawr gallwn dynnu sgwariau â gwahanol feintiau.

```python
make_turtle()
square(30)
square(60)
```

Gelwir ychwanegu paramedr at swyddogaeth yn **{term}`cyffredinoli`** am ei fod yn
gwneud y swyddogaeth yn fwy cyffredinol: gyda'r fersiwn flaenorol, mae'r sgwâr
bob amser yr un maint; gyda'r fersiwn hon gall fod unrhyw faint.

Os ychwanegwn baramedr arall, gallwn ei gwneud hyd yn oed yn fwy cyffredinol. Mae'r
swyddogaeth ganlynol yn tynnu polygonau rheolaidd gyda nifer penodol o ochrau.

```python
def polygon(n, length):
    angle = 360 / n
    for i in range(n):
        forward(length)
        left(angle)
```

Mewn polygon rheolaidd gyda `n` ochr, yr ongl rhwng ochrau cyfagos yw `360 / n`
gradd.

Mae'r enghraifft ganlynol yn tynnu polygon `7`-ochr gyda hyd ochr `30`.

```python
make_turtle()
polygon(7, 30)
```

Pan fo gan swyddogaeth fwy na rhyw ychydig o ddadleuon rhifiadol, mae'n hawdd
anghofio beth ydynt, neu ym mha drefn y dylent fod. Gall fod yn syniad da cynnwys
enwau'r paramedrau yn y rhestr ddadleuon.

```python
make_turtle()
polygon(n=7, length=30)
```

Gelwir y rhain weithiau'n "ddadleuon wedi'u henwi" am eu bod yn cynnwys enwau'r
paramedrau. Ond yn Python fe'u gelwir yn amlach yn **{term}`dadl allweddair`**
(peidiwch â'u drysu ag allweddeiriau Python fel `for` a `def`).

Mae'r defnydd hwn o'r gweithredydd neilltuo, `=`, yn atgoffa sut mae dadleuon a
pharamedrau'n gweithio — pan alwch swyddogaeth, caiff y dadleuon eu neilltuo i'r
paramedrau.

## Brasamcanu Cylch

Nawr tybiwch ein bod am dynnu cylch. Gallwn wneud hynny, yn fras, drwy dynnu
polygon gyda nifer fawr o ochrau, fel bod pob ochr yn ddigon bach fel ei bod yn
anodd ei gweld. Dyma swyddogaeth sy'n defnyddio `polygon` i dynnu polygon `30`-ochr
sy'n brasamcanu cylch.

```python
import math

def circle(radius):
    circumference = 2 * math.pi * radius
    n = 30
    length = circumference / n
    polygon(n, length)
```

Mae `circle` yn cymryd radiws y cylch fel paramedr. Mae'n cyfrifo `circumference`,
sef cylchedd cylch gyda'r radiws penodol. `n` yw nifer yr ochrau, felly
`circumference / n` yw hyd pob ochr.

Gallai'r swyddogaeth hon gymryd amser hir i redeg. Gallwn ei chyflymu drwy alw
`make_turtle` gyda dadl allweddair o'r enw `delay` sy'n gosod yr amser, mewn
eiliadau, y mae'r crwban yn aros ar ôl pob cam. Y gwerth rhagosodedig yw `0.2`
eiliad — os gosodwn ef i `0.02` mae'n rhedeg tua 10 gwaith yn gyflymach.

```python
make_turtle(delay=0.02)
circle(30)
```

Cyfyngiad y datrysiad hwn yw bod `n` yn gysonyn, sy'n golygu, ar gyfer cylchoedd
mawr iawn, fod yr ochrau'n rhy hir, ac ar gyfer cylchoedd bach, ein bod yn gwastraffu
amser yn tynnu ochrau byr iawn. Un dewis yw cyffredinoli'r swyddogaeth drwy gymryd
`n` fel paramedr. Ond gadewch i ni gadw pethau'n syml am y tro.

## Ailstrwythuro

Nawr gadewch i ni ysgrifennu fersiwn fwy cyffredinol o `circle`, o'r enw `arc`, sy'n
cymryd ail baramedr, `angle`, ac yn tynnu arc o gylch sy'n rhychwantu'r ongl
benodol. Er enghraifft, os yw `angle` yn `360` gradd, mae'n tynnu cylch cyflawn.
Os yw `angle` yn `180` gradd, mae'n tynnu hanner cylch.

I ysgrifennu `circle`, roeddem yn gallu ailddefnyddio `polygon`, am fod polygon
ag iddo lawer o ochrau yn frasamcan da o gylch. Ond ni allwn ddefnyddio `polygon`
i ysgrifennu `arc`.

Yn lle hynny, byddwn yn creu'r fersiwn fwy cyffredinol o `polygon`, o'r enw
`polyline`.

```python
def polyline(n, length, angle):
    for i in range(n):
        forward(length)
        left(angle)
```

Mae `polyline` yn cymryd fel paramedrau nifer y segmentau llinell i'w tynnu, `n`,
hyd y segmentau, `length`, a'r ongl rhyngddynt, `angle`.

Nawr gallwn ailysgrifennu `polygon` i ddefnyddio `polyline`.

```python
def polygon(n, length):
    angle = 360.0 / n
    polyline(n, length, angle)
```

A gallwn ddefnyddio `polyline` i ysgrifennu `arc`.

```python
def arc(radius, angle):
    arc_length = 2 * math.pi * radius * angle / 360
    n = 30
    length = arc_length / n
    step_angle = angle / n
    polyline(n, length, step_angle)
```

Mae `arc` yn debyg i `circle`, ac eithrio ei bod yn cyfrifo `arc_length`, sy'n
ffracsiwn o gylchedd cylch.

Yn olaf, gallwn ailysgrifennu `circle` i ddefnyddio `arc`.

```python
def circle(radius):
    arc(radius,  360)
```

I wirio bod y swyddogaethau hyn yn gweithio fel y disgwylir, byddwn yn eu
defnyddio i dynnu rhywbeth tebyg i falwen. Gyda `delay=0`, mae'r crwban yn rhedeg
mor gyflym â phosibl.

```python
make_turtle(delay=0)
polygon(n=20, length=9)
arc(radius=70, angle=70)
circle(radius=10)
```

Yn yr enghraifft hon, fe wnaethom ddechrau gyda chod oedd yn gweithio a'i
ad-drefnu gyda gwahanol swyddogaethau. Gelwir newidiadau fel hyn, sy'n gwella'r
cod heb newid ei ymddygiad, yn **{term}`ailstrwythuro`**.

Pe baem wedi cynllunio ymlaen llaw, efallai y byddem wedi ysgrifennu `polyline`
yn gyntaf a osgoi ailstrwythuro, ond yn aml nid ydych yn gwybod digon ar ddechrau
prosiect i ddylunio'r holl swyddogaethau. Unwaith y byddwch yn dechrau codio,
rydych yn deall y broblem yn well. Weithiau mae ailstrwythuro'n arwydd eich bod
wedi dysgu rhywbeth.

## Diagram Pentwr

Pan alwn `circle`, mae'n galw `arc`, sy'n galw `polyline`. Gallwn ddefnyddio
diagram pentwr i ddangos y dilyniant hwn o alwadau swyddogaeth a'r paramedrau ar
gyfer pob un.

```python
from diagram import make_binding, make_frame, Frame, Stack

frame1 = make_frame(dict(radius=30), name='circle', loc='left')

frame2 = make_frame(dict(radius=30, angle=360), name='arc', loc='left', dx=1.1)

frame3 = make_frame(dict(n=60, length=3.04, angle=5.8), 
                    name='polyline', loc='left', dx=1.1, offsetx=-0.27)

stack = Stack([frame1, frame2, frame3], dy=-0.4)
```

```python
from diagram import diagram, adjust

width, height, x, y = [3.58, 1.31, 0.98, 1.06]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)
#adjust(x, y, bbox)
```

Sylwch fod gwerth `angle` yn `polyline` yn wahanol i werth `angle` yn `arc`. Mae
paramedrau'n lleol, sy'n golygu y gallwch ddefnyddio'r un enw paramedr mewn
gwahanol swyddogaethau; mae'n newidyn gwahanol ym mhob swyddogaeth, a gall
gyfeirio at wahanol werth.

## Cynllun Datblygu

Mae **{term}`cynllun datblygu`** yn broses ar gyfer ysgrifennu rhaglenni. Y broses
a ddefnyddiom yn y bennod hon yw "amgáu a chyffredinoli". Camau'r broses hon yw:

1. Dechreuwch drwy ysgrifennu rhaglen fach heb ddiffiniadau swyddogaeth.

2. Unwaith y byddwch wedi cael y rhaglen i weithio, nodwch ddarn cydlynol ohoni,
   amgaewch y darn mewn swyddogaeth a rhowch enw iddi.

3. Cyffredinolwch y swyddogaeth drwy ychwanegu paramedrau priodol.

4. Ailadroddwch Gamau 1 i 3 nes bod gennych set o swyddogaethau sy'n gweithio.

5. Chwiliwch am gyfleoedd i wella'r rhaglen drwy ailstrwythuro. Er enghraifft, os
   oes gennych god tebyg mewn sawl lle, ystyriwch ei ffactora'n swyddogaeth
   briodol o gyffredinol.

Mae gan y broses hon rai anfanteision — fe welwn ddewisiadau amgen yn ddiweddarach
— ond gall fod yn ddefnyddiol os nad ydych yn gwybod ymlaen llaw sut i rannu'r
rhaglen yn swyddogaethau. Mae'r dull hwn yn caniatáu i chi ddylunio wrth fynd
ymlaen.

Mae gan ddyluniad swyddogaeth ddwy ran:

* Y **{term}`rhyngwyneb`** yw sut y defnyddir y swyddogaeth, gan gynnwys ei henw,
  y paramedrau y mae'n eu cymryd a'r hyn y mae i fod i'w wneud.

* Y **{term}`sylweddoliad`** yw sut mae'r swyddogaeth yn gwneud yr hyn y mae i
  fod i'w wneud.

Er enghraifft, dyma fersiwn gyntaf `circle` a ysgrifennom, sy'n defnyddio
`polygon`.

```python
def circle(radius):
    circumference = 2 * math.pi * radius
    n = 30
    length = circumference / n
    polygon(n, length)
```

A dyma'r fersiwn ailstrwythuredig sy'n defnyddio `arc`.

```python
def circle(radius):
    arc(radius,  360)
```

Mae gan y ddwy swyddogaeth hyn yr un rhyngwyneb — maent yn cymryd yr un
paramedrau ac yn gwneud yr un peth — ond mae ganddynt wahanol sylweddoliadau.

(section_docstring)=
## Llinynnau Dogfennu

Mae **{term}`llinyn dogfennu`** yn llinyn ar ddechrau swyddogaeth sy'n esbonio'r
rhyngwyneb ("doc" yn fyr am "dogfennaeth"). Dyma enghraifft:

```python
def polyline(n, length, angle):
    """Draws line segments with the given length and angle between them.
    
    n: integer number of line segments
    length: length of the line segments
    angle: angle between segments (in degrees)
    """    
    for i in range(n):
        forward(length)
        left(angle)
```

Yn ôl confensiwn, llinynnau dogfennu yw llinynnau tridyfynodol, a elwir hefyd yn
**{term}`llinyn aml-linell`** am fod y tridyfynodau'n caniatáu i'r llinyn
rychwantu mwy nag un llinell.

Dylai llinyn dogfennu:

* Esbonio'n gryno beth mae'r swyddogaeth yn ei wneud, heb fynd i mewn i fanylion
  sut mae'n gweithio,

* Esbonio pa effaith sydd gan bob paramedr ar ymddygiad y swyddogaeth, a

* Nodi pa fath y dylai pob paramedr fod, os nad yw'n amlwg.

Mae ysgrifennu'r math hwn o ddogfennaeth yn rhan bwysig o ddylunio rhyngwyneb.
Dylai rhyngwyneb wedi'i ddylunio'n dda fod yn syml i'w esbonio; os cewch chi
drafferth esbonio un o'ch swyddogaethau, efallai y gellid gwella'r rhyngwyneb.

## Dadnamu

Mae rhyngwyneb fel contract rhwng swyddogaeth a galwr. Mae'r galwr yn cytuno i
ddarparu dadleuon penodol ac mae'r swyddogaeth yn cytuno i wneud gwaith penodol.

Er enghraifft, mae `polyline` yn gofyn am dair dadl: mae'n rhaid i `n` fod yn
gyfanrif; dylai `length` fod yn rif positif; ac mae'n rhaid i `angle` fod yn rif,
a ddeallir i fod mewn graddau.

Gelwir y gofynion hyn yn **{term}`rhag-amod`**au am eu bod i fod yn wir cyn i'r
swyddogaeth ddechrau cyflawni. I'r gwrthwyneb, gelwir amodau ar ddiwedd y
swyddogaeth yn **{term}`ôl-amod`**au. Mae ôl-amodau'n cynnwys effaith fwriadedig
y swyddogaeth (fel tynnu segmentau llinell) ac unrhyw sgil-effeithiau (fel symud
y crwban neu wneud newidiadau eraill).

Cyfrifoldeb y galwr yw'r rhag-amodau. Os bydd y galwr yn torri rhag-amod ac nad
yw'r swyddogaeth yn gweithio'n gywir, mae'r nam yn y galwr, nid yn y swyddogaeth.

Os bodlonir y rhag-amodau a heb fodloni'r ôl-amodau, mae'r nam yn y swyddogaeth.
Os yw eich rhag-amodau a'ch ôl-amodau'n glir, gallant helpu gyda dadnamu.

## Rhestr Termau'r Bennod

**dylunio rhyngwyneb:**
Proses ar gyfer dylunio rhyngwyneb swyddogaeth, sy'n cynnwys y paramedrau y dylai
eu cymryd.

**cynfas:**
Ffenestr a ddefnyddir i ddangos elfennau graffigol gan gynnwys llinellau,
cylchoedd, petryalau, a siapiau eraill.

**amgaead:**
Y broses o drawsnewid dilyniant o osodiadau yn ddiffiniad swyddogaeth.

**cyffredinoli:**
Y broses o ddisodli rhywbeth sy'n ddiangen o benodol (fel rhif) â rhywbeth sy'n
briodol o gyffredinol (fel newidyn neu baramedr).

**dadl allweddair:**
Dadl sy'n cynnwys enw'r paramedr.

**ailstrwythuro:**
Y broses o addasu rhaglen sy'n gweithio er mwyn gwella rhyngwynebau swyddogaeth
ac agweddau eraill ar y cod.

**cynllun datblygu:**
Proses ar gyfer ysgrifennu rhaglenni.

**llinyn dogfennu:**
Llinyn sy'n ymddangos ar ddechrau diffiniad swyddogaeth i ddogfennu rhyngwyneb y
swyddogaeth.

**llinyn aml-linell:**
Llinyn wedi'i amgáu mewn tridyfynodau a all rychwantu mwy nag un llinell o
raglen.

**rhag-amod:**
Gofyniad y dylai'r galwr ei fodloni cyn i swyddogaeth ddechrau.

**ôl-amod:**
Gofyniad y dylai'r swyddogaeth ei fodloni cyn iddi ddod i ben.

## Ymarferion

Ar gyfer yr ymarferion isod, mae ychydig mwy o swyddogaethau crwban y gallech
fod am eu defnyddio.

* Mae `penup` yn codi pin dychmygol y crwban fel nad yw'n gadael ôl wrth symud.

* Mae `pendown` yn rhoi'r pin yn ôl i lawr.

Mae'r swyddogaeth ganlynol yn defnyddio `penup` a `pendown` i symud y crwban heb
adael ôl.

```python
from jupyturtle import penup, pendown

def jump(length):
    """Move forward length units without leaving a trail.
    
    Postcondition: Leaves the pen down.
    """
    penup()
    forward(length)
    pendown()
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `rectangle` sy'n tynnu petryal gyda hydoedd
ochr penodol. Er enghraifft, dyma betryal sy'n `80` uned o led a `40` uned o
daldra.

```python
# Ateb yma
```

Gallwch ddefnyddio'r cod canlynol i brofi eich swyddogaeth.

```python
make_turtle()
rectangle(80, 40)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `rhombus` sy'n tynnu rhombws gyda hyd ochr
penodol ac ongl fewnol benodol. Er enghraifft, dyma rombws gyda hyd ochr `50`
ac ongl fewnol o `60` gradd.

```python
# Ateb yma
```

Gallwch ddefnyddio'r cod canlynol i brofi eich swyddogaeth.

```python
make_turtle()
rhombus(50, 60)
```

### Ymarfer

Nawr ysgrifennwch swyddogaeth fwy cyffredinol o'r enw `parallelogram` sy'n tynnu
pedrochr ag ochrau cyfochrog. Yna ailysgrifennwch `rectangle` a `rhombus` i
ddefnyddio `parallelogram`.

```python
# Ateb yma
```

```python
# Ateb yma
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r cod canlynol i brofi eich swyddogaethau.

```python
make_turtle(width=400)
jump(-120)

rectangle(80, 40)
jump(100)
rhombus(50, 60)
jump(80)
parallelogram(80, 50, 60)
```

### Ymarfer

Ysgrifennwch set briodol o gyffredinol o swyddogaethau a all dynnu siapiau fel
hyn.

![](https://github.com/AllenDowney/ThinkPython/raw/v3/jupyturtle_pie.png)

Awgrym: Ysgrifennwch swyddogaeth o'r enw `triangle` sy'n tynnu un segment
trionglog, ac yna swyddogaeth o'r enw `draw_pie` sy'n defnyddio `triangle`.

```python
# Ateb yma
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r cod canlynol i brofi eich swyddogaethau.

```python
turtle = make_turtle(delay=0)
jump(-80)

size = 40
draw_pie(5, size)
jump(2*size)
draw_pie(6, size)
jump(2*size)
draw_pie(7, size)
```

```python
# Ateb yma
```

### Ymarfer

Ysgrifennwch set briodol o gyffredinol o swyddogaethau a all dynnu blodau fel
hyn.

![](https://github.com/AllenDowney/ThinkPython/raw/v3/jupyturtle_flower.png)

Awgrym: Defnyddiwch `arc` i ysgrifennu swyddogaeth o'r enw `petal` sy'n tynnu un
petal blodyn.

```python
# Ateb yma
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r cod canlynol i brofi eich swyddogaethau.

Am fod yr ateb yn tynnu llawer o segmentau llinell bach, mae'n tueddu i arafu
wrth redeg. I osgoi hynny, gallwch ychwanegu'r ddadl allweddair `auto_render=False`
i osgoi tynnu ar ôl pob cam, ac yna galw'r swyddogaeth `render` ar y diwedd i
ddangos y canlyniad.

Tra byddwch yn dadnamu, efallai yr hoffech dynnu `auto_render=False` allan.

```python
from jupyturtle import render

turtle = make_turtle(auto_render=False)

jump(-60)
n = 7
radius = 60
angle = 60
flower(n, radius, angle)

jump(120)
n = 9
radius = 40
angle = 85
flower(n, radius, angle)

render()
```

```python
# Ateb yma
```

### Gofyn i gynorthwyydd rhithwir

Mae sawl modiwl fel `jupyturtle` yn Python, ac mae'r un a ddefnyddiwyd gennym yn
y bennod hon wedi'i deilwra ar gyfer y llyfr hwn. Felly os gofynnwch i
gynorthwyydd rhithwir am help, ni fydd yn gwybod pa fodiwl i'w ddefnyddio. Ond os
rhowch ychydig o enghreifftiau iddo i weithio gyda nhw, mae'n debygol y gall ei
ddarganfod. Er enghraifft, rhowch gynnig ar yr anogiad hwn a gweler a all
ysgrifennu swyddogaeth sy'n tynnu sbiral:

```
The following program uses a turtle graphics module to draw a circle:

from jupyturtle import make_turtle, forward, left
import math

def polygon(n, length):
    angle = 360 / n
    for i in range(n):
        forward(length)
        left(angle)
        
def circle(radius):
    circumference = 2 * math.pi * radius
    n = 30
    length = circumference / n
    polygon(n, length)
    
make_turtle(delay=0)
circle(30)

Write a function that draws a spiral.
```

Cofiwch y gallai'r canlyniad ddefnyddio nodweddion nad ydym wedi'u gweld eto, ac
y gallai gynnwys gwallau. Copïwch y cod o'r cynorthwyydd rhithwir a gweler a
allwch ei gael i weithio. Os na chawsoch yr hyn roeddech ei eisiau, ceisiwch
addasu'r anogiad.

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
