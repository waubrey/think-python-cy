# Ffeiliau a Chronfeydd Data

Mae'r rhan fwyaf o'r rhaglenni rydym wedi'u gweld hyd yn hyn yn
**{term}`darfodedig`** yn yr ystyr eu bod yn rhedeg am gyfnod byr ac yn
cynhyrchu allbwn, ond pan ddônt i ben, mae eu data'n diflannu. Bob tro y
rhedwch raglen ddarfodedig, mae'n dechrau gyda llechen lân.

Mae rhaglenni eraill yn **{term}`parhaus`**: maent yn rhedeg am amser hir
(neu drwy'r amser); maent yn cadw o leiaf rhywfaint o'u data mewn storfa
hirdymor; ac os ydynt yn cau i lawr ac yn ailddechrau, maent yn codi lle
gadawsant.

Ffordd syml i raglenni gynnal eu data yw drwy ddarllen ac ysgrifennu
ffeiliau testun. Dewis amgen mwy amryddawn yw storio data mewn cronfa
ddata. Mae cronfeydd data'n ffeiliau arbenigol y gellir eu darllen a'u
hysgrifennu'n fwy effeithlon na ffeiliau testun, ac maent yn darparu
galluoedd ychwanegol.

Yn y bennod hon, byddwn yn ysgrifennu rhaglenni sy'n darllen ac yn
ysgrifennu ffeiliau testun a chronfeydd data, ac fel ymarfer byddwch yn
ysgrifennu rhaglen sy'n chwilio casgliad o luniau am ddyblygiadau. Ond cyn y
gallwch weithio gyda ffeil, mae'n rhaid i chi ei darganfod, felly byddwn yn
dechrau gydag enwau ffeiliau, llwybrau, a chyfeiriaduron.

## Enwau Ffeiliau a Llwybrau

Mae ffeiliau wedi'u trefnu'n **{term}`cyfeiriadur`**ion, a elwir hefyd yn
"ffolderi". Mae gan bob rhaglen sy'n rhedeg **{term}`cyfeiriadur gwaith cyfredol`**,
sef y cyfeiriadur rhagosodedig ar gyfer y rhan fwyaf o weithrediadau. Er
enghraifft, pan agorwch ffeil, mae Python yn chwilio amdani yn y cyfeiriadur
gwaith cyfredol.

Mae'r modiwl `os` yn darparu swyddogaethau ar gyfer gweithio gyda ffeiliau a
chyfeiriaduron ("os" yw talfyriad "operating system"). Mae'n darparu
swyddogaeth o'r enw `getcwd` sy'n cael enw'r cyfeiriadur gwaith cyfredol.

```python
# this cell replaces `os.cwd` with a function that returns a fake path

import os

def getcwd():
    return "/home/dinsdale"

os.getcwd = getcwd
```

```python
import os

os.getcwd()
```

Cyfeiriadur cartref defnyddiwr o'r enw `dinsdale` yw'r canlyniad yn yr
enghraifft hon. Gelwir llinyn fel `'/home/dinsdale'` sy'n adnabod ffeil neu
gyfeiriadur yn **{term}`llwybr`**.

Ystyrir enw ffeil syml fel `'memo.txt'` hefyd yn llwybr, ond mae'n
**{term}`llwybr cymharol`** am ei fod yn nodi enw ffeil yn gymharol i'r
cyfeiriadur cyfredol. Yn yr enghraifft hon, y cyfeiriadur cyfredol yw
`/home/dinsdale`, felly mae `'memo.txt'` yn gyfystyr â'r llwybr cyflawn
`/home/dinsdale/memo.txt`.

Nid yw llwybr sy'n dechrau gyda `/` yn dibynnu ar y cyfeiriadur cyfredol —
gelwir ef yn **{term}`llwybr absoliwt`**. I ddarganfod y llwybr absoliwt at
ffeil, gallwch ddefnyddio `abspath`.

```python
os.path.abspath('memo.txt')
```

Mae'r modiwl `os` yn darparu swyddogaethau eraill ar gyfer gweithio gydag
enwau ffeiliau a llwybrau. Mae `listdir` yn dychwelyd rhestr o gynnwys y
cyfeiriadur penodol, gan gynnwys ffeiliau a chyfeiriaduron eraill. Dyma
enghraifft sy'n rhestru cynnwys cyfeiriadur o'r enw `photos`.

```python
os.listdir('photos')
```

Mae'r cyfeiriadur hwn yn cynnwys ffeil destun o'r enw `notes.txt` a thri
chyfeiriadur. Mae'r cyfeiriaduron yn cynnwys ffeiliau delwedd ar ffurf
JPEG.

```python
os.listdir('photos/jan-2023')
```

I wirio a yw ffeil neu gyfeiriadur yn bodoli, gallwn ddefnyddio
`os.path.exists`.

```python
os.path.exists('photos')
```

```python
os.path.exists('photos/apr-2023')
```

I wirio a yw llwybr yn cyfeirio at ffeil neu gyfeiriadur, gallwn ddefnyddio
`isdir`, sy'n dychwelyd `True` os yw llwybr yn cyfeirio at gyfeiriadur.

```python
os.path.isdir('photos')
```

Ac `isfile` sy'n dychwelyd `True` os yw llwybr yn cyfeirio at ffeil.

```python
os.path.isfile('photos/notes.txt')
```

Un her wrth weithio gyda llwybrau yw eu bod yn edrych yn wahanol ar
wahanol systemau gweithredu. Ar macOS a systemau UNIX fel Linux, gwahenir
enwau cyfeiriaduron a ffeiliau mewn llwybr gan flaenslaes, `/`. Mae Windows
yn defnyddio ôl-slaes, `\`. Felly, os rhedwch yr enghreifftiau hyn ar
Windows, fe welwch ôl-slaesys yn y llwybrau, a bydd yn rhaid i chi ddisodli'r
blaenslaesys yn yr enghreifftiau.

Neu, i ysgrifennu cod sy'n gweithio ar y ddwy system, gallwch ddefnyddio
`os.path.join`, sy'n cydio enwau cyfeiriadur a ffeil mewn llwybr gan
ddefnyddio blaenslaes neu ôl-slaes, yn dibynnu ar ba system weithredu rydych
yn ei defnyddio.

```python
os.path.join('photos', 'jan-2023', 'photo1.jpg')
```

Yn ddiweddarach yn y bennod hon byddwn yn defnyddio'r swyddogaethau hyn i
chwilio set o gyfeiriaduron a darganfod yr holl ffeiliau delwedd.

## Llinynnau-f

Un ffordd i raglenni storio data yw ei ysgrifennu i ffeil destun. Er
enghraifft, tybiwch eich bod yn wyliwr camelod, a'ch bod am gofnodi nifer y
camelod rydych wedi'u gweld yn ystod cyfnod o arsylwi. A thybiwch, mewn
blwyddyn a hanner, eich bod wedi gweld `23` camel. Gallai'r data yn eich
llyfr gwylio camelod edrych fel hyn.

```python
num_years = 1.5
num_camels = 23
```

I ysgrifennu'r data hwn i ffeil, gallwch ddefnyddio'r dull `write`, a
welsom ym Mhennod 8. Mae'n rhaid i ddadl `write` fod yn llinyn, felly os
ydym am roi gwerthoedd eraill mewn ffeil, mae'n rhaid i ni eu trosi'n
llinynnau. Y ffordd hawsaf o wneud hynny yw gyda'r swyddogaeth gynhenid
`str`.

Dyma sut mae'n edrych:

```python
writer = open('camel-spotting-book.txt', 'w')
writer.write(str(num_years))
writer.write(str(num_camels))
writer.close()
```

Mae hynny'n gweithio, ond nid yw `write` yn ychwanegu bwlch na llinell
newydd oni bai eich bod yn ei gynnwys yn benodol. Os darllenwn y ffeil yn
ôl, gwelwn fod y ddau rif wedi'u rhedeg at ei gilydd.

```python
open('camel-spotting-book.txt').read()
```

Ar y lleiaf, dylem ychwanegu bwlch gwyn rhwng y rhifau. A tra byddwn wrthi,
gadewch i ni ychwanegu peth testun esboniadol.

I ysgrifennu cyfuniad o linynnau a gwerthoedd eraill, gallwn ddefnyddio
**{term}`llinyn-f`**, sef llinyn sydd â'r llythyren `f` cyn y dyfynnod
agoriadol, ac sy'n cynnwys un mynegiad Python neu fwy mewn cromfachau
cyrliog. Mae'r llinyn-f canlynol yn cynnwys un mynegiad, sef enw newidyn.

```python
f'I have spotted {num_camels} camels'
```

Llinyn lle mae'r mynegiad wedi'i werthuso a'i ddisodli â'r canlyniad yw'r
canlyniad. Gall fod mwy nag un mynegiad.

```python
f'In {num_years} years I have spotted {num_camels} camels'
```

A gall y mynegiadau gynnwys gweithredyddion a galwadau swyddogaeth.

```python
line = f'In {round(num_years * 12)} months I have spotted {num_camels} camels'
line
```

Felly gallem ysgrifennu'r data i ffeil destun fel hyn.

```python
writer = open('camel-spotting-book.txt', 'w')
writer.write(f'Years of observation: {num_years}\n')
writer.write(f'Camels spotted: {num_camels}\n')
writer.close()
```

Mae'r ddau linyn-f yn gorffen gyda'r dilyniant `\n`, sy'n ychwanegu nod
llinell newydd.

Gallwn ddarllen y ffeil yn ôl fel hyn:

```python
data = open('camel-spotting-book.txt').read()
print(data)
```

Mewn llinyn-f, trosir mynegiad mewn cromfachau cyrliog yn llinyn, felly
gallwch gynnwys rhestri, geiriaduron, a mathau eraill.

```python
t = [1, 2, 3]
d = {'one': 1}
f'Here is a list {t} and a dictionary {d}'
```

Os yw llinyn-f yn cynnwys mynegiad annilys, gwall yw'r canlyniad.

```python
%%expect TypeError

f'This is not a valid expression {t + 2}'
```

## YAML

Un o'r rhesymau mae rhaglenni'n darllen ac yn ysgrifennu ffeiliau yw i
storio **{term}`data cyfluniad`**, sef gwybodaeth sy'n nodi beth y dylai'r
rhaglen ei wneud a sut.

Er enghraifft, mewn rhaglen sy'n chwilio am luniau dyblyg, efallai y bydd
gennym eiriadur o'r enw `config` sy'n cynnwys enw'r cyfeiriadur i'w chwilio,
enw cyfeiriadur arall lle dylai storio'r canlyniadau, a rhestr o estyniadau
ffeil y dylai eu defnyddio i adnabod ffeiliau delwedd.

Dyma sut y gallai edrych:

```python
config = {
    'photo_dir': 'photos',
    'data_dir': 'photo_info',
    'extensions': ['jpg', 'jpeg'],
}
```

I ysgrifennu'r data hwn mewn ffeil destun, gallem ddefnyddio llinynnau-f,
fel yn yr adran flaenorol. Ond mae'n haws defnyddio modiwl o'r enw `yaml`
sydd wedi'i ddylunio ar gyfer union y math hwn o beth.

Mae'r modiwl `yaml` yn darparu swyddogaethau i weithio gyda ffeiliau YAML,
sef ffeiliau testun wedi'u fformatio i fod yn hawdd i bobl *a* rhaglenni eu
darllen a'u hysgrifennu.

Dyma enghraifft sy'n defnyddio'r swyddogaeth `dump` i ysgrifennu'r geiriadur
`config` i ffeil YAML.

```python
# this cell installs the pyyaml package, which provides the yaml module

try:
    import yaml
except ImportError:
    !pip install pyyaml
```

```python
import yaml

config_filename = 'config.yaml'
writer = open(config_filename, 'w')
yaml.dump(config, writer)
writer.close()
```

Os darllenwn gynnwys y ffeil yn ôl, gallwn weld sut mae'r fformat YAML yn
edrych.

```python
readback = open(config_filename).read()
print(readback)
```

Nawr, gallwn ddefnyddio `safe_load` i ddarllen y ffeil YAML yn ôl.

```python
reader = open(config_filename)
config_readback = yaml.safe_load(reader)
config_readback
```

Geiriadur newydd sy'n cynnwys yr un wybodaeth â'r gwreiddiol yw'r canlyniad,
ond nid yr un geiriadur ydyw.

```python
config is config_readback
```

Gelwir trosi gwrthrych fel geiriadur yn llinyn yn **{term}`cyfresu`**.
Gelwir trosi'r llinyn yn ôl yn wrthrych yn **{term}`dadgyfresu`**. Os
cyfresoch ac yna dadgyfresu gwrthrych, dylai'r canlyniad fod yn gyfwerth
â'r gwreiddiol.

## Shelve

Hyd yn hyn rydym wedi bod yn darllen ac yn ysgrifennu ffeiliau testun —
nawr gadewch i ni ystyried cronfeydd data. Mae **{term}`cronfa ddata`** yn
ffeil sydd wedi'i threfnu ar gyfer storio data. Mae rhai cronfeydd data
wedi'u trefnu fel tabl gyda rhesi a cholofnau o wybodaeth. Mae eraill
wedi'u trefnu fel geiriadur sy'n mapio o allweddi i werthoedd; fe'u gelwir
weithiau'n **{term}`storfa allwedd-gwerth`**oedd.

Mae'r modiwl `shelve` yn darparu swyddogaethau ar gyfer creu a diweddaru
storfa allwedd-gwerth o'r enw "silff". Fel enghraifft, byddwn yn creu silff
i gynnwys capsiynau ar gyfer y ffigurau yn y cyfeiriadur `photos`. Byddwn
yn defnyddio'r geiriadur `config` i gael enw'r cyfeiriadur lle dylem roi'r
silff.

```python
config['data_dir']
```

Gallwn ddefnyddio `os.makedirs` i greu'r cyfeiriadur hwn, os nad yw eisoes
yn bodoli.

```python
os.makedirs(config['data_dir'], exist_ok=True)
```

A `os.path.join` i wneud llwybr sy'n cynnwys enw'r cyfeiriadur ac enw ffeil
y silff, `captions`.

```python
db_file = os.path.join(config['data_dir'], 'captions')
db_file
```

Nawr gallwn ddefnyddio `shelve.open` i agor ffeil y silff. Mae'r ddadl `c`
yn nodi y dylid creu'r ffeil os oes angen.

```python
import shelve

db = shelve.open(db_file, 'c')
db
```

Os cewch wall fel `db type could not be determined`, yr achos mwyaf
tebygol yw bod ffeil â'r un enw eisoes yn bodoli ond nad yw'n gronfa ddata
shelve ddilys (er enghraifft, efallai ei bod wedi'i llygru neu ei chreu gan
rywbeth arall).

Yn yr achos hwnnw, y datrysiad symlaf yw dileu'r ffeil bresennol a rhedeg y
cod eto fel y gall `shelve.open` greu cronfa ddata newydd.

Yn swyddogol, gwrthrych `DbfilenameShelf` yw'r gwerth dychwelyd, a elwir yn
fwy achlysurol yn wrthrych silff.

Mae'r gwrthrych silff yn ymddwyn mewn sawl ffordd fel geiriadur. Er
enghraifft, gallwn ddefnyddio'r gweithredydd cromfachau i ychwanegu eitem,
sef mapio o allwedd i werth.

```python
key = 'jan-2023/photo1.jpg' 
db[key] = 'Cat nose'
```

Yn yr enghraifft hon, llwybr at ffeil ddelwedd yw'r allwedd a llinyn sy'n
disgrifio'r ddelwedd yw'r gwerth.

Rydym hefyd yn defnyddio'r gweithredydd cromfachau i chwilio am allwedd a
chael y gwerth cyfatebol.

```python
value = db[key]
value
```

Os gwnewch neilltuad arall i allwedd bresennol, mae `shelve` yn disodli'r
hen werth.

```python
db[key] = 'Close up view of a cat nose'
db[key]
```

Mae rhai dulliau geiriadur, fel `keys`, `values` ac `items`, hefyd yn
gweithio gyda gwrthrychau silff.

```python
list(db.keys())
```

```python
list(db.values())
```

Gallwn ddefnyddio'r gweithredydd `in` i wirio a yw allwedd yn ymddangos
yn y silff.

```python
key in db
```

A gallwn ddefnyddio gosodiad `for` i ddolennu drwy'r allweddi.

```python
for key in db:
    print(key, ':', db[key])
```

Fel gyda ffeiliau eraill, dylech gau'r gronfa ddata pan fyddwch wedi
gorffen.

```python
db.close()
```

Nawr os rhestrwn gynnwys y cyfeiriadur data, gwelwn ddwy ffeil.

```python
# When you open a shelve file, a backup file is created that has the suffix `.bak`.
# If you run this notebook more than once, you might see that file left behind.
# This cell removes it so the output shown in the book is correct.

!rm -f photo_info/captions.bak
```

```python
os.listdir(config['data_dir'])
```

Mae `captions.dat` yn cynnwys y data rydym newydd ei storio. Mae
`captions.dir` yn cynnwys gwybodaeth am drefniant y gronfa ddata sy'n ei
gwneud yn fwy effeithlon i'w chyrchu. Mae'r ôl-ddodiad `dir` yn sefyll am
"directory", ond nid oes a wnelo ddim â'r cyfeiriaduron rydym wedi bod yn
gweithio gyda nhw sy'n cynnwys ffeiliau.

(section_storing_data_structure)=
## Storio Strwythurau Data

Yn yr enghraifft flaenorol, llinynnau yw'r allweddi a'r gwerthoedd yn y
silff. Ond gallwn hefyd ddefnyddio silff i gynnwys strwythurau data fel
rhestri a geiriaduron.

Fel enghraifft, gadewch i ni ailymweld â'r enghraifft anagramau o ymarfer
ym Mhennod 11 ({ref}`section_exercise_11`). Cofiwch ein bod wedi gwneud
geiriadur sy'n mapio o linyn wedi'i drefnu o lythrennau i'r rhestr o
eiriau y gellir eu sillafu gyda'r llythrennau hynny. Er enghraifft, mae'r
allwedd `'opst'` yn mapio i'r rhestr `['opts', 'post', 'pots', 'spot',
'stop', 'tops']`.

Byddwn yn defnyddio'r swyddogaeth ganlynol i drefnu llythrennau gair.

```python
def sort_word(word):
    return ''.join(sorted(word))
```

A dyma enghraifft.

```python
word = 'pots'
key = sort_word(word)
key
```

Nawr gadewch i ni agor silff o'r enw `anagram_map`. Mae'r ddadl `'n'` yn
golygu y dylem bob amser greu silff newydd, wag, hyd yn oed os oes un eisoes
yn bodoli.

```python
db = shelve.open('anagram_map', 'n')
```

Nawr gallwn ychwanegu eitem at y silff fel hyn.

```python
db[key] = [word]
db[key]
```

Yn yr eitem hon, llinyn yw'r allwedd a rhestr o linynnau yw'r gwerth.

Nawr tybiwch ein bod yn darganfod gair arall sy'n cynnwys yr un llythrennau,
fel `tops`

```python
word = 'tops'
key = sort_word(word)
key
```

Mae'r allwedd yr un fath â'r enghraifft flaenorol, felly rydym am ychwanegu
ail air at yr un rhestr o linynnau. Dyma sut y byddem yn ei wneud pe bai
`db` yn eiriadur.

```python
db[key].append(word)          # INCORRECT
```

Ond os rhedwn hynny ac yna chwilio am yr allwedd yn y silff, mae'n edrych
fel nad yw wedi'i diweddaru.

```python
db[key]
```

Dyma'r broblem: pan chwiliwn am yr allwedd, cawn restr o linynnau, ond os
addaswn y rhestr o linynnau, nid yw'n effeithio ar y silff. Os ydym am
ddiweddaru'r silff, mae'n rhaid i ni ddarllen yr hen werth, ei ddiweddaru,
ac yna ysgrifennu'r gwerth newydd yn ôl i'r silff.

```python
anagram_list = db[key]
anagram_list.append(word)
db[key] = anagram_list
```

Nawr mae'r gwerth yn y silff wedi'i ddiweddaru.

```python
db[key]
```

Fel ymarfer, gallwch orffen yr enghraifft hon drwy ddarllen y rhestr eiriau
a storio'r holl anagramau mewn silff.

```python
db.close()
```

## Gwirio Ffeiliau Cyfwerth

Nawr gadewch i ni ddychwelyd at nod y bennod hon: chwilio am wahanol
ffeiliau sy'n cynnwys yr un data. Un ffordd o wirio yw darllen cynnwys y
ddwy ffeil a'u cymharu.

Os yw'r ffeiliau'n cynnwys delweddau, mae'n rhaid i ni eu hagor gyda modd
`'rb'`, lle mae `'r'` yn golygu ein bod am ddarllen y cynnwys ac mae `'b'`
yn nodi **{term}`modd deuaidd`**. Mewn modd deuaidd, ni ddehonglir y
cynnwys fel testun — fe'u trinir fel dilyniant o fytiau.

Dyma enghraifft sy'n agor ac yn darllen ffeil ddelwedd.

```python
path1 = 'photos/jan-2023/photo1.jpg'
data1 = open(path1, 'rb').read()
type(data1)
```

Gwrthrych `bytes` yw'r canlyniad o `read` — fel mae'r enw'n awgrymu, mae'n
cynnwys dilyniant o fytiau.

Yn gyffredinol nid yw cynnwys ffeil ddelwedd yn ddarllenadwy i bobl. Ond os
darllenwn gynnwys ail ffeil, gallwn ddefnyddio'r gweithredydd `==` i
gymharu.

```python
path2 = 'photos/jan-2023/photo2.jpg'
data2 = open(path2, 'rb').read()
data1 == data2
```

Nid yw'r ddwy ffeil hyn yn gyfwerth.

Gadewch i ni amgáu'r hyn sydd gennym hyd yn hyn mewn swyddogaeth.

```python
def same_contents(path1, path2):
    data1 = open(path1, 'rb').read()
    data2 = open(path2, 'rb').read()
    return data1 == data2
```

Os mai dim ond dwy ffeil sydd gennym, mae'r swyddogaeth hon yn ddewis da.
Ond tybiwch fod gennym nifer fawr o ffeiliau a'n bod am wybod a oes unrhyw
ddwy ohonynt yn cynnwys yr un data. Byddai'n aneffeithlon cymharu pob pâr o
ffeiliau.

Dewis amgen yw defnyddio swyddogaeth hash, sy'n cymryd cynnwys ffeil ac yn
cyfrifo **{term}`crynodeb`**, sydd fel arfer yn gyfanrif mawr. Os yw dwy
ffeil yn cynnwys yr un data, bydd ganddynt yr un crynodeb. Os yw dwy ffeil
yn wahanol, *bron bob amser* bydd ganddynt wahanol grynodebau.

Mae'r modiwl `hashlib` yn darparu sawl swyddogaeth hash — yr un y byddwn
yn ei defnyddio yw `md5`. Byddwn yn dechrau drwy ddefnyddio `hashlib.md5`
i greu gwrthrych `HASH`.

```python
import hashlib

md5_hash = hashlib.md5()
type(md5_hash)
```

(section_md5_digest)=
Mae'r gwrthrych `HASH` yn darparu dull `update` sy'n cymryd cynnwys y
ffeil fel dadl.

```python
md5_hash.update(data1)
```

Nawr gallwn ddefnyddio `hexdigest` i gael y crynodeb fel llinyn o ddigidau
hecsadegol sy'n cynrychioli cyfanrif yn sail 16.

```python
digest = md5_hash.hexdigest()
digest
```

Mae'r swyddogaeth ganlynol yn amgáu'r camau hyn.

```python
def md5_digest(filename):
    data = open(filename, 'rb').read()
    md5_hash = hashlib.md5()
    md5_hash.update(data)
    digest = md5_hash.hexdigest()
    return digest
```

Os hasiwn gynnwys ffeil wahanol, gallwn gadarnhau ein bod yn cael crynodeb
gwahanol.

```python
filename2 = 'photos/feb-2023/photo2.jpg'
md5_digest(filename2)
```

Nawr mae gennym bron bopeth sydd ei angen arnom i ddarganfod ffeiliau
cyfwerth. Y cam olaf yw chwilio cyfeiriadur a darganfod yr holl ffeiliau
delwedd.

(section_walking_directories)=
## Cerdded Cyfeiriaduron

Mae'r swyddogaeth ganlynol yn cymryd fel dadl y cyfeiriadur rydym am ei
chwilio. Mae'n defnyddio `listdir` i ddolennu drwy gynnwys y cyfeiriadur.
Pan ddarganfyddir ffeil, mae'n argraffu ei llwybr cyflawn. Pan ddarganfyddir
cyfeiriadur, mae'n galw ei hun yn ddychweliadol i chwilio'r is-gyfeiriadur.

```python
def walk(dirname):
    for name in os.listdir(dirname):
        path = os.path.join(dirname, name)

        if os.path.isfile(path):
            print(path)
        elif os.path.isdir(path):
            walk(path)
```

Gallwn ei defnyddio fel hyn:

```python
walk('photos')
```

Mae trefn y canlyniadau'n dibynnu ar fanylion y system weithredu.

## Dadnamu

Pan fyddwch yn darllen ac yn ysgrifennu ffeiliau, efallai y dowch ar draws
problemau gyda bylchau gwyn. Gall y gwallau hyn fod yn anodd eu dadnamu am
fod nodau bwlch gwyn fel arfer yn anweledig. Er enghraifft, dyma linyn
sy'n cynnwys bylchau, tab a gynrychiolir gan y dilyniant `\t`, a llinell
newydd a gynrychiolir gan y dilyniant `\n`. Pan argraffwn ef, nid ydym yn
gweld y nodau bwlch gwyn.

```python
s = '1 2\t 3\n 4'
print(s)
```

Gall y swyddogaeth gynhenid `repr` helpu. Mae'n cymryd unrhyw wrthrych fel
dadl ac yn dychwelyd cynrychiolaeth linyn o'r gwrthrych. Ar gyfer
llinynnau, mae'n cynrychioli nodau bwlch gwyn gyda dilyniannau slaes
wrthol.

```python
print(repr(s))
```

Gall hyn fod yn ddefnyddiol ar gyfer dadnamu.

Problem arall y gallech ddod ar ei thraws yw bod gwahanol systemau'n
defnyddio gwahanol nodau i nodi diwedd llinell. Mae rhai systemau'n
defnyddio llinell newydd, a gynrychiolir fel `\n`. Mae eraill yn defnyddio
nod dychwel, a gynrychiolir fel `\r`. Mae rhai'n defnyddio'r ddau. Os
symudwch ffeiliau rhwng gwahanol systemau, gall yr anghysondebau hyn
achosi problemau.

Mae priflythrennu enwau ffeiliau yn fater arall y gallech ddod ar ei draws
os gweithiwch gyda gwahanol systemau gweithredu. Ar macOS a UNIX, gall
enwau ffeiliau gynnwys llythrennau bach a phriflythrennau, digidau, a'r
rhan fwyaf o symbolau. Ond mae llawer o gymwysiadau Windows yn anwybyddu'r
gwahaniaeth rhwng llythrennau bach a phriflythrennau, ac nid yw sawl
symbol a ganiateir yn macOS a UNIX yn cael eu caniatáu yn Windows.

## Rhestr Termau'r Bennod

**darfodedig:**
Mae rhaglen ddarfodedig fel arfer yn rhedeg am gyfnod byr a, phan ddaw i
ben, collir ei data.

**parhaus:**
Mae rhaglen barhaus yn rhedeg yn ddiddiwedd ac yn cadw o leiaf rhywfaint
o'i data mewn storfa barhaol.

**cyfeiriadur:**
Casgliad o ffeiliau a chyfeiriaduron eraill.

**cyfeiriadur gwaith cyfredol:**
Y cyfeiriadur rhagosodedig a ddefnyddir gan raglen oni nodir cyfeiriadur
arall.

**llwybr:**
Llinyn sy'n nodi dilyniant o gyfeiriaduron, yn aml yn arwain at ffeil.

**llwybr cymharol:**
Llwybr sy'n dechrau o'r cyfeiriadur gwaith cyfredol, neu gyfeiriadur
penodol arall.

**llwybr absoliwt:**
Llwybr nad yw'n dibynnu ar y cyfeiriadur cyfredol.

**llinyn-f:**
Llinyn sydd â'r llythyren `f` cyn y dyfynnod agoriadol, ac sy'n cynnwys un
mynegiad neu fwy mewn cromfachau cyrliog.

**data cyfluniad:**
Data, wedi'u storio mewn ffeil yn aml, sy'n nodi beth y dylai rhaglen ei
wneud a sut.

**cyfresu:**
Trosi gwrthrych yn llinyn.

**dadgyfresu:**
Trosi llinyn yn wrthrych.

**cronfa ddata:**
Ffeil y mae ei chynnwys wedi'i drefnu i berfformio gweithrediadau penodol
yn effeithlon.

**storfa allwedd-gwerth:**
Cronfa ddata y mae ei chynnwys wedi'i drefnu fel geiriadur ag allweddi
sy'n cyfateb i werthoedd.

**modd deuaidd:**
Ffordd o agor ffeil fel y dehonglir y cynnwys fel dilyniant o fytiau yn
hytrach na dilyniant o nodau.

**swyddogaeth hash:**
Swyddogaeth sy'n cymryd gwrthrych ac yn cyfrifo cyfanrif, a elwir weithiau
yn grynodeb.

**crynodeb:**
Canlyniad swyddogaeth hash, yn enwedig pan ddefnyddir ef i wirio a yw dau
wrthrych yr un fath.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Mae sawl pwnc a gododd yn y bennod hon na wnes i eu hesbonio'n fanwl. Dyma
rai cwestiynau y gallwch eu gofyn i gynorthwyydd rhithwir i gael rhagor o
wybodaeth.

* "Beth yw'r gwahaniaethau rhwng rhaglenni darfodedig a pharhaus?"

* "Beth yw rhai enghreifftiau o raglenni parhaus?"

* "Beth yw'r gwahaniaeth rhwng llwybr cymharol a llwybr absoliwt?"

* "Pam mae gan y modiwl `yaml` swyddogaethau o'r enw `load` a `safe_load`?"

* "Pan ysgrifennaf silff Python, beth yw'r ffeiliau ag ôl-ddodiadau `dat` a
  `dir`?"

* "Heblaw storfeydd allwedd-gwerth, pa fathau eraill o gronfeydd data sydd
  yna?"

* "Pan ddarllenaf ffeil, beth yw'r gwahaniaeth rhwng modd deuaidd a modd
  testun?"

* "Beth yw'r gwahaniaethau rhwng gwrthrych bytes a llinyn?"

* "Beth yw swyddogaeth hash?"

* "Beth yw crynodeb MD5?"

Fel arfer, os ewch yn sownd ar unrhyw un o'r ymarferion canlynol, ystyriwch
ofyn i gynorthwyydd rhithwir am help. Ynghyd â'ch cwestiwn, efallai yr
hoffech ludo'r swyddogaethau perthnasol o'r bennod hon.

### Ymarfer

Ysgrifennwch swyddogaeth o'r enw `replace_all` sy'n cymryd fel dadleuon
linyn patrwm, llinyn disodli, a dau enw ffeil. Dylai ddarllen y ffeil
gyntaf ac ysgrifennu'r cynnwys i'r ail ffeil (gan ei chreu os oes angen).
Os yw'r llinyn patrwm yn ymddangos yn unrhyw le yn y cynnwys, dylid ei
ddisodli â'r llinyn disodli.

Dyma amlinelliad o'r swyddogaeth i'ch helpu ddechrau.

```python
def replace_all(old, new, source_path, dest_path):
    # read the contents of the source file
    reader = open(source_path)

    # replace the old string with the new
    
    # write the result into the destination file
    
```

```python
# Ateb yma
```

I brofi eich swyddogaeth, darllenwch y ffeil `photos/notes.txt`, disodli
`'photos'` â `'images'`, ac ysgrifennu'r canlyniad i'r ffeil
`photos/new_notes.txt`.

```python
source_path = 'photos/notes.txt'
open(source_path).read()
```

```python
dest_path = 'photos/new_notes.txt'
old = 'photos'
new = 'images'
replace_all(old, new, source_path, dest_path)
```

```python
open(dest_path).read()
```

### Ymarfer

Mewn adran flaenorol ({ref}`section_storing_data_structure`), fe wnaethom
ddefnyddio'r modiwl `shelve` i wneud storfa allwedd-gwerth sy'n mapio o
linyn wedi'i drefnu o lythrennau i restr o anagramau. I orffen yr
enghraifft, ysgrifennwch swyddogaeth o'r enw `add_word` sy'n cymryd fel
dadleuon linyn a gwrthrych silff.

Dylai drefnu llythrennau'r gair i wneud allwedd, yna gwirio a yw'r allwedd
eisoes yn y silff. Os nad yw, dylai wneud rhestr sy'n cynnwys y gair newydd
a'i hychwanegu at y silff. Os yw, dylai ychwanegu'r gair newydd at y gwerth
presennol.

```python
# Ateb yma
```

Gallwch ddefnyddio'r ddolen hon i brofi eich swyddogaeth.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt');
```

```python
word_list = open('words.txt').read().split()

db = shelve.open('anagram_map', 'n')
for word in word_list:
    add_word(word, db)
```

Os yw popeth yn gweithio, dylech allu chwilio am allwedd fel `'opst'` a
chael rhestr o eiriau y gellir eu sillafu gyda'r llythrennau hynny.

```python
db['opst']
```

```python
for key, value in db.items():
    if len(value) > 8:
        print(value)
```

```python
db.close()
```

### Ymarfer

Mewn casgliad mawr o ffeiliau, efallai y bydd mwy nag un copi o'r un ffeil,
wedi'u storio mewn gwahanol gyfeiriaduron neu gydag enwau ffeil gwahanol.
Nod yr ymarfer hwn yw chwilio am ddyblygiadau. Fel enghraifft, byddwn yn
gweithio gyda ffeiliau delwedd yn y cyfeiriadur `photos`.

Dyma sut y bydd yn gweithio:

* Byddwn yn defnyddio'r swyddogaeth `walk` o'r adran ar gerdded cyfeiriaduron
  ({ref}`section_walking_directories`) i chwilio'r cyfeiriadur hwn am
  ffeiliau sy'n gorffen gydag un o'r estyniadau yn `config['extensions']`.

* Ar gyfer pob ffeil, byddwn yn defnyddio `md5_digest`
  ({ref}`uchod <section_md5_digest>`) i gyfrifo crynodeb o'r cynnwys.

* Gan ddefnyddio silff, byddwn yn gwneud mapio o bob crynodeb i restr o
  lwybrau â'r crynodeb hwnnw.

* Yn olaf, byddwn yn chwilio'r silff am unrhyw grynodebau sy'n mapio i sawl
  ffeil.

* Os darganfyddwn rai, byddwn yn defnyddio `same_contents` i gadarnhau bod
  y ffeiliau'n cynnwys yr un data.

Awgrymaf rai swyddogaethau i'w hysgrifennu'n gyntaf, ac yna byddwn yn dod â
phopeth at ei gilydd.

1. I adnabod ffeiliau delwedd, ysgrifennwch swyddogaeth o'r enw `is_image`
   sy'n cymryd llwybr a rhestr o estyniadau ffeil, ac yn dychwelyd `True`
   os yw'r llwybr yn gorffen gydag un o'r estyniadau yn y rhestr. Awgrym:
   Defnyddiwch `os.path.splitext` — neu gofynnwch i gynorthwyydd rhithwir
   ysgrifennu'r swyddogaeth hon i chi.

```python
# Ateb yma
```

Gallwch ddefnyddio `doctest` i brofi eich swyddogaeth.

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)

run_doctests(is_image)
```

2. Ysgrifennwch swyddogaeth o'r enw `add_path` sy'n cymryd fel dadleuon
   lwybr a silff. Dylai ddefnyddio `md5_digest` i gyfrifo crynodeb o
   gynnwys y ffeil. Yna dylai ddiweddaru'r silff, naill ai drwy greu eitem
   newydd sy'n mapio o'r crynodeb i restr sy'n cynnwys y llwybr, neu drwy
   ychwanegu'r llwybr at y rhestr os yw'n bodoli.

```python
# Ateb yma
```

3. Ysgrifennwch fersiwn o `walk` o'r enw `walk_images` sy'n cymryd
   cyfeiriadur ac yn cerdded drwy'r ffeiliau yn y cyfeiriadur a'i
   is-gyfeiriaduron. Ar gyfer pob ffeil, dylai ddefnyddio `is_image` i
   wirio a yw'n ffeil ddelwedd a `add_path` i'w hychwanegu at y silff.

```python
# Ateb yma
```

Pan fydd popeth yn gweithio, gallwch ddefnyddio'r rhaglen ganlynol i greu'r
silff, chwilio'r cyfeiriadur `photos` ac ychwanegu llwybrau at y silff, ac
yna gwirio a oes sawl ffeil â'r un crynodeb.

```python
db = shelve.open('photos/digests', 'n')
walk_images('photos')

for digest, paths in db.items():
    if len(paths) > 1:
        print(paths)
```

Dylech ddarganfod un pâr o ffeiliau sydd â'r un crynodeb. Defnyddiwch
`same_contents` i wirio a ydynt yn cynnwys yr un data.

```python
# Ateb yma
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
