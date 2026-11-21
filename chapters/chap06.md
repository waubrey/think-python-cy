# Gwerthoedd Dychwelyd

Mewn penodau blaenorol, rydym wedi defnyddio swyddogaethau cynhenid — fel `abs`
a `round` — a swyddogaethau yn y modiwl math — fel `sqrt` a `pow`. Pan alwch un
o'r swyddogaethau hyn, mae'n dychwelyd gwerth y gallwch ei neilltuo i newidyn
neu ei ddefnyddio fel rhan o fynegiad.

Mae'r swyddogaethau rydym wedi'u hysgrifennu hyd yn hyn yn wahanol. Mae rhai'n
defnyddio'r swyddogaeth `print` i ddangos gwerthoedd, ac mae rhai'n defnyddio
swyddogaethau crwban i dynnu ffigurau. Ond nid ydynt yn dychwelyd gwerthoedd
rydym yn eu neilltuo i newidynnau neu'n eu defnyddio mewn mynegiadau.

Yn y bennod hon, byddwn yn gweld sut i ysgrifennu swyddogaethau sy'n dychwelyd
gwerthoedd.

## Mae Gan Rai Swyddogaethau Werthoedd Dychwelyd

Pan alwch swyddogaeth fel `math.sqrt`, gelwir y canlyniad yn **{term}`gwerth dychwelyd`**.
Os yw'r alwad swyddogaeth yn ymddangos ar ddiwedd cell, mae Jupyter yn dangos y
gwerth dychwelyd ar unwaith.

```python
import math

math.sqrt(42 / math.pi)
```

Os neilltuwch y gwerth dychwelyd i newidyn, ni chaiff ei ddangos.

```python
radius = math.sqrt(42 / math.pi)
```

Ond gallwch ei ddangos yn ddiweddarach.

```python
radius
```

Neu gallwch ddefnyddio'r gwerth dychwelyd fel rhan o fynegiad.

```python
radius + math.sqrt(42 / math.pi)
```

Dyma enghraifft o swyddogaeth sy'n dychwelyd gwerth.

```python
def circle_area(radius):
    area = math.pi * radius**2
    return area
```

Mae `circle_area` yn cymryd `radius` fel paramedr ac yn cyfrifo arwynebedd
cylch gyda'r radiws hwnnw.

Mae'r llinell olaf yn osodiad `return` sy'n dychwelyd gwerth `area`.

Os galwn y swyddogaeth fel hyn, mae Jupyter yn dangos y gwerth dychwelyd.

```python
circle_area(radius)
```

Gallwn neilltuo'r gwerth dychwelyd i newidyn.

```python
a = circle_area(radius)
```

Neu ei ddefnyddio fel rhan o fynegiad.

```python
circle_area(radius) + 2 * circle_area(radius / 2)
```

Yn ddiweddarach gallwn ddangos gwerth y newidyn y neilltuwyd y canlyniad iddo.

```python
a
```

Ond ni allwn gyrchu `area`.

```python
%%expect NameError

area
```

Mae `area` yn newidyn lleol mewn swyddogaeth, felly ni allwn ei gyrchu o'r tu
allan i'r swyddogaeth.

## A Mae Gan Rai None

Os nad oes gan swyddogaeth osodiad `return`, mae'n dychwelyd `None`, sy'n
werth arbennig fel `True` a `False`. Er enghraifft, dyma'r swyddogaeth `repeat`
o Bennod 3.

```python
def repeat(word, n):
    print(word * n)
```

Os galwn hi fel hyn, mae'n dangos llinell gyntaf cân Monty Python "Finland".

```python
repeat('Finland, ', 3)
```

Mae'r swyddogaeth hon yn defnyddio'r swyddogaeth `print` i ddangos llinyn, ond
nid yw'n defnyddio gosodiad `return` i ddychwelyd gwerth. Os neilltuwn y
canlyniad i newidyn, mae'n dangos y llinyn beth bynnag.

```python
result = repeat('Finland, ', 3)
```

Ac os dangoswn werth y newidyn, cawn ddim byd.

```python
result
```

Mae gan `result` werth mewn gwirionedd, ond nid yw Jupyter yn ei ddangos. Fodd
bynnag, gallwn ei ddangos fel hyn.

```python
print(result)
```

`None` yw'r gwerth dychwelyd o `repeat`.

Nawr dyma swyddogaeth debyg i `repeat` ac eithrio bod ganddi werth dychwelyd.

```python
def repeat_string(word, n):
    return word * n
```

Sylwch y gallwn ddefnyddio mynegiad mewn gosodiad `return`, nid dim ond
newidyn.

Gyda'r fersiwn hon, gallwn neilltuo'r canlyniad i newidyn. Pan fydd y
swyddogaeth yn rhedeg, nid yw'n dangos dim byd.

```python
line = repeat_string('Spam, ', 4)
```

Ond yn ddiweddarach gallwn ddangos y gwerth a neilltuwyd i `line`.

```python
line
```

Gelwir swyddogaeth fel hon yn **{term}`swyddogaeth bur`** am nad yw'n dangos
dim byd nac yn cael unrhyw effaith arall — heblaw dychwelyd gwerth.

## Gwerthoedd Dychwelyd ac Amodolion

Pe na bai Python yn darparu `abs`, gallem ei hysgrifennu fel hyn.

```python
def absolute_value(x):
    if x < 0:
        return -x
    else:
        return x
```

Os yw `x` yn negatif, mae'r gosodiad `return` cyntaf yn dychwelyd `-x` ac mae'r
swyddogaeth yn dod i ben ar unwaith. Fel arall, mae'r ail osodiad `return` yn
dychwelyd `x` ac mae'r swyddogaeth yn dod i ben. Felly mae'r swyddogaeth hon yn
gywir.

Fodd bynnag, os rhowch osodiadau `return` mewn amodol, mae'n rhaid i chi wneud
yn siŵr bod pob llwybr posibl drwy'r rhaglen yn taro gosodiad `return`. Er
enghraifft, dyma fersiwn anghywir o `absolute_value`.

```python
def absolute_value_wrong(x):
    if x < 0:
        return -x
    if x > 0:
        return x
```

Dyma beth sy'n digwydd os galwn y swyddogaeth hon gyda `0` fel dadl.

```python
absolute_value_wrong(0)
```

Cawn ddim byd! Dyma'r broblem: pan fo `x` yn `0`, nid yw'r un o'r amodau'n
wir, ac mae'r swyddogaeth yn dod i ben heb daro gosodiad `return`, sy'n golygu
mai `None` yw'r gwerth dychwelyd, felly nid yw Jupyter yn dangos dim byd.

Fel enghraifft arall, dyma fersiwn o `absolute_value` gyda gosodiad `return`
ychwanegol ar y diwedd.

```python
def absolute_value_extra_return(x):
    if x < 0:
        return -x
    else:
        return x
    
    return 'This is dead code'
```

Os yw `x` yn negatif, mae'r gosodiad `return` cyntaf yn rhedeg ac mae'r
swyddogaeth yn dod i ben. Fel arall mae'r ail osodiad `return` yn rhedeg ac mae'r
swyddogaeth yn dod i ben. Naill ffordd, nid ydym byth yn cyrraedd y trydydd
gosodiad `return` — felly ni all byth redeg.

Gelwir cod na all byth redeg yn **{term}`cod marw`**. Yn gyffredinol, nid yw
cod marw'n gwneud unrhyw niwed, ond mae'n aml yn dangos camddealltwriaeth, a
gallai fod yn ddryslyd i rywun sy'n ceisio deall y rhaglen.

## Datblygiad Graddol

Wrth i chi ysgrifennu swyddogaethau mwy, efallai y gwelwch eich hun yn treulio
mwy o amser yn dadnamu. I ymdopi â rhaglenni cynyddol gymhleth, efallai yr
hoffech roi cynnig ar **{term}`datblygiad graddol`**, sef ffordd o ychwanegu a
phrofi dim ond ychydig o god ar y tro.

Fel enghraifft, tybiwch eich bod am ddarganfod y pellter rhwng dau bwynt a
gynrychiolir gan y cyfesurynnau $(x_1, y_1)$ a $(x_2, y_2)$. Yn ôl theorem
Pythagoras, y pellter yw:

$$\mathrm{pellter} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Y cam cyntaf yw ystyried sut y dylai swyddogaeth `distance` edrych yn Python —
hynny yw, beth yw'r mewnbynnau (paramedrau) a beth yw'r allbwn (gwerth
dychwelyd)?

Ar gyfer y swyddogaeth hon, y mewnbynnau yw cyfesurynnau'r pwyntiau. Y gwerth
dychwelyd yw'r pellter. Ar unwaith gallwch ysgrifennu amlinelliad o'r
swyddogaeth:

```python
def distance(x1, y1, x2, y2):
    return 0.0
```

Nid yw'r fersiwn hon yn cyfrifo pellteroedd eto — mae bob amser yn dychwelyd
sero. Ond mae'n swyddogaeth gyflawn gyda gwerth dychwelyd, sy'n golygu y
gallwch ei phrofi cyn ei gwneud yn fwy cymhleth.

I brofi'r swyddogaeth newydd, byddwn yn ei galw gyda dadleuon enghreifftiol:

```python
distance(1, 2, 4, 6)
```

Dewisais y gwerthoedd hyn fel bod y pellter llorweddol yn `3` a'r pellter
fertigol yn `4`. Felly, `5` yw'r canlyniad, hypotenws triongl ongl sgwâr
`3-4-5`. Wrth brofi swyddogaeth, mae'n ddefnyddiol gwybod yr ateb cywir.

Ar hyn o bryd rydym wedi cadarnhau bod y swyddogaeth yn rhedeg ac yn dychwelyd
gwerth, a gallwn ddechrau ychwanegu cod at y corff. Cam nesaf da yw darganfod y
gwahaniaethau `x2 - x1` ac `y2 - y1`. Dyma fersiwn sy'n storio'r gwerthoedd
hynny mewn newidynnau dros dro ac yn eu dangos.

```python
def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    print('dx is', dx)
    print('dy is', dy)
    return 0.0
```

Os yw'r swyddogaeth yn gweithio, dylai ddangos `dx is 3` a `dy is 4`. Os felly,
rydym yn gwybod bod y swyddogaeth yn cael y dadleuon cywir ac yn perfformio'r
cyfrifiant cyntaf yn gywir. Os nad yw, dim ond ychydig o linellau sydd angen eu
gwirio.

```python
distance(1, 2, 4, 6)
```

Da hyd yn hyn. Nesaf byddwn yn cyfrifo swm sgwariau `dx` a `dy`:

```python
def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    print('dsquared is: ', dsquared)
    return 0.0
```

Unwaith eto, gallwn redeg y swyddogaeth a gwirio'r allbwn, a ddylai fod yn
`25`.

```python
distance(1, 2, 4, 6)
```

Yn olaf, gallwn ddefnyddio `math.sqrt` i gyfrifo'r pellter:

```python
def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    result = math.sqrt(dsquared)
    print("result is", result)
```

A'i brofi.

```python
distance(1, 2, 4, 6)
```

Mae'r canlyniad yn gywir, ond mae'r fersiwn hon o'r swyddogaeth yn dangos y
canlyniad yn hytrach na'i ddychwelyd, felly `None` yw'r gwerth dychwelyd.

Gallwn drwsio hynny drwy ddisodli'r swyddogaeth `print` â gosodiad `return`.

```python
def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    result = math.sqrt(dsquared)
    return result
```

Mae'r fersiwn hon o `distance` yn swyddogaeth bur. Os galwn hi fel hyn, dim
ond y canlyniad a ddangosir.

```python
distance(1, 2, 4, 6)
```

Ac os neilltuwn y canlyniad i newidyn, ni ddangosir dim byd.

```python
d = distance(1, 2, 4, 6)
```

Mae'r gosodiadau `print` a ysgrifennom yn ddefnyddiol ar gyfer dadnamu, ond
unwaith y bydd y swyddogaeth yn gweithio, gallwn eu dileu. Gelwir cod fel
hynny'n **{term}`sgaffaldiau`** am ei fod yn ddefnyddiol ar gyfer adeiladu'r
rhaglen ond nid yw'n rhan o'r cynnyrch terfynol.

Mae'r enghraifft hon yn dangos datblygiad graddol. Prif agweddau'r broses hon
yw:

1. Dechreuwch gyda rhaglen sy'n gweithio, gwnewch newidiadau bach, a phrofwch
   ar ôl pob newid.

2. Defnyddiwch newidynnau i ddal gwerthoedd rhyngol fel y gallwch eu dangos
   a'u gwirio.

3. Unwaith y bydd y rhaglen yn gweithio, dilëwch y sgaffaldiau.

Ar unrhyw adeg, os oes gwall, dylai fod gennych syniad da ble mae. Gall
datblygiad graddol arbed llawer o amser dadnamu i chi.

## Swyddogaethau Boole

Gall swyddogaethau ddychwelyd y gwerthoedd Boole `True` a `False`, sy'n aml yn
gyfleus ar gyfer amgáu prawf cymhleth mewn swyddogaeth. Er enghraifft, mae
`is_divisible` yn gwirio a yw `x` yn rhanadwy â `y` heb weddill.

```python
def is_divisible(x, y):
    if x % y == 0:
        return True
    else:
        return False
```

Dyma sut rydym yn ei defnyddio.

```python
is_divisible(6, 4)
```

```python
is_divisible(6, 3)
```

Y tu mewn i'r swyddogaeth, mae canlyniad y gweithredydd `==` yn Boole, felly
gallwn ysgrifennu'r swyddogaeth yn fwy cryno drwy ei ddychwelyd yn
uniongyrchol.

```python
def is_divisible(x, y):
    return x % y == 0
```

Defnyddir swyddogaethau Boole yn aml mewn gosodiadau amodol.

```python
if is_divisible(6, 2):
    print('divisible')
```

Gallai fod yn demtasiwn ysgrifennu rhywbeth fel hyn:

```python
if is_divisible(6, 2) == True:
    print('divisible')
```

Ond mae'r cymhariaeth yn ddiangen.

## Dychweliad gyda Gwerthoedd Dychwelyd

Nawr ein bod yn gallu ysgrifennu swyddogaethau â gwerthoedd dychwelyd, gallwn
ysgrifennu swyddogaethau dychweliadol gyda gwerthoedd dychwelyd, a chyda'r
gallu hwnnw, rydym wedi croesi trothwy pwysig — mae'r is-set o Python sydd
gennym bellach yn **{term}`Turing-gyflawn`**, sy'n golygu y gallwn berfformio
unrhyw gyfrifiant y gellir ei ddisgrifio gan algorithm.

I ddangos dychweliad gyda gwerthoedd dychwelyd, byddwn yn gwerthuso ychydig o
swyddogaethau mathemategol a ddiffinnir yn ddychweliadol. Mae diffiniad
dychweliadol yn debyg i ddiffiniad cylchol, yn yr ystyr bod y diffiniad yn
cyfeirio at y peth sy'n cael ei ddiffinio. Nid yw diffiniad gwirioneddol
gylchol yn ddefnyddiol iawn:

> gwrthrychus: Ansoddair a ddefnyddir i ddisgrifio rhywbeth sy'n wrthrychus.

Pe baech yn gweld y diffiniad hwnnw mewn geiriadur, efallai y byddech yn
flinderus. Ar y llaw arall, os edrychwch ar ddiffiniad y swyddogaeth ffactorial,
a ddynodir â'r symbol $!$, efallai y cewch rywbeth fel hyn:

$$\begin{aligned}
0! &= 1 \\
n! &= n~(n-1)!
\end{aligned}$$

Mae'r diffiniad hwn yn dweud mai $1$ yw ffactorial $0$, ac mai $n$ wedi'i
luosi â ffactorial $n-1$ yw ffactorial unrhyw werth arall, $n$.

Os gallwch ysgrifennu diffiniad dychweliadol o rywbeth, gallwch ysgrifennu
rhaglen Python i'w werthuso. Gan ddilyn proses datblygiad graddol, byddwn yn
dechrau gyda swyddogaeth sy'n cymryd `n` fel paramedr ac sy'n dychwelyd `0`
bob amser.

```python
def factorial(n):
    return 0
```

Nawr gadewch i ni ychwanegu rhan gyntaf y diffiniad — os yw'r ddadl yn digwydd
bod yn `0`, y cyfan sydd angen i ni ei wneud yw dychwelyd `1`:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return 0
```

Nawr gadewch i ni lenwi'r ail ran — os nad yw `n` yn `0`, mae'n rhaid i ni
wneud galwad ddychweliadol i ddarganfod ffactorial `n-1` ac yna lluosi'r
canlyniad â `n`:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        recurse = factorial(n-1)
        return n * recurse
```

Mae llif cyflawniad y rhaglen hon yn debyg i lif `countdown` ym Mhennod 5. Os
galwn `factorial` gyda'r gwerth `3`:

Gan nad yw `3` yn `0`, cymerwn yr ail gangen a chyfrifo ffactorial `n-1`...

> Gan nad yw `2` yn `0`, cymerwn yr ail gangen a chyfrifo ffactorial `n-1`...
>
> > Gan nad yw `1` yn `0`, cymerwn yr ail gangen a chyfrifo ffactorial `n-1`...
> >
> > > Gan fod `0` yn hafal i `0`, cymerwn y gangen gyntaf a dychwelyd `1` heb
> > > wneud rhagor o alwadau dychweliadol.
> >
> > Lluosir y gwerth dychwelyd, `1`, â `n`, sef `1`, a dychwelir y canlyniad.
>
> Lluosir y gwerth dychwelyd, `1`, â `n`, sef `2`, a dychwelir y canlyniad.

Lluosir y gwerth dychwelyd `2` â `n`, sef `3`, ac mae'r canlyniad, `6`, yn
dod yn werth dychwelyd yr alwad swyddogaeth a ddechreuodd y broses gyfan.

Mae'r ffigur canlynol yn dangos y diagram pentwr ar gyfer y dilyniant hwn o
alwadau swyddogaeth.

```python
from diagram import Frame, Stack, make_binding

main = Frame([], name='__main__', loc='left')
frames = [main]

ns = 3, 2, 1
recurses = 2, 1, 1
results = 6, 2, 1

for n, recurse, result in zip(ns, recurses, results):
    binding1 = make_binding('n', n)
    binding2 = make_binding('recurse', recurse)
    frame = Frame([binding1, binding2], 
                  name='factorial', value=result,
                  loc='left', dx=1.2)
    frames.append(frame)
    
binding1 = make_binding('n', 0)
frame = Frame([binding1], name='factorial', value=1, 
              shim=1.2, loc='left', dx=1.4)
frames.append(frame)

stack = Stack(frames, dy=-0.45)
```

```python
from diagram import diagram, adjust

width, height, x, y = [2.74, 2.26, 0.73, 2.05]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)
# adjust(x, y, bbox)
```

Dangosir y gwerthoedd dychwelyd yn cael eu pasio'n ôl i fyny'r pentwr. Ym mhob
ffram, y gwerth dychwelyd yw lluoswm `n` a `recurse`.

Yn y ffram olaf, nid yw'r newidyn lleol `recurse` yn bodoli am nad yw'r gangen
sy'n ei greu yn rhedeg.

## Naid o Ffydd

Dilyn llif cyflawniad yw un ffordd o ddarllen rhaglenni, ond gall ddod yn
llethol yn gyflym. Dewis arall yw'r hyn a alwaf y "naid o ffydd". Pan ddewch
at alwad swyddogaeth, yn hytrach na dilyn llif cyflawniad, rydych yn *tybio*
bod y swyddogaeth yn gweithio'n gywir ac yn dychwelyd y canlyniad cywir.

Mewn gwirionedd, rydych eisoes yn ymarfer y naid o ffydd hon wrth ddefnyddio
swyddogaethau cynhenid. Pan alwch `abs` neu `math.sqrt`, nid ydych yn archwilio
cyrff y swyddogaethau hynny — rydych jest yn tybio eu bod yn gweithio.

Mae'r un peth yn wir pan alwch un o'ch swyddogaethau eich hun. Er enghraifft,
yn gynharach ysgrifennom swyddogaeth o'r enw `is_divisible` sy'n penderfynu a
yw un rhif yn rhanadwy ag un arall. Unwaith y byddwn yn argyhoeddi ein hunain
bod y swyddogaeth hon yn gywir, gallwn ei defnyddio heb edrych ar y corff eto.

Mae'r un peth yn wir am raglenni dychweliadol. Pan ddewch at yr alwad
ddychweliadol, yn hytrach na dilyn llif cyflawniad, dylech dybio bod yr alwad
ddychweliadol yn gweithio ac yna gofyn i chi'ch hun, "Gan dybio y gallaf
gyfrifo ffactorial $n-1$, a allaf gyfrifo ffactorial $n$?" Mae diffiniad
dychweliadol ffactorial yn awgrymu y gallwch, drwy luosi â $n$.

Wrth gwrs, mae braidd yn rhyfedd tybio bod y swyddogaeth yn gweithio'n gywir
pan nad ydych wedi gorffen ei hysgrifennu, ond dyna pam y'i gelwir yn naid o
ffydd!

## Fibonacci

Ar ôl `factorial`, enghraifft fwyaf cyffredin swyddogaeth ddychweliadol yw
`fibonacci`, sydd â'r diffiniad canlynol:

$$\begin{aligned}
\mathrm{fibonacci}(0) &= 0 \\
\mathrm{fibonacci}(1) &= 1 \\
\mathrm{fibonacci}(n) &= \mathrm{fibonacci}(n-1) + \mathrm{fibonacci}(n-2)
\end{aligned}$$

Wedi'i gyfieithu i Python, mae'n edrych fel hyn:

```python
def fibonacci(n):
    if n == 0:
        return 0
    elif  n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

Os ceisiwch ddilyn llif cyflawniad yma, hyd yn oed ar gyfer gwerthoedd bach o
$n$, mae eich pen yn ffrwydro. Ond yn ôl y naid o ffydd, os tybiwch fod y ddwy
alwad ddychweliadol yn gweithio'n gywir, gallwch fod yn hyderus bod y gosodiad
`return` olaf yn gywir.

Fel sylw ymylol, mae'r ffordd hon o gyfrifo rhifau Fibonacci yn aneffeithlon
iawn. Ym Mhennod 10 byddaf yn esbonio pam ac yn awgrymu ffordd o'i wella.

## Gwirio Mathau

Beth sy'n digwydd os galwn `factorial` a rhoi `1.5` iddi fel dadl?

```python
%%expect RecursionError

factorial(1.5)
```

Mae'n edrych fel dychweliad anfeidrol. Sut all hynny fod? Mae gan y
swyddogaeth achosion sylfaenol pan fo `n == 1` neu `n == 0`. Ond os nad yw `n`
yn gyfanrif, gallwn *fethu* â chyrraedd yr achos sylfaenol a dychwelyd am byth.

Yn yr enghraifft hon, gwerth cychwynnol `n` yw `1.5`. Yn yr alwad ddychweliadol
gyntaf, gwerth `n` yw `0.5`. Yn y nesaf, mae'n `-0.5`. O'r fan honno, mae'n
mynd yn llai (yn fwy negatif), ond ni fydd byth yn `0`.

I osgoi dychweliad anfeidrol gallwn ddefnyddio'r swyddogaeth gynhenid
`isinstance` i wirio math y ddadl. Dyma sut rydym yn gwirio a yw gwerth yn
gyfanrif.

```python
isinstance(3, int)
```

```python
isinstance(1.5, int)
```

Nawr dyma fersiwn o `factorial` gyda gwirio gwallau.

```python
def factorial(n):
    if not isinstance(n, int):
        print('factorial is only defined for integers.')
        return None
    elif n < 0:
        print('factorial is not defined for negative numbers.')
        return None
    elif n == 0:
        return 1
    else:
        return n * factorial(n-1)
```

Yn gyntaf mae'n gwirio a yw `n` yn gyfanrif. Os nad yw, mae'n dangos neges
wall ac yn dychwelyd `None`.

```python
factorial('crunchy frog')
```

Yna mae'n gwirio a yw `n` yn negatif. Os felly, mae'n dangos neges wall ac yn
dychwelyd `None`.

```python
factorial(-2)
```

Os awn heibio i'r ddau wiriad, rydym yn gwybod bod `n` yn gyfanrif
anghnegyddol, felly gallwn fod yn hyderus y bydd y dychweliad yn terfynu.
Gelwir gwirio paramedrau swyddogaeth i wneud yn siŵr bod ganddynt y mathau a'r
gwerthoedd cywir yn **{term}`dilysu mewnbwn`**.

## Dadnamu

Mae rhannu rhaglen fawr yn swyddogaethau llai yn creu mannau gwirio naturiol
ar gyfer dadnamu. Os nad yw swyddogaeth yn gweithio, mae tri phosibilrwydd i'w
hystyried:

* Mae rhywbeth o'i le ar y dadleuon y mae'r swyddogaeth yn eu cael — hynny
  yw, mae rhag-amod wedi'i dorri.

* Mae rhywbeth o'i le ar y swyddogaeth — hynny yw, mae ôl-amod wedi'i dorri.

* Mae'r galwr yn gwneud rhywbeth o'i le gyda'r gwerth dychwelyd.

I ddiystyru'r posibilrwydd cyntaf, gallwch ychwanegu gosodiad `print` ar
ddechrau'r swyddogaeth sy'n dangos gwerthoedd y paramedrau (ac efallai eu
mathau). Neu gallwch ysgrifennu cod sy'n gwirio'r rhag-amodau'n benodol.

Os yw'r paramedrau'n edrych yn iawn, gallwch ychwanegu gosodiad `print` cyn
pob gosodiad `return` a dangos y gwerth dychwelyd. Os yn bosibl, galwch y
swyddogaeth gyda dadleuon sy'n ei gwneud yn hawdd gwirio'r canlyniad.

Os yw'r swyddogaeth i'w gweld yn gweithio, edrychwch ar yr alwad swyddogaeth i
wneud yn siŵr bod y gwerth dychwelyd yn cael ei ddefnyddio'n gywir — neu ei
ddefnyddio o gwbl!

Gall ychwanegu gosodiadau `print` ar ddechrau a diwedd swyddogaeth helpu i
wneud llif cyflawniad yn fwy gweladwy. Er enghraifft, dyma fersiwn o
`factorial` gyda gosodiadau print:

```python
def factorial(n):
    space = ' ' * (4 * n)
    print(space, 'factorial', n)
    if n == 0:
        print(space, 'returning 1')
        return 1
    else:
        recurse = factorial(n-1)
        result = n * recurse
        print(space, 'returning', result)
        return result
```

Mae `space` yn llinyn o nodau bwlch sy'n rheoli mewnoliad yr allbwn. Dyma
ganlyniad `factorial(3)`:

```python
factorial(3)
```

Os ydych wedi drysu ynghylch llif cyflawniad, gall y math hwn o allbwn fod yn
ddefnyddiol. Mae'n cymryd peth amser i ddatblygu sgaffaldiau effeithiol, ond
gall ychydig o sgaffaldiau arbed llawer o ddadnamu.

## Rhestr Termau'r Bennod

**gwerth dychwelyd:**
Canlyniad swyddogaeth. Os defnyddir galwad swyddogaeth fel mynegiad, y gwerth
dychwelyd yw gwerth y mynegiad.

**swyddogaeth bur:**
Swyddogaeth nad yw'n dangos dim byd nac yn cael unrhyw effaith arall, heblaw
dychwelyd gwerth dychwelyd.

**cod marw:**
Rhan o raglen na all byth redeg, yn aml am ei bod yn ymddangos ar ôl gosodiad
`return`.

**datblygiad graddol:**
Cynllun datblygu rhaglenni a fwriedir i osgoi dadnamu drwy ychwanegu a phrofi
dim ond ychydig o god ar y tro.

**sgaffaldiau:**
Cod a ddefnyddir yn ystod datblygiad rhaglen ond nad yw'n rhan o'r fersiwn
derfynol.

**Turing-gyflawn:**
Mae iaith, neu is-set o iaith, yn Turing-gyflawn os gall berfformio unrhyw
gyfrifiant y gellir ei ddisgrifio gan algorithm.

**dilysu mewnbwn:**
Gwirio paramedrau swyddogaeth i wneud yn siŵr bod ganddynt y mathau a'r
gwerthoedd cywir.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Yn y bennod hon, gwelsom swyddogaeth anghywir a all ddod i ben heb ddychwelyd
gwerth.

```python
def absolute_value_wrong(x):
    if x < 0:
        return -x
    if x > 0:
        return x
```

A fersiwn o'r un swyddogaeth sydd â chod marw ar y diwedd.

```python
def absolute_value_extra_return(x):
    if x < 0:
        return -x
    else:
        return x
    
    return 'This is dead code.'
```

A gwelsom yr enghraifft ganlynol, sy'n gywir ond nad yw'n idiomatig.

```python
def is_divisible(x, y):
    if x % y == 0:
        return True
    else:
        return False
```

Gofynnwch i gynorthwyydd rhithwir beth sydd o'i le gyda phob un o'r
swyddogaethau hyn a gweler a all nodi'r gwallau neu wella'r arddull.

Yna gofynnwch "Ysgrifennwch swyddogaeth sy'n cymryd cyfesurynnau dau bwynt ac
yn cyfrifo'r pellter rhyngddynt." Gweler a yw'r canlyniad yn debyg i'r fersiwn
o `distance` a ysgrifennom yn y bennod hon.

### Ymarfer

Defnyddiwch ddatblygiad graddol i ysgrifennu swyddogaeth o'r enw `hypot` sy'n
dychwelyd hyd hypotenws triongl ongl sgwâr o gael hydoedd y ddwy goes arall
fel dadleuon.

Sylwch: Mae swyddogaeth yn y modiwl math o'r enw `hypot` sy'n gwneud yr un
peth, ond ni ddylech ei defnyddio ar gyfer yr ymarfer hwn!

Hyd yn oed os gallwch ysgrifennu'r swyddogaeth yn gywir y tro cyntaf,
dechreuwch gyda swyddogaeth sy'n dychwelyd `0` bob amser ac ymarferwch wneud
newidiadau bach, gan brofi wrth fynd. Pan fyddwch wedi gorffen, dylai'r
swyddogaeth ond ddychwelyd gwerth — ni ddylai ddangos unrhyw beth.

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

### Ymarfer

Ysgrifennwch swyddogaeth Boole, `is_between(x, y, z)`, sy'n dychwelyd `True`
os yw $x < y < z$ neu os yw $z < y < x$, a `False` fel arall.

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi eich swyddogaeth.

```python
is_between(1, 2, 3)  # should be True
```

```python
is_between(3, 2, 1)  # should be True
```

```python
is_between(1, 3, 2)  # should be False
```

```python
is_between(2, 3, 1)  # should be False
```

### Ymarfer

Diffinnir swyddogaeth Ackermann, $A(m, n)$, fel:

$$\begin{aligned}
A(m, n) = \begin{cases} 
              n+1 & \mbox{if } m = 0 \\ 
        A(m-1, 1) & \mbox{if } m > 0 \mbox{ and } n = 0 \\ 
A(m-1, A(m, n-1)) & \mbox{if } m > 0 \mbox{ and } n > 0.
\end{cases} 
\end{aligned}$$

Ysgrifennwch swyddogaeth o'r enw `ackermann` sy'n gwerthuso swyddogaeth
Ackermann. Beth sy'n digwydd os galwch `ackermann(5, 5)`?

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi eich swyddogaeth.

```python
ackermann(3, 2)  # should be 29
```

```python
ackermann(3, 3)  # should be 61
```

```python
ackermann(3, 4)  # should be 125
```

Os galwch y swyddogaeth hon gyda gwerthoedd mwy na 4, cewch `RecursionError`.

```python
%%expect RecursionError

ackermann(5, 5)
```

I weld pam, ychwanegwch osodiad print ar ddechrau'r swyddogaeth i ddangos
gwerthoedd y paramedrau, ac yna rhedwch yr enghreifftiau eto.

### Ymarfer

Mae rhif, $a$, yn bŵer o $b$ os yw'n rhanadwy â $b$ ac mae $a/b$ yn bŵer o
$b$. Ysgrifennwch swyddogaeth o'r enw `is_power` sy'n cymryd paramedrau `a` a
`b` ac yn dychwelyd `True` os yw `a` yn bŵer o `b`. Sylwch: bydd yn rhaid i
chi feddwl am yr achos sylfaenol.

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi eich swyddogaeth.

```python
is_power(65536, 2)   # should be True
```

```python
is_power(27, 3)  # should be True
```

```python
is_power(24, 2)  # should be False
```

```python
is_power(1, 17)   # should be True
```

### Ymarfer

Rhanwr cyffredin mwyaf (GCD) $a$ a $b$ yw'r rhif mwyaf sy'n rhannu'r ddau heb
weddill.

Un ffordd o ddarganfod GCD dau rif yw seiliedig ar yr arsylwad, os yw $r$ yn
weddill pan rennir $a$ â $b$, bod $gcd(a, b) = gcd(b, r)$. Fel achos
sylfaenol, gallwn ddefnyddio $gcd(a, 0) = a$.

Ysgrifennwch swyddogaeth o'r enw `gcd` sy'n cymryd paramedrau `a` a `b` ac
sy'n dychwelyd eu rhanwr cyffredin mwyaf.

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi eich swyddogaeth.

```python
gcd(12, 8)    # should be 4
```

```python
gcd(13, 17)   # should be 1
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
