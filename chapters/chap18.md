# Ychwanegion Python

Dyma fersiynau o'r dosbarthiadau `Card`, `Deck`, a `Hand` o Bennod 17, y byddwn yn eu
defnyddio mewn rhai enghreifftiau yn y bennod hon.

```python
class Card:
    suit_names = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    rank_names = [None, 'Ace', '2', '3', '4', '5', '6', '7', 
                  '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    
    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank

    def __str__(self):
        rank_name = Card.rank_names[self.rank]
        suit_name = Card.suit_names[self.suit]
        return f'{rank_name} of {suit_name}' 
```

```python
import random

class Deck:
    def __init__(self, cards):
        self.cards = cards
        
    def __str__(self):
        res = []
        for card in self.cards:
            res.append(str(card))
        return '\n'.join(res)
    
    def make_cards():
        cards = []
        for suit in range(4):
            for rank in range(2, 15):
                card = Card(suit, rank)
                cards.append(card)
        return cards
    
    def shuffle(self):
        random.shuffle(self.cards)
        
    def pop_card(self):
        return self.cards.pop()
    
    def add_card(self, card):
        self.cards.append(card)
```

```python
class Hand(Deck):
    def __init__(self, label=''):
        self.label = label
        self.cards = []
```

Un o fy amcanion ar gyfer y llyfr hwn fu dysgu cyn lleied o Python â phosib i chi.
Pan oedd dwy ffordd o wneud rhywbeth, dewisais un ac osgoi sôn am y llall. Neu weithiau
rhoddais yr ail i mewn i ymarfer.

Nawr rwyf am fynd yn ôl am rai o'r darnau da a adawyd ar ôl. Mae Python yn darparu
nifer o nodweddion nad ydynt yn wirioneddol angenrheidiol — gallwch ysgrifennu cod da
hebddynt — ond gyda hwy gallwch ysgrifennu cod sy'n fwy cryno, darllenadwy, neu
effeithlon, ac weithiau'r tri.

## Setiau

Mae Python yn darparu dosbarth o'r enw `set` sy'n cynrychioli casgliad o elfennau
unigryw. I greu set wag, gallwn ddefnyddio'r gwrthrych dosbarth fel swyddogaeth.

```python
s1 = set()
s1
```

Gallwn ddefnyddio'r dull `add` i ychwanegu elfennau.

```python
s1.add('a')
s1.add('b')
s1
```

Neu gallwn basio unrhyw fath o ddilyniant i `set`.

```python
s2 = set('acd')
s2
```

Gall elfen ymddangos dim ond unwaith mewn `set`. Os ychwanegwch elfen sydd eisoes
yno, nid oes ganddo unrhyw effaith.

```python
s1.add('a')
s1
```

Neu os crëwch set â dilyniant sy'n cynnwys dyblygiadau, mae'r canlyniad yn cynnwys dim
ond elfennau unigryw.

```python
set('banana')
```

Gellir gwneud rhai o'r ymarferion yn y llyfr hwn yn gryno ac yn effeithlon gyda setiau.
Er enghraifft, dyma ddatrysiad i ymarfer ym Mhennod 11 sy'n defnyddio geiriadur i
wirio a oes unrhyw elfennau dyblyg mewn dilyniant.

```python
def has_duplicates(t):
    d = {}
    for x in t:
        d[x] = True
    return len(d) < len(t)
```

Mae'r fersiwn hon yn ychwanegu elfennau `t` fel allweddi mewn geiriadur, ac yna'n
gwirio a oes llai o allweddi nag elfennau. Gan ddefnyddio setiau, gallwn ysgrifennu'r un
swyddogaeth fel hyn.

```python
def has_duplicates(t):
    s = set(t)
    return len(s) < len(t)
```

```python
has_duplicates('abba')
```

Gall elfen ymddangos mewn set dim ond unwaith, felly os yw elfen yn `t` yn ymddangos
fwy nag unwaith, bydd y set yn llai na `t`. Os nad oes dyblygiadau, bydd y set yr un
maint â `t`.

Mae gwrthrychau `set` yn darparu dulliau sy'n perfformio gweithrediadau set. Er
enghraifft, mae `union` yn cyfrifo undeb dwy set, sef set newydd sy'n cynnwys pob
elfen sy'n ymddangos yn y naill set neu'r llall.

```python
s1.union(s2)
```

Mae rhai gweithredyddion rhifyddol yn gweithio â setiau. Er enghraifft, mae'r
gweithredydd `-` yn perfformio tynnu set — y canlyniad yw set newydd sy'n cynnwys pob
elfen o'r set gyntaf nad ydynt yn yr ail set.

```python
s1 - s2
```

Ym Mhennod 12 defnyddiom eiriaduron i ddod o hyd i'r geiriau sy'n ymddangos mewn
dogfen ond nid mewn rhestr eiriau. Defnyddiom y swyddogaeth ganlynol, sy'n cymryd
dau eiriadur ac yn dychwelyd geiriadur newydd sy'n cynnwys dim ond yr allweddi o'r
cyntaf nad ydynt yn ymddangos yn yr ail.

```python
def subtract(d1, d2):
    res = {}
    for key in d1:
        if key not in d2:
            res[key] = d1[key]
    return res
```

Gyda setiau, nid oes rhaid i ni ysgrifennu'r swyddogaeth hon ein hunain. Os yw
`word_counter` yn eiriadur sy'n cynnwys y geiriau unigryw yn y ddogfen ac mae
`word_list` yn rhestr o eiriau dilys, gallwn gyfrifo'r gwahaniaeth set fel hyn.

```python
# this cell creates a small example so we can run the following
# cell without loading the actual data

word_counter = {'word': 1}
word_list = ['word']
```

```python
set(word_counter) - set(word_list)
```

Y canlyniad yw set sy'n cynnwys y geiriau yn y ddogfen nad ydynt yn ymddangos yn y
rhestr eiriau.

Mae'r gweithredyddion perthynol yn gweithio â setiau. Er enghraifft, mae `<=` yn
gwirio a yw un set yn is-set o'r llall, gan gynnwys y posibilrwydd eu bod yn gyfartal.

```python
set('ab') <= set('abc')
```

Gyda'r gweithredyddion hyn, gallwn ddefnyddio setiau i wneud rhai o'r ymarferion ym
Mhennod 7. Er enghraifft, dyma fersiwn o `uses_only` sy'n defnyddio dolen.

```python
def uses_only(word, available):
    for letter in word: 
        if letter not in available:
            return False
    return True
```

Mae `uses_only` yn gwirio a yw'r holl lythrennau yn `word` yn `available`. Gyda
setiau, gallwn ei hailysgrifennu fel hyn.

```python
def uses_only(word, available):
    return set(word) <= set(available)
```

Os yw'r llythrennau yn `word` yn is-set o'r llythrennau yn `available`, mae hynny'n
golygu nad yw `word` yn defnyddio dim ond llythrennau yn `available`.

## Cownteri

Mae `Counter` yn debyg i set, ac eithrio, os yw elfen yn ymddangos fwy nag unwaith,
mae'r `Counter` yn cadw cyfrif o sawl gwaith y mae'n ymddangos. Os ydych yn gyfarwydd
â'r syniad mathemategol o "amlset", mae `Counter` yn ffordd naturiol o gynrychioli
amlset.

Diffinnir y dosbarth `Counter` mewn modiwl o'r enw `collections`, felly mae'n rhaid i
chi ei fewnforio. Yna gallwch ddefnyddio'r gwrthrych dosbarth fel swyddogaeth a phasio
llinyn, rhestr, neu unrhyw fath arall o ddilyniant fel dadl.

```python
from collections import Counter

counter = Counter('banana')
counter
```

Mae gwrthrych `Counter` yn debyg i eiriadur sy'n mapio o bob allwedd i'r nifer o
weithiau y mae'n ymddangos. Fel mewn geiriaduron, mae'n rhaid i'r allweddi fod yn
hashadwy.

Yn wahanol i eiriaduron, nid yw gwrthrychau `Counter` yn achosi eithriad os cyrchwch
elfen nad yw'n ymddangos. Yn lle hynny, maent yn dychwelyd `0`.

```python
counter['d']
```

Gallwn ddefnyddio gwrthrychau `Counter` i ddatrys un o'r ymarferion o Bennod 10, sy'n
gofyn am swyddogaeth sy'n cymryd dau air ac yn gwirio a ydynt yn anagramau — hynny
yw, a ellir aildrefnu llythrennau un i sillafu'r llall.

Dyma ddatrysiad gan ddefnyddio gwrthrychau `Counter`.

```python
def is_anagram(word1, word2):
    return Counter(word1) == Counter(word2)
```

Os yw dau air yn anagramau, maent yn cynnwys yr un llythrennau â'r un cyfrifon, felly
mae eu gwrthrychau `Counter` yn gyfwerth.

Mae `Counter` yn darparu dull o'r enw `most_common` sy'n dychwelyd rhestr o barau
gwerth-amlder, wedi'u trefnu o'r mwyaf cyffredin i'r lleiaf.

```python
counter.most_common()
```

Maent hefyd yn darparu dulliau a gweithredyddion i berfformio gweithrediadau tebyg i
set, gan gynnwys adio, tynnu, undeb, a chroestoriad. Er enghraifft, mae'r gweithredydd
`+` yn cyfuno dau wrthrych `Counter` ac yn creu `Counter` newydd sy'n cynnwys yr
allweddi o'r ddau a chyfansymiau'r cyfrifon.

Gallwn ei brofi drwy wneud `Counter` â'r llythrennau o `'bans'` a'i adio at y
llythrennau o `'banana'`.

```python
counter2 = Counter('bans')
counter + counter2
```

Cewch gyfle i archwilio gweithrediadau `Counter` eraill yn yr ymarferion ar ddiwedd y
bennod hon.

## defaultdict

Mae'r modiwl `collections` hefyd yn darparu `defaultdict`, sy'n debyg i eiriadur ac
eithrio, os cyrchwch allwedd nad yw'n bodoli, mae'n cynhyrchu gwerth newydd yn
awtomatig.

Pan grëwch `defaultdict`, rydych yn darparu swyddogaeth a ddefnyddir i greu gwerthoedd
newydd. Gelwir swyddogaeth sy'n creu gwrthrychau weithiau'n **{term}`ffatri`**. Gellir
defnyddio'r swyddogaethau cynhenid sy'n creu rhestrau, setiau, a mathau eraill fel
ffatrïoedd.

Er enghraifft, dyma `defaultdict` sy'n creu `list` newydd pan fo angen.

```python
from collections import defaultdict

d = defaultdict(list)
d
```

Sylwch mai `list` yw'r ddadl, sef gwrthrych dosbarth, nid `list()`, sef galwad
swyddogaeth sy'n creu rhestr newydd. Nid yw'r swyddogaeth ffatri'n cael ei galw oni
bai ein bod yn cyrchu allwedd nad yw'n bodoli.

```python
t = d['new key']
t
```

Mae'r rhestr newydd, y byddwn yn ei galw'n `t`, hefyd yn cael ei hychwanegu i'r
geiriadur. Felly os newidiwn `t`, mae'r newid yn ymddangos yn `d`:

```python
t.append('new value')
d['new key']
```

Os ydych yn gwneud geiriadur o restrau, gallwch yn aml ysgrifennu cod symlach gan
ddefnyddio `defaultdict`.

Mewn un o'r ymarferion ym Mhennod 11, gwnes eiriadur sy'n mapio o linyn trefnedig o
lythrennau i'r rhestr o eiriau y gellir eu sillafu â'r llythrennau hynny. Er enghraifft,
mae'r llinyn `'opst'` yn mapio i'r rhestr `['opts', 'post', 'pots', 'spot', 'stop',
'tops']`. Dyma'r cod gwreiddiol.

```python
def all_anagrams(filename):
    d = {}
    for line in open(filename):
        word = line.strip().lower()
        t = signature(word)
        if t not in d:
            d[t] = [word]
        else:
            d[t].append(word)
    return d
```

A dyma fersiwn symlach gan ddefnyddio `defaultdict`.

```python
def all_anagrams(filename):
    d = defaultdict(list)
    for line in open(filename):
        word = line.strip().lower()
        t = signature(word)
        d[t].append(word)
    return d
```

Yn yr ymarferion ar ddiwedd y bennod, cewch gyfle i ymarfer defnyddio gwrthrychau
`defaultdict`.

```python
from collections import defaultdict

d = defaultdict(list)
key = ('into', 'the')
d[key].append('woods')
d[key]
```

## Mynegiadau Amodol

Defnyddir gosodiadau amodol yn aml i ddewis un o ddau werth, fel hyn:

```python
import math
x = 5
```

```python
if x > 0:
    y = math.log(x)
else:
    y = float('nan')
```

```python
y
```

Mae'r gosodiad hwn yn gwirio a yw `x` yn bositif. Os felly, mae'n cyfrifo ei
logarithm. Os na, byddai `math.log` yn achosi `ValueError`. Er mwyn osgoi atal y
rhaglen, rydym yn cynhyrchu `NaN`, sef gwerth arnawf arbennig sy'n cynrychioli "Not a
Number".

Gallwn ysgrifennu'r gosodiad hwn yn fwy cryno gan ddefnyddio **{term}`mynegiad
amodol`**.

```python
y = math.log(x) if x > 0 else float('nan')
```

```python
y
```

Gallwch ddarllen y llinell hon bron fel Saesneg: "mae `y` yn cael log-`x` os yw `x`
yn fwy na 0; fel arall mae'n cael `NaN`".

Weithiau gellir ysgrifennu swyddogaethau dychweliadol yn gryno gan ddefnyddio
mynegiadau amodol. Er enghraifft, dyma fersiwn o `factorial` â gosodiad amodol.

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```

A dyma fersiwn â mynegiad amodol.

```python
def factorial(n):
    return 1 if n == 0 else n * factorial(n-1)
```

Defnydd arall o fynegiadau amodol yw ymdrin â dadleuon dewisol. Er enghraifft, dyma
ddiffiniad dosbarth â dull `__init__` sy'n defnyddio gosodiad amodol i wirio paramedr
â gwerth rhagosodedig.

```python
class Kangaroo:
    def __init__(self, name, contents=None):
        self.name = name
        if contents is None:
            contents = []
        self.contents = contents
```

Dyma fersiwn sy'n defnyddio mynegiad amodol.

```python
def __init__(self, name, contents=None):
    self.name = name
    self.contents = [] if contents is None else contents 
```

Yn gyffredinol, gallwch ddisodli gosodiad amodol â mynegiad amodol os yw'r ddau gangen
yn cynnwys un mynegiad a dim gosodiadau.

## Dirnadaethau Rhestr

Mewn penodau blaenorol, rydym wedi gweld ambell enghraifft lle rydym yn dechrau â
rhestr wag ac yn ychwanegu elfennau, un ar y tro, gan ddefnyddio'r dull `append`. Er
enghraifft, tybiwch fod gennym linyn sy'n cynnwys teitl ffilm, ac rydym am
briflythrennu'r holl eiriau.

```python
title = 'monty python and the holy grail'
```

Gallwn ei rannu'n rhestr o linynnau, dolennu drwy'r llinynnau, eu priflythrennu, a'u
hatodi i restr.

```python
t = []
for word in title.split():
    t.append(word.capitalize())

' '.join(t)
```

Gallwn wneud yr un peth yn fwy cryno gan ddefnyddio **{term}`dirnadaeth rhestr`**:

```python
t = [word.capitalize() for word in title.split()]

' '.join(t)
```

Mae'r gweithredyddion cromfachau'n dynodi ein bod yn adeiladu rhestr newydd. Mae'r
mynegiad y tu mewn i'r cromfachau'n nodi elfennau'r rhestr, ac mae'r cymal `for` yn
dynodi pa ddilyniant rydym yn dolennu drwyddo.

Gall cystrawen dirnadaeth rhestr ymddangos yn rhyfedd, am fod y newidyn dolen — `word`
yn yr enghraifft hon — yn ymddangos yn y mynegiad cyn i ni gyrraedd ei ddiffiniad.
Ond rydych yn arfer â hi.

Fel enghraifft arall, ym Mhennod 9 defnyddiom y ddolen hon i ddarllen geiriau o ffeil
a'u hatodi i restr.

```python
download('https://raw.githubusercontent.com/AllenDowney/ThinkPython2/master/code/words.txt');
```

```python
word_list = []

for line in open('words.txt'):
    word = line.strip()
    word_list.append(word)
```

```python
len(word_list)
```

Dyma sut y gallwn ysgrifennu hynny fel dirnadaeth rhestr.

```python
word_list = [line.strip() for line in open('words.txt')]
```

```python
len(word_list)
```

Gall dirnadaeth rhestr hefyd gael cymal `if` sy'n pennu pa elfennau sy'n cael eu
cynnwys yn y rhestr. Er enghraifft, dyma ddolen `for` a ddefnyddiwyd gennym ym Mhennod
10 i wneud rhestr o ddim ond y geiriau yn `word_list` sy'n balindromau.

```python
def is_palindrome(word):
    return list(reversed(word)) == list(word)
```

```python
palindromes = []

for word in word_list:
    if is_palindrome(word):
        palindromes.append(word)
```

```python
palindromes[:10]
```

Dyma sut y gallwn wneud yr un peth â dirnadaeth rhestr.

```python
palindromes = [word for word in word_list if is_palindrome(word)]
```

```python
palindromes[:10]
```

Pan ddefnyddir dirnadaeth rhestr fel dadl i swyddogaeth, gallwn yn aml hepgor y
cromfachau. Er enghraifft, tybiwch ein bod am adio $1 / 2^n$ ar gyfer gwerthoedd $n$
o 0 i 9. Gallwn ddefnyddio dirnadaeth rhestr fel hyn.

```python
sum([1/2**n for n in range(10)])
```

Neu gallwn hepgor y cromfachau fel hyn.

```python
sum(1/2**n for n in range(10))
```

Yn yr enghraifft hon, yn dechnegol **{term}`mynegiad cynhyrchydd`** yw'r ddadl, nid
dirnadaeth rhestr, ac nid yw byth yn gwneud rhestr mewn gwirionedd. Ond ar wahân i
hynny, mae'r ymddygiad yr un fath.

Mae dirnadaethau rhestr a mynegiadau cynhyrchydd yn gryno ac yn hawdd eu darllen, o
leiaf ar gyfer mynegiadau syml. Ac maent fel arfer yn gyflymach na'r dolenni `for`
cyfatebol, weithiau'n llawer cyflymach. Felly os ydych yn ddig wrthyf am beidio â sôn
amdanynt yn gynharach, rwy'n deall.

Ond, i'm hamddiffyn fy hun, mae dirnadaethau rhestr yn anoddach eu dadnamu am na
allwch roi gosodiad argraffu y tu mewn i'r ddolen. Awgrymaf eich bod yn eu defnyddio
dim ond os yw'r cyfrifiad yn ddigon syml eich bod yn debygol o'i gael yn iawn y tro
cyntaf. Neu ystyriwch ysgrifennu a dadnamu dolen `for` ac yna ei throi'n ddirnadaeth
rhestr.

## `any` ac `all`

Mae Python yn darparu swyddogaeth gynhenid, `any`, sy'n cymryd dilyniant o werthoedd
Boole ac yn dychwelyd `True` os yw unrhyw un o'r gwerthoedd yn `True`.

```python
any([False, False, True])
```

Defnyddir `any` yn aml gyda mynegiadau cynhyrchydd.

```python
any(letter == 't' for letter in 'monty')
```

Nid yw'r enghraifft honno'n ddefnyddiol iawn am ei bod yn gwneud yr un peth â'r
gweithredydd `in`. Ond gallem ddefnyddio `any` i ysgrifennu datrysiadau cryno i rai
o'r ymarferion ym Mhennod 7. Er enghraifft, gallwn ysgrifennu `uses_none` fel hyn.

```python
def uses_none(word, forbidden):
    """Checks whether a word avoids forbidden letters."""
    return not any(letter in forbidden for letter in word)
```

```python
uses_none('banana', 'xyz')
```

```python
uses_none('apple', 'efg')
```

Mae'r swyddogaeth hon yn dolennu drwy'r llythrennau yn `word` ac yn gwirio a yw
unrhyw un ohonynt yn `forbidden`. Mae defnyddio `any` gyda mynegiad cynhyrchydd yn
effeithlon am ei fod yn stopio ar unwaith os daw o hyd i werth `True`, felly nid oes
rhaid iddo ddolennu drwy'r dilyniant cyfan.

Mae Python yn darparu swyddogaeth gynhenid arall, `all`, sy'n dychwelyd `True` os yw
pob elfen yn y dilyniant yn `True`. Gallwn ei defnyddio i ysgrifennu fersiwn gryno o
`uses_all`.

```python
def uses_all(word, required):
    """Check whether a word uses all required letters."""
    return all(letter in word for letter in required)
```

```python
uses_all('banana', 'ban')
```

```python
uses_all('apple', 'api')
```

Gall mynegiadau sy'n defnyddio `any` ac `all` fod yn gryno, effeithlon, a hawdd eu
darllen.

## Tŵplau Enwebog

Mae'r modiwl `collections` yn darparu swyddogaeth o'r enw `namedtuple` y gellir ei
defnyddio i greu dosbarthiadau syml. Er enghraifft, dim ond dau briodoledd sydd gan y
gwrthrych `Point` ym Mhennod 16, `x` ac `y`. Dyma sut y gwnaethom ei ddiffinio.

```python
class Point:
    """Represents a point in 2-D space."""
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def __str__(self):
        return f'({self.x}, {self.y})'
```

Mae hynny'n lot o god i gyfleu ychydig o wybodaeth. Mae `namedtuple` yn darparu
ffordd fwy cryno o ddiffinio dosbarthiadau fel hyn.

```python
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
```

Y ddadl gyntaf yw enw'r dosbarth rydych am ei greu. Yr ail yw rhestr o'r priodoleddau
dylai fod gan wrthrychau `Point`. Gwrthrych dosbarth yw'r canlyniad, a dyna pam y'i
neilltuir i newidyn â phriflythyren.

Mae dosbarth a grëwyd â `namedtuple` yn darparu dull `__init__` sy'n neilltuo
gwerthoedd i'r priodoleddau a dull `__str__` sy'n arddangos y gwrthrych mewn ffurf
ddarllenadwy. Felly gallwn greu ac arddangos gwrthrych `Point` fel hyn.

```python
p = Point(1, 2)
p
```

Mae `Point` hefyd yn darparu dull `__eq__` sy'n gwirio a yw dau wrthrych `Point` yn
gyfwerth — hynny yw, a yw eu priodoleddau'r un fath.

```python
p == Point(1, 2)
```

Gallwch gyrchu elfennau tŵpl enwebog yn ôl enw neu yn ôl mynegai.

```python
p.x, p.y
```

```python
p[0], p[1]
```

Gallwch hefyd drin tŵpl enwebog fel tŵpl, fel yn y neilltuad hwn.

```python
x, y = p
x, y
```

Ond mae gwrthrychau `namedtuple` yn anghyfnewidiol. Ar ôl i'r priodoleddau gael eu
cychwyn, ni ellir eu newid.

```python
%%expect TypeError

p[0] = 3
```

```python
%%expect AttributeError

p.x = 3
```

Mae `namedtuple` yn darparu ffordd gyflym o ddiffinio dosbarthiadau syml. Yr
anfantais yw nad yw dosbarthiadau syml bob amser yn aros yn syml. Efallai y byddwch
yn penderfynu'n ddiweddarach eich bod am ychwanegu dulliau at dŵpl enwebog. Yn yr
achos hwnnw, gallwch ddiffinio dosbarth newydd sy'n etifeddu o'r tŵpl enwebog.

```python
class Pointier(Point):
    """This class inherits from Point"""
```

Neu ar y pwynt hwnnw gallech newid i ddiffiniad dosbarth confensiynol.

## Pacio Dadleuon Allweddair

Ym Mhennod 11, ysgrifennom swyddogaeth sy'n pacio ei dadleuon mewn tŵpl.

```python
def mean(*args):
    return sum(args) / len(args)
```

Gallwch alw'r swyddogaeth hon ag unrhyw nifer o ddadleuon.

```python
mean(1, 2, 3)
```

Ond nid yw'r gweithredydd `*` yn pacio dadleuon allweddair. Felly mae galw'r
swyddogaeth hon â dadl allweddair yn achosi gwall.

```python
%%expect TypeError

mean(1, 2, start=3)
```

I bacio dadleuon allweddair, gallwn ddefnyddio'r gweithredydd `**`:

```python
def mean(*args, **kwargs):
    print(kwargs)
    return sum(args) / len(args)
```

Gall y paramedr pacio-allweddair gael unrhyw enw, ond mae `kwargs` yn ddewis cyffredin.
Geiriadur sy'n mapio o allweddeiriau i werthoedd yw'r canlyniad.

```python
mean(1, 2, start=3)
```

Yn yr enghraifft hon, argraffir gwerth `kwargs`, ond fel arall nid oes ganddo unrhyw
effaith.

Ond gellir hefyd defnyddio'r gweithredydd `**` mewn rhestr ddadleuon i ddadbacio
geiriadur. Er enghraifft, dyma fersiwn o `mean` sy'n pacio unrhyw ddadleuon allweddair
y mae'n eu cael ac yna'n eu dadbacio fel dadleuon allweddair ar gyfer `sum`.

```python
def mean(*args, **kwargs):
    return sum(args, **kwargs) / len(args)
```

Nawr os galwn `mean` â `start` fel dadl allweddair, caiff ei phasio ymlaen i `sum`,
sy'n ei defnyddio fel man cychwyn y symiant. Yn yr enghraifft ganlynol mae `start=3`
yn adio `3` at y swm cyn cyfrifo'r cymedr, felly `6` yw'r swm a `3` yw'r canlyniad.

```python
mean(1, 2, start=3)
```

Fel enghraifft arall, os oes gennym eiriadur ag allweddi `x` ac `y`, gallwn ei
ddefnyddio gyda'r gweithredydd dadbacio i greu gwrthrych `Point`.

```python
d = dict(x=1, y=2)
Point(**d)
```

Heb y gweithredydd dadbacio, trinnir `d` fel un ddadl safleol, felly caiff ei neilltuo
i `x`, a chawn `TypeError` am nad oes ail ddadl i'w neilltuo i `y`.

```python
%%expect TypeError

d = dict(x=1, y=2)
Point(d)
```

Pan weithiwch â swyddogaethau sydd â nifer fawr o ddadleuon allweddair, mae'n aml yn
ddefnyddiol creu a phasio geiriaduron sy'n nodi opsiynau a ddefnyddir yn aml.

```python
def pack_and_print(**kwargs):
    print(kwargs)
    
pack_and_print(a=1, b=2)
```

## Dadnamu

Ym mhenodau blaenorol, defnyddiom `doctest` i brofi swyddogaethau. Er enghraifft, dyma
swyddogaeth o'r enw `add` sy'n cymryd dau rif ac yn dychwelyd eu swm. Mae'n cynnwys
doctest sy'n gwirio a yw `2 + 2` yn `4`.

```python
def add(a, b):
    '''Add two numbers.
    
    >>> add(2, 2)
    4
    '''
    return a + b
```

Mae'r swyddogaeth hon yn cymryd gwrthrych swyddogaeth ac yn rhedeg ei doctests.

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)
```

Felly gallwn brofi `add` fel hyn.

```python
run_doctests(add)
```

Nid oes allbwn, sy'n golygu bod yr holl brofion wedi llwyddo.

Mae Python yn darparu teclyn arall ar gyfer rhedeg profion awtomataidd, o'r enw
`unittest`. Mae ychydig yn fwy cymhleth i'w ddefnyddio, ond dyma enghraifft.

```python
from unittest import TestCase

class TestExample(TestCase):

    def test_add(self):
        result = add(2, 2)
        self.assertEqual(result, 4)
```

Yn gyntaf rydym yn mewnforio `TestCase`, sef dosbarth yn y modiwl `unittest`. I'w
ddefnyddio, mae'n rhaid i ni ddiffinio dosbarth newydd sy'n etifeddu o `TestCase` ac
yn darparu o leiaf un dull prawf. Mae'n rhaid i enw'r dull prawf ddechrau â `test` a
dylai ddynodi pa swyddogaeth y mae'n ei phrofi.

Yn yr enghraifft hon, mae `test_add` yn profi'r swyddogaeth `add` drwy ei galw, cadw'r
canlyniad, a galw `assertEqual`, a etifeddir o `TestCase`. Mae `assertEqual` yn cymryd
dwy ddadl ac yn gwirio a ydynt yn gyfartal.

Er mwyn rhedeg y dull prawf hwn, mae'n rhaid i ni redeg swyddogaeth yn `unittest` o'r
enw `main` a darparu sawl dadl allweddair. Mae'r swyddogaeth ganlynol yn dangos y
manylion — os ydych yn chwilfrydig, gallwch ofyn i gynorthwyydd rhithwir egluro sut
mae'n gweithio.

```python
import unittest

def run_unittest():
    unittest.main(argv=[''], verbosity=0, exit=False)
```

Nid yw `run_unittest` yn cymryd `TestExample` fel dadl — yn lle hynny, mae'n chwilio
am ddosbarthiadau sy'n etifeddu o `TestCase`. Yna mae'n chwilio am ddulliau sy'n
dechrau â `test` ac yn eu rhedeg. Enw'r broses hon yw **{term}`darganfod profion`**.

Dyma beth sy'n digwydd pan alwn `run_unittest`.

```python
run_unittest()
```

Mae `unittest.main` yn adrodd nifer y profion a redodd a'r canlyniadau. Yn yr achos
hwn, mae `OK` yn dynodi bod y profion wedi llwyddo.

I weld beth sy'n digwydd pan fo prawf yn methu, byddwn yn ychwanegu dull prawf
anghywir at `TestExample`.

```python
%%add_method_to TestExample

    def test_add_broken(self):
        result = add(2, 2)
        self.assertEqual(result, 100)
```

Dyma beth sy'n digwydd pan redwn y profion.

```python
run_unittest()
```

Mae'r adroddiad yn cynnwys y dull prawf a fethodd a neges gwall sy'n dangos ble. Mae'r
crynodeb yn dynodi bod dau brawf wedi rhedeg ac un wedi methu.

Yn yr ymarferion isod, awgrymaf rai anogiadau y gallwch eu defnyddio i ofyn i
gynorthwyydd rhithwir am ragor o wybodaeth am `unittest`.

## Rhestr Termau'r Bennod

**ffatri:**
Swyddogaeth a ddefnyddir i greu gwrthrychau, a basir yn aml fel paramedr i
swyddogaeth.

**mynegiad amodol:**
Mynegiad sy'n defnyddio amod i ddewis un o ddau werth.

**dirnadaeth rhestr:**
Ffordd gryno o ddolennu drwy ddilyniant a chreu rhestr.

**mynegiad cynhyrchydd:**
Tebyg i ddirnadaeth rhestr ac eithrio nad yw'n creu rhestr.

**darganfod profion:**
Proses a ddefnyddir i ddod o hyd i brofion a'u rhedeg.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Mae ambell bwnc yn y bennod hon y gallech fod am ddysgu rhagor amdano.

* "What are the methods and operators of Python's set class?"

* "What are the methods and operators of Python's Counter class?"

* "What is the difference between a Python list comprehension and a generator
  expression?"

* "When should I use Python's `namedtuple` rather than define a new class?"

* "What are some uses of packing and unpacking keyword arguments?"

* "How does `unittest` do test discovery?"

* "Along with `assertEqual`, what are the most commonly used methods in
  `unittest.TestCase`?"

* "What are the pros and cons of `doctest` and `unittest`?"

Ar gyfer yr ymarferion canlynol, ystyriwch ofyn i gynorthwyydd rhithwir am gymorth, ond
fel bob amser, cofiwch brofi'r canlyniadau.

### Ymarfer

Mae un o'r ymarferion ym Mhennod 7 yn gofyn am swyddogaeth o'r enw `uses_none` sy'n
cymryd gair a llinyn o lythrennau gwaharddedig, ac yn dychwelyd `True` os nad yw'r
gair yn defnyddio unrhyw un o'r llythrennau. Dyma ddatrysiad.

```python
def uses_none(word, forbidden):
    for letter in word.lower():
        if letter in forbidden.lower():
            return False
    return True
```

Ysgrifennwch fersiwn o'r swyddogaeth hon sy'n defnyddio gweithrediadau `set` yn
hytrach na dolen `for`. Awgrym: gofynnwch i gynorthwyydd rhithwir, "How do I compute
the intersection of Python sets?"

Gallwch ddefnyddio'r amlinelliad hwn i ddechrau.

```python
def uses_none(word, forbidden):
    """Checks whether a word avoid forbidden letters.
    
    >>> uses_none('banana', 'xyz')
    True
    >>> uses_none('apple', 'efg')
    False
    >>> uses_none('', 'abc')
    True
    """
    return False
```

```python
# Ateb yma
```

```python
from doctest import run_docstring_examples

def run_doctests(func):
    run_docstring_examples(func, globals(), name=func.__name__)
```

```python
run_doctests(uses_none)
```

### Ymarfer

Mae Scrabble yn gêm fwrdd lle mai'r amcan yw defnyddio teils llythyren i sillafu
geiriau. Er enghraifft, os oes gennym deils â'r llythrennau `T`, `A`, `B`, `L`, `E`,
gallwn sillafu `BELT` a `LATE` gan ddefnyddio is-set o'r teils — ond ni allwn sillafu
`BEET` am nad oes gennym ddau `E`.

Ysgrifennwch swyddogaeth sy'n cymryd llinyn o lythrennau a gair, ac yn gwirio a all
y llythrennau sillafu'r gair, gan ystyried sawl gwaith y mae pob llythyren yn
ymddangos.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
def can_spell(letters, word):
    """Check whether the letters can spell the word.
    
    >>> can_spell('table', 'belt')
    True
    >>> can_spell('table', 'late')
    True
    >>> can_spell('table', 'beet')
    False
    """
    return False
```

```python
# Ateb yma
```

```python
run_doctests(can_spell)
```

### Ymarfer

Mewn un o'r ymarferion ym Mhennod 17, mae fy natrysiad i `has_straightflush` yn
defnyddio'r dull canlynol, sy'n rhannu `PokerHand` yn rhestr o bedair llaw, lle mae
pob llaw'n cynnwys cardiau o'r un siwt.

```python
    def partition(self):
        """Make a list of four hands, each containing only one suit."""
        hands = []
        for i in range(4):
            hands.append(PokerHand())
            
        for card in self.cards:
            hands[card.suit].add_card(card)
            
        return hands
```

Ysgrifennwch fersiwn symlach o'r swyddogaeth hon gan ddefnyddio `defaultdict`.

Dyma amlinelliad o'r dosbarth `PokerHand` a'r swyddogaeth `partition_suits` y gallwch
eu defnyddio i ddechrau.

```python
class PokerHand(Hand):
    
    def partition(self):
        return {}
```

```python
# Ateb yma
```

I brofi eich cod, byddwn yn gwneud pac ac yn ei gymysgu.

```python
cards = Deck.make_cards()
deck = Deck(cards)
deck.shuffle()
```

Yna crëwch `PokerHand` ac ychwanegwch saith cerdyn ato.

```python
random_hand = PokerHand('random')

for i in range(7):
    card = deck.pop_card()
    random_hand.add_card(card)
    
print(random_hand)
```

Os galwch `partition` ac argraffu'r canlyniadau, dylai fod gan bob llaw gardiau o un
siwt yn unig.

```python
hand_dict = random_hand.partition()

for hand in hand_dict.values():
    print(hand)
    print()
```

### Ymarfer

Dyma'r swyddogaeth o Bennod 11 sy'n cyfrifo rhifau Fibonacci.

```python
def fibonacci(n):
    if n == 0:
        return 0
    
    if n == 1:
        return 1

    return fibonacci(n-1) + fibonacci(n-2)
```

Ysgrifennwch fersiwn o'r swyddogaeth hon ag un gosodiad dychwelyd sy'n defnyddio dau
fynegiad amodol, un wedi'i nythu y tu mewn i'r llall.

```python
# Ateb yma
```

```python
fibonacci(10)    # should be 55
```

```python
fibonacci(20)    # should be 6765
```

### Ymarfer

Dyma swyddogaeth sy'n cyfrifo'r cyfernod binomaidd yn ddychweliadol.

```python
def binomial_coeff(n, k):
    """Compute the binomial coefficient "n choose k".

    n: number of trials
    k: number of successes

    returns: int
    """
    if k == 0:
        return 1
    
    if n == 0:
        return 0

    return binomial_coeff(n-1, k) + binomial_coeff(n-1, k-1)
```

Ailysgrifennwch gorff y swyddogaeth gan ddefnyddio mynegiadau amodol nythol.

Nid yw'r swyddogaeth hon yn effeithlon iawn am ei bod yn cyfrifo'r un gwerthoedd
drosodd a throsodd. Gwnewch hi'n fwy effeithlon drwy ei nodio, fel y disgrifiwyd ym
Mhennod 10.

```python
# Ateb yma
```

```python
binomial_coeff(10, 4)    # should be 210
```

### Ymarfer

Dyma'r dull `__str__` o'r dosbarth `Deck` ym Mhennod 17.

```python
%%add_method_to Deck

    def __str__(self):
        res = []
        for card in self.cards:
            res.append(str(card))
        return '\n'.join(res)
```

Ysgrifennwch fersiwn fwy cryno o'r dull hwn â dirnadaeth rhestr neu fynegiad
cynhyrchydd.

```python
# Ateb yma
```

Gallwch ddefnyddio'r enghraifft hon i brofi eich datrysiad.

```python
cards = Deck.make_cards()
deck = Deck(cards)
print(deck)
```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
