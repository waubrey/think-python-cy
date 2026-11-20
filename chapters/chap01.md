# Rhaglennu fel ffordd o feddwl

Nod cyntaf y llyfr hwn yw dysgu i chi sut i raglennu yn Python.
Ond mae dysgu rhaglennu yn golygu dysgu ffordd newydd o feddwl, felly ail nod y llyfr
hwn yw eich helpu i feddwl fel gwyddonydd cyfrifiadurol.
Mae'r ffordd hon o feddwl yn cyfuno rhai o nodweddion gorau mathemateg, peirianneg, a
gwyddoniaeth naturiol.
Fel mathemategwyr, mae gwyddonwyr cyfrifiadurol yn defnyddio {term}`iaith ffurfiol` i
ddynodi syniadau — cyfrifiadau yn benodol.
Fel peirianwyr, maen nhw'n dylunio pethau, gan gydosod cydrannau yn systemau a
gwerthuso cyfaddawdau rhwng dewisiadau amgen.
Fel gwyddonwyr, maen nhw'n arsylwi ymddygiad systemau cymhleth, yn llunio
damcaniaethau, ac yn profi rhagfynegiadau.

Byddwn yn dechrau gydag elfennau mwyaf sylfaenol rhaglennu ac yn gweithio ein ffordd i
fyny. Yn y bennod hon, byddwn yn gweld sut mae Python yn cynrychioli rhifau,
llythrennau, a geiriau. A byddwch yn dysgu sut i berfformio gweithrediadau rhifyddol.

Byddwch hefyd yn dechrau dysgu geirfa rhaglennu, gan gynnwys termau fel
{term}`gweithredydd`, {term}`mynegiad`, {term}`gwerth`, a {term}`math`.
Mae'r eirfa hon yn bwysig — bydd ei hangen arnoch i ddeall gweddill y llyfr, i
gyfathrebu â rhaglenwyr eraill, ac i ddefnyddio a deall cynorthwywyr rhithwir.

## Gweithredyddion Rhifyddol

Mae **{term}`gweithredydd rhifyddol`** yn symbol sy'n cynrychioli cyfrifiad
rhifyddol. Er enghraifft, mae'r arwydd adio, `+`, yn perfformio adio.

```python
30 + 12
```

Yr arwydd tynnu, `-`, yw'r gweithredydd sy'n perfformio tynnu.

```python
43 - 1
```

Mae'r seren, `*`, yn perfformio lluosi.

```python
6 * 7
```

A'r blaenslaes, `/`, yn perfformio rhannu:

```python
84 / 2
```

Sylwch mai `42.0` yw canlyniad y rhaniad, nid `42`. Mae hynny oherwydd bod dau fath o
rifau yn Python:

* **{term}`cyfanrif`**ion, sy'n cynrychioli rhifau heb ran ffracsiynol na degol, a
* rhifau pwynt arnawf (**{term}`real`**), sy'n cynrychioli cyfanrifau a rhifau â
  phwynt degol.

Os ydych chi'n adio, tynnu, neu luosi dau gyfanrif, cyfanrif yw'r canlyniad. Ond os
ydych chi'n rhannu dau gyfanrif, rhif pwynt arnawf yw'r canlyniad. Mae Python yn
darparu gweithredydd arall, `//`, sy'n perfformio rhaniad cyfanrif. Mae canlyniad
rhaniad cyfanrif bob amser yn gyfanrif.

```python
84 // 2
```

Gelwir rhaniad cyfanrif hefyd yn "rhaniad llawr" am ei fod bob amser yn talgrynnu i
lawr (tuag at y "llawr").

```python
85 // 2
```

Yn olaf, mae'r gweithredydd `**` yn perfformio esbonyddiad; hynny yw, mae'n codi rhif
i bŵer:

```python
7 ** 2
```

Mewn rhai ieithoedd eraill, defnyddir y to bach, `^`, ar gyfer esbonyddiad, ond yn
Python mae'n weithredydd didol o'r enw XOR. Os nad ydych yn gyfarwydd â gweithredyddion
didol, gallai'r canlyniad fod yn annisgwyl:

```python
7 ^ 2
```

Ni fyddaf yn trafod gweithredyddion didol yn y llyfr hwn, ond gallwch ddarllen
amdanynt yn <http://wiki.python.org/moin/BitwiseOperators>.

## Mynegiadau

Gelwir casgliad o weithredyddion a rhifau yn **{term}`mynegiad`**. Gall mynegiad
gynnwys unrhyw nifer o weithredyddion a rhifau. Er enghraifft, dyma fynegiad sy'n
cynnwys dau weithredydd.

```python
6 + 6 ** 2
```

Sylwch fod esbonyddiad yn digwydd cyn adio. Mae Python yn dilyn y drefn gweithredu y
gallech fod wedi'i dysgu mewn gwers fathemateg: mae esbonyddiad yn digwydd cyn lluosi
a rhannu, sy'n digwydd cyn adio a thynnu.

Yn yr enghraifft ganlynol, mae lluosi'n digwydd cyn adio.

```python
12 + 5 * 6
```

Os ydych chi am i'r adio ddigwydd yn gyntaf, gallwch ddefnyddio cromfachau.

```python
(12 + 5) * 6
```

Mae gan bob mynegiad **{term}`gwerth`**. Er enghraifft, mae gan y mynegiad `6 * 7` y
gwerth `42`.

## Swyddogaethau Rhifyddol

Yn ogystal â'r gweithredyddion rhifyddol, mae Python yn darparu ychydig o
**{term}`swyddogaeth`**au sy'n gweithio gyda rhifau. Er enghraifft, mae'r swyddogaeth
`round` yn cymryd rhif pwynt arnawf ac yn ei dalgrynnu i'r cyfanrif agosaf.

```python
round(42.4)
```

```python
round(42.6)
```

Mae'r swyddogaeth `abs` yn cyfrifo gwerth absoliwt rhif. Ar gyfer rhif positif, y rhif
ei hun yw'r gwerth absoliwt.

```python
abs(42)
```

Ar gyfer rhif negatif, mae'r gwerth absoliwt yn bositif.

```python
abs(-42)
```

Pan fyddwn yn defnyddio swyddogaeth fel hyn, dywedwn ein bod yn **galw** y
swyddogaeth. Mynegiad sy'n galw swyddogaeth yw **{term}`galwad swyddogaeth`**.

Wrth alw swyddogaeth, mae'r cromfachau'n ofynnol. Os byddwch yn eu gadael allan,
byddwch yn cael neges wall.

```{note}
Mae'r gell ganlynol yn defnyddio `%%expect`, sef "gorchymyn hud" Jupyter sy'n golygu
ein bod yn disgwyl i'r cod yn y gell hon gynhyrchu gwall.
```

```python
%%expect SyntaxError

abs 42
```

Gallwch anwybyddu llinell gyntaf y neges hon; nid yw'n cynnwys unrhyw wybodaeth sydd
angen i ni ei deall ar hyn o bryd. Y llinell nesaf yw'r cod sy'n cynnwys y gwall, gyda
to bach (`^`) oddi tano i ddangos ble darganfuwyd y gwall.

Mae'r llinell olaf yn dangos mai **{term}`gwall cystrawen`** yw hwn, sy'n golygu bod
rhywbeth o'i le ar strwythur y mynegiad. Yn yr enghraifft hon, y broblem yw bod angen
cromfachau ar alwad swyddogaeth.

Gadewch i ni weld beth sy'n digwydd os byddwch yn gadael allan y cromfachau *a'r*
gwerth.

```python
abs
```

Mae enw swyddogaeth ar ei ben ei hun yn fynegiad cyfreithlon sydd â gwerth. Pan gaiff
ei arddangos, mae'r gwerth yn dangos mai swyddogaeth yw `abs`, ac mae'n cynnwys
rhywfaint o wybodaeth ychwanegol y byddaf yn ei esbonio yn ddiweddarach.

## Llinynnau

Yn ogystal â rhifau, gall Python hefyd gynrychioli dilyniannau o lythrennau, a elwir
yn **{term}`llinyn`**nau am fod y llythrennau wedi'u llinynnu gyda'i gilydd fel
gleiniau ar gadwyn. I ysgrifennu llinyn, gallwn roi dilyniant o lythrennau y tu mewn i
ddyfynodau syth.

```python
'Hello'
```

Mae hefyd yn gyfreithlon defnyddio dyfynodau dwbl.

```python
"world"
```

Mae dyfynodau dwbl yn ei gwneud hi'n hawdd ysgrifennu llinyn sy'n cynnwys collnod, sef
yr un symbol â dyfynnod syth.

```python
"it's a small "
```

Gall llinynnau hefyd gynnwys bylchau, atalnodi, a digidau.

```python
'Well, '
```

Mae'r gweithredydd `+` yn gweithio gyda llinynnau; mae'n cydio dau linyn yn un llinyn
sengl, a elwir yn **{term}`cydgatenu`**.

```python
'Well, ' + "it's a small " + 'world.'
```

Mae'r gweithredydd `*` hefyd yn gweithio gyda llinynnau; mae'n gwneud sawl copi o
linyn ac yn eu cydgatenu.

```python
'Spam, ' * 4
```

Nid yw'r gweithredyddion rhifyddol eraill yn gweithio gyda llinynnau.

Mae Python yn darparu swyddogaeth o'r enw `len` sy'n cyfrifo hyd llinyn.

```python
len('Spam')
```

Sylwch fod `len` yn cyfrif y llythrennau rhwng y dyfynodau, ond nid y dyfynodau.

Wrth greu llinyn, gwnewch yn siŵr eich bod yn defnyddio dyfynodau syth. Mae'r dyfynnod
ôl, a elwir hefyd yn facryn, yn achosi gwall cystrawen.

```python
%%expect SyntaxError

`Hello`
```

Mae dyfynodau clyfar, a elwir hefyd yn ddyfynodau cyrliog, hefyd yn anghyfreithlon.

```python
%%expect SyntaxError

‘Hello’
```

## Gwerthoedd a Mathau

Hyd yn hyn rydym wedi gweld tri math o werth:

* mae `2` yn gyfanrif,
* mae `42.0` yn rif pwynt arnawf, a
* mae `'Hello'` yn llinyn.

Gelwir math o werth yn **{term}`math`**. Mae gan bob gwerth fath — neu weithiau
dywedwn ei fod yn "perthyn i" fath.

Mae Python yn darparu swyddogaeth o'r enw `type` sy'n dweud wrthych fath unrhyw
werth. `int` yw math cyfanrif.

```python
type(2)
```

`float` yw math rhif pwynt arnawf.

```python
type(42.0)
```

A `str` yw math llinyn.

```python
type('Hello, World!')
```

Gellir defnyddio'r mathau `int`, `float`, a `str` fel swyddogaethau. Er enghraifft,
gall `int` gymryd rhif pwynt arnawf a'i drosi'n gyfanrif (gan dalgrynnu i lawr bob
amser).

```python
int(42.9)
```

A gall `float` drosi cyfanrif yn werth pwynt arnawf.

```python
float(42)
```

Nawr, dyma rywbeth a allai fod yn ddryslyd. Beth gewch chi os rhowch ddilyniant o
ddigidau mewn dyfynodau?

```python
'126'
```

Mae'n edrych fel rhif, ond mewn gwirionedd mae'n llinyn.

```python
type('126')
```

Os ceisiwch ei ddefnyddio fel rhif, efallai y cewch wall.

```python
%%expect TypeError

'126' / 3
```

Mae'r enghraifft hon yn cynhyrchu `TypeError`, sy'n golygu bod gan y gwerthoedd yn y
mynegiad, a elwir yn **{term}`gweithredyn`**nau, y math anghywir. Mae'r neges wall yn
dangos nad yw'r gweithredydd `/` yn cefnogi mathau'r gwerthoedd hyn, sef `str` a
`int`.

Os oes gennych linyn sy'n cynnwys digidau, gallwch ddefnyddio `int` i'w drosi'n
gyfanrif.

```python
int('126') / 3
```

Os oes gennych linyn sy'n cynnwys digidau a phwynt degol, gallwch ddefnyddio `float`
i'w drosi'n rif pwynt arnawf.

```python
float('12.6')
```

Wrth ysgrifennu cyfanrif mawr, efallai y cewch eich temtio i ddefnyddio atalnodau
rhwng grwpiau o ddigidau, fel yn `1,000,000`. Mae hwn yn fynegiad cyfreithlon yn
Python, ond nid cyfanrif yw'r canlyniad.

```python
1,000,000
```

Mae Python yn dehongli `1,000,000` fel dilyniant o gyfanrifau wedi'u gwahanu gan
atalnodau. Byddwn yn dysgu mwy am y math hwn o ddilyniant yn ddiweddarach.

Gallwch ddefnyddio tanlinellau i wneud rhifau mawr yn haws eu darllen.

```python
1_000_000
```

## Ieithoedd Ffurfiol a Naturiol

**{term}`iaith naturiol`**au yw'r ieithoedd y mae pobl yn eu siarad, fel Saesneg,
Sbaeneg, a Ffrangeg. Ni chawsant eu dylunio gan bobl; fe wnaethant esblygu'n naturiol.

Mae **{term}`iaith ffurfiol`**au yn ieithoedd a ddyluniwyd gan bobl ar gyfer
cymwysiadau penodol. Er enghraifft, mae'r nodiant a ddefnyddir gan fathemategwyr yn
iaith ffurfiol sy'n arbennig o dda am ddynodi perthnasoedd rhwng rhifau a symbolau. Yn
yr un modd, mae ieithoedd rhaglennu yn ieithoedd ffurfiol sydd wedi'u dylunio i fynegi
cyfrifiadau.

Er bod gan ieithoedd ffurfiol a naturiol rai nodweddion yn gyffredin, mae
gwahaniaethau pwysig:

* **Amwysedd**: Mae ieithoedd naturiol yn llawn amwysedd, y mae pobl yn ymdopi ag ef
  drwy ddefnyddio cliwiau cyd-destunol a gwybodaeth arall. Dyluniwyd ieithoedd
  ffurfiol i fod bron neu'n gyfan gwbl ddiamwys, sy'n golygu bod gan unrhyw raglen un
  ystyr yn union, waeth beth fo'r cyd-destun.

* **Gormodedd**: Er mwyn gwneud iawn am amwysedd a lleihau camddealltwriaeth, mae
  ieithoedd naturiol yn defnyddio gormodedd. O ganlyniad, maent yn aml yn eiriog. Mae
  ieithoedd ffurfiol yn llai gormodol ac yn fwy cryno.

* **Llythrennoldeb**: Mae ieithoedd naturiol yn llawn idiomau a throsiadau. Mae
  ieithoedd ffurfiol yn golygu'n union yr hyn y maent yn ei ddweud.

Am ein bod i gyd yn tyfu i fyny yn siarad ieithoedd naturiol, mae weithiau'n anodd
addasu i ieithoedd ffurfiol. Mae ieithoedd ffurfiol yn fwy dwys nag ieithoedd
naturiol, felly mae'n cymryd mwy o amser i'w darllen. Hefyd, mae'r strwythur yn
bwysig, felly nid yw bob amser orau darllen o'r brig i'r gwaelod, o'r chwith i'r
dde. Yn olaf, mae'r manylion yn bwysig. Gall gwallau bach mewn sillafu ac atalnodi, y
gallwch ddianc â nhw mewn ieithoedd naturiol, wneud gwahaniaeth mawr mewn iaith
ffurfiol.

## Dadnamu

Mae rhaglenwyr yn gwneud camgymeriadau. Am resymau mympwyol, gelwir gwallau rhaglennu
yn **{term}`nam`**au a gelwir y broses o'u holrhain yn **{term}`dadnamu`**.

Mae rhaglennu, ac yn enwedig dadnamu, weithiau'n codi teimladau cryf. Os ydych yn cael
trafferth gyda nam anodd, efallai y byddwch yn teimlo'n ddig, yn drist, neu'n
chwithig.

Gallai paratoi ar gyfer yr adweithiau hyn eich helpu i ymdopi â nhw. Un dull yw
meddwl am y cyfrifiadur fel cyflogai â chryfderau penodol, fel cyflymder a chywirdeb,
a gwendidau penodol, fel diffyg empathi ac anallu i amgyffred y darlun mawr.

Eich swydd chi yw bod yn rheolwr da: dod o hyd i ffyrdd o fanteisio ar y cryfderau a
lliniaru'r gwendidau. A dod o hyd i ffyrdd o ddefnyddio'ch teimladau i ymgysylltu â'r
broblem, heb adael i'ch adweithiau ymyrryd â'ch gallu i weithio'n effeithiol.

Gall dysgu dadnamu fod yn rhwystredig, ond mae'n sgil gwerthfawr sy'n ddefnyddiol ar
gyfer llawer o weithgareddau y tu hwnt i raglennu. Ar ddiwedd pob pennod mae adran,
fel hon, gyda awgrymiadau ar gyfer dadnamu. Gobeithio y byddan nhw'n helpu!

## Rhestr Termau'r Bennod

**gweithredydd rhifyddol:**
Symbol, fel `+` a `*`, sy'n dynodi gweithrediad rhifyddol fel adio neu luosi.

**cyfanrif:**
Math sy'n cynrychioli rhifau heb ran ffracsiynol na degol.

**pwynt arnawf (real):**
Math sy'n cynrychioli cyfanrifau a rhifau â rhannau degol.

**rhaniad cyfanrif:**
Gweithredydd, `//`, sy'n rhannu dau rif ac yn talgrynnu i lawr i gyfanrif.

**mynegiad:**
Cyfuniad o newidynnau, gwerthoedd, a gweithredyddion.

**gwerth:**
Cyfanrif, rhif pwynt arnawf, neu linyn — neu un o fathau eraill o werthoedd y byddwn
yn eu gweld yn ddiweddarach.

**swyddogaeth:**
Dilyniant o osodiadau sydd ag enw ac sy'n perfformio rhyw weithrediad defnyddiol. Gall
swyddogaethau gymryd dadleuon neu beidio, a gallant gynhyrchu canlyniad neu beidio.

**galwad swyddogaeth:**
Mynegiad — neu ran o fynegiad — sy'n rhedeg swyddogaeth. Mae'n cynnwys enw'r
swyddogaeth wedi'i ddilyn gan restr o ddadleuon mewn cromfachau.

**gwall cystrawen:**
Gwall mewn rhaglen sy'n ei gwneud hi'n amhosibl ei dosrannu — ac felly'n amhosibl ei
rhedeg.

**llinyn:**
Math sy'n cynrychioli dilyniannau o nodau.

**cydgatenu:**
Cydio dau linyn ben-wrth-ben.

**math:**
Categori o werthoedd. Y mathau rydym wedi'u gweld hyd yn hyn yw cyfanrifau (math
`int`), rhifau pwynt arnawf (math `float`), a llinynnau (math `str`).

**gweithredyn:**
Un o'r gwerthoedd y mae gweithredydd yn gweithredu arno.

**iaith naturiol:**
Unrhyw un o'r ieithoedd y mae pobl yn eu siarad sydd wedi esblygu'n naturiol.

**iaith ffurfiol:**
Unrhyw un o'r ieithoedd y mae pobl wedi'u dylunio at ddibenion penodol, fel
cynrychioli syniadau mathemategol neu raglenni cyfrifiadurol. Mae pob iaith raglennu
yn iaith ffurfiol.

**nam:**
Gwall mewn rhaglen.

**dadnamu:**
Y broses o ddod o hyd i wallau a'u cywiro.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Wrth i chi weithio drwy'r llyfr hwn, mae sawl ffordd y gallwch ddefnyddio
cynorthwyydd rhithwir neu sgwrsfot i'ch helpu i ddysgu.

* Os ydych am ddysgu mwy am bwnc yn y bennod, neu os nad yw rhywbeth yn glir, gallwch
  ofyn am esboniad.
* Os ydych yn cael trafferth gydag unrhyw un o'r ymarferion, gallwch ofyn am help.

Ym mhob pennod, byddaf yn awgrymu ymarferion y gallwch eu gwneud gyda chynorthwyydd
rhithwir, ond rwy'n eich annog i roi cynnig ar bethau ar eich pen eich hun a gweld
beth sy'n gweithio i chi.

Dyma rai pynciau y gallech ofyn amdanynt i gynorthwyydd rhithwir:

* Yn gynharach soniais am weithredyddion didol ond ni wnes i esbonio pam mai 5 yw
  gwerth `7 ^ 2`. Ceisiwch ofyn "Beth yw'r gweithredyddion didol yn Python?" neu "Beth
  yw gwerth `7 XOR 2`?"
* Soniais hefyd am y drefn gweithredu. Am fwy o fanylion, gofynnwch "Beth yw'r drefn
  gweithredu yn Python?"
* Gall y swyddogaeth `round`, a ddefnyddiwyd gennym i dalgrynnu rhif pwynt arnawf i'r
  cyfanrif agosaf, gymryd ail ddadl. Ceisiwch ofyn "Beth yw dadleuon y swyddogaeth
  round?" neu "Sut rwy'n talgrynnu pi i dri lle degol?"
* Mae un gweithredydd rhifyddol arall na soniais amdano; ceisiwch ofyn "Beth yw'r
  gweithredydd modwlws yn Python?"

Mae'r rhan fwyaf o gynorthwywyr rhithwir yn gwybod am Python, felly maen nhw'n ateb
cwestiynau fel hyn yn weddol ddibynadwy. Ond cofiwch fod y teclynnau hyn yn gwneud
camgymeriadau. Os cewch chi god gan sgwrsfot, profwch ef!

### Ymarfer

Efallai eich bod yn meddwl tybed beth mae `round` yn ei wneud os yw rhif yn gorffen
mewn `0.5`. Yr ateb yw ei fod weithiau'n talgrynnu i fyny ac weithiau i lawr. Rhowch
gynnig ar yr enghreifftiau hyn a gweld a allwch ddarganfod pa reol y mae'n ei dilyn.

```python
round(42.5)
```

```python
round(43.5)
```

Os ydych yn chwilfrydig, gofynnwch i gynorthwyydd rhithwir, "Os yw rhif yn gorffen
mewn 0.5, a yw Python yn talgrynnu i fyny neu i lawr?"

### Ymarfer

Pan fyddwch yn dysgu am nodwedd newydd, dylech roi cynnig arni a gwneud camgymeriadau'n
fwriadol. Fel hyn, byddwch yn dysgu'r negeseuon gwall, a phan welwch nhw eto, byddwch
yn gwybod beth maen nhw'n ei olygu. Mae'n well gwneud camgymeriadau nawr ac yn
fwriadol na wedyn ac yn ddamweiniol.

1. Gallwch ddefnyddio arwydd minws i wneud rhif negatif fel `-2`. Beth sy'n digwydd os
   rhowch arwydd positif o flaen rhif? Beth am `2++2`?

2. Beth sy'n digwydd os oes gennych ddau werth heb weithredydd rhyngddynt, fel `4 2`?

3. Os galwch swyddogaeth fel `round(42.5)`, beth sy'n digwydd os gadewch allan un neu'r
   ddwy gromfach?

### Ymarfer

Cofiwch fod gan bob mynegiad werth, bod gan bob gwerth fath, a gallwn ddefnyddio'r
swyddogaeth `type` i ddarganfod math unrhyw werth.

Beth yw math gwerth y mynegiadau canlynol? Gwnewch eich dyfaliad gorau ar gyfer pob
un, ac yna defnyddiwch `type` i ddarganfod.

* `765`
* `2.718`
* `'2 pi'`
* `abs(-7)`
* `abs(-7.0)`
* `abs`
* `int`
* `type`

### Ymarfer

Mae'r cwestiynau canlynol yn rhoi cyfle i chi ymarfer ysgrifennu mynegiadau
rhifyddol.

1. Faint o eiliadau sydd mewn 42 munud 42 eiliad?

2. Faint o filltiroedd sydd mewn 10 cilometr? Awgrym: mae 1.61 cilometr mewn milltir.

3. Os rhedwch ras 10 cilometr mewn 42 munud 42 eiliad, beth yw eich cyflymder
   cyfartalog mewn eiliadau y filltir?

4. Beth yw eich cyflymder cyfartalog mewn munudau ac eiliadau y filltir?

5. Beth yw eich cyflymder cyfartalog mewn milltiroedd yr awr?

Os ydych eisoes yn gwybod am newidynnau, gallwch eu defnyddio ar gyfer yr ymarfer
hwn. Os nad ydych, gallwch wneud yr ymarfer heb eu defnyddio — ac yna byddwn yn eu
gweld yn y bennod nesaf.

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
