# Dosbarthiadau a Swyddogaethau

Erbyn hyn rydych yn gwybod sut i ddefnyddio swyddogaethau i drefnu cod a
sut i ddefnyddio mathau cynhenid i drefnu data. Y cam nesaf yw
**{term}`Rhaglennu Gwrthrych-gyfeiriadol`**, sy'n defnyddio mathau a
ddiffinnir gan raglenwyr i drefnu cod a data fel ei gilydd.

Mae rhaglennu gwrthrych-gyfeiriadol yn bwnc mawr, felly byddwn yn mynd
ymlaen yn raddol. Yn y bennod hon, byddwn yn dechrau gyda chod nad yw'n
idiomatig — hynny yw, nid dyma'r math o god y mae rhaglenwyr profiadol yn
ei ysgrifennu — ond mae'n lle da i ddechrau. Yn y ddwy bennod nesaf, byddwn
yn defnyddio nodweddion ychwanegol i ysgrifennu cod mwy idiomatig.

## Mathau a Ddiffinnir gan Raglenwyr

Rydym wedi defnyddio llawer o fathau cynhenid Python — nawr byddwn yn
diffinio math newydd. Fel enghraifft gyntaf, byddwn yn creu math o'r enw
`Time` sy'n cynrychioli amser o'r dydd. Gelwir math a ddiffinnir gan
raglennydd hefyd yn **{term}`dosbarth`**. Mae diffiniad dosbarth yn edrych
fel hyn:

```python
class Time:
    """Represents a time of day."""
```

Mae'r pennawd yn dangos mai `Time` yw enw'r dosbarth newydd. Llinyn
dogfennu sy'n esbonio at beth y mae'r dosbarth yw'r corff. Mae diffinio
dosbarth yn creu **{term}`gwrthrych dosbarth`**.

Mae'r gwrthrych dosbarth yn debyg i ffatri ar gyfer creu gwrthrychau. I
greu gwrthrych `Time`, rydych yn galw `Time` fel pe bai'n swyddogaeth.

```python
lunch = Time()
```

Gwrthrych newydd y mae ei fath yn `__main__.Time` yw'r canlyniad, lle mae
`__main__` yn enw'r modiwl lle diffinnir `Time`.

```python
type(lunch)
```

Pan argraffwch wrthrych, mae Python yn dweud wrthych pa fath ydyw a ble mae
wedi'i storio mewn cof (mae'r rhagddodiad `0x` yn golygu bod y rhif sy'n
dilyn yn hecsadegol).

```python
print(lunch)
```

Gelwir creu gwrthrych newydd yn **{term}`enghreifftiad`**, ac mae'r
gwrthrych yn **{term}`enghraifft`** o'r dosbarth.

## Priodoleddau

Gall gwrthrych gynnwys newidynnau, a elwir yn **{term}`priodoledd`**au. Gallwn
greu priodoleddau gan ddefnyddio nodiant dot.

```python
lunch.hour = 11
lunch.minute = 59
lunch.second = 1
```

Mae'r enghraifft hon yn creu priodoleddau o'r enw `hour`, `minute`, a
`second`, sy'n cynnwys oriau, munudau, ac eiliadau'r amser `11:59:01`, sef
amser cinio hyd y gwn i.

Mae'r diagram canlynol yn dangos cyflwr `lunch` a'i briodoleddau ar ôl y
neilltuadau hyn.

```python
from diagram import make_frame, make_binding

d1 = dict(hour=11, minute=59, second=1)
frame = make_frame(d1, name='Time', dy=-0.3, offsetx=0.48)
binding = make_binding('lunch', frame)
```

```python
from diagram import diagram, adjust

width, height, x, y = [1.77, 1.24, 0.25, 0.86]
ax = diagram(width, height)
bbox = binding.draw(ax, x, y)
#adjust(x, y, bbox)
```

Mae'r newidyn `lunch` yn cyfeirio at wrthrych `Time`, sy'n cynnwys tair
priodoledd. Mae pob priodoledd yn cyfeirio at gyfanrif. Gelwir diagram
cyflwr fel hwn — sy'n dangos gwrthrych a'i briodoleddau — yn
**{term}`diagram gwrthrych`**.

Gallwch ddarllen gwerth priodoledd gan ddefnyddio'r gweithredydd dot.

```python
lunch.hour
```

Gallwch ddefnyddio priodoledd fel rhan o unrhyw fynegiad.

```python
total_minutes = lunch.hour * 60 + lunch.minute
total_minutes
```

A gallwch ddefnyddio'r gweithredydd dot mewn mynegiad mewn llinyn-f.

```python
f'{lunch.hour}:{lunch.minute}:{lunch.second}'
```

Ond sylwch nad yw'r enghraifft flaenorol yn y fformat safonol. I'w drwsio,
mae'n rhaid i ni argraffu'r priodoleddau `minute` a `second` gyda sero
blaenorol. Gallwn wneud hynny drwy ymestyn y mynegiadau mewn cromfachau
cyrliog gyda **{term}`penodwr fformat`**. Yn yr enghraifft ganlynol, mae'r
penodwyr fformat yn dangos y dylai `minute` a `second` gael eu harddangos
gydag o leiaf dau ddigid a sero blaenorol os oes angen.

```python
f'{lunch.hour}:{lunch.minute:02d}:{lunch.second:02d}'
```

Byddwn yn defnyddio'r llinyn-f hwn i ysgrifennu swyddogaeth sy'n dangos
gwerth gwrthrych `Time`. Gallwch basio gwrthrych fel dadl yn y ffordd
arferol. Er enghraifft, mae'r swyddogaeth ganlynol yn cymryd gwrthrych
`Time` fel dadl.

```python
def print_time(time):
    s = f'{time.hour:02d}:{time.minute:02d}:{time.second:02d}'
    print(s)
```

Pan alwn hi, gallwn basio `lunch` fel dadl.

```python
print_time(lunch)
```

## Gwrthrychau fel Gwerthoedd Dychwelyd

Gall swyddogaethau ddychwelyd gwrthrychau. Er enghraifft, mae `make_time`
yn cymryd paramedrau o'r enw `hour`, `minute`, a `second`, yn eu storio fel
priodoleddau mewn gwrthrych `Time`, ac yn dychwelyd y gwrthrych newydd.

```python
def make_time(hour, minute, second):
    time = Time()
    time.hour = hour
    time.minute = minute
    time.second = second
    return time
```

Efallai y bydd yn syndod bod gan y paramedrau'r un enwau â'r priodoleddau,
ond mae hynny'n ffordd gyffredin o ysgrifennu swyddogaeth fel hon. Dyma
sut rydym yn defnyddio `make_time` i greu gwrthrych `Time`.

```python
time = make_time(11, 59, 1)
print_time(time)
```

## Mae Gwrthrychau'n Gyfnewidiol

Tybiwch eich bod yn mynd i weld ffilm, fel *Monty Python and the Holy
Grail*, sy'n dechrau am `9:20 PM` ac yn para `92` munud, sef awr `32`
munud. Pryd fydd y ffilm yn gorffen?

Yn gyntaf, byddwn yn creu gwrthrych `Time` sy'n cynrychioli'r amser
cychwyn.

```python
start = make_time(9, 20, 0)
print_time(start)
```

I ddarganfod yr amser gorffen, gallwn addasu priodoleddau'r gwrthrych
`Time`, gan ychwanegu hyd y ffilm.

```python
start.hour += 1
start.minute += 32
print_time(start)
```

Bydd y ffilm drosodd am 10:52 PM.

Gadewch i ni amgáu'r cyfrifiant hwn mewn swyddogaeth a'i gyffredinoli i
gymryd hyd y ffilm mewn tri pharamedr: `hours`, `minutes`, ac `seconds`.

```python
def increment_time(time, hours, minutes, seconds):
    time.hour += hours
    time.minute += minutes
    time.second += seconds
```

Dyma enghraifft sy'n dangos yr effaith.

```python
start = make_time(9, 20, 0)
increment_time(start, 1, 32, 0)
print_time(start)
```

Mae'r diagram pentwr canlynol yn dangos cyflwr y rhaglen ychydig cyn i
`increment_time` addasu'r gwrthrych.

```python
from diagram import Frame, Binding, Value, Stack

d1 = dict(hour=9, minute=20, second=0)
obj1 = make_frame(d1, name='Time', dy=-0.25, offsetx=0.78)

binding1 = make_binding('start', frame, draw_value=False, dx=0.7)
frame1 = Frame([binding1], name='__main__', loc='left', offsetx=-0.2)

binding2 = Binding(Value('time'), draw_value=False, dx=0.7, dy=0.35)
binding3 = make_binding('hours', 1)
binding4 = make_binding('minutes',32)
binding5 = make_binding('seconds', 0)
frame2 = Frame([binding2, binding3, binding4, binding5], name='increment_time', 
               loc='left', dy=-0.25, offsetx=0.08)

stack = Stack([frame1, frame2], dx=-0.3, dy=-0.5)
```

```python
from diagram import Bbox

width, height, x, y = [3.4, 1.89, 1.75, 1.5]
ax = diagram(width, height)
bbox1 = stack.draw(ax, x, y)
bbox2 = obj1.draw(ax, x+0.23, y)
bbox = Bbox.union([bbox1, bbox2])
# adjust(x, y, bbox)
```

Y tu mewn i'r swyddogaeth, mae `time` yn arallenw o `start`, felly pan
addesir `time`, mae `start` yn newid.

Mae'r swyddogaeth hon yn gweithio, ond ar ôl iddi redeg, rydym yn cael ein
gadael â newidyn o'r enw `start` sy'n cyfeirio at wrthrych sy'n cynrychioli'r
amser *gorffen*, ac nid oes gennym bellach wrthrych sy'n cynrychioli'r
amser cychwyn. Byddai'n well gadael `start` heb ei newid a gwneud gwrthrych
newydd i gynrychioli'r amser gorffen. Gallwn wneud hynny drwy gopïo `start`
ac addasu'r copi.

## Copïo

Mae'r modiwl `copy` yn darparu swyddogaeth o'r enw `copy` a all ddyblygu
unrhyw wrthrych. Gallwn ei fewnforio fel hyn.

```python
from copy import copy
```

I weld sut mae'n gweithio, gadewch i ni ddechrau gyda gwrthrych `Time`
newydd sy'n cynrychioli amser cychwyn y ffilm.

```python
start = make_time(9, 20, 0)
```

A gwneud copi.

```python
end = copy(start)
```

Nawr mae `start` ac `end` yn cynnwys yr un data.

```python
print_time(start)
print_time(end)
```

Ond mae'r gweithredydd `is` yn cadarnhau nad ydynt yr un gwrthrych.

```python
start is end
```

Gadewch i ni weld beth mae'r gweithredydd `==` yn ei wneud.

```python
start == end
```

Efallai y byddech yn disgwyl i `==` gynhyrchu `True` am fod y gwrthrychau'n
cynnwys yr un data. Ond ar gyfer dosbarthiadau a ddiffinnir gan raglenwyr,
mae ymddygiad rhagosodedig y gweithredydd `==` yr un fath â'r gweithredydd
`is` — mae'n gwirio unfathrwydd, nid cyfwerthedd.

## Swyddogaethau Pur

Gallwn ddefnyddio `copy` i ysgrifennu swyddogaethau pur nad ydynt yn
addasu eu paramedrau. Er enghraifft, dyma swyddogaeth sy'n cymryd
gwrthrych `Time` a hyd mewn oriau, munudau, ac eiliadau. Mae'n gwneud copi
o'r gwrthrych gwreiddiol, yn defnyddio `increment_time` i addasu'r copi,
ac yn ei ddychwelyd.

```python
def add_time(time, hours, minutes, seconds):
    total = copy(time)
    increment_time(total, hours, minutes, seconds)
    return total
```

Dyma sut rydym yn ei defnyddio.

```python
end = add_time(start, 1, 32, 0)
print_time(end)
```

Gwrthrych newydd sy'n cynrychioli amser gorffen y ffilm yw'r gwerth
dychwelyd. A gallwn gadarnhau nad yw `start` wedi newid.

```python
print_time(start)
```

Mae `add_time` yn swyddogaeth bur am nad yw'n addasu unrhyw un o'r
gwrthrychau a basiwyd iddi fel dadleuon a'i hunig effaith yw dychwelyd
gwerth.

Gellir gwneud unrhyw beth y gellir ei wneud gyda swyddogaethau amhur hefyd
gyda swyddogaethau pur. Mewn gwirionedd, dim ond swyddogaethau pur y mae
rhai ieithoedd rhaglennu'n eu caniatáu. Efallai y bydd rhaglenni sy'n
defnyddio swyddogaethau pur yn llai tueddol o achosi gwallau, ond mae
swyddogaethau amhur weithiau'n gyfleus a gallant fod yn fwy effeithlon.

Yn gyffredinol, rwy'n awgrymu eich bod yn ysgrifennu swyddogaethau pur pryd
bynnag y mae'n rhesymol a dim ond yn troi at swyddogaethau amhur os oes
mantais gymhellol. Gellid galw'r dull hwn yn **{term}`arddull rhaglennu swyddogaethol`**.

## Prototeip a Chlwt

Yn yr enghraifft flaenorol, mae'n ymddangos bod `increment_time` ac
`add_time` yn gweithio, ond os rhown gynnig ar enghraifft arall, fe welwn
nad ydynt yn gwbl gywir.

Tybiwch eich bod yn cyrraedd y theatr ac yn darganfod bod y ffilm yn
dechrau am `9:40`, nid `9:20`. Dyma beth sy'n digwydd pan gyfrifwn yr amser
gorffen wedi'i ddiweddaru.

```python
start = make_time(9, 40, 0)
end = add_time(start, 1, 32, 0)
print_time(end)
```

Nid yw'r canlyniad yn amser dilys. Y broblem yw nad yw `increment_time` yn
ymdrin ag achosion lle mae nifer yr eiliadau neu'r munudau'n adio i fwy na
`60`.

Dyma fersiwn well sy'n gwirio a yw `second` yn fwy na neu'n hafal i `60` —
os felly, mae'n cynyddu `minute` — yna'n gwirio a yw `minute` yn fwy na
neu'n hafal i `60` — os felly, mae'n cynyddu `hour`.

```python
def increment_time(time, hours, minutes, seconds):
    time.hour += hours
    time.minute += minutes
    time.second += seconds

    if time.second >= 60:
        time.second -= 60
        time.minute += 1

    if time.minute >= 60:
        time.minute -= 60
        time.hour += 1
```

Mae trwsio `increment_time` hefyd yn trwsio `add_time`, sy'n ei
defnyddio. Felly nawr mae'r enghraifft flaenorol yn gweithio'n gywir.

```python
end = add_time(start, 1, 32, 0)
print_time(end)
```

Ond mae'r swyddogaeth hon yn dal i fod yn anghywir, am y gallai'r dadleuon
fod yn fwy na `60`. Er enghraifft, tybiwch ein bod yn cael yr amser rhedeg
fel `92` munud, yn hytrach nag `1` awr a `32` munud. Gallem alw `add_time`
fel hyn.

```python
end = add_time(start, 0, 92, 0)
print_time(end)
```

Nid yw'r canlyniad yn amser dilys. Felly gadewch i ni roi cynnig ar ddull
gwahanol, gan ddefnyddio'r swyddogaeth `divmod`. Byddwn yn gwneud copi o
`start` ac yn ei addasu drwy gynyddu'r briodoledd `minute`.

```python
end = copy(start)
end.minute = start.minute + 92
end.minute
```

Nawr `132` yw `minute`, sef `2` awr a `12` munud. Gallwn ddefnyddio
`divmod` i rannu â `60` a dychwelyd nifer yr oriau cyflawn a nifer y
munudau sy'n weddill.

```python
carry, end.minute = divmod(end.minute, 60)
carry, end.minute
```

Nawr mae `minute` yn gywir, a gallwn ychwanegu'r oriau at `hour`.

```python
end.hour += carry
print_time(end)
```

Mae'r canlyniad yn amser dilys. Gallwn wneud yr un peth gyda `hour` ac
`second`, ac amgáu'r broses gyfan mewn swyddogaeth.

```python
def increment_time(time, hours, minutes, seconds):
    time.hour += hours
    time.minute += minutes
    time.second += seconds
    
    carry, time.second = divmod(time.second, 60)
    carry, time.minute = divmod(time.minute + carry, 60)
    carry, time.hour = divmod(time.hour + carry, 24)
```

Gyda'r fersiwn hon o `increment_time`, mae `add_time` yn gweithio'n gywir,
hyd yn oed os yw'r dadleuon yn fwy na `60`.

```python
end = add_time(start, 0, 90, 120)
print_time(end)
```

Mae'r adran hon yn dangos cynllun datblygu rhaglenni a alwaf yn
**{term}`prototeip a chlwt`**. Dechreuom gyda phrototeip syml a oedd yn
gweithio'n gywir ar gyfer yr enghraifft gyntaf. Yna fe'i profom gydag
enghreifftiau mwy anodd — pan ddarganfyddom wall, addasom y rhaglen i'w
drwsio, fel rhoi clwt ar deiar â thwll.

Gall y dull hwn fod yn effeithiol, yn enwedig os nad oes gennych eto
ddealltwriaeth ddofn o'r broblem. Ond gall cywiriadau graddol gynhyrchu cod
sy'n ddiangen o gymhleth — am ei fod yn ymdrin â llawer o achosion arbennig
— ac yn annibynadwy — am ei bod yn anodd gwybod a ydych wedi darganfod yr
holl wallau.

## Datblygu Dylunio-yn-Gyntaf

Cynllun amgen yw **{term}`datblygu dylunio-yn-gyntaf`**, sy'n golygu mwy o
gynllunio cyn creu prototeip. Mewn proses dylunio-yn-gyntaf, weithiau mae
mewnwelediad lefel-uchel i'r broblem yn gwneud rhaglennu'n llawer haws.

Yn yr achos hwn, y mewnwelediad yw y gallwn feddwl am wrthrych `Time` fel
rhif tri-digid yn sail 60 — a elwir hefyd yn sexagesimal. Y briodoledd
`second` yw'r "golofn unedau", y briodoledd `minute` yw'r "golofn
trigeiniau", a'r briodoledd `hour` yw'r "golofn tri-chwe-chant". Pan
ysgrifennom `increment_time`, roeddem i bob pwrpas yn gwneud adio yn sail
60, a dyna pam roedd yn rhaid i ni gario o un golofn i'r nesaf.

Mae'r arsylwad hwn yn awgrymu dull arall ar gyfer y broblem gyfan — gallwn
drosi gwrthrychau `Time` yn gyfanrifau a manteisio ar y ffaith bod Python yn
gwybod sut i wneud rhifyddeg cyfanrif.

Dyma swyddogaeth sy'n trosi o `Time` i gyfanrif.

```python
def time_to_int(time):
    minutes = time.hour * 60 + time.minute
    seconds = minutes * 60 + time.second
    return seconds
```

Nifer yr eiliadau ers dechrau'r dydd yw'r canlyniad. Er enghraifft, mae
`01:01:01` yn `1` awr, `1` munud ac `1` eiliad ers dechrau'r dydd, sef swm
`3600` eiliad, `60` eiliad, ac `1` eiliad.

```python
time = make_time(1, 1, 1)
print_time(time)
time_to_int(time)
```

A dyma swyddogaeth sy'n mynd i'r cyfeiriad arall — trosi cyfanrif yn
wrthrych `Time` — gan ddefnyddio'r swyddogaeth `divmod`.

```python
def int_to_time(seconds):
    minute, second = divmod(seconds, 60)
    hour, minute = divmod(minute, 60)
    return make_time(hour, minute, second)
```

Gallwn ei phrofi drwy drosi'r enghraifft flaenorol yn ôl yn `Time`.

```python
time = int_to_time(3661)
print_time(time)
```

Gan ddefnyddio'r swyddogaethau hyn, gallwn ysgrifennu fersiwn fwy cryno o
`add_time`.

```python
def add_time(time, hours, minutes, seconds):
    duration = make_time(hours, minutes, seconds)
    seconds = time_to_int(time) + time_to_int(duration)
    return int_to_time(seconds)
```

Mae'r llinell gyntaf yn trosi'r dadleuon yn wrthrych `Time` o'r enw
`duration`. Mae'r ail linell yn trosi `time` a `duration` yn eiliadau ac
yn eu hadio. Mae'r drydedd linell yn trosi'r swm yn wrthrych `Time` ac yn
ei ddychwelyd.

Dyma sut mae'n gweithio.

```python
start = make_time(9, 40, 0)
end = add_time(start, 1, 32, 0)
print_time(end)
```

Mewn rhai ffyrdd, mae trosi o sail 60 i sail 10 ac yn ôl yn anoddach na
jest ymdrin ag amseroedd. Mae trosi sail yn fwy haniaethol; mae ein
greddf ar gyfer ymdrin â gwerthoedd amser yn well.

Ond os oes gennym y mewnwelediad i drin amseroedd fel rhifau sail 60 — ac
yn buddsoddi'r ymdrech i ysgrifennu'r swyddogaethau trosi `time_to_int` ac
`int_to_time` — cawn raglen sy'n fyrrach, yn haws ei darllen a'i dadnamu,
ac yn fwy dibynadwy.

Mae hefyd yn haws ychwanegu nodweddion yn ddiweddarach. Er enghraifft,
dychmygwch dynnu dau wrthrych `Time` i ddarganfod yr hyd rhyngddynt. Y dull
naïf yw gweithredu tynnu gydag echwynna. Mae defnyddio'r swyddogaethau
trosi'n haws ac yn fwy tebygol o fod yn gywir.

Yn eironig, weithiau mae gwneud problem yn anoddach — neu'n fwy
cyffredinol — yn ei gwneud yn haws, am fod llai o achosion arbennig a llai
o gyfleoedd am wallau.

## Dadnamu

Mae Python yn darparu sawl swyddogaeth gynhenid sy'n ddefnyddiol ar gyfer
profi a dadnamu rhaglenni sy'n gweithio gyda gwrthrychau. Er enghraifft, os
nad ydych yn siŵr pa fath yw gwrthrych, gallwch ofyn.

```python
type(start)
```

Gallwch hefyd ddefnyddio `isinstance` i wirio a yw gwrthrych yn enghraifft
o ddosbarth penodol.

```python
isinstance(end, Time)
```

Os nad ydych yn siŵr a oes gan wrthrych briodoledd benodol, gallwch
ddefnyddio'r swyddogaeth gynhenid `hasattr`.

```python
hasattr(start, 'hour')
```

I gael yr holl briodoleddau, a'u gwerthoedd, mewn geiriadur, gallwch
ddefnyddio `vars`.

```python
vars(start)
```

Mae'r modiwl `structshape`, a welsom ym Mhennod 11 ({ref}`section_debugging_11`),
hefyd yn gweithio gyda mathau a ddiffinnir gan raglenwyr.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/structshape.py');
```

```python
from structshape import structshape

t = start, end
structshape(t)
```

## Rhestr Termau'r Bennod

**Rhaglennu Gwrthrych-gyfeiriadol:**
Arddull rhaglennu sy'n defnyddio gwrthrychau i drefnu cod a data.

**dosbarth:**
Math a ddiffinnir gan raglennydd. Mae diffiniad dosbarth yn creu gwrthrych
dosbarth newydd.

**gwrthrych dosbarth:**
Gwrthrych sy'n cynrychioli dosbarth — dyma ganlyniad diffiniad dosbarth.

**enghreifftiad:**
Y broses o greu gwrthrych sy'n perthyn i ddosbarth.

**enghraifft:**
Gwrthrych sy'n perthyn i ddosbarth.

**priodoledd:**
Newidyn sy'n gysylltiedig â gwrthrych, a elwir hefyd yn newidyn
enghraifft.

**diagram gwrthrych:**
Cynrychiolaeth graffigol o wrthrych, ei briodoleddau, a'u gwerthoedd.

**penodwr fformat:**
Mewn llinyn-f, mae penodwr fformat yn pennu sut mae gwerth yn cael ei
drosi'n llinyn.

**swyddogaeth bur:**
Swyddogaeth nad yw'n addasu ei pharamedrau nac yn cael unrhyw effaith
heblaw dychwelyd gwerth.

**arddull rhaglennu swyddogaethol:**
Ffordd o raglennu sy'n defnyddio swyddogaethau pur pryd bynnag y bo modd.

**prototeip a chlwt:**
Ffordd o ddatblygu rhaglenni drwy ddechrau gyda drafft bras ac ychwanegu
nodweddion a thrwsio namau yn raddol.

**datblygu dylunio-yn-gyntaf:**
Ffordd o ddatblygu rhaglenni gyda mwy o gynllunio gofalus na phrototeip a
chlwt.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Mae llawer o eirfa newydd yn y bennod hon. Gall sgwrs gyda chynorthwyydd
rhithwir helpu i gadarnhau eich dealltwriaeth. Ystyriwch ofyn:

* "Beth yw'r gwahaniaeth rhwng dosbarth a math?"

* "Beth yw'r gwahaniaeth rhwng gwrthrych ac enghraifft?"

* "Beth yw'r gwahaniaeth rhwng newidyn a phriodoledd?"

* "Beth yw manteision ac anfanteision swyddogaethau pur o'u cymharu â
  swyddogaethau amhur?"

Gan ein bod newydd ddechrau gyda rhaglennu gwrthrych-gyfeiriadol, nid yw'r
cod yn y bennod hon yn idiomatig — nid dyma'r math o god y mae rhaglenwyr
profiadol yn ei ysgrifennu. Os gofynnwch i gynorthwyydd rhithwir am help
gyda'r ymarferion, mae'n debygol y gwelwch nodweddion nad ydym wedi'u
trafod eto. Yn benodol, mae'n debygol y gwelwch ddull o'r enw `__init__` a
ddefnyddir i gychwyn priodoleddau enghraifft.

Os yw'r nodweddion hyn yn gwneud synnwyr i chi, ewch ymlaen a'u defnyddio.
Ond os nad ydynt, byddwch yn amyneddgar — fe gyrhaeddwn yno'n fuan. Yn y
cyfamser, gweler a allwch ddatrys yr ymarferion canlynol gan ddefnyddio dim
ond y nodweddion rydym wedi'u trafod hyd yn hyn.

Hefyd, yn y bennod hon gwelsom un enghraifft o benodwr fformat. Am fwy o
wybodaeth, gofynnwch "Pa benodwyr fformat y gellir eu defnyddio mewn
llinyn-f Python?"

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `subtract_time` sy'n cymryd dau wrthrych
`Time` ac yn dychwelyd y cyfnod rhyngddynt mewn eiliadau — gan dybio mai
dau amser yr un diwrnod ydynt.

Dyma amlinelliad o'r swyddogaeth i'ch helpu ddechrau.

```python
def subtract_time(t1, t2):
    """Compute the difference between two times in seconds.
    
    >>> subtract_time(make_time(3, 2, 1), make_time(3, 2, 0))
    1
    >>> subtract_time(make_time(3, 2, 1), make_time(3, 0, 0))
    121
    >>> subtract_time(make_time(11, 12, 0), make_time(9, 40, 0))
    5520
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

run_doctests(subtract_time)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `is_after` sy'n cymryd dau wrthrych `Time`
ac yn dychwelyd `True` os yw'r amser cyntaf yn hwyrach yn y dydd na'r ail, a
`False` fel arall.

Dyma amlinelliad o'r swyddogaeth i'ch helpu ddechrau.

```python
def is_after(t1, t2):
    """Checks whether `t1` is after `t2`.
    
    >>> is_after(make_time(3, 2, 1), make_time(3, 2, 0))
    True
    >>> is_after(make_time(3, 2, 1), make_time(3, 2, 1))
    False
    >>> is_after(make_time(11, 12, 0), make_time(9, 40, 0))
    True
    """
    return None
```

```python
# Ateb yma
```

Gallwch ddefnyddio `doctest` i brofi eich swyddogaeth.

```python
run_doctests(is_after)
```

### Ymarfer

Dyma ddiffiniad ar gyfer dosbarth `Date` sy'n cynrychioli dyddiad — hynny
yw, blwyddyn, mis, a diwrnod o'r mis.

```python
class Date:
    """Represents a year, month, and day"""
```

1. Ysgrifennwch swyddogaeth o'r enw `make_date` sy'n cymryd `year`,
   `month`, a `day` fel paramedrau, yn gwneud gwrthrych `Date`, yn
   neilltuo'r paramedrau i briodoleddau, ac yn dychwelyd y gwrthrych
   newydd. Crëwch wrthrych sy'n cynrychioli Mehefin 22, 1933.

2. Ysgrifennwch swyddogaeth o'r enw `print_date` sy'n cymryd gwrthrych
   `Date`, yn defnyddio llinyn-f i fformatio'r priodoleddau, ac yn
   argraffu'r canlyniad. Os profwch ef gyda'r `Date` a grëoch, dylai'r
   canlyniad fod yn `1933-06-22`.

3. Ysgrifennwch swyddogaeth o'r enw `is_after` sy'n cymryd dau wrthrych
   `Date` fel paramedrau ac yn dychwelyd `True` os yw'r cyntaf yn dod ar ôl
   yr ail. Crëwch ail wrthrych sy'n cynrychioli Medi 17, 1933, a gwiriwch a
   yw'n dod ar ôl y gwrthrych cyntaf.

Awgrym: Efallai y gwelwch hi'n ddefnyddiol ysgrifennu swyddogaeth o'r enw
`date_to_tuple` sy'n cymryd gwrthrych `Date` ac yn dychwelyd tŵpl sy'n
cynnwys ei briodoleddau yn nhrefn blwyddyn, mis, diwrnod.

Gallwch ddefnyddio'r amlinelliad swyddogaeth hwn i ddechrau.

```python
def make_date(year, month, day):
    return None
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi `make_date`.

```python
birthday1 = make_date(1933, 6, 22)
```

```python
birthday2 = make_date(1933, 9, 17)
```

Gallwch ddefnyddio'r amlinelliad swyddogaeth hwn i ddechrau.

```python
def print_date(date):
    print('')
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghraifft hon i brofi `print_date`.

```python
print_date(birthday1)
```

Gallwch ddefnyddio'r amlinelliad swyddogaeth hwn i ddechrau.

```python
def is_after(date1, date2):
    return None
```

```python
# Ateb yma
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi `is_after`.

```python
is_after(birthday1, birthday2)  # should be False
```

```python
is_after(birthday2, birthday1)  # should be True
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
