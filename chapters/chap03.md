# Swyddogaethau

Yn y bennod flaenorol fe wnaethom ddefnyddio sawl swyddogaeth a ddarperir gan
Python, fel `int` a `float`, a rhai a ddarperir gan y modiwl `math`, fel `sqrt` a
`pow`.

Yn y bennod hon, byddwch yn dysgu sut i greu eich swyddogaethau eich hun a'u
rhedeg. A byddwn yn gweld sut gall un swyddogaeth alw un arall. Fel enghreifftiau,
byddwn yn dangos geiriau caneuon gan Monty Python. Mae'r enghreifftiau ffôl hyn yn
dangos nodwedd bwysig — mae'r gallu i ysgrifennu eich swyddogaethau eich hun yn
sylfaen rhaglennu.

Mae'r bennod hon hefyd yn cyflwyno gosodiad newydd, y ddolen `for`, a ddefnyddir i
ailadrodd cyfrifiant.

## Diffinio swyddogaethau newydd

Mae **{term}`diffiniad swyddogaeth`** yn nodi enw swyddogaeth newydd a'r dilyniant
o osodiadau sy'n rhedeg pan gaiff y swyddogaeth ei galw. Dyma enghraifft:

```python
def print_lyrics():
    print("I'm a lumberjack, and I'm okay.")
    print("I sleep all night and I work all day.")
```

Mae `def` yn allweddair sy'n nodi mai diffiniad swyddogaeth yw hwn. Enw'r
swyddogaeth yw `print_lyrics`. Mae unrhyw beth sy'n enw newidyn cyfreithlon hefyd
yn enw swyddogaeth cyfreithlon.

Mae'r cromfachau gwag ar ôl yr enw yn nodi nad yw'r swyddogaeth hon yn cymryd
unrhyw ddadleuon.

Gelwir llinell gyntaf y diffiniad swyddogaeth yn **{term}`pennawd`** — gelwir
gweddill y diffiniad yn **{term}`corff`**. Mae'n rhaid i'r pennawd orffen gyda
cholon ac mae'n rhaid i'r corff fod wedi'i fewnoli. Yn ôl confensiwn, pedwar bwlch
yw mewnoliad bob amser. Corff y swyddogaeth hon yw dau osodiad `print`; yn
gyffredinol, gall corff swyddogaeth gynnwys unrhyw nifer o osodiadau o unrhyw fath.

Mae diffinio swyddogaeth yn creu **{term}`gwrthrych swyddogaeth`**, y gallwn ei
ddangos fel hyn.

```python
print_lyrics
```

Mae'r allbwn yn dangos mai swyddogaeth heb ddadleuon yw `print_lyrics`. `__main__`
yw enw'r modiwl sy'n cynnwys `print_lyrics`.

Nawr ein bod wedi diffinio swyddogaeth, gallwn ei galw yn yr un ffordd ag y
galwn swyddogaethau cynhenid.

```python
print_lyrics()
```

Pan fydd y swyddogaeth yn rhedeg, mae'n cyflawni'r gosodiadau yn y corff, sy'n
dangos dwy linell gyntaf "The Lumberjack Song".

## Paramedrau

Mae rhai o'r swyddogaethau rydym wedi'u gweld yn gofyn am ddadleuon; er enghraifft,
pan alwch `abs` rydych yn pasio rhif fel dadl. Mae rhai swyddogaethau'n cymryd mwy
nag un ddadl; er enghraifft, mae `math.pow` yn cymryd dwy, y sail a'r esbonydd.

Dyma ddiffiniad ar gyfer swyddogaeth sy'n cymryd dadl.

```python
def print_twice(string):
    print(string)
    print(string)
```

Mae'r enw newidyn mewn cromfachau yn **{term}`paramedr`**. Pan gaiff y swyddogaeth
ei galw, caiff gwerth y ddadl ei neilltuo i'r paramedr. Er enghraifft, gallwn alw
`print_twice` fel hyn.

```python
print_twice('Dennis Moore, ')
```

Mae gan redeg y swyddogaeth hon yr un effaith â neilltuo'r ddadl i'r paramedr ac
yna cyflawni corff y swyddogaeth, fel hyn.

```python
string = 'Dennis Moore, '
print(string)
print(string)
```

Gallwch hefyd ddefnyddio newidyn fel dadl.

```python
line = 'Dennis Moore, '
print_twice(line)
```

Yn yr enghraifft hon, caiff gwerth `line` ei neilltuo i'r paramedr `string`.

## Galw swyddogaethau

Unwaith y byddwch wedi diffinio swyddogaeth, gallwch ei defnyddio y tu mewn i
swyddogaeth arall. I ddangos hyn, byddwn yn ysgrifennu swyddogaethau sy'n argraffu
geiriau "The Spam Song"
(<https://www.songfacts.com/lyrics/monty-python/the-spam-song>).

> Spam, Spam, Spam, Spam,
> Spam, Spam, Spam, Spam,
> Spam, Spam,
> (Lovely Spam, Wonderful Spam!)
> Spam, Spam,

Byddwn yn dechrau gyda'r swyddogaeth ganlynol, sy'n cymryd dau baramedr.

```python
def repeat(word, n):
    print(word * n)
```

Gallwn ddefnyddio'r swyddogaeth hon i argraffu llinell gyntaf y gân, fel hyn.

```python
spam = 'Spam, '
repeat(spam, 4)
```

I ddangos y ddwy linell gyntaf, gallwn ddiffinio swyddogaeth newydd sy'n defnyddio
`repeat`.

```python
def first_two_lines():
    repeat(spam, 4)
    repeat(spam, 4)
```

Ac yna ei galw fel hyn.

```python
first_two_lines()
```

I ddangos y tair llinell olaf, gallwn ddiffinio swyddogaeth arall, sydd hefyd yn
defnyddio `repeat`.

```python
def last_three_lines():
    repeat(spam, 2)
    print('(Lovely Spam, Wonderful Spam!)')
    repeat(spam, 2)
```

```python
last_three_lines()
```

Yn olaf, gallwn ddod â'r cyfan at ei gilydd gydag un swyddogaeth sy'n argraffu'r
pennill cyfan.

```python
def print_verse():
    first_two_lines()
    last_three_lines()
```

```python
print_verse()
```

Pan redwn `print_verse`, mae'n galw `first_two_lines`, sy'n galw `repeat`, sy'n
galw `print`. Mae hynny'n lot o swyddogaethau.

Wrth gwrs, gallem fod wedi gwneud yr un peth gyda llai o swyddogaethau, ond pwynt
yr enghraifft hon yw dangos sut gall swyddogaethau weithio gyda'i gilydd.

## Ailadrodd

Os ydym am ddangos mwy nag un pennill, gallwn ddefnyddio gosodiad `for`. Dyma
enghraifft syml.

```python
for i in range(2):
    print(i)
```

Pennawd yw'r llinell gyntaf sy'n gorffen gyda cholon. Y corff yw'r ail linell,
sydd rhaid iddi fod wedi'i mewnoli.

Mae'r pennawd yn dechrau gyda'r allweddair `for`, newidyn newydd o'r enw `i`, ac
allweddair arall, `in`. Mae'n defnyddio'r swyddogaeth `range` i greu dilyniant o
ddau werth, sef `0` ac `1`. Yn Python, pan fyddwn yn dechrau cyfrif, rydym fel
arfer yn dechrau o `0`.

Pan fydd y gosodiad `for` yn rhedeg, mae'n neilltuo'r gwerth cyntaf o `range` i
`i` ac yna'n rhedeg y swyddogaeth `print` yn y corff, sy'n dangos `0`.

Pan gyrhaeddir diwedd y corff, mae'n dolennu'n ôl i'r pennawd, a dyna pam y gelwir
y gosodiad hwn yn **{term}`dolen`**. Yr ail dro drwy'r ddolen, mae'n neilltuo'r
gwerth nesaf o `range` i `i`, ac yn ei ddangos. Yna, am mai dyna'r gwerth olaf o
`range`, mae'r ddolen yn dod i ben.

Dyma sut gallwn ddefnyddio dolen `for` i argraffu dau bennill o'r gân.

```python
for i in range(2):
    print("Verse", i)
    print_verse()
    print()
```

Gallwch roi dolen `for` y tu mewn i swyddogaeth. Er enghraifft, mae
`print_n_verses` yn cymryd paramedr o'r enw `n`, sy'n rhaid iddo fod yn gyfanrif,
ac yn dangos y nifer penodol o benillion.

```python
def print_n_verses(n):
    for i in range(n):
        print_verse()
        print()
```

Yn yr enghraifft hon, nid ydym yn defnyddio `i` yng nghorff y ddolen, ond mae'n
rhaid cael enw newidyn yn y pennawd beth bynnag.

## Mae Newidynnau a Pharamedrau'n Lleol

Pan fyddwch yn creu newidyn y tu mewn i swyddogaeth, mae'n **{term}`newidyn lleol`**,
sy'n golygu ei fod ond yn bodoli y tu mewn i'r swyddogaeth. Er enghraifft, mae'r
swyddogaeth ganlynol yn cymryd dwy ddadl, yn eu cydgatenu, ac yn argraffu'r
canlyniad ddwywaith.

```python
def cat_twice(part1, part2):
    cat = part1 + part2
    print_twice(cat)
```

Dyma enghraifft sy'n ei defnyddio:

```python
line1 = 'Always look on the '
line2 = 'bright side of life.'
cat_twice(line1, line2)
```

Pan redith `cat_twice`, mae'n creu newidyn lleol o'r enw `cat`, sy'n cael ei
ddinistrio pan ddaw'r swyddogaeth i ben. Os ceisiwn ei ddangos, cawn `NameError`:

```python
%%expect NameError

print(cat)
```

Y tu allan i'r swyddogaeth, nid yw `cat` wedi'i ddiffinio.

Mae paramedrau hefyd yn lleol. Er enghraifft, y tu allan i `cat_twice`, nid oes
y fath beth â `part1` na `part2`.

## Diagramau Pentwr

I gadw golwg ar ba newidynnau y gellir eu defnyddio lle, mae weithiau'n ddefnyddiol
tynnu **{term}`diagram pentwr`**. Fel diagramau cyflwr, mae diagramau pentwr yn
dangos gwerth pob newidyn, ond maent hefyd yn dangos pa swyddogaeth y mae pob
newidyn yn perthyn iddi.

Cynrychiolir pob swyddogaeth gan **{term}`ffram`**. Mae ffram yn flwch gydag enw
swyddogaeth y tu allan a pharamedrau a newidynnau lleol y swyddogaeth y tu mewn.

Dyma'r diagram pentwr ar gyfer yr enghraifft flaenorol.

```python
from diagram import make_frame, Stack

d1 = dict(line1=line1, line2=line2)
frame1 = make_frame(d1, name='__main__', dy=-0.3, loc='left')

d2 = dict(part1=line1, part2=line2, cat=line1+line2)
frame2 = make_frame(d2, name='cat_twice', dy=-0.3, 
                    offsetx=0.03, loc='left')

d3 = dict(string=line1+line2)
frame3 = make_frame(d3, name='print_twice', 
                    offsetx=0.04, offsety=-0.3, loc='left')

d4 = {"?": line1+line2}
frame4 = make_frame(d4, name='print', 
                    offsetx=-0.22, offsety=0, loc='left')

stack = Stack([frame1, frame2, frame3, frame4], dy=-0.8)
```

```python
from diagram import diagram, adjust


width, height, x, y = [3.77, 2.9, 1.1, 2.65]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)
# adjust(x, y, bbox)

import matplotlib.pyplot as plt
plt.savefig('chap03_stack_diagram.png', dpi=300)
```

Trefnir y fframiau mewn pentwr sy'n dangos pa swyddogaeth alwodd pa un, ac yn y
blaen. Gan ddarllen o'r gwaelod, galwyd `print` gan `print_twice`, a alwyd gan
`cat_twice`, a alwyd gan `__main__` — sef enw arbennig ar gyfer y ffram ucha'.
Pan fyddwch yn creu newidyn y tu allan i unrhyw swyddogaeth, mae'n perthyn i
`__main__`.

Yn ffram `print`, mae'r marc cwestiwn yn dangos nad ydym yn gwybod enw'r
paramedr. Os ydych yn chwilfrydig, gofynnwch i gynorthwyydd rhithwir, "Beth yw
paramedrau swyddogaeth print Python?"

## Hanes Galwadau

Pan fydd gwall rhedeg yn digwydd mewn swyddogaeth, mae Python yn dangos enw'r
swyddogaeth oedd yn rhedeg, enw'r swyddogaeth a'i galwodd, ac yn y blaen, i fyny'r
pentwr. I ddangos enghraifft, byddaf yn diffinio fersiwn o `print_twice` sy'n
cynnwys gwall — mae'n ceisio argraffu `cat`, sy'n newidyn lleol mewn swyddogaeth
arall.

```python
def print_twice(string):
    print(cat)            # NameError
    print(cat)
```

Nawr dyma beth sy'n digwydd pan redwn `cat_twice`.

```python
# This cell tells Jupyter to provide detailed debugging information
# when a runtime error occurs, including a traceback.

%xmode Verbose
```

```python
%%expect NameError

cat_twice(line1, line2)
```

Mae'r neges wall yn cynnwys **{term}`hanes galwadau`**, sy'n dangos y swyddogaeth
oedd yn rhedeg pan ddigwyddodd y gwall, y swyddogaeth a'i galwodd, ac yn y blaen.
Yn yr enghraifft hon, mae'n dangos bod `cat_twice` wedi galw `print_twice`, ac i'r
gwall ddigwydd yn `print_twice`.

Mae trefn y swyddogaethau yn yr hanes galwadau yr un fath â threfn y fframiau yn y
diagram pentwr. Mae'r swyddogaeth oedd yn rhedeg ar y gwaelod.

## Pam Swyddogaethau?

Efallai nad yw'n glir eto pam mae'n werth y drafferth i rannu rhaglen yn
swyddogaethau. Mae sawl rheswm:

* Mae creu swyddogaeth newydd yn rhoi cyfle i chi enwi grŵp o osodiadau, sy'n
  gwneud eich rhaglen yn haws ei darllen a'i dadnamu.

* Gall swyddogaethau wneud rhaglen yn llai drwy ddileu cod ailadroddus. Yn
  ddiweddarach, os gwnewch newid, dim ond mewn un lle y mae'n rhaid i chi ei
  wneud.

* Mae rhannu rhaglen hir yn swyddogaethau yn caniatáu i chi ddadnamu'r rhannau un
  ar y tro ac yna eu cydosod yn gyfanwaith sy'n gweithio.

* Mae swyddogaethau wedi'u dylunio'n dda yn aml yn ddefnyddiol ar gyfer llawer o
  raglenni. Unwaith y byddwch wedi ysgrifennu ac wedi dadnamu un, gallwch ei
  hailddefnyddio.

## Dadnamu

Gall dadnamu fod yn rhwystredig, ond mae hefyd yn heriol, yn ddiddorol, ac weithiau
hyd yn oed yn hwyl. Ac mae'n un o'r sgiliau pwysicaf y gallwch eu dysgu.

Mewn rhai ffyrdd mae dadnamu fel gwaith ditectif. Rhoddir cliwiau i chi ac mae'n
rhaid i chi ddidynnu'r digwyddiadau a arweiniodd at y canlyniadau rydych yn eu
gweld.

Mae dadnamu hefyd fel gwyddoniaeth arbrofol. Unwaith y bydd gennych syniad am beth
sy'n mynd o'i le, rydych yn addasu eich rhaglen ac yn ceisio eto. Os oedd eich
damcaniaeth yn gywir, gallwch ragfynegi canlyniad yr addasiad, ac rydych yn camu'n
agosach at raglen sy'n gweithio. Os oedd eich damcaniaeth yn anghywir, mae'n rhaid
i chi feddwl am un newydd.

I rai pobl, mae rhaglennu a dadnamu yr un peth; hynny yw, mae rhaglennu'n broses o
ddadnamu rhaglen yn raddol nes ei bod yn gwneud yr hyn rydych ei eisiau. Y syniad
yw y dylech ddechrau gyda rhaglen sy'n gweithio a gwneud newidiadau bach, gan eu
dadnamu wrth fynd.

Os byddwch yn treulio llawer o amser yn dadnamu, mae hynny'n aml yn arwydd eich
bod yn ysgrifennu gormod o god cyn i chi ddechrau profi. Os cymerwch gamau llai,
efallai y gwelwch y gallwch symud yn gyflymach.

## Rhestr Termau'r Bennod

**diffiniad swyddogaeth:**
Gosodiad sy'n creu swyddogaeth.

**pennawd:**
Llinell gyntaf diffiniad swyddogaeth.

**corff:**
Dilyniant y gosodiadau y tu mewn i ddiffiniad swyddogaeth.

**gwrthrych swyddogaeth:**
Gwerth a grëwyd gan ddiffiniad swyddogaeth. Mae enw'r swyddogaeth yn newidyn sy'n
cyfeirio at wrthrych swyddogaeth.

**paramedr:**
Enw a ddefnyddir y tu mewn i swyddogaeth i gyfeirio at y gwerth a basiwyd fel dadl.

**dolen:**
Gosodiad sy'n rhedeg un gosodiad neu fwy, yn aml dro ar ôl tro.

**newidyn lleol:**
Newidyn a ddiffinnir y tu mewn i swyddogaeth, ac y gellir ond ei gyrchu y tu mewn
i'r swyddogaeth honno.

**diagram pentwr:**
Cynrychiolaeth graffigol o bentwr o swyddogaethau, eu newidynnau, a'r gwerthoedd y
maent yn cyfeirio atynt.

**ffram:**
Blwch mewn diagram pentwr sy'n cynrychioli galwad swyddogaeth. Mae'n cynnwys
newidynnau lleol a pharamedrau'r swyddogaeth.

**hanes galwadau:**
Rhestr o'r swyddogaethau sy'n cyflawni, a argraffir pan ddigwydd eithriad.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Mae'r gosodiadau mewn swyddogaeth neu ddolen `for` wedi'u mewnoli â phedwar
bwlch, yn ôl confensiwn. Ond nid yw pawb yn cytuno â'r confensiwn hwnnw. Os ydych
yn chwilfrydig am hanes y ddadl fawr hon, gofynnwch i gynorthwyydd rhithwir i
"dweud wrthyf am fylchau a thabiau yn Python".

Mae cynorthwywyr rhithwir yn eithaf da am ysgrifennu swyddogaethau bach.

1. Gofynnwch i'ch hoff gynorthwyydd rhithwir "Ysgrifennwch swyddogaeth o'r enw
   repeat sy'n cymryd llinyn a chyfanrif ac yn argraffu'r llinyn y nifer penodol
   o weithiau."

2. Os yw'r canlyniad yn defnyddio dolen `for`, gallech ofyn, "Allwch chi ei wneud
   heb ddolen for?"

3. Dewiswch unrhyw swyddogaeth arall yn y bennod hon a gofynnwch i gynorthwyydd
   rhithwir ei hysgrifennu. Yr her yw disgrifio'r swyddogaeth yn ddigon manwl
   gywir i gael yr hyn rydych ei eisiau. Defnyddiwch yr eirfa rydych wedi'i dysgu
   hyd yn hyn yn y llyfr hwn.

Mae cynorthwywyr rhithwir hefyd yn eithaf da am ddadnamu swyddogaethau.

1. Gofynnwch i gynorthwyydd rhithwir beth sydd o'i le gyda'r fersiwn hon o
   `print_twice`.

   ```
   def print_twice(string):
       print(cat)
       print(cat)
   ```

Ac os byddwch yn mynd yn sownd ar unrhyw un o'r ymarferion isod, ystyriwch ofyn i
gynorthwyydd rhithwir am help.

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `print_right` sy'n cymryd llinyn o'r enw `text`
fel paramedr ac yn argraffu'r llinyn gyda digon o fylchau blaenorol fel bod
llythyren olaf y llinyn yn y 40fed golofn o'r arddangosfa.

```python
# Ateb yma
```

Awgrym: Defnyddiwch y swyddogaeth `len`, gweithredydd cydgatenu llinynnau (`+`) a
gweithredydd ailadrodd llinynnau (`*`).

Dyma enghraifft sy'n dangos sut y dylai weithio.

```
                                   Monty
                                Python's
                           Flying Circus
```

```python
print_right("Monty")
print_right("Python's")
print_right("Flying Circus")
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `triangle` sy'n cymryd llinyn a chyfanrif ac yn
tynnu pyramid gyda'r uchder penodol, wedi'i wneud o gopïau o'r llinyn. Dyma
enghraifft o byramid gyda `5` lefel, gan ddefnyddio'r llinyn `'L'`.

```
L
LL
LLL
LLLL
LLLLL
```

```python
# Ateb yma
```

```python
triangle('L', 5)
```

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `rectangle` sy'n cymryd llinyn a dau gyfanrif ac
yn tynnu petryal gyda'r lled a'r uchder penodol, wedi'i wneud o gopïau o'r llinyn.
Dyma enghraifft o betryal gyda lled `5` ac uchder `4`, wedi'i wneud o'r llinyn
`'H'`.

```
HHHHH
HHHHH
HHHHH
HHHHH
```

```python
# Ateb yma
```

```python
rectangle('H', 5, 4)
```

### Ymarfer

Mae'r gân "99 Bottles of Beer" yn dechrau gyda'r pennill hwn:

> 99 bottles of beer on the wall
> 99 bottles of beer
> Take one down, pass it around
> 98 bottles of beer on the wall

Yna mae'r ail bennill yr un fath, ac eithrio ei fod yn dechrau gyda 98 o boteli
ac yn gorffen gyda 97. Mae'r gân yn parhau — am amser hir iawn — nes bod 0 potel
o gwrw.

Ysgrifennwch swyddogaeth o'r enw `bottle_verse` sy'n cymryd rhif fel paramedr ac
yn dangos y pennill sy'n dechrau gyda'r nifer penodol o boteli.

Awgrym: Ystyriwch ddechrau gyda swyddogaeth a all argraffu llinell gyntaf, ail
linell, neu linell olaf y pennill, ac yna ei defnyddio i ysgrifennu
`bottle_verse`.

```python
# Ateb yma
```

```python
# Ateb yma
```

Defnyddiwch yr alwad swyddogaeth hon i ddangos y pennill cyntaf.

```python
bottle_verse(99)
```

Os ydych am argraffu'r gân gyfan, gallwch ddefnyddio'r ddolen `for` hon, sy'n
cyfrif i lawr o `99` i `1`. Does dim rhaid i chi ddeall yr enghraifft hon yn
llwyr — byddwn yn dysgu mwy am ddolenni `for` a'r swyddogaeth `range` yn
ddiweddarach.

```python
for n in range(99, 0, -1):
    bottle_verse(n)
    print()
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
