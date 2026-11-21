# Etifeddiaeth

Y nodwedd iaith sydd amlaf yn gysylltiedig â rhaglennu gwrthrych-gyfeiriadol yw
**{term}`etifeddiaeth`**. Etifeddiaeth yw'r gallu i ddiffinio dosbarth newydd sy'n
fersiwn wedi'i newid o ddosbarth sy'n bodoli'n barod. Yn y bennod hon rwy'n dangos
etifeddiaeth gan ddefnyddio dosbarthiadau sy'n cynrychioli cardiau chwarae, pacynnau o
gardiau, a dwylo pocer. Os nad ydych yn chwarae pocer, peidiwch â phoeni — fe ddywedaf
wrthych beth sydd angen i chi ei wybod.

## Cynrychioli Cardiau

Mae 52 o gardiau chwarae mewn pac safonol — mae pob un ohonynt yn perthyn i un o bedwar
siwt ac un o dri rheng ar ddeg. Y siwtiau yw Spades, Hearts, Diamonds, a Clubs. Y
rhengoedd yw Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, a King. Yn dibynnu ar ba gêm
rydych yn ei chwarae, gall Ace fod yn uwch na King neu'n is na 2.

Os ydym am ddiffinio gwrthrych newydd i gynrychioli cerdyn chwarae, mae'n amlwg beth
ddylai'r priodoleddau fod: `rank` a `suit`. Mae'n llai amlwg pa fath ddylai'r
priodoleddau fod. Un posibilrwydd yw defnyddio llinynnau fel `'Spade'` ar gyfer siwtiau
a `'Queen'` ar gyfer rhengoedd. Problem gyda'r sylweddoliad hwn fyddai na fyddai'n hawdd
cymharu cardiau i weld p'un oedd â rheng neu siwt uwch.

Dewis arall yw defnyddio cyfanrifau i **{term}`amgodio`** y rhengoedd a'r siwtiau. Yn y
cyd-destun hwn, mae "amgodio" yn golygu ein bod yn mynd i ddiffinio mapio rhwng rhifau a
siwtiau, neu rhwng rhifau a rhengoedd. Nid yw'r math hwn o amgodio i fod yn gyfrinach
(byddai hynny'n "amgryptio").

Er enghraifft, mae'r tabl hwn yn dangos y siwtiau a'r codau cyfanrif cyfatebol:

| Siwt | Cod |
| --- | --- |
|  Spades     |   3  |
|  Hearts     |   2  |
|  Diamonds   |   1  |
|  Clubs      |   0  |

Gyda'r amgodiad hwn, gallwn gymharu siwtiau drwy gymharu eu codau.

I amgodio'r rhengoedd, byddwn yn defnyddio'r cyfanrif `2` i gynrychioli'r rheng `2`,
`3` i gynrychioli `3`, ac yn y blaen hyd at `10`. Mae'r tabl canlynol yn dangos y codau
ar gyfer y cardiau wyneb.

| Rheng | Cod |
| --- | --- |
|  Jack     |   11  |
|  Queen   |   12  |
|  King      |   13  |

A gallwn ddefnyddio naill ai `1` neu `14` i gynrychioli Ace, yn dibynnu a ydym am iddo
gael ei ystyried yn is neu'n uwch na'r rhengoedd eraill.

I gynrychioli'r amgodiadau hyn, byddwn yn defnyddio dwy restr o linynnau, un â enwau'r
siwtiau a'r llall ag enwau'r rhengoedd.

Dyma ddiffiniad ar gyfer dosbarth sy'n cynrychioli cerdyn chwarae, gyda'r rhestrau
llinynnau hyn fel **{term}`newidyn dosbarth`**ion, sef newidynnau a ddiffinnir y tu
mewn i ddiffiniad dosbarth, ond nid y tu mewn i ddull.

```python
class Card:
    """Represents a standard playing card."""

    suit_names = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    rank_names = [None, 'Ace', '2', '3', '4', '5', '6', '7', 
                  '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
```

Mae elfen gyntaf `rank_names` yn `None` am nad oes cerdyn â rheng sero. Drwy gynnwys
`None` fel lle-gadwydd, cawn restr â'r briodwedd braf bod y mynegai `2` yn mapio i'r
llinyn `'2'`, ac yn y blaen.

Mae newidynnau dosbarth yn gysylltiedig â'r dosbarth, yn hytrach nag ag enghraifft o'r
dosbarth, felly gallwn eu cyrchu fel hyn.

```python
Card.suit_names
```

Gallwn ddefnyddio `suit_names` i chwilio am siwt a chael y llinyn cyfatebol.

```python
Card.suit_names[0]
```

A `rank_names` i chwilio am reng.

```python
Card.rank_names[11]
```

## Priodoleddau Cerdyn

Dyma ddull `__init__` ar gyfer y dosbarth `Card` — mae'n cymryd `suit` a `rank` fel
paramedrau ac yn eu neilltuo i briodoleddau â'r un enwau.

```python
%%add_method_to Card

    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank
```

Nawr gallwn greu gwrthrych `Card` fel hyn.

```python
queen = Card(1, 12)
```

Gallwn ddefnyddio'r enghraifft newydd i gyrchu'r priodoleddau.

```python
queen.suit, queen.rank
```

Mae hefyd yn gyfreithlon defnyddio'r enghraifft i gyrchu'r newidynnau dosbarth.

```python
queen.suit_names
```

Ond os defnyddiwch y dosbarth, mae'n gliriach mai newidynnau dosbarth ydynt, nid
priodoleddau.

## Argraffu Cardiau

Dyma ddull `__str__` ar gyfer gwrthrychau `Card`.

```python
%%add_method_to Card

    def __str__(self):
        rank_name = Card.rank_names[self.rank]
        suit_name = Card.suit_names[self.suit]
        return f'{rank_name} of {suit_name}' 
```

Pan argraffwn `Card`, mae Python yn galw'r dull `__str__` i gael cynrychiolaeth
ddarllenadwy o'r cerdyn.

```python
print(queen)
```

Mae'r canlynol yn ddiagram o wrthrych dosbarth `Card` a'r enghraifft Card. Mae `Card`
yn wrthrych dosbarth, felly `type` yw ei fath. Mae `queen` yn enghraifft o `Card`,
felly `Card` yw ei fath. I arbed lle, ni thynnais gynnwys `suit_names` a `rank_names`.

```python
from diagram import Binding, Value, Frame, Stack

bindings = [Binding(Value(name), draw_value=False)
            for name in ['suit_names', 'rank_names']]
    
frame1 = Frame(bindings, name='type', dy=-0.5, offsetx=0.77)
binding1 = Binding(Value('Card'), frame1)

bindings = [Binding(Value(name), Value(value))
            for name, value in zip(['suit', 'rank'], [1, 11])]
    
frame2 = Frame(bindings, name='Card', dy=-0.3, offsetx=0.33)
binding2 = Binding(Value('queen'), frame2)

stack = Stack([binding1, binding2], dy=-1.2)
```

```python
from diagram import diagram, Bbox, make_list, adjust

width, height, x, y = [2.11, 2.14, 0.35, 1.76]
ax = diagram(width, height)
bbox = stack.draw(ax, x, y)

value = make_list([])
bbox2 = value.draw(ax, x+1.66, y)

value = make_list([])
bbox3 = value.draw(ax, x+1.66, y-0.5)

bbox = Bbox.union([bbox, bbox2, bbox3])
#adjust(x, y, bbox)
```

Mae gan bob enghraifft `Card` ei phriodoleddau `suit` a `rank` ei hun, ond dim ond un
gwrthrych dosbarth `Card` sy'n bodoli, ac dim ond un copi o'r newidynnau dosbarth
`suit_names` a `rank_names`.

## Cymharu Cardiau

Tybiwch ein bod yn creu ail wrthrych `Card` â'r un siwt a rheng.

```python
queen2 = Card(1, 12)
print(queen2)
```

Os defnyddiwn y gweithredydd `==` i'w cymharu, mae'n gwirio a yw `queen` a `queen2` yn
cyfeirio at yr un gwrthrych.

```python
queen == queen2
```

Nid ydynt, felly mae'n dychwelyd `False`. Gallwn newid yr ymddygiad hwn drwy ddiffinio'r
dull arbennig `__eq__`.

```python
%%add_method_to Card

    def __eq__(self, other):
        return self.suit == other.suit and self.rank == other.rank
```

Mae `__eq__` yn cymryd dau wrthrych `Card` fel paramedrau ac yn dychwelyd `True` os
oes ganddynt yr un siwt a rheng, hyd yn oed os nad ydynt yr un gwrthrych. Mewn geiriau
eraill, mae'n gwirio a ydynt yn gyfwerth, hyd yn oed os nad ydynt yn unfath.

Pan ddefnyddiwn y gweithredydd `==` gyda gwrthrychau `Card`, mae Python yn galw'r dull
`__eq__`.

```python
queen == queen2
```

Fel ail brawf, gadewch i ni greu cerdyn â'r un siwt a rheng wahanol.

```python
six = Card(1, 6)
print(six)
```

Gallwn gadarnhau nad yw `queen` a `six` yn gyfwerth.

```python
queen == six
```

Os defnyddiwn y gweithredydd `!=`, mae Python yn galw dull arbennig o'r enw `__ne__`,
os yw'n bodoli. Fel arall mae'n galw `__eq__` ac yn gwrthdroi'r canlyniad — felly os
yw `__eq__` yn dychwelyd `True`, canlyniad y gweithredydd `!=` yw `False`.

```python
queen != queen2
```

```python
queen != six
```

Nawr tybiwch ein bod am gymharu dau gerdyn i weld p'un sy'n fwy. Os defnyddiwn un o'r
gweithredyddion perthynol, cawn `TypeError`.

```python
%%expect TypeError

queen < queen2
```

I newid ymddygiad y gweithredydd `<`, gallwn ddiffinio dull arbennig o'r enw `__lt__`,
sy'n fyrfodd am "less than". Er mwyn yr enghraifft hon, gadewch i ni dybio bod siwt yn
bwysicach na rheng — felly mae pob Spade yn drechu pob Heart, sy'n drechu pob Diamond,
ac yn y blaen. Os oes gan ddau gerdyn yr un siwt, mae'r un â'r reng uwch yn ennill.

I weithredu'r rhesymeg hon, byddwn yn defnyddio'r dull canlynol, sy'n dychwelyd tŵpl
sy'n cynnwys siwt a rheng cerdyn, yn y drefn honno.

```python
%%add_method_to Card

    def to_tuple(self):
        return (self.suit, self.rank)
```

Gallwn ddefnyddio'r dull hwn i ysgrifennu `__lt__`.

```python
%%add_method_to Card

    def __lt__(self, other):
        return self.to_tuple() < other.to_tuple()
```

Mae cymharu tŵplau'n cymharu'r elfennau cyntaf o bob tŵpl, sy'n cynrychioli'r siwtiau.
Os ydynt yr un fath, mae'n cymharu'r ail elfennau, sy'n cynrychioli'r rhengoedd.

Nawr os defnyddiwn y gweithredydd `<`, mae'n galw'r dull `__lt__`.

```python
six < queen
```

Os defnyddiwn y gweithredydd `>`, mae'n galw dull arbennig o'r enw `__gt__`, os yw'n
bodoli. Fel arall mae'n galw `__lt__` gyda'r dadleuon yn y drefn arall.

```python
queen < queen2
```

```python
queen > queen2
```

Yn olaf, os defnyddiwn y gweithredydd `<=`, mae'n galw dull arbennig o'r enw `__le__`.

```python
%%add_method_to Card

    def __le__(self, other):
        return self.to_tuple() <= other.to_tuple()
```

Felly gallwn wirio a yw un cerdyn yn llai na neu'n gyfartal â'r llall.

```python
queen <= queen2
```

```python
queen <= six
```

Os defnyddiwn y gweithredydd `>=`, mae'n defnyddio `__ge__` os yw'n bodoli. Fel arall,
mae'n galw `__le__` gyda'r dadleuon yn y drefn arall.

```python
queen >= six
```

Fel y'u diffiniwyd gennym, mae'r dulliau hyn yn gyflawn yn yr ystyr y gallwn gymharu
unrhyw ddau wrthrych `Card`, ac yn gyson yn yr ystyr nad yw canlyniadau o wahanol
weithredyddion yn gwrthddweud ei gilydd. Gyda'r ddwy briodwedd hyn, gallwn ddweud bod
gwrthrychau `Card` **{term}`wedi'u trefnu'n llwyr`**. Ac mae hynny'n golygu, fel y
gwelwn yn fuan, y gellir eu trefnu.

## Pacynnau

Nawr ein bod gennym wrthrychau sy'n cynrychioli cardiau, gadewch i ni ddiffinio
gwrthrychau sy'n cynrychioli pacynnau. Dyma ddiffiniad dosbarth ar gyfer `Deck` gyda
dull `__init__` sy'n cymryd rhestr o wrthrychau `Card` fel paramedr ac yn ei neilltuo
i briodoledd o'r enw `cards`.

```python
class Deck:

    def __init__(self, cards):
        self.cards = cards
```

I greu rhestr sy'n cynnwys y 52 cerdyn mewn pac safonol, byddwn yn defnyddio'r dull
statig canlynol.

```python
%%add_method_to Deck

    def make_cards():
        cards = []
        for suit in range(4):
            for rank in range(2, 15):
                card = Card(suit, rank)
                cards.append(card)
        return cards
```

Yn `make_cards`, mae'r ddolen allanol yn rhifo'r siwtiau o `0` i `3`. Mae'r ddolen
fewnol yn rhifo'r rhengoedd o `2` i `14` — lle mae `14` yn cynrychioli Ace sy'n drechu
King. Mae pob iteriad yn creu `Card` newydd â'r siwt a'r rheng gyfredol, ac yn ei
atodi i `cards`.

Dyma sut rydym yn gwneud rhestr o gardiau a gwrthrych `Deck` sy'n ei chynnwys.

```python
cards = Deck.make_cards()
deck = Deck(cards)
len(deck.cards)
```

Mae'n cynnwys 52 cerdyn, fel y bwriadwyd.

## Argraffu'r Pac

Dyma ddull `__str__` ar gyfer `Deck`.

```python
%%add_method_to Deck

    def __str__(self):
        res = []
        for card in self.cards:
            res.append(str(card))
        return '\n'.join(res)
```

Mae'r dull hwn yn dangos ffordd effeithlon o gronni llinyn mawr — adeiladu rhestr o
linynnau ac yna defnyddio dull llinyn `join`.

Byddwn yn profi'r dull hwn â phac sy'n cynnwys dim ond dau gerdyn.

```python
small_deck = Deck([queen, six])
```

Os galwn `str`, mae'n galw `__str__`.

```python
str(small_deck)
```

Pan fo Jupyter yn arddangos llinyn, mae'n dangos ffurf "gynrychioliadol" y llinyn, sy'n
cynrychioli llinell newydd gyda'r dilyniant `\n`.

Fodd bynnag, os argraffwn y canlyniad, mae Jupyter yn dangos ffurf "argraffadwy" y
llinyn, sy'n argraffu'r llinell newydd fel gofod gwag.

```python
print(small_deck)
```

Felly mae'r cardiau'n ymddangos ar linellau ar wahân.

## Ychwanegu, Tynnu, Cymysgu a Threfnu

I ddelio cardiau, hoffem ddull sy'n tynnu cerdyn o'r pac ac yn ei ddychwelyd. Mae'r
dull rhestr `pop` yn darparu ffordd gyfleus o wneud hynny.

```python
%%add_method_to Deck

    def take_card(self):
        return self.cards.pop()
```

Dyma sut rydym yn ei defnyddio.

```python
card = deck.take_card()
print(card)
```

Gallwn gadarnhau bod `51` o gardiau ar ôl yn y pac.

```python
len(deck.cards)
```

I ychwanegu cerdyn, gallwn ddefnyddio'r dull rhestr `append`.

```python
%%add_method_to Deck

    def put_card(self, card):
        self.cards.append(card)
```

Fel enghraifft, gallwn roi'r cerdyn a dynnwyd newydd yn ôl.

```python
deck.put_card(card)
len(deck.cards)
```

I gymysgu'r pac, gallwn ddefnyddio'r swyddogaeth `shuffle` o'r modiwl `random`:

```python
import random
```

```python
# This cell initializes the random number generator so we
# always get the same results.

random.seed(3)
```

```python
%%add_method_to Deck
            
    def shuffle(self):
        random.shuffle(self.cards)
```

Os cymysgwn y pac ac argraffu'r ychydig gardiau cyntaf, gallwn weld nad ydynt mewn
unrhyw drefn amlwg.

```python
deck.shuffle()
for card in deck.cards[:4]:
    print(card)
```

I drefnu'r cardiau, gallwn ddefnyddio'r dull rhestr `sort`, sy'n trefnu'r elfennau "yn
eu lle" — hynny yw, mae'n newid y rhestr yn hytrach na chreu rhestr newydd.

```python
%%add_method_to Deck
            
    def sort(self):
        self.cards.sort()
```

Pan alwn `sort`, mae'n defnyddio'r dull `__lt__` i gymharu cardiau.

```python
deck.sort()
```

Os argraffwn yr ychydig gardiau cyntaf, gallwn gadarnhau eu bod mewn trefn gynyddol.

```python
for card in deck.cards[:4]:
    print(card)
```

Yn yr enghraifft hon, nid yw `Deck.sort` yn gwneud dim byd heblaw galw `list.sort`.
Gelwir trosglwyddo cyfrifoldeb fel hyn yn **{term}`dirprwyo`**.

## Rhieni a Phlant

Etifeddiaeth yw'r gallu i ddiffinio dosbarth newydd sy'n fersiwn wedi'i newid o
ddosbarth sy'n bodoli'n barod. Fel enghraifft, gadewch i ni ddweud ein bod am gael
dosbarth i gynrychioli "llaw", hynny yw, y cardiau sydd gan un chwaraewr.

* Mae llaw yn debyg i bac — mae'r ddau'n cynnwys casgliad o gardiau, ac mae'r ddau'n
  gofyn am weithrediadau fel ychwanegu a thynnu cardiau.

* Mae llaw hefyd yn wahanol i bac — mae gweithrediadau rydym eu heisiau ar gyfer
  dwylo nad ydynt yn gwneud synnwyr ar gyfer pac. Er enghraifft, mewn pocer efallai y
  byddwn yn cymharu dwy law i weld pa un sy'n ennill. Mewn bridge, efallai y byddwn
  yn cyfrifo sgôr ar gyfer llaw er mwyn gwneud cynnig.

Mae'r berthynas hon rhwng dosbarthiadau — lle mae un yn fersiwn arbenigol o'r llall —
yn addas i etifeddiaeth.

I ddiffinio dosbarth newydd sy'n seiliedig ar ddosbarth sy'n bodoli'n barod, rydym yn
rhoi enw'r dosbarth sy'n bodoli'n barod mewn cromfachau.

```python
class Hand(Deck):
    """Represents a hand of playing cards."""
```

Mae'r diffiniad hwn yn dynodi bod `Hand` yn etifeddu o `Deck`, sy'n golygu y gall
gwrthrychau `Hand` gyrchu dulliau a ddiffinnir yn `Deck`, fel `take_card` a `put_card`.

Mae `Hand` hefyd yn etifeddu `__init__` o `Deck`, ond os diffiniwn `__init__` yn
nosbarth `Hand`, mae'n disodli'r un yn nosbarth `Deck`.

```python
%%add_method_to Hand

    def __init__(self, label=''):
        self.label = label
        self.cards = []
```

Mae'r fersiwn hon o `__init__` yn cymryd llinyn dewisol fel paramedr, ac mae bob amser
yn dechrau gyda rhestr wag o gardiau. Pan greawn `Hand`, mae Python yn galw'r dull hwn,
nid yr un yn `Deck` — y gallwn ei gadarnhau drwy wirio bod gan y canlyniad briodoledd
`label`.

```python
hand = Hand('player 1')
hand.label
```

I ddelio cerdyn, gallwn ddefnyddio `take_card` i dynnu cerdyn o `Deck`, a `put_card` i
ychwanegu'r cerdyn at `Hand`.

```python
deck = Deck(cards)
card = deck.take_card()
hand.put_card(card)
print(hand)
```

Gadewch i ni amgáu'r cod hwn mewn dull `Deck` o'r enw `move_cards`.

```python
%%add_method_to Deck

    def move_cards(self, other, num):
        for i in range(num):
            card = self.take_card()
            other.put_card(card)
```

Mae'r dull hwn yn bolymorffig — hynny yw, mae'n gweithio â mwy nag un math: gall
`self` a `other` fod naill ai'n `Hand` neu'n `Deck`. Felly gallwn ddefnyddio'r dull hwn
i ddelio cerdyn o `Deck` i `Hand`, o un `Hand` i'r llall, neu o `Hand` yn ôl i `Deck`.

Pan fo dosbarth newydd yn etifeddu o un sy'n bodoli'n barod, cyfeirir at yr un sy'n
bodoli'n barod fel **{term}`dosbarth rhiant`**, a chyfeirir at y dosbarth newydd fel
**{term}`dosbarth plentyn`**. Yn gyffredinol:

* Dylai fod gan enghreifftiau'r dosbarth plentyn holl briodoleddau'r dosbarth rhiant,
  ond gallant gael priodoleddau ychwanegol.

* Dylai fod gan y dosbarth plentyn holl ddulliau'r dosbarth rhiant, ond gall gael
  dulliau ychwanegol.

* Os yw dosbarth plentyn yn disodli dull o'r dosbarth rhiant, dylai'r dull newydd
  gymryd yr un paramedrau a dychwelyd canlyniad cydnaws.

Gelwir y set hon o reolau yn "egwyddor amnewid Liskov" ar ôl y gwyddonydd cyfrifiadurol
Barbara Liskov.

Os dilynwch y rheolau hyn, bydd unrhyw swyddogaeth neu ddull a ddyluniwyd i weithio â
enghraifft o ddosbarth rhiant, fel `Deck`, hefyd yn gweithio ag enghreifftiau o
ddosbarth plentyn, fel `Hand`. Os torrwch y rheolau hyn, bydd eich cod yn cwympo fel
tŷ o gardiau (mae'n ddrwg gennyf).

## Arbenigo

Gadewch i ni wneud dosbarth o'r enw `BridgeHand` sy'n cynrychioli llaw mewn bridge — gêm
gardiau a chwaraeir yn eang. Byddwn yn etifeddu o `Hand` ac yn ychwanegu dull newydd o'r
enw `high_card_point_count` sy'n gwerthuso llaw gan ddefnyddio dull "pwyntiau cerdyn
uchel", sy'n adio pwyntiau ar gyfer y cardiau uchel yn y llaw.

Dyma ddiffiniad dosbarth sy'n cynnwys, fel newidyn dosbarth, eiriadur sy'n mapio o
enwau cardiau i'w gwerthoedd pwynt.

```python
class BridgeHand(Hand):
    """Represents a bridge hand."""

    hcp_dict = {
        'Ace': 4,
        'King': 3,
        'Queen': 2,
        'Jack': 1,
    }
```

O gael rheng cerdyn, fel `12`, gallwn ddefnyddio `Card.rank_names` i gael cynrychiolaeth
llinynnol y rheng, ac yna defnyddio `hcp_dict` i gael ei sgôr.

```python
rank = 12
rank_name = Card.rank_names[rank]
score = BridgeHand.hcp_dict.get(rank_name, 0)
rank_name, score
```

Mae'r dull canlynol yn dolennu drwy'r cardiau mewn `BridgeHand` ac yn adio eu sgorau.

```python
%%add_method_to BridgeHand

    def high_card_point_count(self):
        count = 0
        for card in self.cards:
            rank_name = Card.rank_names[card.rank]
            count += BridgeHand.hcp_dict.get(rank_name, 0)
        return count
```

```python
# This cell makes a fresh Deck and 
# initializes the random number generator

cards = Deck.make_cards()
deck = Deck(cards)
random.seed(3)
```

I'w brofi, byddwn yn delio llaw â phum cerdyn — mae gan law bridge fel arfer dri ar
ddeg, ond mae'n haws profi cod ag enghreifftiau bach.

```python
hand = BridgeHand('player 2')

deck.shuffle()
deck.move_cards(hand, 5)
print(hand)
```

A dyma'r sgôr cyfanswm ar gyfer y King a'r Queen.

```python
hand.high_card_point_count()
```

Mae `BridgeHand` yn etifeddu newidynnau a dulliau `Hand` ac yn ychwanegu newidyn
dosbarth a dull sy'n benodol i bridge. Gelwir y ffordd hon o ddefnyddio etifeddiaeth yn
**{term}`arbenigaeth`** am ei bod yn diffinio dosbarth newydd sydd wedi'i arbenigo at
bwrpas penodol, fel chwarae bridge.

## Dadnamu

Mae etifeddiaeth yn nodwedd ddefnyddiol. Gellir ysgrifennu rhai rhaglenni fyddai'n
ailadroddus heb etifeddiaeth yn fwy cryno gyda hi. Hefyd, gall etifeddiaeth hwyluso
ailddefnyddio cod, gan y gallwch addasu ymddygiad dosbarth rhiant heb orfod ei newid.
Mewn rhai achosion, mae strwythur yr etifeddiaeth yn adlewyrchu strwythur naturiol y
broblem, sy'n gwneud y dyluniad yn haws ei ddeall.

Ar y llaw arall, gall etifeddiaeth wneud rhaglenni'n anodd eu darllen. Pan elwir dull,
weithiau nid yw'n glir ble i ddod o hyd i'w ddiffiniad — gall y cod perthnasol fod wedi'i
wasgaru ar draws sawl modiwl.

Unrhyw bryd rydych yn ansicr am lif y cyflawniad drwy eich rhaglen, y datrysiad symlaf
yw ychwanegu gosodiadau argraffu ar ddechrau'r dulliau perthnasol. Os yw `Deck.shuffle`
yn argraffu neges sy'n dweud rhywbeth fel `Running Deck.shuffle`, yna wrth i'r rhaglen
redeg mae'n olrhain llif y cyflawniad.

Fel dewis arall, gallech ddefnyddio'r swyddogaeth ganlynol, sy'n cymryd gwrthrych ac
enw dull (fel llinyn) ac yn dychwelyd y dosbarth sy'n darparu diffiniad y dull.

```python
def find_defining_class(obj, method_name):
    """Find the class where the given method is defined."""
    for typ in type(obj).mro():
        if method_name in vars(typ):
            return typ
    return f'Method {method_name} not found.'
```

Mae `find_defining_class` yn defnyddio'r dull `mro` i gael y rhestr o wrthrychau
dosbarth (mathau) y bydd yn chwilio ynddynt am ddulliau. Mae "MRO" yn sefyll am "method
resolution order", sef y dilyniant o ddosbarthiadau mae Python yn chwilio ynddynt i
"ddatrys" enw dull — hynny yw, i ddod o hyd i'r gwrthrych swyddogaeth y mae'r enw'n
cyfeirio ato.

Fel enghraifft, gadewch i ni enghreifftio `BridgeHand` ac yna dod o hyd i ddosbarth
diffiniol `shuffle`.

```python
hand = BridgeHand('player 3')
find_defining_class(hand, 'shuffle')
```

Y dull `shuffle` ar gyfer y gwrthrych `BridgeHand` yw'r un yn `Deck`.

## Rhestr Termau'r Bennod

**etifeddiaeth:**
Y gallu i ddiffinio dosbarth newydd sy'n fersiwn wedi'i newid o ddosbarth a
ddiffiniwyd o'r blaen.

**amgodio:**
Cynrychioli un set o werthoedd gan ddefnyddio set arall o werthoedd drwy adeiladu
mapio rhyngddynt.

**newidyn dosbarth:**
Newidyn a ddiffinnir y tu mewn i ddiffiniad dosbarth, ond nid y tu mewn i unrhyw ddull.

**wedi'u trefnu'n llwyr:**
Mae set o wrthrychau wedi'u trefnu'n llwyr os gallwn gymharu unrhyw ddwy elfen a bod
y canlyniadau'n gyson.

**dirprwyo:**
Pan fo un dull yn trosglwyddo cyfrifoldeb i ddull arall i wneud y rhan fwyaf neu'r cyfan
o'r gwaith.

**dosbarth rhiant:**
Dosbarth yr etifeddir ohono.

**dosbarth plentyn:**
Dosbarth sy'n etifeddu o ddosbarth arall.

**arbenigaeth:**
Ffordd o ddefnyddio etifeddiaeth i greu dosbarth newydd sy'n fersiwn arbenigol o
ddosbarth sy'n bodoli'n barod.

## Ymarferion

### Gofyn i gynorthwyydd rhithwir

Pan fo'n mynd yn dda, gall rhaglennu gwrthrych-gyfeiriadol wneud rhaglenni'n fwy
darllenadwy, profadwy, ac ailddefnyddiadwy. Ond gall hefyd wneud rhaglenni'n gymhleth
ac yn anodd eu cynnal. O ganlyniad, mae OOP yn bwnc dadleuol — mae rhai pobl wrth eu
bodd ag ef, ac nid yw eraill.

I ddysgu mwy am y pwnc, gofynnwch i gynorthwyydd rhithwir:

* Beth yw rhai manteision ac anfanteision rhaglennu gwrthrych-gyfeiriadol?

* Beth mae'n ei olygu pan ddywed pobl "ffafrio cyfansoddiad dros etifeddiaeth"?

* Beth yw egwyddor amnewid Liskov?

* A yw Python yn iaith wrthrych-gyfeiriadol?

* Beth yw'r gofynion er mwyn i set fod wedi'i threfnu'n llwyr?

Ac fel bob amser, ystyriwch ddefnyddio cynorthwyydd rhithwir i helpu gyda'r ymarferion
canlynol.

### Ymarfer

Mewn contract bridge, mae "trick" yn rownd o chwarae lle mae pob un o bedwar
chwaraewr yn chwarae un cerdyn. I gynrychioli'r cardiau hynny, byddwn yn diffinio
dosbarth sy'n etifeddu o `Deck`.

```python
class Trick(Deck):
    """Represents a trick in contract bridge."""
```

Fel enghraifft, ystyriwch y trick hwn, lle mae'r chwaraewr cyntaf yn arwain gyda'r 3 o
Diamonds, sy'n golygu mai Diamonds yw'r "siwt arweiniol". Mae'r ail a'r trydydd
chwaraewr yn "dilyn y siwt", sy'n golygu eu bod yn chwarae cerdyn â'r siwt arweiniol.
Mae'r pedwerydd chwaraewr yn chwarae cerdyn o siwt wahanol, sy'n golygu na allant ennill
y trick. Felly enillydd y trick hwn yw'r trydydd chwaraewr, am eu bod wedi chwarae'r
cerdyn uchaf yn y siwt arweiniol.

```python
cards = [Card(1, 3),
         Card(1, 10),
         Card(1, 12),
         Card(2, 13)]
trick = Trick(cards)
print(trick)
```

Ysgrifennwch ddull `Trick` o'r enw `find_winner` sy'n dolennu drwy'r cardiau yn y
`Trick` ac yn dychwelyd mynegai'r cerdyn sy'n ennill. Yn yr enghraifft flaenorol,
mynegai'r cerdyn buddugol yw `2`.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to Trick

    def find_winner(self):
        return 0
```

```python
# Ateb yma
```

Os profwch eich dull â'r enghraifft flaenorol, dylai mynegai'r cerdyn buddugol fod yn
`2`.

```python
trick.find_winner()
```

### Ymarfer

Mae'r ychydig ymarferion nesaf yn gofyn i chi ysgrifennu swyddogaethau sy'n dosbarthu
dwylo pocer. Os nad ydych yn gyfarwydd â pocer, fe egluraf beth sydd angen i chi ei
wybod. Byddwn yn defnyddio'r dosbarth canlynol i gynrychioli dwylo pocer.

```python
class PokerHand(Hand):
    """Represents a poker hand."""

    def get_suit_counts(self):
        counter = {}
        for card in self.cards:
            key = card.suit
            counter[key] = counter.get(key, 0) + 1
        return counter
    
    def get_rank_counts(self):
        counter = {}
        for card in self.cards:
            key = card.rank
            counter[key] = counter.get(key, 0) + 1
        return counter    
```

Mae `PokerHand` yn darparu dau ddull a fydd yn helpu gyda'r ymarferion.

* Mae `get_suit_counts` yn dolennu drwy'r cardiau yn y `PokerHand`, yn cyfrif nifer y
  cardiau ym mhob siwt, ac yn dychwelyd geiriadur sy'n mapio o bob cod siwt i nifer y
  troeon y mae'n ymddangos.

* Mae `get_rank_counts` yn gwneud yr un peth gyda rhengoedd y cardiau, gan ddychwelyd
  geiriadur sy'n mapio o bob cod rheng i nifer y troeon y mae'n ymddangos.

Gellir gwneud pob un o'r ymarferion sy'n dilyn gan ddefnyddio dim ond y nodweddion
Python rydym wedi'u dysgu hyd yn hyn, ond mae rhai ohonynt yn anoddach na'r rhan fwyaf
o'r ymarferion blaenorol. Rwy'n eich annog i ofyn i gynorthwyydd rhithwir am gymorth.

Ar gyfer problemau fel hyn, mae'n aml yn gweithio'n dda i ofyn am gyngor cyffredinol
ynghylch strategaethau ac algorithmau. Yna gallwch naill ai ysgrifennu'r cod eich hun
neu ofyn am god. Os gofynnwch am god, efallai yr hoffech ddarparu'r diffiniadau
dosbarth perthnasol fel rhan o'r cais.

Fel ymarfer cyntaf, byddwn yn ysgrifennu dull o'r enw `has_flush` sy'n gwirio a oes gan
law "flush" — hynny yw, a yw'n cynnwys o leiaf pum cerdyn o'r un siwt.

Yn y rhan fwyaf o fathau o pocer, mae llaw'n cynnwys naill ai pump neu saith cerdyn,
ond ceir rhai amrywiadau egsotig lle mae llaw'n cynnwys niferoedd eraill o gardiau. Ond
waeth faint o gardiau sydd mewn llaw, dim ond y pump sy'n gwneud y llaw orau sy'n cyfrif.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to PokerHand

    def has_flush(self):
        """Checks whether this hand has a flush."""
        return False
```

```python
# Ateb yma
```

I brofi'r dull hwn, byddwn yn adeiladu llaw â phum cerdyn sydd i gyd yn Clubs, fel ei
bod yn cynnwys flush.

```python
good_hand = PokerHand('good_hand')

suit = 0
for rank in range(10, 15):
    card = Card(suit, rank)
    good_hand.put_card(card)
    
print(good_hand)
```

Os galwn `get_suit_counts`, gallwn gadarnhau bod y cod rheng `0` yn ymddangos `5`
gwaith.

```python
good_hand.get_suit_counts()
```

Felly dylai `has_flush` ddychwelyd `True`.

```python
good_hand.has_flush()
```

Fel ail brawf, byddwn yn adeiladu llaw â thri Clubs a dau siwt arall.

```python
cards = [Card(0, 2),
         Card(0, 3),
         Card(2, 4),
         Card(3, 5),
         Card(0, 7),
        ]

bad_hand = PokerHand('bad hand')
for card in cards:
    bad_hand.put_card(card)
    
print(bad_hand)
```

Felly dylai `has_flush` ddychwelyd `False`.

```python
bad_hand.has_flush()
```

### Ymarfer

Ysgrifennwch ddull o'r enw `has_straight` sy'n gwirio a yw llaw'n cynnwys "straight",
sef set o bum cerdyn â rhengoedd olynol. Er enghraifft, os yw llaw'n cynnwys y
rhengoedd `5`, `6`, `7`, `8`, a `9`, mae'n cynnwys straight.

Gall Ace ddod cyn 2 neu ar ôl King, felly mae `Ace`, `2`, `3`, `4`, `5` yn straight ac
felly hefyd `10`, `Jack`, `Queen`, `King`, `Ace`. Ond ni all straight "lapio o gwmpas",
felly nid yw `King`, `Ace`, `2`, `3`, `4` yn straight.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau. Mae'n cynnwys ychydig linellau o
god sy'n cyfrif nifer yr Aceau — a gynrychiolir â'r cod `1` neu `14` — ac yn storio'r
cyfanswm yn y ddau leoliad yn y cownter.

```python
%%add_method_to PokerHand

    def has_straight(self, n=5):
        """Checks whether this hand has a straight with at least `n` cards."""
        counter = self.get_rank_counts()
        aces = counter.get(1, 0) + counter.get(14, 0)
        counter[1] = aces
        counter[14] = aces
        
        return False
```

```python
# Ateb yma
```

Mae `good_hand`, a grëwyd gennym ar gyfer yr ymarfer blaenorol, yn cynnwys straight.
Os defnyddiwn `get_rank_counts`, gallwn gadarnhau bod ganddi o leiaf un cerdyn â phob
un o bum rheng olynol.

```python
good_hand.get_rank_counts()
```

Felly dylai `has_straight` ddychwelyd `True`.

```python
good_hand.has_straight()
```

Nid yw `bad_hand` yn cynnwys straight, felly dylai `has_straight` ddychwelyd `False`.

```python
bad_hand.has_straight()
```

### Ymarfer

Mae gan law straight flush os yw'n cynnwys set o bum cerdyn sy'n straight ac yn flush
— hynny yw, pum cerdyn o'r un siwt â rhengoedd olynol. Ysgrifennwch ddull `PokerHand`
sy'n gwirio a oes gan law straight flush.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to PokerHand

    def has_straightflush(self):
        """Check whether this hand has a straight flush."""
        return False
```

```python
# Ateb yma
```

```python
# Ateb yma
```

Defnyddiwch yr enghreifftiau canlynol i brofi eich dull.

```python
good_hand.has_straightflush()     # should return True
```

```python
bad_hand.has_straightflush()     # should return False
```

Sylwch nad yw'n ddigon gwirio a oes gan law straight a flush. I weld pam, ystyriwch y
llaw ganlynol.

```python
from copy import deepcopy

straight_and_flush = deepcopy(bad_hand)
straight_and_flush.put_card(Card(0, 6))
straight_and_flush.put_card(Card(0, 9))
print(straight_and_flush)
```

Mae'r llaw hon yn cynnwys straight a flush, ond nid ydynt yr un pum cerdyn.

```python
 straight_and_flush.has_straight(), straight_and_flush.has_flush()
```

Felly nid yw'n cynnwys straight flush.

```python
straight_and_flush.has_straightflush()    # should return False
```

### Ymarfer

Mae gan law pocer bâr os yw'n cynnwys dau gerdyn neu fwy â'r un rheng. Ysgrifennwch
ddull `PokerHand` sy'n gwirio a yw llaw'n cynnwys pâr.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to PokerHand

    def has_pair(self):
        return True
```

```python
# Ateb yma
```

```python
# Ateb yma
```

I brofi eich dull, dyma law sydd â phâr.

```python
pair = deepcopy(bad_hand)
pair.put_card(Card(1, 2))
print(pair)
```

```python
pair.has_pair()    # should return True
```

```python
bad_hand.has_pair()    # should return False
```

```python
good_hand.has_pair()   # should return False
```

### Ymarfer

Mae gan law "full house" os yw'n cynnwys tri cherdyn o un rheng a dau gerdyn o reng
arall. Ysgrifennwch ddull `PokerHand` sy'n gwirio a oes gan law full house.

Gallwch ddefnyddio'r amlinelliad canlynol i ddechrau.

```python
%%add_method_to PokerHand

    def has_full_house(self):
        return False
```

```python
# Ateb yma
```

Gallwch ddefnyddio'r llaw hon i brofi eich dull.

```python
boat = deepcopy(pair)
boat.put_card(Card(2, 2))
boat.put_card(Card(2, 3))
print(boat)
```

```python
boat.has_full_house()     # should return True
```

```python
pair.has_full_house()     # should return False
```

```python
good_hand.has_full_house()     # should return False
```

### Ymarfer

Mae'r ymarfer hwn yn stori rybuddiol am wall cyffredin a all fod yn anodd ei ddadnamu.
Ystyriwch y diffiniad dosbarth canlynol.

```python
class Kangaroo:
    """A Kangaroo is a marsupial."""
    
    def __init__(self, name, contents=[]):
        """Initialize the pouch contents.

        name: string
        contents: initial pouch contents.
        """
        self.name = name
        self.contents = contents

    def __str__(self):
        """Return a string representaion of this Kangaroo.
        """
        t = [ self.name + ' has pouch contents:' ]
        for obj in self.contents:
            s = '    ' + object.__str__(obj)
            t.append(s)
        return '\n'.join(t)

    def put_in_pouch(self, item):
        """Adds a new item to the pouch contents.

        item: object to be added
        """
        self.contents.append(item)
```

Mae `__init__` yn cymryd dau baramedr: mae `name` yn ofynnol, ond mae `contents` yn
ddewisol — os na chaiff ei ddarparu, y gwerth rhagosodedig yw rhestr wag.

Mae `__str__` yn dychwelyd cynrychiolaeth llinynnol o'r gwrthrych sy'n cynnwys yr enw
a chynnwys y boced.

Mae `put_in_pouch` yn cymryd unrhyw wrthrych ac yn ei atodi i `contents`.

Nawr gadewch i ni weld sut mae'r dosbarth hwn yn gweithio. Byddwn yn creu dau
wrthrych `Kangaroo` â'r enwau `'Kanga'` a `'Roo'`.

```python
kanga = Kangaroo('Kanga')
roo = Kangaroo('Roo')
```

I boced Kanga byddwn yn ychwanegu dau linyn a Roo.

```python
kanga.put_in_pouch('wallet')
kanga.put_in_pouch('car keys')
kanga.put_in_pouch(roo)
```

Os argraffwn `kanga`, mae'n edrych fel bod popeth wedi gweithio.

```python
print(kanga)
```

Ond beth sy'n digwydd os argraffwn `roo`?

```python
print(roo)
```

Mae poced Roo yn cynnwys yr un cynnwys â phoced Kanga, gan gynnwys cyfeiriad at `roo`
ei hun!

Gwelwch a allwch ddarganfod beth aeth o'i le. Yna gofynnwch i gynorthwyydd rhithwir,
"What's wrong with the following program?" a gludwch ddiffiniad `Kangaroo`.

```python

```

---

[Think Python: 3rd Edition](https://allendowney.github.io/ThinkPython/index.html) gan
Allen B. Downey. Cyfieithiad Cymraeg gan Wayne Aubrey.

Hawlfraint 2024 [Allen B. Downey](https://allendowney.com). Trwydded testun: [Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).
