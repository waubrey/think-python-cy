# Dadansoddi a Chynhyrchu Testun

Erbyn hyn rydym wedi ymdrin â phrif strwythurau data Python — rhestri,
geiriaduron, a thŵpls — a rhai algorithmau sy'n eu defnyddio. Yn y bennod
hon, byddwn yn eu defnyddio i archwilio dadansoddi testun a chynhyrchu
Markov:

* Mae dadansoddi testun yn ffordd o ddisgrifio'r cysylltiadau ystadegol
  rhwng y geiriau mewn dogfen, fel y tebygolrwydd y bydd un gair yn cael ei
  ddilyn gan un arall, a

* Mae cynhyrchu Markov yn ffordd o gynhyrchu testun newydd gyda geiriau ac
  ymadroddion tebyg i'r testun gwreiddiol.

Mae'r algorithmau hyn yn debyg i rannau o Fodel Iaith Fawr (LLM), sef prif
gydran sgwrsfot.

Byddwn yn dechrau drwy gyfrif nifer y troeon y mae pob gair yn ymddangos
mewn llyfr. Yna byddwn yn edrych ar barau o eiriau, a gwneud rhestr o'r
geiriau a all ddilyn pob gair. Byddwn yn gwneud fersiwn syml o gynhyrchydd
Markov, ac fel ymarfer, cewch gyfle i wneud fersiwn fwy cyffredinol.

## Geiriau Unigryw

Fel cam cyntaf tuag at ddadansoddi testun, gadewch i ni ddarllen llyfr —
*The Strange Case Of Dr. Jekyll And Mr. Hyde* gan Robert Louis Stevenson —
a chyfrif nifer y geiriau unigryw. Mae cyfarwyddiadau ar gyfer lawrlwytho'r
llyfr yn llyfr nodiadau'r bennod hon.

Mae'r gell ganlynol yn lawrlwytho'r llyfr o Project Gutenberg.

```python
download('https://github.com/AllenDowney/ThinkPython/raw/v3/pg43.txt');
```

Mae'r fersiwn sydd ar gael o Project Gutenberg yn cynnwys gwybodaeth am y
llyfr ar y dechrau a gwybodaeth am y drwydded ar y diwedd. Byddwn yn
defnyddio `clean_file` o Bennod 8 i dynnu'r deunydd hwn ac ysgrifennu ffeil
"lân" sy'n cynnwys dim ond testun y llyfr.

```python
def is_special_line(line):
    return line.strip().startswith('*** ')
```

```python
def clean_file(input_file, output_file):
    reader = open(input_file, encoding='utf-8')
    writer = open(output_file, 'w', encoding='utf-8')

    for line in reader:
        if is_special_line(line):
            break

    for line in reader:
        if is_special_line(line):
            break
        writer.write(line)
        
    reader.close()
    writer.close()
```

```python
filename = 'dr_jekyll.txt'
```

```python
clean_file('pg43.txt', filename)
```

Byddwn yn defnyddio dolen `for` i ddarllen llinellau o'r ffeil a `split` i
rannu'r llinellau'n eiriau. Yna, i gadw golwg ar eiriau unigryw, byddwn yn
storio pob gair fel allwedd mewn geiriadur.

Nid yw'r ddadl allweddair `encoding='utf-8'` yn y llyfr printiedig. Dim ond
ar Windows mae ei hangen.

```python
unique_words = {}
for line in open(filename, encoding='utf-8'):
    seq = line.split()
    for word in seq:
        unique_words[word] = 1

len(unique_words)
```

Hyd y geiriadur yw nifer y geiriau unigryw — tua `6000` yn ôl y ffordd hon
o gyfrif. Ond os archwiliwn nhw, fe welwn nad yw rhai'n eiriau dilys.

Er enghraifft, gadewch i ni edrych ar y geiriau hiraf yn `unique_words`.
Gallwn ddefnyddio `sorted` i drefnu'r geiriau, gan basio'r swyddogaeth `len`
fel dadl allweddair fel bod y geiriau'n cael eu trefnu yn ôl hyd.

```python
sorted(unique_words, key=len)[-5:]
```

Mae'r mynegai sleisio, `[-5:]`, yn dewis `5` elfen olaf y rhestr wedi'i
threfnu, sef y geiriau hiraf.

Mae'r rhestr yn cynnwys rhai geiriau hir dilys, fel "circumscription", a
rhai geiriau â chysylltnod, fel "chocolate-coloured". Ond mewn gwirionedd,
dau air wedi'u gwahanu gan dasen yw rhai o'r "geiriau" hiraf. Ac mae geiriau
eraill yn cynnwys atalnodi fel atalnodau llawn, ebychnodau, a dyfynodau.

Felly, cyn i ni symud ymlaen, gadewch i ni ymdrin â thasennau ac atalnodi
arall.

## Atalnodi

I adnabod y geiriau yn y testun, mae angen i ni ymdrin â dau fater:

* Pan fydd tasen yn ymddangos mewn llinell, dylem ei disodli â bwlch —
  yna pan ddefnyddiwn `split`, bydd y geiriau wedi'u gwahanu.

* Ar ôl rhannu'r geiriau, gallwn ddefnyddio `strip` i dynnu atalnodi.

I ymdrin â'r mater cyntaf, gallwn ddefnyddio'r swyddogaeth ganlynol, sy'n
cymryd llinyn, yn disodli tasennau â bylchau, yn rhannu'r llinyn, ac yn
dychwelyd y rhestr sy'n deillio o hynny.

```python
def split_line(line):
    return line.replace('—', ' ').split()
```

Sylwch mai dim ond tasennau, nid cysylltnodau, y mae `split_line` yn eu
disodli. Dyma enghraifft.

```python
split_line('coolness—frightened')
```

Nawr, i dynnu atalnodi o ddechrau a diwedd pob gair, gallwn ddefnyddio
`strip`, ond mae angen rhestr o nodau a ystyrir yn atalnodi.

Mae nodau mewn llinynnau Python yn Unicode, sef safon ryngwladol a
ddefnyddir i gynrychioli llythrennau mewn bron pob gwyddor, rhifau,
symbolau, arwyddion atalnodi, a mwy. Mae'r modiwl `unicodedata` yn darparu
swyddogaeth `category` y gallwn ei defnyddio i ddweud pa nodau sy'n
atalnodi. O gael llythyren, mae'n dychwelyd llinyn gyda gwybodaeth am ba
gategori y mae'r llythyren ynddo.

```python
import unicodedata

unicodedata.category('A')
```

Llinyn categori `'A'` yw `'Lu'` — mae'r `'L'` yn golygu ei bod yn llythyren
ac mae'r `'u'` yn golygu ei bod yn briflythyren.

Llinyn categori `'.'` yw `'Po'` — mae'r `'P'` yn golygu ei bod yn atalnodi
ac mae'r `'o'` yn golygu bod ei his-gategori yn "arall".

```python
unicodedata.category('.')
```

Gallwn ddarganfod yr arwyddion atalnodi yn y llyfr drwy wirio am nodau â
chategorïau sy'n dechrau gyda `'P'`. Mae'r ddolen ganlynol yn storio'r
arwyddion atalnodi unigryw mewn geiriadur.

```python
punc_marks = {}
for line in open(filename, encoding='utf-8'):
    for char in line:
        category = unicodedata.category(char)
        if category.startswith('P'):
            punc_marks[char] = 1
```

I wneud rhestr o arwyddion atalnodi, gallwn gydio allweddi'r geiriadur yn
llinyn.

```python
punctuation = ''.join(punc_marks)
print(punctuation)
```

Nawr ein bod yn gwybod pa nodau yn y llyfr sy'n atalnodi, gallwn ysgrifennu
swyddogaeth sy'n cymryd gair, yn tynnu atalnodi o'r dechrau a'r diwedd, ac
yn ei drosi'n llythrennau bach.

```python
def clean_word(word):
    return word.strip(punctuation).lower()
```

Dyma enghraifft.

```python
clean_word('“Behold!”')
```

Am fod `strip` yn tynnu nodau o'r dechrau a'r diwedd, mae'n gadael geiriau
â chysylltnod ar eu pen eu hun.

```python
clean_word('pocket-handkerchief')
```

Nawr dyma ddolen sy'n defnyddio `split_line` a `clean_word` i adnabod y
geiriau unigryw yn y llyfr.

```python
unique_words2 = {}
for line in open(filename, encoding='utf-8'):
    for word in split_line(line):
        word = clean_word(word)
        unique_words2[word] = 1

len(unique_words2)
```

Gyda'r diffiniad caethach hwn o'r hyn yw gair, mae tua 4000 o eiriau
unigryw. A gallwn gadarnhau bod y rhestr o eiriau hiraf wedi'i glanhau.

```python
sorted(unique_words2, key=len)[-5:]
```

Nawr gadewch i ni weld sawl gwaith y defnyddir pob gair.

## Amlder Geiriau

Mae'r ddolen ganlynol yn cyfrifo amlder pob gair unigryw.

```python
word_counter = {}
for line in open(filename, encoding='utf-8'):
    for word in split_line(line):
        word = clean_word(word)
        if word not in word_counter:
            word_counter[word] = 1
        else:
            word_counter[word] += 1
```

Y tro cyntaf i ni weld gair, rydym yn cychwyn ei amlder i `1`. Os gwelwn yr
un gair eto'n ddiweddarach, rydym yn cynyddu ei amlder.

I weld pa eiriau sy'n ymddangos amlaf, gallwn ddefnyddio `items` i gael y
parau allwedd-gwerth o `word_counter`, a'u trefnu yn ôl ail elfen y pâr,
sef yr amlder. Yn gyntaf byddwn yn diffinio swyddogaeth sy'n dewis yr ail
elfen.

```python
def second_element(t):
    return t[1]
```

Nawr gallwn ddefnyddio `sorted` gyda dwy ddadl allweddair:

* Mae `key=second_element` yn golygu y trefnir yr eitemau yn ôl amlder y
  geiriau.

* Mae `reverse=True` yn golygu y trefnir yr eitemau mewn trefn wrthdro,
  gyda'r geiriau mwyaf aml yn gyntaf.

```python
items = sorted(word_counter.items(), key=second_element, reverse=True)
```

Dyma'r pum gair mwyaf aml.

```python
for word, freq in items[:5]:
    print(freq, word, sep='\t')
```

Yn yr adran nesaf, byddwn yn amgáu'r ddolen hon mewn swyddogaeth. A byddwn
yn ei defnyddio i ddangos nodwedd newydd — paramedrau dewisol.

## Paramedrau Dewisol

Rydym wedi defnyddio swyddogaethau cynhenid sy'n cymryd paramedrau
dewisol. Er enghraifft, mae `round` yn cymryd paramedr dewisol o'r enw
`ndigits` sy'n nodi faint o leoedd degol i'w cadw.

```python
round(3.141592653589793, ndigits=3)
```

Ond nid dim ond swyddogaethau cynhenid — gallwn ysgrifennu swyddogaethau â
pharamedrau dewisol, hefyd. Er enghraifft, mae'r swyddogaeth ganlynol yn
cymryd dau baramedr, `word_counter` ac `num`.

```python
def print_most_common(word_counter, num=5):
    items = sorted(word_counter.items(), key=second_element, reverse=True)

    for word, freq in items[:num]:
        print(freq, word, sep='\t')
```

Mae'r ail baramedr yn edrych fel gosodiad neilltuad, ond nid yw — paramedr
dewisol ydyw.

Os galwch y swyddogaeth hon gydag un ddadl, mae `num` yn cael y
**{term}`gwerth rhagosodedig`**, sef `5`.

```python
print_most_common(word_counter)
```

Os galwch y swyddogaeth hon gyda dwy ddadl, neilltuir yr ail ddadl i `num`
yn lle'r gwerth rhagosodedig.

```python
print_most_common(word_counter, 3)
```

Yn yr achos hwnnw, byddem yn dweud bod y ddadl ddewisol yn **{term}`disodli`**
y gwerth rhagosodedig.

Os oes gan swyddogaeth baramedrau gofynnol a dewisol, mae'n rhaid i bob un
o'r paramedrau gofynnol ddod yn gyntaf, wedi'u dilyn gan y rhai dewisol.

```python
%%expect SyntaxError

def bad_function(n=5, word_counter):
    return None
```

## Tynnu Geiriaduron

Tybiwch ein bod am sillafwirio llyfr — hynny yw, darganfod rhestr o eiriau
a allai fod wedi'u camsillafu. Un ffordd o wneud hynny yw darganfod geiriau
yn y llyfr nad ydynt yn ymddangos mewn rhestr o eiriau dilys. Mewn penodau
blaenorol, rydym wedi defnyddio rhestr o eiriau a ystyrir yn ddilys mewn
gemau geiriau fel Scrabble. Nawr byddwn yn defnyddio'r rhestr hon i
sillafwirio Robert Louis Stevenson.

Gallwn feddwl am y broblem hon fel tynnu setiau — hynny yw, rydym am
ddarganfod yr holl eiriau o un set (y geiriau yn y llyfr) nad ydynt yn y
llall (y geiriau yn y rhestr).

Mae'r gell ganlynol yn lawrlwytho'r rhestr eiriau.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/words.txt');
```

Fel rydym wedi'i wneud o'r blaen, gallwn ddarllen cynnwys `words.txt` a'i
rannu'n rhestr o linynnau.

```python
word_list = open('words.txt').read().split()
```

Yna byddwn yn storio'r geiriau fel allweddi mewn geiriadur fel y gallwn
ddefnyddio'r gweithredydd `in` i wirio'n gyflym a yw gair yn ddilys.

```python
valid_words = {}
for word in word_list:
    valid_words[word] = 1
```

Nawr, i adnabod geiriau sy'n ymddangos yn y llyfr ond nid yn y rhestr
eiriau, byddwn yn defnyddio `subtract`, sy'n cymryd dau eiriadur fel
paramedrau ac yn dychwelyd geiriadur newydd sy'n cynnwys yr holl allweddi o'r
naill nad ydynt yn y llall.

```python
def subtract(d1, d2):
    res = {}
    for key in d1:
        if key not in d2:
            res[key] = d1[key]
    return res
```

Dyma sut rydym yn ei defnyddio.

```python
diff = subtract(word_counter, valid_words)
```

I gael sampl o eiriau a allai fod wedi'u camsillafu, gallwn argraffu'r
geiriau mwyaf cyffredin yn `diff`.

```python
print_most_common(diff)
```

Mae'r rhan fwyaf o'r geiriau "camsillafedig" mwyaf cyffredin yn enwau a
rhai geiriau un-llythyren (mae Mr. Utterson yn gyfaill a chyfreithiwr Dr.
Jekyll).

Os dewiswn eiriau sy'n ymddangos unwaith yn unig, maent yn fwy tebygol o
fod yn gamgymeriadau sillafu gwirioneddol. Gallwn wneud hynny drwy ddolennu
drwy'r eitemau a gwneud rhestr o eiriau ag amlder `1`.

```python
singletons = []
for word, freq in diff.items():
    if freq == 1:
        singletons.append(word)
```

Dyma'r ychydig elfennau olaf o'r rhestr.

```python
singletons[-5:]
```

Mae'r rhan fwyaf ohonynt yn eiriau dilys nad ydynt yn y rhestr eiriau. Ond
mae'n ymddangos bod `'reindue'` yn gamsillafiad o `'reinduce'`, felly o
leiaf fe wnaethom ddarganfod un gwall go iawn.

## Rhifau Ar Hap

Fel cam tuag at gynhyrchu testun Markov, nesaf byddwn yn dewis dilyniant ar
hap o eiriau o `word_counter`. Ond yn gyntaf gadewch i ni siarad am
hapgrwydd.

O gael yr un mewnbynnau, mae'r rhan fwyaf o raglenni cyfrifiadurol yn
**{term}`penderfyniadol`**, sy'n golygu eu bod yn cynhyrchu'r un allbynnau
bob tro. Mae penderfynoliaeth fel arfer yn beth da, gan ein bod yn disgwyl
i'r un cyfrifiad roi'r un canlyniad. Ar gyfer rhai cymwysiadau, serch
hynny, rydym am i'r cyfrifiadur fod yn anrhagweladwy. Mae gemau'n un
enghraifft, ond mae mwy.

Mae gwneud rhaglen yn wirioneddol an-benderfyniadol yn anodd, ond mae
ffyrdd o'i ffugio. Un ohonynt yw defnyddio algorithmau sy'n cynhyrchu
rhifau **{term}`ffug-hap`**. Nid yw rhifau ffug-hap yn wirioneddol ar hap am
eu bod yn cael eu cynhyrchu gan gyfrifiant penderfyniadol, ond wrth edrych
ar y rhifau'n unig mae bron yn amhosibl gwahaniaethu rhyngddynt a rhifau ar
hap.

Mae'r modiwl `random` yn darparu swyddogaethau sy'n cynhyrchu rhifau
ffug-hap — y byddaf yn eu galw'n syml "ar hap" o hyn ymlaen. Gallwn ei
fewnforio fel hyn.

```python
import random
```

```python
# this cell initializes the random number generator so it 
# generates the same sequence each time the notebook runs.

random.seed(4)
```

Mae'r modiwl `random` yn darparu swyddogaeth o'r enw `choice` sy'n dewis
elfen o restr ar hap, gyda phob elfen â'r un tebygolrwydd o gael ei dewis.

```python
t = [1, 2, 3]
random.choice(t)
```

Os galwch y swyddogaeth eto, efallai y cewch yr un elfen eto, neu un
wahanol.

```python
random.choice(t)
```

Yn y pen draw, rydym yn disgwyl cael pob elfen tua'r un nifer o weithiau.

Os defnyddiwch `choice` gyda geiriadur, cewch `KeyError`.

```python
%%expect KeyError

random.choice(word_counter)
```

I ddewis allwedd ar hap, mae'n rhaid i chi roi'r allweddi mewn rhestr ac
yna galw `choice`.

```python
words = list(word_counter)
random.choice(words)
```

Os cynhyrchwn ddilyniant ar hap o eiriau, nid yw'n gwneud fawr o synnwyr.

```python
for i in range(6):
    word = random.choice(words)
    print(word, end=' ')
```

Rhan o'r broblem yw nad ydym yn ystyried bod rhai geiriau'n fwy cyffredin
nag eraill. Bydd y canlyniadau'n well os dewiswn eiriau â gwahanol
"bwysau", fel bod rhai'n cael eu dewis yn amlach nag eraill.

Os defnyddiwn y gwerthoedd o `word_counter` fel pwysau, dewisir pob gair â
thebygolrwydd sy'n dibynnu ar ei amlder.

```python
weights = word_counter.values()
```

Mae'r modiwl `random` yn darparu swyddogaeth arall o'r enw `choices` sy'n
cymryd pwysau fel dadl ddewisol.

```python
random.choices(words, weights=weights)
```

Ac mae'n cymryd dadl ddewisol arall, `k`, sy'n nodi nifer y geiriau i'w
dewis.

```python
random_words = random.choices(words, weights=weights, k=6)
random_words
```

Rhestr o linynnau yw'r canlyniad y gallwn eu cydio'n rhywbeth sy'n edrych
yn fwy fel brawddeg.

```python
' '.join(random_words)
```

Os dewiswch eiriau o'r llyfr ar hap, cewch synnwyr o'r eirfa, ond mae
cyfres o eiriau ar hap yn anaml yn gwneud synnwyr am nad oes perthynas rhwng
geiriau olynol. Er enghraifft, mewn brawddeg go iawn rydych yn disgwyl i
fannod fel "the" gael ei dilyn gan ansoddair neu enw, ac yn ôl pob tebyg nid
berf na adferf. Felly'r cam nesaf yw edrych ar y perthnasoedd hyn rhwng
geiriau.

## Deuair

Yn lle edrych ar un gair ar y tro, nawr byddwn yn edrych ar ddilyniannau o
ddau air, a elwir yn **{term}`deuair`**. Gelwir dilyniant o dri gair yn
**{term}`triair`**, a gelwir dilyniant â nifer amhenodol o eiriau yn
**{term}`n-air`**.

Gadewch i ni ysgrifennu rhaglen sy'n darganfod yr holl ddeuair yn y llyfr a
nifer y troeon y mae pob un yn ymddangos. I storio'r canlyniadau, byddwn
yn defnyddio geiriadur lle

* Tŵpls o linynnau sy'n cynrychioli deuair yw'r allweddi, a

* Cyfanrifau sy'n cynrychioli amlderau yw'r gwerthoedd.

Gadewch i ni ei alw'n `bigram_counter`.

```python
bigram_counter = {}
```

Mae'r swyddogaeth ganlynol yn cymryd rhestr o ddau linyn fel paramedr. Yn
gyntaf mae'n gwneud tŵpl o'r ddau linyn, y gellir ei ddefnyddio fel allwedd
mewn geiriadur. Yna mae'n ychwanegu'r allwedd at `bigram_counter`, os nad
yw'n bodoli, neu'n cynyddu'r amlder os yw.

```python
def count_bigram(bigram):
    key = tuple(bigram)
    if key not in bigram_counter:
        bigram_counter[key] = 1
    else:
        bigram_counter[key] += 1
```

Wrth i ni fynd drwy'r llyfr, mae'n rhaid i ni gadw golwg ar bob pâr o
eiriau olynol. Felly os gwelwn y dilyniant "man is not truly one", byddem
yn ychwanegu'r deuair "man is", "is not", "not truly", ac yn y blaen.

I gadw golwg ar y deuair hyn, byddwn yn defnyddio rhestr o'r enw `window`,
am ei bod fel ffenestr sy'n llithro dros dudalennau'r llyfr, gan ddangos
dim ond dau air ar y tro. I ddechrau, mae `window` yn wag.

```python
window = []
```

Byddwn yn defnyddio'r swyddogaeth ganlynol i brosesu'r geiriau un ar y
tro.

```python
def process_word(word):
    window.append(word)
    
    if len(window) == 2:
        count_bigram(window)
        window.pop(0)
```

Y tro cyntaf y gelwir y swyddogaeth hon, mae'n ychwanegu'r gair penodol at
`window`. Gan mai dim ond un gair sydd yn y ffenestr, nid oes gennym
ddeuair eto, felly mae'r swyddogaeth yn dod i ben.

Yr ail dro y'i gelwir — a phob tro wedi hynny — mae'n ychwanegu ail air at
`window`. Gan fod dau air yn y ffenestr, mae'n galw `count_bigram` i gadw
golwg ar sawl gwaith y mae pob deuair yn ymddangos. Yna mae'n defnyddio
`pop` i dynnu'r gair cyntaf o'r ffenestr.

Mae'r rhaglen ganlynol yn dolennu drwy'r geiriau yn y llyfr ac yn eu
prosesu un ar y tro.

```python
for line in open(filename, encoding='utf-8'):
    for word in split_line(line):
        word = clean_word(word)
        process_word(word)
```

Geiriadur sy'n mapio o bob deuair i nifer y troeon y mae'n ymddangos yw'r
canlyniad. Gallwn ddefnyddio `print_most_common` i weld y deuair mwyaf
cyffredin.

```python
print_most_common(bigram_counter)
```

Wrth edrych ar y canlyniadau hyn, gallwn gael synnwyr o ba barau o eiriau
sy'n fwyaf tebygol o ymddangos gyda'i gilydd. Gallwn hefyd ddefnyddio'r
canlyniadau i gynhyrchu testun ar hap, fel hyn.

```python
random.seed(0)
```

```python
bigrams = list(bigram_counter)
weights = bigram_counter.values()
random_bigrams = random.choices(bigrams, weights=weights, k=6)
```

Rhestr o'r deuair sy'n ymddangos yn y llyfrau yw `bigrams`. Rhestr o'u
hamlderau yw `weights`, felly mae `random_bigrams` yn sampl lle mae'r
tebygolrwydd y dewisir deuair yn gymesur â'i amlder.

Dyma'r canlyniadau.

```python
for pair in random_bigrams:
    print(' '.join(pair), end=' ')
```

Mae'r ffordd hon o gynhyrchu testun yn well na dewis geiriau ar hap, ond
nid yw'n gwneud llawer o synnwyr o hyd.

## Dadansoddiad Markov

Gallwn wneud yn well gyda dadansoddiad testun cadwyn Markov, sy'n cyfrifo,
ar gyfer pob gair mewn testun, y rhestr o eiriau sy'n dod nesaf. Fel
enghraifft, byddwn yn dadansoddi'r geiriau hyn o gân Monty Python *Eric,
the Half a Bee*:

```python
song = """
Half a bee, philosophically,
Must, ipso facto, half not be.
But half the bee has got to be
Vis a vis, its entity. D'you see?
"""
```

I storio'r canlyniadau, byddwn yn defnyddio geiriadur sy'n mapio o bob gair
i'r rhestr o eiriau sy'n ei ddilyn.

```python
successor_map = {}
```

Fel enghraifft, gadewch i ni ddechrau gyda dau air cyntaf y gân.

```python
first = 'half'
second = 'a'
```

Os nad yw'r gair cyntaf yn `successor_map`, mae'n rhaid i ni ychwanegu
eitem newydd sy'n mapio o'r gair cyntaf i restr sy'n cynnwys yr ail air.

```python
successor_map[first] = [second]
successor_map
```

Os yw'r gair cyntaf eisoes yn y geiriadur, gallwn chwilio amdano i gael y
rhestr o olynwyr rydym wedi'u gweld hyd yn hyn, ac ychwanegu'r un newydd.

```python
first = 'half'
second = 'not'

successor_map[first].append(second)
successor_map
```

Mae'r swyddogaeth ganlynol yn amgáu'r camau hyn.

```python
def add_bigram(bigram):
    first, second = bigram
    
    if first not in successor_map:
        successor_map[first] = [second]
    else:
        successor_map[first].append(second)
```

Os yw'r un deuair yn ymddangos fwy nag unwaith, ychwanegir yr ail air at y
rhestr fwy nag unwaith. Fel hyn, mae `successor_map` yn cadw golwg ar sawl
gwaith y mae pob olynydd yn ymddangos.

Fel y gwnaethom yn yr adran flaenorol, byddwn yn defnyddio rhestr o'r enw
`window` i storio parau o eiriau olynol. A byddwn yn defnyddio'r
swyddogaeth ganlynol i brosesu'r geiriau un ar y tro.

```python
def process_word_bigram(word):
    window.append(word)
    
    if len(window) == 2:
        add_bigram(window)
        window.pop(0)
```

Dyma sut rydym yn ei defnyddio i brosesu geiriau'r gân.

```python
successor_map = {}
window = []

for word in song.split():
    word = clean_word(word)
    process_word_bigram(word)
```

A dyma'r canlyniadau.

```python
successor_map
```

Gall y gair `'half'` gael ei ddilyn gan `'a'`, `'not'`, neu `'the'`. Gall y
gair `'a'` gael ei ddilyn gan `'bee'` neu `'vis'`. Mae'r rhan fwyaf o'r
geiriau eraill yn ymddangos unwaith yn unig, felly dim ond un gair sy'n eu
dilyn.

Nawr gadewch i ni ddadansoddi'r llyfr.

```python
successor_map = {}
window = []

for line in open(filename, encoding='utf-8'):
    for word in split_line(line):
        word = clean_word(word)
        process_word_bigram(word)
```

Gallwn chwilio am unrhyw air a darganfod y geiriau a all ei ddilyn.

```python
# I used this cell to find a predecessor with a good number of possible successors
# and at least one repeated word.

def has_duplicates(t):
    return len(set(t)) < len(t)

for key, value in successor_map.items():
    if len(value) == 7 and has_duplicates(value):
        print(key, value)
```

```python
successor_map['going']
```

Yn y rhestr hon o olynwyr, sylwch fod y gair `'to'` yn ymddangos deirgwaith
— dim ond unwaith y mae'r olynwyr eraill yn ymddangos.

## Cynhyrchu Testun

Gallwn ddefnyddio canlyniadau'r adran flaenorol i gynhyrchu testun newydd
gyda'r un cysylltiadau rhwng geiriau olynol ag yn y gwreiddiol. Dyma sut
mae'n gweithio:

* Gan ddechrau gydag unrhyw air sy'n ymddangos yn y testun, rydym yn
  chwilio am ei olynwyr posibl ac yn dewis un ar hap.

* Yna, gan ddefnyddio'r gair a ddewiswyd, rydym yn chwilio am ei olynwyr
  posibl, ac yn dewis un ar hap.

Gallwn ailadrodd y broses hon i gynhyrchu cymaint o eiriau ag y dymunwn.
Fel enghraifft, gadewch i ni ddechrau gyda'r gair `'although'`. Dyma'r
geiriau a all ei ddilyn.

```python
word = 'although'
successors = successor_map[word]
successors
```

```python
# this cell initializes the random number generator so it 
# starts at the same point in the sequence each time this
# notebook runs.

random.seed(2)
```

Gallwn ddefnyddio `choice` i ddewis o'r rhestr â'r un tebygolrwydd.

```python
word = random.choice(successors)
word
```

Os yw'r un gair yn ymddangos fwy nag unwaith yn y rhestr, mae'n fwy
tebygol o gael ei ddewis.

Gan ailadrodd y camau hyn, gallwn ddefnyddio'r ddolen ganlynol i
gynhyrchu cyfres hirach.

```python
for i in range(10):
    successors = successor_map[word]
    word = random.choice(successors)
    print(word, end=' ')
```

Mae'r canlyniad yn swnio'n debycach i frawddeg go iawn, ond nid yw'n
gwneud llawer o synnwyr o hyd.

Gallwn wneud yn well gan ddefnyddio mwy nag un gair fel allwedd yn
`successor_map`. Er enghraifft, gallwn wneud geiriadur sy'n mapio o bob
deuair — neu driair — i'r rhestr o eiriau sy'n dod nesaf. Fel ymarfer, cewch
gyfle i weithredu'r dadansoddiad hwn a gweld sut mae'r canlyniadau'n edrych.

## Dadnamu

Erbyn hyn rydym yn ysgrifennu rhaglenni mwy sylweddol, ac efallai y gwelwch
eich hun yn treulio mwy o amser yn dadnamu. Os ydych yn sownd ar nam anodd,
dyma ychydig o bethau i roi cynnig arnynt:

* Darllen: Archwiliwch eich cod, ei ddarllen yn ôl i chi'ch hun, a gwiriwch
  ei fod yn dweud yr hyn roeddech yn bwriadu ei ddweud.

* Rhedeg: Arbrofwch drwy wneud newidiadau a rhedeg gwahanol fersiynau. Yn
  aml, os dangoswch y peth iawn yn y lle iawn yn y rhaglen, mae'r broblem
  yn dod yn amlwg, ond weithiau mae'n rhaid i chi adeiladu sgaffaldiau.

* Myfyrio: Cymerwch amser i feddwl! Pa fath o wall ydyw: cystrawen,
  rhedeg, neu semantig? Pa wybodaeth y gallwch ei chael o'r negeseuon
  gwall, neu o allbwn y rhaglen? Pa fath o wall a allai achosi'r broblem
  rydych yn ei gweld? Beth wnaethoch chi newid ddiwethaf, cyn i'r broblem
  ymddangos?

* Dadnamu Hwyaden Rwber: Os eglurwch y broblem i rywun arall, weithiau
  byddwch yn darganfod yr ateb cyn i chi orffen gofyn y cwestiwn. Yn aml
  nid oes angen y person arall arnoch; gallech jest siarad â hwyaden
  rwber. A dyna darddiad y strategaeth adnabyddus a elwir yn
  **{term}`dadnamu hwyaden rwber`**. Nid wyf yn dyfeisio hyn — gweler
  <https://en.wikipedia.org/wiki/Rubber_duck_debugging>.

* Encilio: Ar ryw adeg, y peth gorau i'w wneud yw bacio i fyny — dadwneud
  newidiadau diweddar — nes i chi gyrraedd rhaglen sy'n gweithio. Yna
  gallwch ddechrau ailadeiladu.

* Gorffwys: Os rhowch seibiant i'ch ymennydd, weithiau bydd yn darganfod y
  broblem i chi.

Mae rhaglenwyr newydd weithiau'n mynd yn sownd ar un o'r gweithgareddau
hyn ac yn anghofio'r lleill. Mae gan bob gweithgaredd ei fodd methu ei hun.

Er enghraifft, mae darllen eich cod yn gweithio os mai gwall teipograffyddol
yw'r broblem, ond nid os mai camddealltwriaeth gysyniadol ydyw. Os nad
ydych yn deall beth mae eich rhaglen yn ei wneud, gallwch ei darllen 100
gwaith a byth weld y gwall, am fod y gwall yn eich pen.

Gall rhedeg arbrofion weithio, yn enwedig os rhedwch brofion bach, syml.
Ond os rhedwch arbrofion heb feddwl na darllen eich cod, gall gymryd amser
hir i ddarganfod beth sy'n digwydd.

Mae'n rhaid i chi gymryd amser i feddwl. Mae dadnamu fel gwyddoniaeth
arbrofol. Dylai fod gennych o leiaf un ddamcaniaeth am beth yw'r broblem.
Os oes dau bosibilrwydd neu fwy, ceisiwch feddwl am brawf a fyddai'n
dileu un ohonynt.

Ond bydd hyd yn oed y technegau dadnamu gorau'n methu os oes gormod o
wallau, neu os yw'r cod rydych yn ceisio'i drwsio'n rhy fawr ac yn rhy
gymhleth. Weithiau'r dewis gorau yw encilio, gan symleiddio'r rhaglen nes i
chi ddychwelyd at rywbeth sy'n gweithio.

Mae rhaglenwyr newydd yn aml yn amharod i encilio am na allant ddioddef
dileu llinell o god (hyd yn oed os yw'n anghywir). Os yw'n gwneud i chi
deimlo'n well, copïwch eich rhaglen i ffeil arall cyn i chi ddechrau ei
thynnu i lawr. Yna gallwch gopïo'r darnau yn ôl un ar y tro.

Mae darganfod nam anodd yn gofyn am ddarllen, rhedeg, myfyrio, encilio, ac
weithiau orffwys. Os ewch yn sownd ar un o'r gweithgareddau hyn, rhowch
gynnig ar y lleill.

## Rhestr Termau'r Bennod

**gwerth rhagosodedig:**
Y gwerth a neilltuir i baramedr os na ddarperir dadl.

**disodli:**
Disodli gwerth rhagosodedig â dadl.

**penderfyniadol:**
Mae rhaglen benderfyniadol yn gwneud yr un peth bob tro y mae'n rhedeg, o
gael yr un mewnbynnau.

**ffug-hap:**
Mae dilyniant ffug-hap o rifau'n ymddangos yn ar hap, ond fe'i cynhyrchir
gan raglen benderfyniadol.

**deuair:**
Dilyniant o ddwy elfen, geiriau yn aml.

**triair:**
Dilyniant o dair elfen.

**n-air:**
Dilyniant o nifer amhenodol o elfennau.

**dadnamu hwyaden rwber:**
Ffordd o ddadnamu drwy esbonio problem yn uchel i wrthrych difywyd.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Yn `add_bigram`, mae'r gosodiad `if` yn creu rhestr newydd neu'n ychwanegu
elfen at restr bresennol, yn dibynnu a yw'r allwedd eisoes yn y geiriadur.

```python
def add_bigram(bigram):
    first, second = bigram
    
    if first not in successor_map:
        successor_map[first] = [second]
    else:
        successor_map[first].append(second)
```

Mae geiriaduron yn darparu dull o'r enw `setdefault` y gallwn ei ddefnyddio
i wneud yr un peth yn fwy cryno. Gofynnwch i gynorthwyydd rhithwir sut mae'n
gweithio, neu gopïwch `add_bigram` i gynorthwyydd rhithwir a gofyn "Allwch
chi ailysgrifennu hyn gan ddefnyddio `setdefault`?"

Yn y bennod hon fe wnaethom weithredu dadansoddi a chynhyrchu testun cadwyn
Markov. Os ydych yn chwilfrydig, gallwch ofyn i gynorthwyydd rhithwir am
ragor o wybodaeth ar y pwnc. Un o'r pethau y gallech eu dysgu yw bod
cynorthwywyr rhithwir yn defnyddio algorithmau sy'n debyg mewn sawl ffordd
— ond hefyd yn wahanol mewn ffyrdd pwysig. Gofynnwch i gynorthwyydd, "Beth
yw'r gwahaniaethau rhwng modelau iaith fawr fel GPT a dadansoddi testun
cadwyn Markov?"

### Ymarfer

Ysgrifennwch swyddogaeth sy'n cyfrif nifer y troeon y mae pob triair
(dilyniant o dri gair) yn ymddangos. Os profwch eich swyddogaeth gyda
thestun *Dr. Jekyll and Mr. Hyde*, dylech ddarganfod mai'r triair mwyaf
cyffredin yw "said the lawyer".

Awgrym: Ysgrifennwch swyddogaeth o'r enw `count_trigram` sy'n debyg i
`count_bigram`. Yna ysgrifennwch swyddogaeth o'r enw `process_word_trigram`
sy'n debyg i `process_word_bigram`.

```python
# Ateb yma
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r ddolen ganlynol i ddarllen y llyfr a phrosesu'r
geiriau.

```python
trigram_counter = {}
window = []

for line in open(filename, encoding='utf-8'):
    for word in split_line(line):
        word = clean_word(word)
        process_word_trigram(word)
```

Yna defnyddiwch `print_most_common` i ddarganfod y triair mwyaf cyffredin
yn y llyfr.

```python
print_most_common(trigram_counter)
```

### Ymarfer

Nawr gadewch i ni weithredu dadansoddiad testun cadwyn Markov gyda mapio o
bob deuair i restr o olynwyr posibl.

Gan ddechrau gyda `add_bigram`, ysgrifennwch swyddogaeth o'r enw
`add_trigram` sy'n cymryd rhestr o dri gair ac yn ychwanegu neu'n
diweddaru eitem yn `successor_map`, gan ddefnyddio'r ddau air cyntaf fel
allwedd a'r trydydd gair fel olynydd posibl.

```python
# Ateb yma
```

Dyma fersiwn o `process_word_trigram` sy'n galw `add_trigram`.

```python
def process_word_trigram(word):
    window.append(word)
    
    if len(window) == 3:
        add_trigram(window)
        window.pop(0)
```

Gallwch ddefnyddio'r ddolen ganlynol i brofi eich swyddogaeth gyda geiriau
"Eric, the Half a Bee".

```python
successor_map = {}
window = []

for string in song.split():
    word = string.strip(punctuation).lower()
    process_word_trigram(word)
```

Os yw eich swyddogaeth yn gweithio fel y bwriadwyd, dylai'r rhagflaenydd
`('half', 'a')` fapio i restr gydag un elfen sengl, `'bee'`. Mewn
gwirionedd, fel mae'n digwydd, dim ond unwaith y mae pob deuair yn y gân
hon yn ymddangos, felly mae gan bob un o'r gwerthoedd yn `successor_map`
un elfen sengl.

```python
successor_map
```

Gallwch ddefnyddio'r ddolen ganlynol i brofi eich swyddogaeth gyda geiriau'r
llyfr.

```python
successor_map = {}
window = []

for line in open(filename, encoding='utf-8'):
    for word in split_line(line):
        word = clean_word(word)
        process_word_trigram(word)
```

Yn yr ymarfer nesaf, byddwch yn defnyddio'r canlyniadau i gynhyrchu testun
newydd ar hap.

### Ymarfer

Ar gyfer yr ymarfer hwn, byddwn yn tybio mai `successor_map` yw geiriadur
sy'n mapio o bob deuair i'r rhestr o eiriau sy'n ei ddilyn.

```python
# this cell initializes the random number generator so it 
# starts at the same point in the sequence each time this
# notebook runs.

random.seed(3)
```

I gynhyrchu testun ar hap, byddwn yn dechrau drwy ddewis allwedd ar hap o
`successor_map`.

```python
successors = list(successor_map)
bigram = random.choice(successors)
bigram
```

Nawr ysgrifennwch ddolen sy'n cynhyrchu 50 gair arall gan ddilyn y camau
hyn:

1. Yn `successor_map`, chwiliwch am y rhestr o eiriau a all ddilyn
   `bigram`.

2. Dewiswch un ohonynt ar hap a'i argraffu.

3. Ar gyfer yr iteriad nesaf, gwnewch ddeuair newydd sy'n cynnwys ail air
   `bigram` a'r olynydd a ddewiswyd.

Er enghraifft, os dechreuwn gyda'r deuair `('doubted', 'if')` a dewis
`'from'` fel ei olynydd, y deuair nesaf yw `('if', 'from')`.

```python
# Ateb yma
```

Os yw popeth yn gweithio, dylech ddarganfod bod y testun a gynhyrchwyd yn
adnabyddadwy debyg o ran arddull i'r gwreiddiol, a bod rhai ymadroddion yn
gwneud synnwyr, ond gallai'r testun grwydro o un pwnc i'r llall.

Fel ymarfer bonws, addaswch eich datrysiad i'r ddau ymarfer diwethaf i
ddefnyddio triair fel allweddi yn `successor_map`, a gweld pa effaith sydd
ganddo ar y canlyniadau.

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
