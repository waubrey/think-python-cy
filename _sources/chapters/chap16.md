# Dosbarthiadau a Gwrthrychau

Erbyn hyn rydym wedi diffinio dosbarthiadau a chreu gwrthrychau sy'n cynrychioli amser
y dydd a diwrnod y flwyddyn. Ac rydym wedi diffinio dulliau sy'n creu, yn newid, ac yn
perfformio cyfrifiadau â'r gwrthrychau hyn.

Yn y bennod hon byddwn yn parhau â'n taith drwy raglennu gwrthrych-gyfeiriadol (OOP)
drwy ddiffinio dosbarthiadau sy'n cynrychioli gwrthrychau geometrig, gan gynnwys
pwyntiau, llinellau, petryalau, a chylchoedd. Byddwn yn ysgrifennu dulliau sy'n creu
ac yn newid y gwrthrychau hyn, a byddwn yn defnyddio'r modiwl `jupyturtle` i'w tynnu.

Byddaf yn defnyddio'r dosbarthiadau hyn i ddangos pynciau OOP gan gynnwys hunaniaeth
a chyfwerthedd gwrthrychau, copïo bas a dwfn, a pholymorffiaeth.

## Creu Pwynt

Mewn graffeg cyfrifiadurol, mae lleoliad ar y sgrin yn aml yn cael ei gynrychioli
gan ddefnyddio pâr o gyfesurynnau mewn plân `x`-`y`. Yn ôl confensiwn, mae'r pwynt
`(0, 0)` fel arfer yn cynrychioli cornel chwith-uchaf y sgrin, ac mae `(x, y)` yn
cynrychioli'r pwynt `x` uned i'r dde a `y` uned i lawr o'r tarddbwynt. O'i gymharu
â'r system gyfesurynnau Gartesaidd y gallech fod wedi'i gweld mewn dosbarth mathemateg,
mae'r echelin `y` wyneb i waered.

Mae sawl ffordd y gallem gynrychioli pwynt yn Python:

* Gallwn storio'r cyfesurynnau ar wahân mewn dau newidyn, `x` ac `y`.

* Gallwn storio'r cyfesurynnau fel elfennau mewn rhestr neu dŵpl.

* Gallwn greu math newydd i gynrychioli pwyntiau fel gwrthrychau.

Mewn rhaglennu gwrthrych-gyfeiriadol, byddai'n fwyaf idiomatig creu math newydd.
I wneud hynny, byddwn yn dechrau gyda diffiniad dosbarth ar gyfer `Point`.

```python
class Point:
    """Represents a point in 2-D space."""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def __str__(self):
        return f'Point({self.x}, {self.y})'
```

Mae'r dull `__init__` yn cymryd y cyfesurynnau fel paramedrau ac yn eu neilltuo i'r
priodoleddau `x` ac `y`. Mae'r dull `__str__` yn dychwelyd cynrychiolaeth llinynnol
o'r `Point`.

Nawr gallwn enghreifftio ac arddangos gwrthrych `Point` fel hyn.

```python
start = Point(0, 0)
print(start)
```

Yn gyffredinol, mae mathau a ddiffinnir gan raglenwyr yn newidiadwy, felly gallwn
ysgrifennu dull fel `translate` sy'n cymryd dau rif, `dx` a `dy`, ac yn eu hychwanegu
at y priodoleddau `x` ac `y`.

```python
%%add_method_to Point

    def translate(self, dx, dy):
        self.x += dx
        self.y += dy
```

Mae'r swyddogaeth hon yn trosi'r `Point` o un lleoliad yn y plân i'r llall. Os nad
ydym am newid `Point` sy'n bodoli'n barod, gallwn ddefnyddio `copy` i gopïo'r
gwrthrych gwreiddiol ac yna newid y copi.

```python
from copy import copy

end1 = copy(start)
end1.translate(300, 0)
print(end1)
```

Gallwn amgáu'r camau hynny mewn dull arall o'r enw `translated`.

```python
%%add_method_to Point

    def translated(self, dx=0, dy=0):
        point = copy(self)
        point.translate(dx, dy)
        return point
```

Yn yr un modd ag y mae'r dull `sort` yn newid rhestr a'r swyddogaeth `sorted` yn
creu rhestr newydd, mae gennym nawr ddull `translate` sy'n newid `Point` a dull
`translated` sy'n creu un newydd.

Dyma enghraifft:

```python
end2 = start.translated(0, 150)
print(end2)
```

Yn yr adran nesaf, byddwn yn defnyddio'r pwyntiau hyn i ddiffinio a thynnu llinell.

## Creu Llinell

Nawr gadewch i ni ddiffinio dosbarth sy'n cynrychioli'r llinell segment rhwng dau
bwynt. Fel arfer, byddwn yn dechrau gyda dull `__init__` a dull `__str__`.

```python
class Line:
    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2
        
    def __str__(self):
        return f'Line({self.p1}, {self.p2})'
```

Gyda'r ddau ddull hynny, gallwn enghreifftio ac arddangos gwrthrych `Line` y byddwn
yn ei defnyddio i gynrychioli'r echelin `x`.

```python
line1 = Line(start, end1)
print(line1)
```

Pan alwn `print` a phasio `line` fel paramedr, mae `print` yn galw `__str__` ar
`line`. Mae'r dull `__str__` yn defnyddio llinyn-f i greu cynrychiolaeth llinynnol
o'r `line`.

Mae'r llinyn-f yn cynnwys dau fynegiad mewn bachau cyrliog, `self.p1` a `self.p2`.
Pan werthuso'r mynegiadau hynny, gwrthrychau `Point` yw'r canlyniadau. Yna, pan
drosir y rheiny'n llinynnau, caiff y dull `__str__` o ddosbarth `Point` ei alw.

Dyna pam, pan arddangoswn `Line`, mae'r canlyniad yn cynnwys cynrychiolaethau
llinynnol y gwrthrychau `Point`.

Mae cynrychiolaethau llinynnol a diagramau gwrthrych yn ddefnyddiol ar gyfer
dadnamu, ond pwrpas yr enghraifft hon yw cynhyrchu graffeg, nid testun! Felly
byddwn yn defnyddio'r modiwl `jupyturtle` i dynnu llinellau ar y sgrin.

Fel y gwnaethom ym [Mhennod 4](section_turtle_module), byddwn yn defnyddio
`make_turtle` i greu gwrthrych `Turtle` a chynfas bach lle gall dynnu lluniau.
I dynnu llinellau, byddwn yn defnyddio dwy swyddogaeth newydd o'r modiwl
`jupyturtle`:

* `jumpto`, sy'n cymryd dau gyfesuryn ac yn symud y `Turtle` i'r lleoliad a roddir
  heb dynnu llinell, a

* `moveto`, sy'n symud y `Turtle` o'i leoliad presennol i'r lleoliad a roddir, ac
  yn tynnu segment llinell rhyngddynt.

Dyma sut rydym yn eu mewnforio.

```python
from jupyturtle import make_turtle, jumpto, moveto
```

A dyma ddull sy'n tynnu `Line`.

```python
%%add_method_to Line

    def draw(self):
        jumpto(self.p1.x, self.p1.y)
        moveto(self.p2.x, self.p2.y)
```

I ddangos sut y caiff ei defnyddio, byddaf yn creu ail linell sy'n cynrychioli'r
echelin `y`.

```python
line2 = Line(start, end2)
print(line2)
```

Ac yna tynnu'r echelinau.

```python
make_turtle()
line1.draw()
line2.draw()
```

Wrth i ni ddiffinio a thynnu rhagor o wrthrychau, byddwn yn defnyddio'r llinellau
hyn eto. Ond yn gyntaf gadewch i ni siarad am gyfwerthedd a hunaniaeth gwrthrychau.

## Cyfwerthedd a Hunaniaeth

Tybiwch ein bod yn creu dau bwynt â'r un cyfesurynnau.

```python
p1 = Point(200, 100)
p2 = Point(200, 100)
```

Os defnyddiwn y gweithredydd `==` i'w cymharu, cawn yr ymddygiad rhagosodedig ar
gyfer mathau a ddiffinnir gan raglenwyr — mae'r canlyniad yn `True` dim ond os
ydynt yn un gwrthrych, nad ydynt.

```python
p1 == p2
```

Os ydym am newid yr ymddygiad hwnnw, gallwn ddarparu dull arbennig o'r enw
`__eq__` sy'n diffinio beth mae'n ei olygu i ddau wrthrych `Point` fod yn
gyfwerth.

```python
%%add_method_to Point

def __eq__(self, other):
    return (self.x == other.x) and (self.y == other.y)
```

Mae'r diffiniad hwn yn ystyried dau `Point` yn gyfwerth os yw eu priodoleddau'n
gyfwerth. Nawr pan ddefnyddiwn y gweithredydd `==`, mae'n galw'r dull `__eq__`,
sy'n dynodi bod `p1` a `p2` yn cael eu hystyried yn gyfwerth.

```python
p1 == p2
```

Ond mae'r gweithredydd `is` yn dal i ddynodi eu bod yn wrthrychau gwahanol.

```python
p1 is p2
```

Nid yw'n bosib disodli'r gweithredydd `is` — mae bob amser yn gwirio a yw'r
gwrthrychau'n unfath. Ond ar gyfer mathau a ddiffinnir gan raglenwyr, gallwch
ddisodli'r gweithredydd `==` fel ei fod yn gwirio a yw'r gwrthrychau'n gyfwerth.
A gallwch ddiffinio beth mae cyfwerth yn ei olygu.

## Creu Petryal

Nawr gadewch i ni ddiffinio dosbarth sy'n cynrychioli ac yn tynnu petryalau. I
gadw pethau'n syml, byddwn yn tybio bod y petryalau naill ai'n fertigol neu'n
llorweddol, ddim ar ongl. Pa briodoleddau ydych chi'n meddwl y dylem eu defnyddio
i nodi lleoliad a maint petryal?

Mae o leiaf dau bosibilrwydd:

* Gallech nodi lled a uchder y petryal a lleoliad un gornel.

* Gallech nodi dwy gornel sy'n gwrthwynebu ei gilydd.

Ar hyn o bryd mae'n anodd dweud a yw'r naill yn well na'r llall, felly gadewch
i ni weithredu'r cyntaf. Dyma'r diffiniad dosbarth.

```python
class Rectangle:
    """Represents a rectangle. 

    attributes: width, height, corner.
    """
    def __init__(self, width, height, corner):
        self.width = width
        self.height = height
        self.corner = corner
        
    def __str__(self):
        return f'Rectangle({self.width}, {self.height}, {self.corner})'
```

Fel arfer, mae'r dull `__init__` yn neilltuo'r paramedrau i briodoleddau ac mae'r
`__str__` yn dychwelyd cynrychiolaeth llinynnol o'r gwrthrych. Nawr gallwn
enghreifftio gwrthrych `Rectangle`, gan ddefnyddio `Point` fel lleoliad y gornel
chwith-uchaf.

```python
corner = Point(30, 20)
box1 = Rectangle(100, 50, corner)
print(box1)
```

I dynnu petryal, byddwn yn defnyddio'r dull canlynol i wneud pedwar gwrthrych
`Point` sy'n cynrychioli'r corneli.

```python
%%add_method_to Rectangle

    def make_points(self):
        p1 = self.corner
        p2 = p1.translated(self.width, 0)
        p3 = p2.translated(0, self.height)
        p4 = p3.translated(-self.width, 0)
        return p1, p2, p3, p4
```

Yna byddwn yn gwneud pedwar gwrthrych `Line` i gynrychioli'r ochrau.

```python
%%add_method_to Rectangle

    def make_lines(self):
        p1, p2, p3, p4 = self.make_points()
        return Line(p1, p2), Line(p2, p3), Line(p3, p4), Line(p4, p1)
```

Yna byddwn yn tynnu'r ochrau.

```python
%%add_method_to Rectangle

    def draw(self):
        lines = self.make_lines()
        for line in lines:
            line.draw()
```

Dyma enghraifft.

```python
make_turtle()
line1.draw()
line2.draw()
box1.draw()
```

Mae'r ffigur yn cynnwys dwy linell i gynrychioli'r echelinau.

## Newid Petryalau

Nawr gadewch i ni ystyried dau ddull sy'n newid petryalau, `grow` a `translate`.
Fe welwn fod `grow` yn gweithio fel y disgwyliwyd, ond mae gan `translate` nam
cynnil. Gwelwch a allwch ei ddarganfod cyn i mi egluro.

Mae `grow` yn cymryd dau rif, `dwidth` a `dheight`, ac yn eu hychwanegu at
briodoleddau `width` a `height` y petryal.

```python
%%add_method_to Rectangle

    def grow(self, dwidth, dheight):
        self.width += dwidth
        self.height += dheight
```

Dyma enghraifft sy'n dangos yr effaith drwy wneud copi o `box1` a galw `grow`
ar y copi.

```python
box2 = copy(box1)
box2.grow(60, 40)
print(box2)
```

Os tynnwn `box1` a `box2`, gallwn gadarnhau bod `grow` yn gweithio fel y
disgwyliwyd.

```python
make_turtle()
line1.draw()
line2.draw()
box1.draw()
box2.draw()
```

Nawr gadewch i ni weld am `translate`. Mae'n cymryd dau rif, `dx` a `dy`, ac yn
symud y petryal y pellteroedd a roddir yn y cyfeiriadau `x` ac `y`.

```python
%%add_method_to Rectangle

    def translate(self, dx, dy):
        self.corner.translate(dx, dy)
```

I ddangos yr effaith, byddwn yn trosi `box2` i'r dde ac i lawr.

```python
box2.translate(30, 20)
print(box2)
```

Nawr gadewch i ni weld beth sy'n digwydd os tynnwn `box1` a `box2` eto.

```python
make_turtle()
line1.draw()
line2.draw()
box1.draw()
box2.draw()
```

Mae'n edrych fel bod y ddau betryal wedi symud, nad yw'n yr hyn a fwriadwyd!
Mae'r adran nesaf yn egluro beth aeth o'i le.

## Copi Dwfn

Pan ddefnyddiwn `copy` i ddyblygu `box1`, mae'n copïo'r gwrthrych `Rectangle`
ond nid y gwrthrych `Point` y mae'n ei gynnwys. Felly mae `box1` a `box2` yn
wrthrychau gwahanol, fel y bwriadwyd.

```python
box1 is box2
```

Ond mae eu priodoleddau `corner` yn cyfeirio at yr un gwrthrych.

```python
box1.corner is box2.corner
```

Yr hyn y mae `copy` yn ei wneud a elwir yn **{term}`copi bas`** am ei fod yn
copïo'r gwrthrych ond nid y gwrthrychau y mae'n eu cynnwys. O ganlyniad, nid
yw newid `width` neu `height` un `Rectangle` yn effeithio ar y llall, ond mae
newid priodoleddau'r `Point` a rennir yn effeithio ar y ddau! Mae'r ymddygiad
hwn yn ddryslyd ac yn dueddol o wallau.

Yn ffodus, mae'r modiwl `copy` yn darparu swyddogaeth arall, o'r enw `deepcopy`,
sy'n copïo nid yn unig y gwrthrych ond hefyd y gwrthrychau y mae'n cyfeirio
atynt, a'r gwrthrychau y *maent hwy* yn cyfeirio atynt, ac yn y blaen. Gelwir y
weithred hon yn **{term}`copi dwfn`**.

I ddangos, gadewch i ni ddechrau gyda `Rectangle` newydd sy'n cynnwys `Point`
newydd.

```python
corner = Point(20, 20)
box3 = Rectangle(100, 50, corner)
print(box3)
```

A byddwn yn gwneud copi dwfn.

```python
from copy import deepcopy

box4 = deepcopy(box3)
```

Gallwn gadarnhau bod y ddau wrthrych `Rectangle` yn cyfeirio at wrthrychau
`Point` gwahanol.

```python
box3.corner is box4.corner
```

Am fod `box3` a `box4` yn wrthrychau cwbl ar wahân, gallwn newid un heb
effeithio ar y llall. I ddangos, byddwn yn symud `box3` ac yn tyfu `box4`.

```python
box3.translate(50, 30)
box4.grow(100, 60)
```

A gallwn gadarnhau bod yr effaith fel y disgwylir.

```python
make_turtle()
line1.draw()
line2.draw()
box3.draw()
box4.draw()
```

## Polymorffiaeth

Yn yr enghraifft flaenorol, galwom y dull `draw` ar ddau wrthrych `Line` a dau
wrthrych `Rectangle`. Gallwn wneud yr un peth yn fwy cryno drwy wneud rhestr o
wrthrychau.

```python
shapes = [line1, line2, box3, box4]
```

Mae elfennau'r rhestr hon yn fathau gwahanol, ond maent i gyd yn darparu dull
`draw`, felly gallwn ddolennu drwy'r rhestr a galw `draw` ar bob un.

```python
make_turtle()

for shape in shapes:
    shape.draw()
```

Y tro cyntaf a'r ail dro drwy'r ddolen, mae `shape` yn cyfeirio at wrthrych
`Line`, felly pan elwir `draw`, y dull sy'n rhedeg yw'r un a ddiffinnir yn
nosbarth `Line`.

Y trydydd a'r pedwerydd tro drwy'r ddolen, mae `shape` yn cyfeirio at wrthrych
`Rectangle`, felly pan elwir `draw`, y dull sy'n rhedeg yw'r un a ddiffinnir yn
nosbarth `Rectangle`.

Mewn ystyr, mae pob gwrthrych yn gwybod sut i'w dynnu ei hun. Gelwir y nodwedd
hon yn **{term}`polymorffiaeth`**. Daw'r gair o wreiddiau Groegaidd sy'n golygu
"llawer siâp". Mewn rhaglennu gwrthrych-gyfeiriadol, polymorffiaeth yw'r gallu
i wahanol fathau ddarparu'r un dulliau, sy'n ei gwneud hi'n bosib perfformio
llawer o gyfrifiadau — fel tynnu siapiau — drwy alw'r un dull ar fathau
gwahanol o wrthrychau.

Fel ymarfer ar ddiwedd y bennod hon, byddwch yn diffinio dosbarth newydd sy'n
cynrychioli cylch ac yn darparu dull `draw`. Yna gallwch ddefnyddio
polymorffiaeth i dynnu llinellau, petryalau, a chylchoedd.

## Dadnamu

Yn y bennod hon, fe gawsom nam cynnil a ddigwyddodd am ein bod wedi creu
`Point` a rennid gan ddau wrthrych `Rectangle`, ac yna fe wnaethom newid y
`Point`. Yn gyffredinol, mae dwy ffordd o osgoi problemau fel hyn: gallwch
osgoi rhannu gwrthrychau neu gallwch osgoi eu newid.

I osgoi rhannu gwrthrychau, gallwch ddefnyddio copi dwfn, fel y gwnaethom yn y
bennod hon.

I osgoi newid gwrthrychau, ystyriwch ddisodli swyddogaethau amhur fel
`translate` â swyddogaethau pur fel `translated`. Er enghraifft, dyma fersiwn
o `translated` sy'n creu `Point` newydd ac na fydd byth yn newid ei
briodoleddau.

```python
    def translated(self, dx=0, dy=0):
        x = self.x + dx
        y = self.y + dy
        return Point(x, y)
```

Mae Python yn darparu nodweddion sy'n ei gwneud hi'n haws osgoi newid
gwrthrychau. Maent y tu hwnt i gwmpas y llyfr hwn, ond os ydych yn chwilfrydig,
gofynnwch i gynorthwyydd rhithwir, "Sut rwy'n gwneud gwrthrych Python yn
anghyfnewidiol?"

Mae creu gwrthrych newydd yn cymryd mwy o amser na newid un sy'n bodoli'n
barod, ond anaml y mae'r gwahaniaeth yn bwysig yn ymarferol. Mae rhaglenni
sy'n osgoi gwrthrychau a rennir a swyddogaethau amhur yn aml yn haws eu
datblygu, eu profi, a'u dadnamu — a'r math gorau o ddadnamu yw'r math nad oes
rhaid i chi ei wneud.

## Rhestr Termau'r Bennod

**copi bas:**
Gweithrediad copïo nad yw'n copïo gwrthrychau nythol.

**copi dwfn:**
Gweithrediad copïo sydd hefyd yn copïo gwrthrychau nythol.

**polymorffiaeth:**
Gallu dull neu weithredydd i weithio gyda sawl math o wrthrych.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Ar gyfer yr holl ymarferion canlynol, ystyriwch ofyn i gynorthwyydd rhithwir
am gymorth. Os gwnewch hynny, byddwch am gynnwys y diffiniadau dosbarth ar
gyfer `Point`, `Line`, a `Rectangle` fel rhan o'r cais — fel arall bydd y
cynorthwyydd rhithwir yn dyfalu am eu priodoleddau a'u swyddogaethau, ac ni
fydd y cod y mae'n ei gynhyrchu'n gweithio.

### Ymarfer

Ysgrifennwch ddull `__eq__` ar gyfer dosbarth `Line` sy'n dychwelyd `True` os
yw'r gwrthrychau `Line` yn cyfeirio at wrthrychau `Point` sy'n gyfwerth, mewn
unrhyw drefn.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to Line

def __eq__(self, other):
    return None
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi eich cod.

```python
start1 = Point(0, 0)
start2 = Point(0, 0)
end = Point(200, 100)
```

Dylai'r enghraifft hon fod yn `True` am fod y gwrthrychau `Line` yn cyfeirio
at wrthrychau `Point` sy'n gyfwerth, yn yr un drefn.

```python
line_a = Line(start1, end)
line_b = Line(start2, end)
line_a == line_b    # should be True
```

Dylai'r enghraifft hon fod yn `True` am fod y gwrthrychau `Line` yn cyfeirio
at wrthrychau `Point` sy'n gyfwerth, mewn trefn wrthdro.

```python
line_c = Line(end, start1)
line_a == line_c     # should be True
```

Dylai cyfwerthedd fod bob amser yn drosglwyddadwy — hynny yw, os yw `line_a`
a `line_b` yn gyfwerth, ac mae `line_a` a `line_c` yn gyfwerth, dylai `line_b`
a `line_c` hefyd fod yn gyfwerth.

```python
line_b == line_c     # should be True
```

Dylai'r enghraifft hon fod yn `False` am nad yw'r gwrthrychau `Line` yn
cyfeirio at wrthrychau `Point` sy'n gyfwerth.

```python
line_d = Line(start1, start2)
line_a == line_d    # should be False
```

### Ymarfer

Ysgrifennwch ddull `Line` o'r enw `midpoint` sy'n cyfrifo canolbwynt segment
llinell ac yn dychwelyd y canlyniad fel gwrthrych `Point`.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to Line

    def midpoint(self):
        return Point(0, 0)
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau canlynol i brofi eich cod a thynnu'r
canlyniad.

```python
start = Point(0, 0)
end1 = Point(300, 0)
end2 = Point(0, 150)
line1 = Line(start, end1)
line2 = Line(start, end2)
```

```python
mid1 = line1.midpoint()
print(mid1)
```

```python
mid2 = line2.midpoint()
print(mid2)
```

```python
line3 = Line(mid1, mid2)
```

```python
make_turtle()

for shape in [line1, line2, line3]:
    shape.draw()
```

### Ymarfer

Ysgrifennwch ddull `Rectangle` o'r enw `midpoint` sy'n canfod y pwynt yng
nghanol petryal ac yn dychwelyd y canlyniad fel gwrthrych `Point`.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to Rectangle

    def midpoint(self):
        return Point(0, 0)
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghraifft ganlynol i brofi eich cod.

```python
corner = Point(30, 20)
rectangle = Rectangle(100, 80, corner)
```

```python
mid = rectangle.midpoint()
print(mid)
```

```python
diagonal = Line(corner, mid)
```

```python
make_turtle()

for shape in [line1, line2, rectangle, diagonal]:
    shape.draw()
```

### Ymarfer

Ysgrifennwch ddull `Rectangle` o'r enw `make_cross` sydd:

1. Yn defnyddio `make_lines` i gael rhestr o wrthrychau `Line` sy'n
   cynrychioli pedair ochr y petryal.

2. Yn cyfrifo canolbwyntiau'r pedair llinell.

3. Yn gwneud ac yn dychwelyd rhestr o ddau wrthrych `Line` sy'n cynrychioli
   llinellau sy'n cysylltu canolbwyntiau sy'n gwrthwynebu ei gilydd, gan
   ffurfio croes drwy ganol y petryal.

Gallwch ddefnyddio'r amlinelliad hwn i ddechrau.

```python
%%add_method_to Rectangle

    def make_diagonals(self):
        return []
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghraifft ganlynol i brofi eich cod.

```python
corner = Point(30, 20)
rectangle = Rectangle(100, 80, corner)
```

```python
lines = rectangle.make_cross()
```

```python
make_turtle()

rectangle.draw()
for line in lines:
    line.draw()
```

### Ymarfer

Ysgrifennwch ddiffiniad ar gyfer dosbarth o'r enw `Circle` â phriodoleddau
`center` a `radius`, lle mae `center` yn wrthrych Point ac mae `radius` yn
rif. Cynhwyswch ddulliau arbennig `__init__` a `__str__`, a dull o'r enw
`draw` sy'n defnyddio swyddogaethau `jupyturtle` i dynnu'r cylch.

Gallwch ddefnyddio'r swyddogaeth ganlynol, sy'n fersiwn o'r swyddogaeth
`circle` a ysgrifennom ym Mhennod 4.

```python
from jupyturtle import make_turtle, forward, left, right
import math
    
def draw_circle(radius):
    circumference = 2 * math.pi * radius
    n = 30
    length = circumference / n
    angle = 360 / n
    left(angle / 2)
    for i in range(n):
        forward(length)
        left(angle)
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghraifft ganlynol i brofi eich cod. Byddwn yn dechrau
gyda `Rectangle` sgwâr â lled a uchder `100`.

```python
corner = Point(20, 20)
rectangle = Rectangle(100, 100, corner)
```

Dylai'r cod canlynol greu `Circle` sy'n ffitio y tu mewn i'r sgwâr.

```python
center = rectangle.midpoint()
radius = rectangle.height / 2

circle = Circle(center, radius)
print(circle)
```

Os aeth popeth yn iawn, dylai'r cod canlynol dynnu'r cylch y tu mewn i'r
sgwâr (yn cyffwrdd ar bob un o'r pedair ochr).

```python
make_turtle(delay=0.01)

rectangle.draw()
circle.draw()
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
