# Verkefni 5

Útfæra skal framenda ofan á próftöflu gögn úr verkefni 4. Gefin er vefþjónusta úr [sýnilausn á verkefni](x) sem hægt er að nota:
XXX

## Síður

Setja skal upp tvær síður:

* Forsíða með yfirlit yfir tölfræði fengin frá `/stats``
* Dýnamísk síða fyrir hvert svið sem birtir fyrirsögn fyrir hverja deild

Leiðarkerfi skal vera á hverri síðu sem sýnir öll svið og sækja skal lista frá vefþjónustu, **ekki skal skrifa inn lista af öllum sviðum í kóða**.

## Svið

Á síðu sviðs skal birta heiti sviðs og hverja deild sem heldur próf. Þegar smellt er á heiti deildar er sú deild „opnuð“ og próf hennar birt í töflu með eftirfarandi gögnum:

* Auðkenni námskeiðs
* Heiti námskeiðs
* Fjölda nemenda í prófi
* Dagsetningu prófs

## Útlit

Útlit skal setja upp með Sass en _uppskrift_ af því hvernig setja má það upp í create-react-app [má finna í skjölun](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc).

Fyrir útlit gildir:

* Útlit skal vera skalanlegt
* X

[Sjá skjáskot úr sýnilausn](layout/)

## Útfærsla

Nota skal [`create-react-app`](), gefinn er grunnur með þeim components sem útfæra þarf. Fyrstu skref ættu að vera að:

* Setja upp Sass
* XX

Nota skal `fetch` til að sækja gögn. Athugið að þar sem þessi kóði keyrir á framenda er **ekki** hægt að nota `async await` heldur skal nota promises.

Í `.env` er gefin slóð á vefþjónustu undir lykli `REACT_APP_SERVICE_URL` sem má nálgast í kóða með `process.env.REACT_APP_SERVICE_URL`. Lesa má nánar um þetta í [skjölun create-react-app]().

Breytingar hafa verið gerðar á sýnilausn sem keyrir fyrir verkefnið:

* Lykill fyrir svið heitir `schools` ekki `departments`
* Hvert svið hefur aukalega heiti sitt í svari

## Git og GitHub

Verkefni þetta er sett fyrir á GitHub og almennt ætti að skila því úr einka (private) repo nemanda. Nemendur geta fengið gjaldfrjálsan aðgang að einka repos á meðan námi stendur, sjá https://education.github.com/.

Til að byrja er hægt að afrita þetta repo og bæta við á sínu eigin:

```bash
> git clone https://github.com/vefforritun/vef2-2018-v4.git
> cd vef2-2018-v4
> git remote remove origin # fjarlægja remote sem verkefni er í
> git remote add origin <slóð á repo> # bæta við í þínu repo
> git push
```

## Mat

* 40% – Forsíða uppsett skv. forskrift
* 50% – Síða fyrir próf uppsett skv. forskrift
* 10% – Verkefni sett upp á Heroku

## Sett fyrir

Verkefni sett fyrir í fyrirlestri fimmtudaginn 15. mars 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags XXX.

Skilaboð skulu innihalda slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `ernir` og `elvarhelga`.

## Einkunn

Sett verða fyrir fimm minni verkefni þar sem fjögur bestu gilda 7,5% hvert, samtals 30% af lokaeinkunn.

Sett verða fyrir tvö hópa verkefni þar sem hvort um sig gildir 15%, samtals 30% af lokaeinkunn.
