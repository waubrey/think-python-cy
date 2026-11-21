# Dosbarthiadau a Dulliau

Mae Python yn **{term}`iaith wrthrych-gyfeiriadol`** — hynny yw, mae'n
darparu nodweddion sy'n cefnogi rhaglennu gwrthrych-gyfeiriadol, sydd â'r
nodweddion diffiniol hyn:

* Mynegir y rhan fwyaf o'r cyfrifiant mewn termau gweithrediadau ar
  wrthrychau.

* Mae gwrthrychau'n aml yn cynrychioli pethau yn y byd go iawn, ac mae
  dulliau'n aml yn cyfateb i'r ffyrdd y mae pethau yn y byd go iawn yn
  rhyngweithio.

* Mae rhaglenni'n cynnwys diffiniadau dosbarth a dull.

Er enghraifft, yn y bennod flaenorol diffiniom ddosbarth `Time` sy'n
cyfateb i'r ffordd y mae pobl yn cofnodi amser y dydd, a diffiniom
swyddogaethau sy'n cyfateb i'r mathau o bethau y mae pobl yn eu gwneud
gydag amseroedd. Ond nid oedd cysylltiad eglur rhwng diffiniad y dosbarth
`Time` a'r diffiniadau swyddogaeth a ddilynodd. Gallwn wneud y cysylltiad
yn eglur drwy ailysgrifennu swyddogaeth fel **{term}`dull`**, a ddiffinnir
y tu mewn i ddiffiniad dosbarth.

## Diffinio Dulliau

Yn y bennod flaenorol diffiniom ddosbarth o'r enw `Time` ac ysgrifennu
swyddogaeth o'r enw `print_time` sy'n dangos amser y dydd.

```python
class Time:
    """Represents the time of day."""

def print_time(time):
    s = f'{time.hour:02d}:{time.minute:02d}:{time.second:02d}'
    print(s)
```

I wneud `print_time` yn ddull, y cyfan sydd angen i ni ei wneud yw symud y
diffiniad swyddogaeth y tu mewn i'r diffiniad dosbarth. Sylwch ar y newid
mewn mewnoliad.

Ar yr un pryd, byddwn yn newid enw'r paramedr o `time` i `self`. Nid yw'r
newid hwn yn angenrheidiol, ond mae'n gonfensiynol i baramedr cyntaf dull
gael ei enwi'n `self`.

```python
class Time:
    """Represents the time of day."""    

    def print_time(self):
        s = f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'
        print(s)
```

I alw'r dull hwn, mae'n rhaid i chi basio gwrthrych `Time` fel dadl. Dyma'r
swyddogaeth y byddwn yn ei defnyddio i wneud gwrthrych `Time`.

```python
def make_time(hour, minute, second):
    time = Time()
    time.hour = hour
    time.minute = minute
    time.second = second
    return time
```

A dyma enghraifft `Time`.

```python
start = make_time(9, 40, 0)
```

Nawr mae dwy ffordd o alw `print_time`. Y ffordd gyntaf (a lleiaf
cyffredin) yw defnyddio cystrawen swyddogaeth.

```python
Time.print_time(start)
```

Yn y fersiwn hon, `Time` yw enw'r dosbarth, `print_time` yw enw'r dull, a
phasir `start` fel paramedr. Yr ail ffordd (a mwy idiomatig) yw defnyddio
cystrawen dull:

```python
start.print_time()
```

Yn y fersiwn hon, `start` yw'r gwrthrych y gelwir y dull arno, a elwir yn
**{term}`derbynnydd`**, yn seiliedig ar yr analogi bod galw dull yn debyg i
anfon neges at wrthrych.

Waeth beth yw'r gystrawen, mae ymddygiad y dull yr un fath. Neilltuir y
derbynnydd i'r paramedr cyntaf, felly y tu mewn i'r dull, mae `self` yn
cyfeirio at yr un gwrthrych â `start`.

## Dull Arall

Dyma'r swyddogaeth `time_to_int` o'r bennod flaenorol.

```python
def time_to_int(time):
    minutes = time.hour * 60 + time.minute
    seconds = minutes * 60 + time.second
    return seconds
```

A dyma fersiwn wedi'i hailysgrifennu fel dull.

```python
%%add_method_to Time

    def time_to_int(self):
        minutes = self.hour * 60 + self.minute
        seconds = minutes * 60 + self.second
        return seconds
```

Mae'r llinell gyntaf yn defnyddio'r gorchymyn arbennig `add_method_to`,
sy'n ychwanegu dull at ddosbarth a ddiffiniwyd o'r blaen. Mae'r gorchymyn
hwn yn gweithio mewn llyfr nodiadau Jupyter, ond nid yw'n rhan o Python,
felly ni fydd yn gweithio mewn amgylcheddau eraill. Fel arfer, mae holl
ddulliau dosbarth y tu mewn i'r diffiniad dosbarth, felly fe'u diffinnir
ar yr un pryd â'r dosbarth. Ond ar gyfer y llyfr hwn, mae'n ddefnyddiol
diffinio un dull ar y tro.

Fel yn yr enghraifft flaenorol, mae'r diffiniad dull wedi'i fewnoli ac
mae enw'r paramedr yn `self`. Ar wahân i hynny, mae'r dull yr un fath â'r
swyddogaeth. Dyma sut rydym yn ei alw.

```python
start.time_to_int()
```

Mae'n gyffredin dweud ein bod yn "galw" swyddogaeth ac yn "galw" dull, ond
maent yn golygu'r un peth.

## Dulliau Statig

Fel enghraifft arall, gadewch i ni ystyried y swyddogaeth `int_to_time`.
Dyma'r fersiwn o'r bennod flaenorol.

```python
def int_to_time(seconds):
    minute, second = divmod(seconds, 60)
    hour, minute = divmod(minute, 60)
    return make_time(hour, minute, second)
```

Mae'r swyddogaeth hon yn cymryd `seconds` fel paramedr ac yn dychwelyd
gwrthrych `Time` newydd. Os trosom ef yn ddull o'r dosbarth `Time`, mae'n
rhaid i ni ei alw ar wrthrych `Time`. Ond os ydym yn ceisio creu gwrthrych
`Time` newydd, ar beth rydym i fod i'w alw?

Gallwn ddatrys y broblem iâr-ac-wy hon gan ddefnyddio **{term}`dull statig`**,
sef dull nad yw'n gofyn am enghraifft o'r dosbarth i'w alw. Dyma sut
rydym yn ailysgrifennu'r swyddogaeth hon fel dull statig.

```python
%%add_method_to Time

    def int_to_time(seconds):
        minute, second = divmod(seconds, 60)
        hour, minute = divmod(minute, 60)
        return make_time(hour, minute, second)
```

Am ei fod yn ddull statig, nid oes ganddo `self` fel paramedr. I'w alw,
rydym yn defnyddio `Time`, sef y gwrthrych dosbarth.

```python
start = Time.int_to_time(34800)
```

Gwrthrych newydd sy'n cynrychioli 9:40 yw'r canlyniad.

```python
start.print_time()
```

Nawr ein bod gennym `Time.int_to_time`, gallwn ei defnyddio i ysgrifennu
`add_time` fel dull. Dyma'r swyddogaeth o'r bennod flaenorol.

```python
def add_time(time, hours, minutes, seconds):
    duration = make_time(hours, minutes, seconds)
    seconds = time_to_int(time) + time_to_int(duration)
    return int_to_time(seconds)
```

A dyma fersiwn wedi'i hailysgrifennu fel dull.

```python
%%add_method_to Time

    def add_time(self, hours, minutes, seconds):
        duration = make_time(hours, minutes, seconds)
        seconds = Time.time_to_int(self) + Time.time_to_int(duration)
        return Time.int_to_time(seconds)
```

Mae gan `add_time` `self` fel paramedr am nad yw'n ddull statig. Mae'n
ddull cyffredin — a elwir hefyd yn **{term}`dull enghraifft`**. I'w alw,
mae angen enghraifft `Time` arnom.

```python
end = start.add_time(1, 32, 0)
end.print_time()
```

## Cymharu Gwrthrychau Time

Fel un enghraifft arall, gadewch i ni ysgrifennu `is_after` fel dull. Dyma'r
swyddogaeth `is_after`, sy'n ddatrysiad i ymarfer yn y bennod flaenorol.

```python
def is_after(t1, t2):
    return time_to_int(t1) > time_to_int(t2)
```

A dyma hi fel dull.

```python
%%add_method_to Time

    def is_after(self, other):
        return self.time_to_int() > other.time_to_int()
```

Am ein bod yn cymharu dau wrthrych, a'r paramedr cyntaf yn `self`, byddwn
yn galw'r ail baramedr yn `other`. I ddefnyddio'r dull hwn, mae'n rhaid i
ni ei alw ar un gwrthrych a phasio'r llall fel dadl.

```python
end.is_after(start)
```

Un peth braf am y gystrawen hon yw ei bod bron yn darllen fel cwestiwn,
"ydy `end` ar ôl `start`?"

## Y Dull __str__

Pan ysgrifennwch ddull, gallwch ddewis bron unrhyw enw a hoffech. Fodd
bynnag, mae gan rai enwau ystyron arbennig. Er enghraifft, os oes gan
wrthrych ddull o'r enw `__str__`, mae Python yn defnyddio'r dull hwnnw i
drosi'r gwrthrych yn llinyn. Er enghraifft, dyma ddull `__str__` ar gyfer
gwrthrych amser.

```python
%%add_method_to Time

    def __str__(self):
        s = f'{self.hour:02d}:{self.minute:02d}:{self.second:02d}'
        return s
```

Mae'r dull hwn yn debyg i `print_time`, o'r bennod flaenorol, ac eithrio ei
fod yn dychwelyd y llinyn yn hytrach na'i argraffu.

Gallwch alw'r dull hwn yn y ffordd arferol.

```python
end.__str__()
```

Ond gall Python hefyd ei alw ar eich rhan. Os defnyddiwch y swyddogaeth
gynhenid `str` i drosi gwrthrych `Time` yn llinyn, mae Python yn defnyddio'r
dull `__str__` yn nosbarth `Time`.

```python
str(end)
```

Ac mae'n gwneud yr un peth os argraffwch wrthrych `Time`.

```python
print(end)
```

Gelwir dulliau fel `__str__` yn **{term}`dull arbennig`**. Gallwch eu
hadnabod am fod eu henwau'n dechrau ac yn gorffen gyda dau danlinell.

## Y Dull init

Y mwyaf arbennig o'r dulliau arbennig yw `__init__`, a elwir felly am ei
fod yn cychwyn priodoleddau gwrthrych newydd. Gallai dull `__init__` ar
gyfer y dosbarth `Time` edrych fel hyn:

```python
%%add_method_to Time

    def __init__(self, hour=0, minute=0, second=0):
        self.hour = hour
        self.minute = minute
        self.second = second
```

Nawr pan enghreifftiwn wrthrych `Time`, mae Python yn galw `__init__`, ac
yn pasio'r dadleuon ymlaen. Felly gallwn greu gwrthrych a chychwyn y
priodoleddau ar yr un pryd.

```python
time = Time(9, 40, 0)
print(time)
```

Yn yr enghraifft hon, mae'r paramedrau'n ddewisol, felly os galwch `Time`
heb ddadleuon, cewch y gwerthoedd rhagosodedig.

```python
time = Time()
print(time)
```

Os darparwch un ddadl, mae'n disodli `hour`:

```python
time = Time(9)
print(time)
```

Os darparwch ddwy ddadl, maent yn disodli `hour` a `minute`.

```python
time = Time(9, 45)
print(time)
```

Ac os darparwch dair dadl, maent yn disodli'r tri gwerth rhagosodedig.

Pan ysgrifennaf ddosbarth newydd, bron bob amser byddaf yn dechrau drwy
ysgrifennu `__init__`, sy'n ei gwneud hi'n haws creu gwrthrychau, ac
`__str__`, sy'n ddefnyddiol ar gyfer dadnamu.

## Gorlwytho Gweithredydd

Drwy ddiffinio dulliau arbennig eraill, gallwch nodi ymddygiad
gweithredyddion ar fathau a ddiffinnir gan raglenwyr. Er enghraifft, os
diffiniwch ddull o'r enw `__add__` ar gyfer y dosbarth `Time`, gallwch
ddefnyddio'r gweithredydd `+` ar wrthrychau Time.

Dyma ddull `__add__`.

```python
%%add_method_to Time

    def __add__(self, other):
        seconds = self.time_to_int() + other.time_to_int()
        return Time.int_to_time(seconds)
```

Gallwn ei defnyddio fel hyn.

```python
duration = Time(1, 32)
end = start + duration
print(end)
```

Mae llawer yn digwydd wrth i ni redeg y tair llinell hyn o god:

* Pan enghreifftiwn wrthrych `Time`, gelwir y dull `__init__`.

* Pan ddefnyddiwn y gweithredydd `+` gyda gwrthrych `Time`, gelwir ei
  ddull `__add__`.

* A phan argraffwn wrthrych `Time`, gelwir ei ddull `__str__`.

Gelwir newid ymddygiad gweithredydd fel ei fod yn gweithio â mathau a
ddiffinnir gan raglenwyr yn **{term}`gorlwytho gweithredydd`**. Ar gyfer
pob gweithredydd, fel `+`, mae dull arbennig cyfatebol, fel `__add__`.

## Dadnamu

Mae gwrthrych `Time` yn ddilys os yw gwerthoedd `minute` a `second` rhwng
`0` a `60` — gan gynnwys `0` ond nid `60` — ac os yw `hour` yn bositif.
Hefyd, dylai `hour` a `minute` fod yn werthoedd cyfanrif, ond efallai y
caniatawn i `second` gael rhan ffracsiynol.

Gelwir gofynion fel y rhain yn **{term}`amod cyson`**ion am y dylent fod
bob amser yn wir. I'w ddweud ffordd arall, os nad ydynt yn wir, mae
rhywbeth wedi mynd o'i le.

Gall ysgrifennu cod i wirio amodau cyson helpu i ganfod gwallau a
darganfod eu hachosion. Er enghraifft, efallai y bydd gennych ddull fel
`is_valid` sy'n cymryd gwrthrych Time ac yn dychwelyd `False` os yw'n torri
amod cyson.

```python
%%add_method_to Time

    def is_valid(self):
        if self.hour < 0 or self.minute < 0 or self.second < 0:
            return False
        if self.minute >= 60 or self.second >= 60:
            return False
        if not isinstance(self.hour, int):
            return False
        if not isinstance(self.minute, int):
            return False
        return True
```

Yna, ar ddechrau pob dull gallwch wirio'r dadleuon i wneud yn siŵr eu bod
yn ddilys.

```python
%%add_method_to Time

    def is_after(self, other):
        assert self.is_valid(), 'self is not a valid Time'
        assert other.is_valid(), 'other is not a valid Time'
        return self.time_to_int() > other.time_to_int()
```

Mae'r gosodiad `assert` yn gwerthuso'r mynegiad sy'n ei ddilyn. Os yw'r
canlyniad yn `True`, nid yw'n gwneud dim; os yw'r canlyniad yn `False`, mae'n
achosi `AssertionError`. Dyma enghraifft.

```python
duration = Time(minute=132)
print(duration)
```

```python
%%expect AssertionError

start.is_after(duration)
```

Mae gosodiadau `assert` yn ddefnyddiol am eu bod yn gwahaniaethu rhwng cod
sy'n ymdrin ag amodau normal a chod sy'n gwirio am wallau.

## Rhestr Termau'r Bennod

**iaith wrthrych-gyfeiriadol:**
Iaith sy'n darparu nodweddion i gefnogi rhaglennu gwrthrych-gyfeiriadol, yn
enwedig mathau a ddiffinnir gan ddefnyddwyr.

**dull:**
Swyddogaeth a ddiffinnir y tu mewn i ddiffiniad dosbarth ac a elwir ar
enghreifftiau'r dosbarth hwnnw.

**derbynnydd:**
Y gwrthrych y gelwir dull arno.

**dull statig:**
Dull y gellir ei alw heb wrthrych fel derbynnydd.

**dull enghraifft:**
Dull y mae'n rhaid ei alw gyda gwrthrych fel derbynnydd.

**dull arbennig:**
Dull sy'n newid y ffordd y mae gweithredyddion a rhai swyddogaethau'n
gweithio gyda gwrthrych.

**gorlwytho gweithredydd:**
Y broses o ddefnyddio dulliau arbennig i newid y ffordd y mae
gweithredyddion yn gweithio gyda mathau a ddiffinnir gan ddefnyddwyr.

**amod cyson:**
Amod a ddylai fod bob amser yn wir yn ystod cyflawniad rhaglen.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Am fwy o wybodaeth am ddulliau statig, gofynnwch i gynorthwyydd rhithwir:

* "Beth yw'r gwahaniaeth rhwng dull enghraifft a dull statig?"

* "Pam gelwir dulliau statig yn 'statig'?"

Os gofynnwch i gynorthwyydd rhithwir gynhyrchu dull statig, mae'n debygol y
bydd y canlyniad yn dechrau gyda `@staticmethod`, sef "addurnwr" sy'n nodi
mai dull statig ydyw. Nid yw addurnwyr wedi'u trafod yn y llyfr hwn, ond os
ydych yn chwilfrydig, gallwch ofyn i gynorthwyydd rhithwir am ragor o
wybodaeth.

Yn y bennod hon fe wnaethom ailysgrifennu sawl swyddogaeth fel dulliau. Mae
cynorthwywyr rhithwir yn gyffredinol yn dda am y math hwn o drawsnewidiad
cod. Fel enghraifft, gludwch y swyddogaeth ganlynol i gynorthwyydd rhithwir
a gofynnwch iddo, "Ailysgrifennwch y swyddogaeth hon fel dull o'r dosbarth
`Time`."

```python
def subtract_time(t1, t2):
    return time_to_int(t1) - time_to_int(t2)
```

### Ymarfer

Yn y bennod flaenorol, gofynnodd cyfres o ymarferion i chi ysgrifennu
dosbarth `Date` a sawl swyddogaeth sy'n gweithio gyda gwrthrychau `Date`.
Nawr gadewch i ni ymarfer ailysgrifennu'r swyddogaethau hynny fel dulliau.

1. Ysgrifennwch ddiffiniad ar gyfer dosbarth `Date` sy'n cynrychioli
   dyddiad — hynny yw, blwyddyn, mis, a diwrnod o'r mis.

2. Ysgrifennwch ddull `__init__` sy'n cymryd `year`, `month`, a `day` fel
   paramedrau ac yn neilltuo'r paramedrau i briodoleddau. Crëwch wrthrych
   sy'n cynrychioli Mehefin 22, 1933.

3. Ysgrifennwch ddull `__str__` sy'n defnyddio llinyn-f i fformatio'r
   priodoleddau ac yn dychwelyd y canlyniad. Os profwch ef gyda'r `Date` a
   grëoch, dylai'r canlyniad fod yn `1933-06-22`.

4. Ysgrifennwch ddull o'r enw `is_after` sy'n cymryd dau wrthrych `Date` ac
   yn dychwelyd `True` os yw'r cyntaf yn dod ar ôl yr ail. Crëwch ail
   wrthrych sy'n cynrychioli Medi 17, 1933, a gwiriwch a yw'n dod ar ôl y
   gwrthrych cyntaf.

Awgrym: Efallai y gwelwch hi'n ddefnyddiol ysgrifennu dull o'r enw
`to_tuple` sy'n dychwelyd tŵpl sy'n cynnwys priodoleddau gwrthrych `Date`
yn nhrefn blwyddyn-mis-diwrnod.

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghreifftiau hyn i brofi eich datrysiad.

```python
birthday1 = Date(1933, 6, 22)
print(birthday1)
```

```python
birthday2 = Date(1933, 9, 17)
print(birthday2)
```

```python
birthday1.is_after(birthday2)  # should be False
```

```python
birthday2.is_after(birthday1)  # should be True
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
