# Amodau ac Ailadroddiad (Recursion)

Prif bwnc y bennod hon yw'r gosodiad `if`, sy'n cyflawni gwahanol god yn dibynnu
ar gyflwr y rhaglen. A chyda'r gosodiad `if` byddwn yn gallu archwilio un o'r
syniadau mwyaf pwerus mewn cyfrifiadureg, **{term}`dychweliad`**.

Ond byddwn yn dechrau gyda thair nodwedd newydd: y gweithredydd modwlws,
mynegiadau Boole, a gweithredyddion rhesymegol.

## Rhaniad Cyfanrif a Modwlws

Cofiwch fod y gweithredydd rhaniad cyfanrif, `//`, yn rhannu dau rif ac yn
talgrynnu i lawr i gyfanrif. Er enghraifft, tybiwch fod amser rhedeg ffilm yn
105 munud. Efallai yr hoffech wybod hyd hynny mewn oriau. Mae rhaniad
confensiynol yn dychwelyd rhif pwynt arnawf:

```python
minutes = 105
minutes / 60
```

Ond nid ydym fel arfer yn ysgrifennu oriau gyda phwyntiau degol. Mae rhaniad
cyfanrif yn dychwelyd nifer cyfan yr oriau, gan dalgrynnu i lawr:

```python
minutes = 105
hours = minutes // 60
hours
```

I gael y gweddill, gallech dynnu un awr mewn munudau:

```python
remainder = minutes - hours * 60
remainder
```

Neu gallech ddefnyddio'r **{term}`gweithredydd modwlws`**, `%`, sy'n rhannu dau
rif ac yn dychwelyd y gweddill.

```python
remainder = minutes % 60
remainder
```

Mae'r gweithredydd modwlws yn fwy defnyddiol nag y gallai ymddangos. Er
enghraifft, gall wirio a yw un rhif yn rhanadwy ag un arall — os yw `x % y` yn
sero, mae `x` yn rhanadwy â `y`.

Hefyd, gall dynnu'r digid neu'r digidau mwyaf i'r dde o rif. Er enghraifft, mae
`x % 10` yn cynhyrchu digid mwyaf i'r dde `x` (yn sail 10). Yn yr un modd, mae
`x % 100` yn cynhyrchu'r ddau ddigid olaf.

```python
x = 123
x % 10
```

```python
x % 100
```

Yn olaf, gall y gweithredydd modwlws wneud "rhifyddeg cloc". Er enghraifft, os
yw digwyddiad yn dechrau am 11 y bore ac yn para tair awr, gallwn ddefnyddio'r
gweithredydd modwlws i ddarganfod pryd mae'n gorffen.

```python
start = 11
duration = 3
end = (start + duration) % 12
end
```

Byddai'r digwyddiad yn gorffen am 2 y prynhawn.

## Mynegiadau Boole

Mae **{term}`mynegiad Boole`** yn fynegiad sy'n wir neu'n anwir. Er enghraifft,
mae'r mynegiadau canlynol yn defnyddio'r gweithredydd hafal, `==`, sy'n cymharu
dau werth ac yn cynhyrchu `True` os ydynt yn hafal a `False` fel arall:

```python
5 == 5
```

```python
5 == 7
```

Camgymeriad cyffredin yw defnyddio un arwydd hafal (`=`) yn lle dau arwydd hafal
(`==`). Cofiwch fod `=` yn neilltuo gwerth i newidyn ac mae `==` yn cymharu dau
werth.

```python
x = 5
y = 7
```

```python
x == y
```

Mae `True` a `False` yn werthoedd arbennig sy'n perthyn i'r math `bool`; nid
ydynt yn llinynnau:

```python
type(True)
```

```python
type(False)
```

Mae'r gweithredydd `==` yn un o'r **{term}`gweithredydd perthynol`**ion; dyma'r
lleill:

```python
x != y               # x is not equal to y
```

```python
x > y                # x is greater than y
```

```python
x < y               # x is less than to y
```

```python
x >= y               # x is greater than or equal to y
```

```python
x <= y               # x is less than or equal to y
```

## Gweithredyddion Rhesymegol

I gyfuno gwerthoedd Boole yn fynegiadau, gallwn ddefnyddio
**{term}`gweithredydd rhesymegol`**ion. Y rhai mwyaf cyffredin yw `and`, `or`, a
`not`. Mae ystyr y gweithredyddion hyn yn debyg i'w hystyr yn Saesneg. Er
enghraifft, gwerth y mynegiad canlynol yw `True` dim ond os yw `x` yn fwy na `0`
*a* llai na `10`.

```python
x > 0 and x < 10
```

Mae'r mynegiad canlynol yn `True` os yw *un neu'r ddau* o'r amodau'n wir, hynny
yw, os yw'r rhif yn rhanadwy â 2 *neu* 3:

```python
x % 2 == 0 or x % 3 == 0
```

Yn olaf, mae'r gweithredydd `not` yn negyddu mynegiad Boole, felly mae'r
mynegiad canlynol yn `True` os yw `x > y` yn `False`.

```python
not x > y
```

A siarad yn fanwl gywir, dylai weithredynnau gweithredydd rhesymegol fod yn
fynegiadau Boole, ond nid yw Python yn llym iawn. Caiff unrhyw rif nad yw'n sero
ei ddehongli fel `True`:

```python
42 and True
```

Gall yr hyblygrwydd hwn fod yn ddefnyddiol, ond mae rhai manion sy'n gallu bod
yn ddryslyd. Efallai yr hoffech ei osgoi.

## Gosodiadau if

Er mwyn ysgrifennu rhaglenni defnyddiol, rydym bron bob amser angen y gallu i
wirio amodau a newid ymddygiad y rhaglen yn unol â hynny. Mae
**{term}`gosodiad amodol`**au yn rhoi'r gallu hwn i ni. Y ffurf symlaf yw'r
gosodiad `if`:

```python
if x > 0:
    print('x is positive')
```

Mae `if` yn allweddair Python. Mae gan osodiadau `if` yr un strwythur â
diffiniadau swyddogaeth: pennawd wedi'i ddilyn gan osodiad neu ddilyniant o
osodiadau wedi'u mewnoli a elwir yn **{term}`bloc`**.

Gelwir y mynegiad Boole ar ôl `if` yn **{term}`amod`**. Os yw'n wir, mae'r
gosodiadau yn y bloc mewnoledig yn rhedeg. Os nad yw, nid ydynt.

Nid oes cyfyngiad ar nifer y gosodiadau a all ymddangos yn y bloc, ond mae'n
rhaid cael o leiaf un. O bryd i'w gilydd, mae'n ddefnyddiol cael bloc nad yw'n
gwneud dim — fel arfer fel lle gwag ar gyfer cod nad ydych wedi'i ysgrifennu
eto. Yn yr achos hwnnw, gallwch ddefnyddio'r gosodiad `pass`, nad yw'n gwneud
dim.

```python
if x < 0:
    pass          # TODO: need to handle negative values!
```

Mae'r gair `TODO` mewn sylwad yn atgoffâd confensiynol fod rhywbeth sydd angen
i chi ei wneud yn ddiweddarach.

## Y Cymal else

Gall gosodiad `if` gael ail ran, a elwir yn gymal `else`. Mae'r gystrawen yn
edrych fel hyn:

```python
if x % 2 == 0:
    print('x is even')
else:
    print('x is odd')
```

Os yw'r amod yn wir, mae'r gosodiad mewnoledig cyntaf yn rhedeg; fel arall,
mae'r ail osodiad mewnoledig yn rhedeg.

Yn yr enghraifft hon, os yw `x` yn eilrif, mae'r gweddill pan rennir `x` â `2`
yn `0`, felly mae'r amod yn wir ac mae'r rhaglen yn dangos `x is even`. Os yw
`x` yn odrif, y gweddill yw `1`, felly mae'r amod yn anwir, ac mae'r rhaglen yn
dangos `x is odd`.

Gan fod yn rhaid i'r amod fod yn wir neu'n anwir, bydd union un o'r dewisiadau
amgen yn rhedeg. Gelwir y dewisiadau amgen yn **{term}`cangen`**nau.

## Amodolion Cadwynol

Weithiau mae mwy na dau bosibilrwydd ac mae angen mwy na dwy gangen arnom.
Un ffordd o fynegi cyfrifiant fel hynny yw **{term}`amodol cadwynol`**, sy'n
cynnwys cymal `elif`.

```python
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else:
    print('x and y are equal')
```

Mae `elif` yn fyrfodd o "else if". Nid oes cyfyngiad ar nifer y cymalau `elif`.
Os oes cymal `else`, mae'n rhaid iddo fod ar y diwedd, ond nid oes rhaid cael
un.

Gwirir pob amod yn ei drefn. Os yw'r cyntaf yn anwir, gwirir yr un nesaf, ac yn
y blaen. Os yw un ohonynt yn wir, mae'r gangen gyfatebol yn rhedeg ac mae'r
gosodiad `if` yn dod i ben. Hyd yn oed os yw mwy nag un amod yn wir, dim ond y
gangen wir gyntaf sy'n rhedeg.

## Amodolion Nythol

Gall un amodol hefyd gael ei nythu o fewn un arall. Gallem fod wedi ysgrifennu'r
enghraifft yn yr adran flaenorol fel hyn:

```python
if x == y:
    print('x and y are equal')
else:
    if x < y:
        print('x is less than y')
    else:
        print('x is greater than y')
```

Mae gan y gosodiad `if` allanol ddwy gangen. Mae'r gangen gyntaf yn cynnwys
gosodiad syml. Mae'r ail gangen yn cynnwys gosodiad `if` arall, sydd â dwy
gangen ei hun. Mae'r ddwy gangen hynny'n osodiadau syml, er y gallent fod wedi
bod yn osodiadau amodol hefyd.

Er bod mewnoliad y gosodiadau'n gwneud y strwythur yn amlwg, gall
**{term}`amodol nythol`**ion fod yn anodd eu darllen. Awgrymaf eich bod yn eu
hosgoi pan allwch.

Mae gweithredyddion rhesymegol yn aml yn rhoi ffordd o symleiddio gosodiadau
amodol nythol. Dyma enghraifft gydag amodol nythol.

```python
if 0 < x:
    if x < 10:
        print('x is a positive single-digit number.')
```

Dim ond os awn heibio i'r ddau amodol y mae'r gosodiad `print` yn rhedeg, felly
cawn yr un effaith gyda'r gweithredydd `and`.

```python
if 0 < x and x < 10:
    print('x is a positive single-digit number.')
```

Ar gyfer y math hwn o amod, mae Python yn darparu dewis mwy cryno:

```python
if 0 < x < 10:
    print('x is a positive single-digit number.')
```

## Dychweliad

Mae'n gyfreithlon i swyddogaeth alw ei hun. Efallai nad yw'n amlwg pam mae
hynny'n beth da, ond mae'n troi allan i fod yn un o'r pethau mwyaf hudolus y
gall rhaglen ei wneud. Dyma enghraifft.

```python
def countdown(n):
    if n <= 0:
        print('Blastoff!')
    else:
        print(n)
        countdown(n-1)
```

Os yw `n` yn 0 neu'n negatif, mae `countdown` yn allbynnu'r gair, "Blastoff!"
Fel arall, mae'n allbynnu `n` ac yna'n galw ei hun, gan basio `n-1` fel dadl.

Dyma beth sy'n digwydd pan alwn y swyddogaeth hon gyda'r ddadl `3`.

```python
countdown(3)
```

Mae cyflawniad `countdown` yn dechrau gyda `n=3`, ac am fod `n` yn fwy na `0`,
mae'n dangos `3`, ac yna'n galw ei hun...

> Mae cyflawniad `countdown` yn dechrau gyda `n=2`, ac am fod `n` yn fwy na `0`,
> mae'n dangos `2`, ac yna'n galw ei hun...
>
> > Mae cyflawniad `countdown` yn dechrau gyda `n=1`, ac am fod `n` yn fwy na
> > `0`, mae'n dangos `1`, ac yna'n galw ei hun...
> >
> > > Mae cyflawniad `countdown` yn dechrau gyda `n=0`, ac am nad yw `n` yn fwy
> > > na `0`, mae'n dangos "Blastoff!" ac yn dychwelyd.
> >
> > Mae'r `countdown` a gafodd `n=1` yn dychwelyd.
>
> Mae'r `countdown` a gafodd `n=2` yn dychwelyd.

Mae'r `countdown` a gafodd `n=3` yn dychwelyd.

Mae swyddogaeth sy'n galw ei hun yn **{term}`dychweliadol`**. Fel enghraifft
arall, gallwn ysgrifennu swyddogaeth sy'n argraffu llinyn `n` o weithiau.

```python
def print_n_times(string, n):
    if n > 0:
        print(string)
        print_n_times(string, n-1)
```

Os yw `n` yn bositif, mae `print_n_times` yn dangos gwerth `string` ac yna'n
galw ei hun, gan basio `string` ac `n-1` fel dadleuon.

Os yw `n` yn `0` neu'n negatif, mae'r amod yn anwir ac nid yw `print_n_times`
yn gwneud dim.

Dyma sut mae'n gweithio.

```python
print_n_times('Spam ', 4)
```

Ar gyfer enghreifftiau syml fel hyn, mae'n debyg ei bod hi'n haws defnyddio
dolen `for`. Ond fe welwn enghreifftiau yn ddiweddarach sy'n anodd eu
hysgrifennu gyda dolen `for` ac yn hawdd eu hysgrifennu gyda dychweliad, felly
mae'n dda dechrau'n gynnar.

## Diagramau Pentwr ar gyfer Swyddogaethau Dychweliadol

Dyma ddiagram pentwr sy'n dangos y fframiau a grëwyd pan alwom `countdown` gyda
`n = 3`.

```python
from diagram import make_frame, Stack

frames = []
for n in [3,2,1,0]:
    d = dict(n=n)
    frame = make_frame(d, name='countdown', dy=-0.3, loc='left')
    frames.append(frame)

stack = Stack(frames, dy=-0.5)
```

```python
from diagram import diagram, adjust


width, height, x, y = [1.74, 2.04, 1.05, 1.77]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)
# adjust(x, y, bbox)
```

Mae gan y pedair ffram `countdown` wahanol werthoedd ar gyfer y paramedr `n`.
Gelwir gwaelod y pentwr, lle mae `n=0`, yn **{term}`achos sylfaenol`**. Nid yw'n
gwneud galwad ddychweliadol, felly nid oes rhagor o fframiau.

```python
from diagram import make_frame, Stack
from diagram import diagram, adjust

frames = []
for n in [2,1,0]:
    d = dict(string='Hello', n=n)
    frame = make_frame(d, name='print_n_times', dx=1.3, loc='left')
    frames.append(frame)

stack = Stack(frames, dy=-0.5)

width, height, x, y = [3.53, 1.54, 1.54, 1.27]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)
# adjust(x, y, bbox)
```

## Dychweliad Anfeidrol

Os na fydd dychweliad byth yn cyrraedd achos sylfaenol, mae'n parhau i wneud
galwadau dychweliadol am byth, ac nid yw'r rhaglen byth yn terfynu. Gelwir hyn
yn **{term}`dychweliad anfeidrol`**, ac yn gyffredinol nid yw'n syniad da. Dyma
swyddogaeth leiaf gyda dychweliad anfeidrol.

```python
def recurse():
    recurse()
```

Bob tro y gelwir `recurse`, mae'n galw ei hun, sy'n creu ffram arall. Yn Python,
mae cyfyngiad ar nifer y fframiau a all fod ar y pentwr ar yr un pryd. Os bydd
rhaglen yn mynd y tu hwnt i'r cyfyngiad, mae'n achosi gwall rhedeg.

```python
%xmode Context
```

```python
%%expect RecursionError

recurse()
```

Mae'r hanes galwadau'n dangos bod bron 3000 o fframiau ar y pentwr pan
ddigwyddodd y gwall.

Os dowch ar draws dychweliad anfeidrol ar ddamwain, adolygwch eich swyddogaeth
i gadarnhau bod achos sylfaenol nad yw'n gwneud galwad ddychweliadol. Ac os
oes achos sylfaenol, gwiriwch a ydych yn sicr o'i gyrraedd.

## Mewnbwn Bysellfwrdd

Nid yw'r rhaglenni rydym wedi'u hysgrifennu hyd yn hyn yn derbyn unrhyw fewnbwn
gan y defnyddiwr. Maent yn gwneud yr un peth bob tro.

Mae Python yn darparu swyddogaeth gynhenid o'r enw `input` sy'n stopio'r
rhaglen ac yn aros i'r defnyddiwr deipio rhywbeth. Pan fydd y defnyddiwr yn
pwyso *Return* neu *Enter*, mae'r rhaglen yn ailddechrau ac mae `input` yn
dychwelyd yr hyn a deipiodd y defnyddiwr fel llinyn.

```python
# Ateb yma
```

```python
text = input()
```

Cyn cael mewnbwn gan y defnyddiwr, efallai yr hoffech ddangos anogiad yn
dweud wrth y defnyddiwr beth i'w deipio. Gall `input` gymryd anogiad fel dadl:

```python
# Ateb yma
```

```python
name = input('What...is your name?\n')
name
```

Mae'r dilyniant `\n` ar ddiwedd yr anogiad yn cynrychioli **{term}`llinell newydd`**,
sef nod arbennig sy'n achosi toriad llinell — fel hyn mae mewnbwn y defnyddiwr
yn ymddangos o dan yr anogiad.

Os ydych yn disgwyl i'r defnyddiwr deipio cyfanrif, gallwch ddefnyddio'r
swyddogaeth `int` i drosi'r gwerth a ddychwelwyd yn `int`.

```python
# Ateb yma
```

```python
prompt = 'What...is the airspeed velocity of an unladen swallow?\n'
speed = input(prompt)
speed
```

Ond os ydynt yn teipio rhywbeth nad yw'n gyfanrif, cewch wall rhedeg.

```python
%xmode Minimal
```

```python
%%expect ValueError

int(speed)
```

Fe welwn sut i drin y math hwn o wall yn ddiweddarach.

## Dadnamu

Pan ddigwydd gwall cystrawen neu wall rhedeg, mae'r neges wall yn cynnwys
llawer o wybodaeth, ond gall fod yn llethol. Fel arfer y rhannau mwyaf
defnyddiol yw:

* Pa fath o wall ydoedd, a

* Ble digwyddodd.

Mae gwallau cystrawen fel arfer yn hawdd eu canfod, ond mae ambell gocyn
hitio. Gall gwallau sy'n ymwneud â bylchau a thabiau fod yn anodd am eu bod yn
anweledig ac rydym yn gyfarwydd ag anwybyddu nhw.

```python
%%expect IndentationError
x = 5
 y = 6
```

Yn yr enghraifft hon, y broblem yw bod yr ail linell wedi'i mewnoli ag un
bwlch. Ond mae'r neges wall yn pwyntio at `y`, sy'n gamarweiniol. Mae negeseuon
gwall yn dangos ble canfuwyd y broblem, ond gallai'r gwall gwirioneddol fod yn
gynharach yn y cod.

Mae'r un peth yn wir am wallau rhedeg. Er enghraifft, tybiwch eich bod yn
ceisio trosi cymhareb yn ddecibel, fel hyn:

```python
%xmode Context
```

```python
%%expect ValueError
import math
numerator = 9
denominator = 10
ratio = numerator // denominator
decibels = 10 * math.log10(ratio)
```

Mae'r neges wall yn dangos llinell 5, ond nid oes dim byd o'i le ar y llinell
honno. Mae'r broblem yn llinell 4, sy'n defnyddio rhaniad cyfanrif yn lle
rhaniad pwynt arnawf — o ganlyniad, `0` yw gwerth `ratio`. Pan alwn
`math.log10`, cawn `ValueError` gyda'r neges `math domain error`, am nad yw
`0` yn y "parth" o ddadleuon dilys ar gyfer `math.log10`, am fod logarithm `0`
yn annelwig.

Yn gyffredinol, dylech gymryd amser i ddarllen negeseuon gwall yn ofalus, ond
peidiwch â thybio bod popeth a ddywedir yn gywir.

## Rhestr Termau'r Bennod

**dychweliad:**
Y broses o alw'r swyddogaeth sy'n cyflawni ar hyn o bryd.

**gweithredydd modwlws:**
Gweithredydd, `%`, sy'n gweithio ar gyfanrifau ac yn dychwelyd y gweddill pan
rennir un rhif ag un arall.

**mynegiad Boole:**
Mynegiad y mae ei werth naill ai'n `True` neu'n `False`.

**gweithredydd perthynol:**
Un o'r gweithredyddion sy'n cymharu ei weithredynnau: `==`, `!=`, `>`, `<`,
`>=`, a `<=`.

**gweithredydd rhesymegol:**
Un o'r gweithredyddion sy'n cyfuno mynegiadau Boole, gan gynnwys `and`, `or`,
a `not`.

**gosodiad amodol:**
Gosodiad sy'n rheoli llif cyflawniad yn dibynnu ar ryw amod.

**amod:**
Y mynegiad Boole mewn gosodiad amodol sy'n pennu pa gangen sy'n rhedeg.

**bloc:**
Un neu fwy o osodiadau wedi'u mewnoli i ddangos eu bod yn rhan o osodiad arall.

**cangen:**
Un o'r dilyniannau amgen o osodiadau mewn gosodiad amodol.

**amodol cadwynol:**
Gosodiad amodol gyda chyfres o ganghennau amgen.

**amodol nythol:**
Gosodiad amodol sy'n ymddangos yn un o ganghennau gosodiad amodol arall.

**dychweliadol:**
Mae swyddogaeth sy'n galw ei hun yn ddychweliadol.

**achos sylfaenol:**
Cangen amodol mewn swyddogaeth ddychweliadol nad yw'n gwneud galwad
ddychweliadol.

**dychweliad anfeidrol:**
Dychweliad nad oes ganddo achos sylfaenol, neu nad yw byth yn ei gyrraedd. Yn
y pen draw, mae dychweliad anfeidrol yn achosi gwall rhedeg.

**llinell newydd:**
Nod sy'n creu toriad llinell rhwng dwy ran o linyn.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

* Gofynnwch i gynorthwyydd rhithwir, "Beth yw rhai defnyddiau o'r gweithredydd
  modwlws?"

* Mae Python yn darparu gweithredyddion i gyfrifo'r gweithrediadau rhesymegol
  `and`, `or`, a `not`, ond nid oes ganddo weithredydd sy'n cyfrifo'r
  gweithrediad "neu" cyfyngol, a ysgrifennir fel arfer `xor`. Gofynnwch i
  gynorthwyydd "Beth yw'r gweithrediad rhesymegol xor a sut rwy'n ei gyfrifo
  yn Python?"

Yn y bennod hon, gwelsom ddwy ffordd o ysgrifennu gosodiad `if` gyda thair
cangen, gan ddefnyddio amodol cadwynol neu amodol nythol. Gallwch ddefnyddio
cynorthwyydd rhithwir i drosi o un i'r llall. Er enghraifft, gofynnwch i
gynorthwyydd, "Trosi'r gosodiad hwn yn amodol cadwynol."

```python
x = 5
y = 7
```

```python
if x == y:
    print('x and y are equal')
else:
    if x < y:
        print('x is less than y')
    else:
        print('x is greater than y')
```

Gofynnwch i gynorthwyydd, "Ailysgrifennu'r gosodiad hwn gydag un amodol."

```python
if 0 < x:
    if x < 10:
        print('x is a positive single-digit number.')
```

Gweler a all cynorthwyydd symleiddio'r cymhlethdod diangen hwn.

```python
if not x <= 0 and not x >= 10:
    print('x is a positive single-digit number.')
```

Dyma ymgais ar swyddogaeth ddychweliadol sy'n cyfrif i lawr yn ddau.

```python
def countdown_by_two(n):
    if n == 0:
        print('Blastoff!')
    else:
        print(n)
        countdown_by_two(n-2)
```

Mae'n ymddangos ei bod yn gweithio.

```python
countdown_by_two(6)
```

Ond mae ganddi wall. Gofynnwch i gynorthwyydd rhithwir beth sydd o'i le a sut
i'w drwsio. Gludwch y datrysiad y mae'n ei ddarparu yn ôl yma a'i brofi.

### Ymarfer

Mae'r modiwl `time` yn darparu swyddogaeth, a elwir hefyd yn `time`, sy'n
dychwelyd nifer yr eiliadau ers "epoch Unix", sef Ionawr 1, 1970, 00:00:00 UTC
(Amser Cydgysylltiedig Cyffredinol).

```python
from time import time

now = time()
now
```

Defnyddiwch raniad cyfanrif a'r gweithredydd modwlws i gyfrifo nifer y
diwrnodau ers Ionawr 1, 1970 ac amser cyfredol y dydd mewn oriau, munudau, ac
eiliadau.

Gallwch ddarllen mwy am y modiwl `time` yn
<https://docs.python.org/3/library/time.html>.

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

### Ymarfer

Os rhoddir tri ffon i chi, efallai y byddwch yn gallu, neu efallai na fyddwch
yn gallu, eu trefnu'n driongl. Er enghraifft, os yw un o'r ffyn yn 12 modfedd
o hyd a'r ddwy arall yn fodfedd o hyd yr un, ni fyddwch yn gallu cael y ffyn
byr i gyfarfod yn y canol. Ar gyfer unrhyw dair hyd, mae prawf i weld a yw'n
bosibl ffurfio triongl:

> Os yw unrhyw un o'r tair hyd yn fwy na swm y ddwy arall, yna ni allwch
> ffurfio triongl. Fel arall, gallwch. (Os yw swm dwy hyd yn hafal i'r drydedd,
> maent yn ffurfio'r hyn a elwir yn driongl "ddirywiedig".)

Ysgrifennwch swyddogaeth o'r enw `is_triangle` sy'n cymryd tri chyfanrif fel
dadleuon, ac sy'n argraffu "Yes" neu "No", yn dibynnu a allwch neu na allwch
ffurfio triongl o ffyn â'r hydoedd penodol. Awgrym: Defnyddiwch amodol
cadwynol.

```python
# Ateb yma
```

Profwch eich swyddogaeth gyda'r achosion canlynol.

```python
is_triangle(4, 5, 6)   # should be Yes
```

```python
is_triangle(1, 2, 3)   # should be Yes
```

```python
is_triangle(6, 2, 3)   # should be No
```

```python
is_triangle(1, 1, 12)   # should be No
```

### Ymarfer

Beth yw allbwn y rhaglen ganlynol? Tynnwch ddiagram pentwr sy'n dangos cyflwr
y rhaglen pan fydd yn argraffu'r canlyniad.

```python
def recurse(n, s):
    if n == 0:
        print(s)
    else:
        recurse(n-1, n+s)

recurse(3, 0)
```

```python
# Ateb yma
```

```python
# Ateb yma
```

### Ymarfer

Mae'r ymarferion canlynol yn defnyddio'r modiwl `jupyturtle`, a ddisgrifiwyd ym
Mhennod 4.

Darllenwch y swyddogaeth ganlynol a gweler a allwch ddarganfod beth mae'n ei
wneud. Yna rhedwch hi a gweler a oeddech yn gywir. Addaswch werthoedd `length`,
`angle` a `factor` a gweler pa effaith sydd ganddynt ar y canlyniad. Os nad
ydych yn siŵr eich bod yn deall sut mae'n gweithio, ceisiwch ofyn i gynorthwyydd
rhithwir.

```python
from jupyturtle import forward, left, right, back

def draw(length):
    angle = 50
    factor = 0.6
    
    if length > 5:
        forward(length)
        left(angle)
        draw(factor * length)
        right(2 * angle)
        draw(factor * length)
        left(angle)
        back(length)
```

```python
# Ateb yma
```

### Ymarfer

Gofynnwch i gynorthwyydd rhithwir "Beth yw cromlin Koch?"

I dynnu cromlin Koch gyda hyd `x`, y cyfan sy'n rhaid i chi ei wneud yw

1. Tynnu cromlin Koch gyda hyd `x/3`.

2. Troi i'r chwith 60 gradd.

3. Tynnu cromlin Koch gyda hyd `x/3`.

4. Troi i'r dde 120 gradd.

5. Tynnu cromlin Koch gyda hyd `x/3`.

6. Troi i'r chwith 60 gradd.

7. Tynnu cromlin Koch gyda hyd `x/3`.

Yr eithriad yw os yw `x` yn llai na `5` — yn yr achos hwnnw, gallwch jest dynnu
llinell syth gyda hyd `x`.

Ysgrifennwch swyddogaeth o'r enw `koch` sy'n cymryd `x` fel dadl ac yn tynnu
cromlin Koch gyda'r hyd penodol.

```python
# Ateb yma
```

Dylai'r canlyniad edrych fel hyn:

```python
make_turtle(delay=0)
koch(120)
```

Unwaith y bydd gennych `koch` yn gweithio, gallwch ddefnyddio'r ddolen hon i
dynnu tair cromlin Koch ar ffurf pluen eira.

```python
make_turtle(delay=0, height=300)
for i in range(3):
    koch(120)
    right(120)
```

### Ymarfer

Mae cynorthwywyr rhithwir yn gwybod am y swyddogaethau yn y modiwl
`jupyturtle`, ond mae yna lawer o fersiynau o'r swyddogaethau hyn, gydag
gwahanol enwau, felly efallai na fydd cynorthwyydd rhithwir yn gwybod am ba un
rydych yn sôn.

I ddatrys y broblem hon, gallwch ddarparu gwybodaeth ychwanegol cyn i chi ofyn
cwestiwn. Er enghraifft, gallech ddechrau anogiad gyda "Dyma raglen sy'n
defnyddio'r modiwl `jupyturtle`," ac yna gludo un o'r enghreifftiau o'r bennod
hon. Ar ôl hynny, dylai'r cynorthwyydd rhithwir allu cynhyrchu cod sy'n
defnyddio'r modiwl hwn.

Fel enghraifft, gofynnwch i gynorthwyydd rhithwir am raglen sy'n tynnu triongl
Sierpiński. Dylai'r cod a gewch fod yn fan cychwyn da, ond efallai y bydd yn
rhaid i chi wneud ychydig o ddadnamu. Os nad yw'r ymgais gyntaf yn gweithio,
gallwch ddweud wrth y cynorthwyydd rhithwir beth ddigwyddodd a gofyn am help —
neu gallwch ei ddadnamu eich hun.

```python
# Ateb yma
```

Dyma sut y gallai'r canlyniad edrych, er y gallai'r fersiwn a gewch fod yn
wahanol.

```python
make_turtle(delay=0, height=200)

draw_sierpinski(100, 3)
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
