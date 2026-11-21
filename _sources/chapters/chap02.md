# Newidynnau a Gosodiadau

Yn y bennod flaenorol, defnyddiom weithredyddion i ysgrifennu mynegiadau sy'n
perfformio cyfrifiannau rhifyddol.

Yn y bennod hon, byddwch yn dysgu am newidynnau a gosodiadau, y gosodiad `import`,
a'r swyddogaeth `print`. A byddaf yn cyflwyno rhagor o'r eirfa a ddefnyddiwn i siarad
am raglenni, gan gynnwys "dadl" a "modiwl".

## Newidynnau

Mae **{term}`newidyn`** yn enw sy'n cyfeirio at werth. I greu newidyn, gallwn
ysgrifennu **{term}`gosodiad neilltuad`** fel hyn.

```python
n = 17
```

Mae gan osodiad neilltuad dri rhan: enw'r newidyn ar y chwith, y gweithredydd
hafal, `=`, a mynegiad ar y dde. Yn yr enghraifft hon, cyfanrif yw'r mynegiad. Yn
yr enghraifft ganlynol, rhif pwynt arnawf yw'r mynegiad.

```python
pi = 3.141592653589793
```

Ac yn yr enghraifft ganlynol, llinyn yw'r mynegiad.

```python
message = 'And now for something completely different'
```

Pan fyddwch yn rhedeg gosodiad neilltuad, nid oes allbwn. Mae Python yn creu'r
newidyn ac yn rhoi gwerth iddo, ond nid oes gan y gosodiad neilltuad unrhyw effaith
weladwy. Fodd bynnag, ar ôl creu newidyn, gallwch ei ddefnyddio fel mynegiad. Felly
gallwn ddangos gwerth `message` fel hyn:

```python
message
```

Gallwch hefyd ddefnyddio newidyn fel rhan o fynegiad gyda gweithredyddion rhifyddol.

```python
n + 25
```

```python
2 * pi
```

A gallwch ddefnyddio newidyn wrth alw swyddogaeth.

```python
round(pi)
```

```python
len(message)
```

## Diagramau Cyflwr

Ffordd gyffredin o gynrychioli newidynnau ar bapur yw ysgrifennu'r enw gyda saeth
yn pwyntio at ei werth.

```python
import math

from diagram import make_binding, Frame

binding = make_binding("message", 'And now for something completely different')
binding2 = make_binding("n", 17)
binding3 = make_binding("pi", 3.141592653589793)

frame = Frame([binding2, binding3, binding])
```

```python
from diagram import diagram, adjust


width, height, x, y = [3.62, 1.01, 0.6, 0.76]
ax = diagram(width, height)
bbox = frame.draw(ax, x, y, dy=-0.25)
# adjust(x, y, bbox)
```

Gelwir y math hwn o ffigur yn **{term}`diagram cyflwr`** am ei fod yn dangos pa
gyflwr y mae pob un o'r newidynnau ynddo (meddyliwch amdano fel cyflwr meddwl y
newidyn). Byddwn yn defnyddio diagramau cyflwr drwy'r llyfr i gynrychioli model o
sut mae Python yn storio newidynnau a'u gwerthoedd.

## Enwau Newidynnau

Gall enwau newidynnau fod mor hir ag y mynnwch. Gallant gynnwys llythrennau a
rhifau, ond ni allant ddechrau gyda rhif. Mae'n gyfreithlon defnyddio priflythrennau,
ond mae'n gonfensiynol defnyddio dim ond llythrennau bach ar gyfer enwau newidynnau.

Yr unig atalnodi a all ymddangos mewn enw newidyn yw'r cymeriad tanlinell, `_`. Fe'i
defnyddir yn aml mewn enwau gyda sawl gair, fel `your_name` neu
`airspeed_of_unladen_swallow`.

Os rhowch enw anghyfreithlon i newidyn, cewch wall cystrawen. Mae'r enw `million!`
yn anghyfreithlon am ei fod yn cynnwys atalnodi.

```python
%%expect SyntaxError

million! = 1000000
```

Mae `76trombones` yn anghyfreithlon am ei fod yn dechrau gyda rhif.

```python
%%expect SyntaxError

76trombones = 'big parade'
```

Mae `class` hefyd yn anghyfreithlon, ond efallai nad yw'n amlwg pam.

```python
%%expect SyntaxError

class = 'Self-Defence Against Fresh Fruit'
```

Mae'n ymddangos bod `class` yn **{term}`allweddair`**, sef gair arbennig a
ddefnyddir i nodi strwythur rhaglen. Ni ellir defnyddio allweddeiriau fel enwau
newidynnau.

Dyma restr gyflawn o allweddeiriau Python:

```
False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield
```

```python
from keyword import kwlist

len(kwlist)
```

Does dim angen i chi gofio'r rhestr hon ar y cof. Yn y rhan fwyaf o amgylcheddau
datblygu, dangosir allweddeiriau mewn lliw gwahanol; os ceisiwch ddefnyddio un fel
enw newidyn, byddwch yn gwybod.

## Y Gosodiad Import

Er mwyn defnyddio rhai nodweddion Python, mae'n rhaid i chi eu **mewnforio**. Er
enghraifft, mae'r gosodiad canlynol yn mewnforio'r modiwl `math`.

```python
import math
```

Mae **{term}`modiwl`** yn gasgliad o newidynnau a swyddogaethau. Mae'r modiwl math
yn darparu newidyn o'r enw `pi` sy'n cynnwys gwerth y cysonyn mathemategol a
ddynodir $\pi$. Gallwn ddangos ei werth fel hyn.

```python
math.pi
```

I ddefnyddio newidyn mewn modiwl, mae'n rhaid i chi ddefnyddio'r **{term}`gweithredydd dot`**
(`.`) rhwng enw'r modiwl ac enw'r newidyn.

Mae'r modiwl math hefyd yn cynnwys swyddogaethau. Er enghraifft, mae `sqrt` yn
cyfrifo ail isradd.

```python
math.sqrt(25)
```

Ac mae `pow` yn codi un rhif i bŵer ail rif.

```python
math.pow(5, 2)
```

Erbyn hyn rydym wedi gweld dwy ffordd o godi rhif i bŵer: gallwn ddefnyddio'r
swyddogaeth `math.pow` neu'r gweithredydd esbonyddiad, `**`. Mae'r ddau'n iawn, ond
defnyddir y gweithredydd yn amlach na'r swyddogaeth.

## Mynegiadau a Gosodiadau

Hyd yn hyn, rydym wedi gweld rhai mathau o fynegiadau. Gall mynegiad fod yn werth
sengl, fel cyfanrif, rhif pwynt arnawf, neu linyn. Gall hefyd fod yn gasgliad o
werthoedd a gweithredyddion. A gall gynnwys enwau newidynnau a galwadau
swyddogaeth. Dyma fynegiad sy'n cynnwys sawl un o'r elfennau hyn.

```python
19 + n + round(math.pi) * 2
```

Rydym hefyd wedi gweld rhai mathau o osodiadau. Mae **{term}`gosodiad`** yn uned o
god sydd ag effaith, ond dim gwerth. Er enghraifft, mae gosodiad neilltuad yn creu
newidyn ac yn rhoi gwerth iddo, ond nid oes gan y gosodiad ei hun werth.

```python
n = 17
```

Yn yr un modd, mae gan osodiad mewnforio effaith — mae'n mewnforio modiwl fel y
gallwn ddefnyddio'r newidynnau a'r swyddogaethau y mae'n eu cynnwys — ond nid oes
ganddo unrhyw effaith weladwy.

```python
import math
```

Gelwir cyfrifo gwerth mynegiad yn **{term}`gwerthuso`**. Gelwir rhedeg gosodiad yn
**{term}`cyflawniad`**.

## Y Swyddogaeth print

Pan fyddwch yn gwerthuso mynegiad, dangosir y canlyniad.

```python
n + 1
```

Ond os byddwch yn gwerthuso mwy nag un mynegiad, dim ond gwerth yr olaf a
ddangosir.

```python
n + 2
n + 3
```

I ddangos mwy nag un gwerth, gallwch ddefnyddio'r swyddogaeth `print`.

```python
print(n+2)
print(n+3)
```

Mae hefyd yn gweithio gyda rhifau pwynt arnawf a llinynnau.

```python
print('The value of pi is approximately')
print(math.pi)
```

Gallwch hefyd ddefnyddio dilyniant o fynegiadau wedi'u gwahanu gan atalnodau.

```python
print('The value of pi is approximately', math.pi)
```

Sylwch fod y swyddogaeth `print` yn rhoi bwlch rhwng y gwerthoedd.

## Dadleuon

Pan fyddwch yn galw swyddogaeth, gelwir y mynegiad mewn cromfachau yn
**{term}`dadl`**. Fel arfer byddwn yn esbonio pam, ond yn yr achos hwn nid oes gan
ystyr technegol y term bron ddim i'w wneud ag ystyr cyffredin y gair, felly ni wnaf
hyd yn oed geisio.

Mae rhai o'r swyddogaethau rydym wedi'u gweld hyd yn hyn yn cymryd dim ond un ddadl,
fel `int`.

```python
int('101')
```

Mae rhai'n cymryd dwy, fel `math.pow`.

```python
math.pow(5, 2)
```

Gall rhai gymryd dadleuon ychwanegol sy'n ddewisol. Er enghraifft, gall `int`
gymryd ail ddadl sy'n nodi sail y rhif.

```python
int('101', 2)
```

Mae'r dilyniant o ddigidau `101` yn sail 2 yn cynrychioli'r rhif 5 yn sail 10.

Mae `round` hefyd yn cymryd ail ddadl ddewisol, sef nifer y lleoedd degol i
dalgrynnu iddynt.

```python
round(math.pi, 3)
```

Gall rhai swyddogaethau gymryd unrhyw nifer o ddadleuon, fel `print`.

```python
print('Any', 'number', 'of', 'arguments')
```

Os galwch swyddogaeth a darparu gormod o ddadleuon, mae hynny'n `TypeError`.

```python
%%expect TypeError

float('123.0', 2)
```

Os darparwch rhy ychydig o ddadleuon, mae hynny hefyd yn `TypeError`.

```python
%%expect TypeError

math.pow(2)
```

Ac os darparwch ddadl gyda math na all y swyddogaeth ei thrin, mae hynny'n
`TypeError`, hefyd.

```python
%%expect TypeError

math.sqrt('123')
```

Gall y math hwn o wirio fod yn flinderus pan fyddwch yn dechrau, ond mae'n eich
helpu i ganfod a chywiro gwallau.

## Sylwadau

Wrth i raglenni fynd yn fwy ac yn fwy cymhleth, maent yn mynd yn anoddach eu
darllen. Mae ieithoedd ffurfiol yn ddwys, ac mae'n aml yn anodd edrych ar ddarn o
god a chanfod beth mae'n ei wneud a pham.

Am y rheswm hwn, mae'n syniad da ychwanegu nodiadau at eich rhaglenni i esbonio mewn
iaith naturiol beth mae'r rhaglen yn ei wneud. Gelwir y nodiadau hyn yn
**{term}`sylwad`**au, ac maent yn dechrau gyda'r symbol `#`.

```python
# nifer yr eiliadau mewn 42:42
seconds = 42 * 60 + 42
```

Yn yr achos hwn, mae'r sylwad yn ymddangos ar linell ar ei phen ei hun. Gallwch
hefyd roi sylwadau ar ddiwedd llinell:

```python
miles = 10 / 1.61     # 10 cilomedr mewn milltiroedd
```

Anwybyddir popeth o'r `#` i ddiwedd y llinell — nid oes ganddo unrhyw effaith ar
gyflawniad y rhaglen.

Mae sylwadau fwyaf defnyddiol pan fyddant yn dogfennu nodweddion nad ydynt yn
amlwg yn y cod. Mae'n rhesymol tybio y gall y darllenydd ddarganfod *beth* mae'r
cod yn ei wneud; mae'n fwy defnyddiol esbonio *pam*.

Mae'r sylwad hwn yn ddiangen gyda'r cod ac yn ddiwerth:

```python
v = 8     # neilltuo 8 i v
```

Mae'r sylwad hwn yn cynnwys gwybodaeth ddefnyddiol nad yw yn y cod:

```python
v = 8     # cyflymder mewn milltiroedd yr awr
```

Gall enwau newidynnau da leihau'r angen am sylwadau, ond gall enwau hir wneud
mynegiadau cymhleth yn anodd eu darllen, felly mae cyfaddawd.

## Dadnamu

Gall tri math o wallau ddigwydd mewn rhaglen: gwallau cystrawen, gwallau rhedeg, a
gwallau semantig. Mae'n ddefnyddiol gwahaniaethu rhyngddynt er mwyn eu holrhain yn
gyflymach.

* **Gwall cystrawen**: Mae "cystrawen" yn cyfeirio at strwythur rhaglen a'r
  rheolau ynghylch y strwythur hwnnw. Os oes gwall cystrawen yn unrhyw le yn eich
  rhaglen, nid yw Python yn rhedeg y rhaglen. Mae'n dangos neges wall ar unwaith.

* **Gwall rhedeg**: Os nad oes gwallau cystrawen yn eich rhaglen, gall ddechrau
  rhedeg. Ond os aiff rhywbeth o'i le, mae Python yn dangos neges wall ac yn
  stopio. Gelwir y math hwn o wall yn **{term}`gwall rhedeg`**. Fe'i gelwir hefyd
  yn **{term}`eithriad`**, am ei fod yn dangos bod rhywbeth eithriadol wedi
  digwydd.

* **Gwall semantig**: Y trydydd math o wall yw "semantig", sy'n golygu'n ymwneud
  ag ystyr. Os oes **{term}`gwall semantig`** yn eich rhaglen, mae'n rhedeg heb
  gynhyrchu negeseuon gwall, ond nid yw'n gwneud yr hyn a fwriadwyd gennych. Gall
  fod yn anodd adnabod gwallau semantig am ei bod yn ofynnol i chi weithio'n ôl
  drwy edrych ar allbwn y rhaglen a cheisio darganfod beth mae'n ei wneud.

Fel rydym wedi gweld, mae enw newidyn anghyfreithlon yn wall cystrawen.

```python
%%expect SyntaxError

million! = 1000000
```

Os defnyddiwch weithredydd gyda math nad yw'n ei gefnogi, mae hynny'n wall rhedeg.

```python
%%expect TypeError

'126' / 3
```

Yn olaf, dyma enghraifft o wall semantig. Tybiwch ein bod am gyfrifo cyfartaledd `1`
a `3`, ond ein bod yn anghofio am drefn y gweithrediadau ac yn ysgrifennu hyn:

```python
1 + 3 / 2
```

Pan gaiff y mynegiad hwn ei werthuso, nid yw'n cynhyrchu neges wall, felly nid oes
gwall cystrawen na gwall rhedeg. Ond nid cyfartaledd `1` a `3` yw'r canlyniad,
felly nid yw'r rhaglen yn gywir. Mae hwn yn wall semantig am fod y rhaglen yn
rhedeg ond nid yw'n gwneud yr hyn a fwriadwyd.

## Rhestr Termau'r Bennod

**newidyn:**
Enw sy'n cyfeirio at werth.

**gosodiad neilltuad:**
Gosodiad sy'n neilltuo gwerth i newidyn.

**diagram cyflwr:**
Cynrychiolaeth graffigol o set o newidynnau a'r gwerthoedd y maent yn cyfeirio
atynt.

**allweddair:**
Gair arbennig a ddefnyddir i nodi strwythur rhaglen.

**gosodiad mewnforio:**
Gosodiad sy'n darllen ffeil modiwl fel y gallwn ddefnyddio'r newidynnau a'r
swyddogaethau y mae'n eu cynnwys.

**modiwl:**
Ffeil sy'n cynnwys cod Python, gan gynnwys diffiniadau swyddogaeth ac weithiau
osodiadau eraill.

**gweithredydd dot:**
Y gweithredydd, `.`, a ddefnyddir i gyrchu swyddogaeth mewn modiwl arall drwy nodi
enw'r modiwl wedi'i ddilyn gan ddot ac enw'r swyddogaeth.

**gwerthuso:**
Perfformio'r gweithrediadau mewn mynegiad er mwyn cyfrifo gwerth.

**gosodiad:**
Un neu fwy o linellau cod sy'n cynrychioli gorchymyn neu weithred.

**cyflawniad:**
Rhedeg gosodiad a gwneud yr hyn y mae'n ei ddweud.

**dadl:**
Gwerth a ddarperir i swyddogaeth pan gaiff ei galw.

**sylwad:**
Testun wedi'i gynnwys mewn rhaglen sy'n rhoi gwybodaeth am y rhaglen ond nad oes
ganddo effaith ar ei chyflawniad.

**gwall rhedeg:**
Gwall sy'n achosi i raglen ddangos neges wall a therfynu.

**eithriad:**
Gwall a ganfyddir tra bo'r rhaglen yn rhedeg.

**gwall semantig:**
Gwall sy'n achosi i raglen wneud y peth anghywir, ond heb ddangos neges wall.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Unwaith eto, rwy'n eich annog i ddefnyddio cynorthwyydd rhithwir i ddysgu mwy am
unrhyw un o bynciau'r bennod hon.

Os ydych yn chwilfrydig am unrhyw un o'r allweddeiriau a restrais, gallech ofyn
"Pam mae class yn allweddair?" neu "Pam na all enwau newidynnau fod yn
allweddeiriau?"

Efallai eich bod wedi sylwi nad yw `int`, `float`, a `str` yn allweddeiriau Python.
Maent yn newidynnau sy'n cynrychioli mathau, a gellir eu defnyddio fel
swyddogaethau. Felly mae'n *gyfreithlon* cael newidyn neu swyddogaeth gydag un o'r
enwau hynny, ond fe'i hanghymeradwyir yn gryf. Gofynnwch i gynorthwyydd "Pam mae'n
ddrwg defnyddio int, float, a str fel enwau newidynnau?"

Gofynnwch hefyd, "Beth yw'r swyddogaethau cynhenid yn Python?" Os ydych yn
chwilfrydig am unrhyw un ohonynt, gofynnwch am ragor o wybodaeth.

Yn y bennod hon fe wnaethom fewnforio'r modiwl `math` a defnyddio rhai o'r
newidynnau a'r swyddogaethau y mae'n eu darparu. Gofynnwch i gynorthwyydd, "Pa
newidynnau a swyddogaethau sydd yn y modiwl math?" a "Heblaw math, pa fodiwlau a
ystyrir yn graidd Python?"

### Ymarfer

Gan ailadrodd fy nghyngor o'r bennod flaenorol, bob tro y dysgwch nodwedd newydd,
dylech wneud camgymeriadau'n fwriadol i weld beth sy'n mynd o'i le.

* Rydym wedi gweld bod `n = 17` yn gyfreithlon. Beth am `17 = n`?

* Beth am `x = y = 1`?

* Mewn rhai ieithoedd mae pob gosodiad yn gorffen gydag hanner colon (`;`). Beth
  sy'n digwydd os rhowch hanner colon ar ddiwedd gosodiad Python?

* Beth os rhowch atalnod llawn ar ddiwedd gosodiad?

* Beth sy'n digwydd os sillafwch enw modiwl yn anghywir a cheisio mewnforio
  `maath`?

### Ymarfer

Ymarferwch ddefnyddio dehonglydd Python fel cyfrifiannell:

**Rhan 1.** Cyfaint sffêr gyda radiws $r$ yw $\frac{4}{3} \pi r^3$. Beth yw cyfaint
sffêr gyda radiws 5? Dechreuwch gyda newidyn o'r enw `radius` ac yna neilltuwch y
canlyniad i newidyn o'r enw `volume`. Dangoswch y canlyniad. Ychwanegwch sylwadau i
nodi bod `radius` mewn centimetrau a `volume` mewn centimetrau ciwbig.

```python
# Ateb yma
```

**Rhan 2.** Mae rheol o drigonometreg yn dweud, ar gyfer unrhyw werth o $x$, fod
$(\cos x)^2 + (\sin x)^2 = 1$. Gadewch i ni weld a yw'n wir ar gyfer gwerth penodol
o $x$ fel 42.

Crëwch newidyn o'r enw `x` gyda'r gwerth hwn. Yna defnyddiwch `math.cos` a
`math.sin` i gyfrifo sin a cosin $x$, a swm eu sgwariau.

Dylai'r canlyniad fod yn agos at 1. Efallai na fydd yn union 1 am nad yw
rhifyddeg pwynt arnawf yn union — dim ond yn fras gywir y mae.

```python
# Ateb yma
```

**Rhan 3.** Yn ogystal â `pi`, y newidyn arall a ddiffinnir yn y modiwl `math` yw
`e`, sy'n cynrychioli sail y logarithm naturiol, a ysgrifennir mewn nodiant
mathemategol fel $e$. Os nad ydych yn gyfarwydd â'r gwerth hwn, gofynnwch i
gynorthwyydd rhithwir "Beth yw `math.e`?" Nawr gadewch i ni gyfrifo $e^2$ dair
ffordd:

* Defnyddiwch `math.e` a'r gweithredydd esbonyddiad (`**`).

* Defnyddiwch `math.pow` i godi `math.e` i'r pŵer `2`.

* Defnyddiwch `math.exp`, sy'n cymryd gwerth, $x$, fel dadl, ac yn cyfrifo $e^x$.

Efallai y sylwch fod y canlyniad olaf ychydig yn wahanol i'r ddau arall. Gweler a
allwch ddarganfod pa un sy'n gywir.

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
