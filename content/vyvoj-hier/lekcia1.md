---
author: "Spawn.codes"
title: "🎮 Lekcia I."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Vitaj na kurze vývoja hier!** 👋

<!--more-->

Vďaka tomuto kurzu sa môžeš stať <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Game-Developer 👨‍💻</span>. Naučíš sa pracovať s game-engine <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Pico-8 🎲</span>, ktorý je špecializovaný na tvorbu malých hier - vytvoríš si v ňom hernú grafiku a mapu, naprogramuješ hru a dokonca si v ňom zložíš vlastnú hernú hudbu.

Ak si mal niekedy vlastné nápady na hry, týmto kurzom ich môžeš konečne uskutočniť! 💪

## Úvod

{{< figure src="/vyvoj-hier/lekcia1/pet-dino.gif" class="float-right ml-16 max-w-sm">}}

V tejto lekcii si vytvoríš prvú hru. Nabehneš priamo do toho, aby si si všetko vyskúšal! Ale neboj, všetky časti vývoja sa postupne a do detailov preberú v budúcich lekciách.

Tvoja prvá hra sa bude volať <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Pet Dino 🐲</span>. Myšlienkou tejto hry je, že tvoj hráč má svojho dinosaura na vôdzke. Pomocou vôdzky ho vie kontrolovať.

Počas lekcie si vytvoríš celý herný svet a naprogramuješ vlastnosti a mechaniky hráča a jeho dinosaura.

{{< figure class="clear-both">}}

## Príprava hry

{{< figure src="/vyvoj-hier/lekcia1/editor.png" class="float-right ml-16 max-w-xs">}}

Keď sa ti zapne tvoj Pico-8, napíš

```
save dino.p8
```
Týmto príkazom si vytvoríš a uložíš svoj herný súbor.

Aby si sa dostal do editora, stlač klávesu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">ESC</span>. V editore máš nástroje na písanie kódu, kreslenie hernej grafiky, vytváranie máp a dokonca skladanie hudby.

{{< figure class="clear-both">}}

## Herná grafika
Ako prvé je vhodné si vytvoriť zopár herných obrázkov, tzv. <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">sprites 🎨</span>. Stačí si vybrať nejakú farbu a začať dopĺňať pixely do čierneho štvorčeka. Obrázky v Pico-8 typicky majú veľkosť 8x8 px - presne to, čo potrebujeme!

Nakreslíme si postavu hráča a postavu dinosaura.

{{< figure src="/vyvoj-hier/lekcia1/player.png" class="float-left mr-16 max-w-xs">}}
{{< figure src="/vyvoj-hier/lekcia1/dino.png" class="float-right mr-16 max-w-xs">}}
{{< figure class="clear-both">}}

Ešte budeme potrebovať zelený štvorček a štvorček s trávou ako dočasné pozadie.

{{< figure src="/vyvoj-hier/lekcia1/green-tile.png" class="float-left mr-16 max-w-xs">}}
{{< figure src="/vyvoj-hier/lekcia1/grass-tile.png" class="float-right mr-16 max-w-xs">}}
{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia1/map-editor.png" class="float-right ml-16 max-w-xs">}}

## Mapa
Presunieš sa na tvorenie mapy. Tu vieš využiť našu grafiku a jednoducho naskladáš štvorčeky ku ľavému hornému rohu mapy.

Ku zeleným štvorčekom pridaj aj zopár štvorčekov s trávou.

Mapa v Pico-8 má rozmery <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">128x128 px 👾</span>. To znamená, že sa ti na každú stranu vojde 16 tvojich štvorčekov. Zvyšok mapy slúži pre nové levely alebo lokácie.

{{< figure class="clear-both">}}

## Spustenie hry
Pre spustenie hry budeš potrebovať trochu kódu. Presuň sa preto na code-editor.

Potrebujeme "vykresliť" našu mapu. Máme na to špeciálne príkazy.

```lua
--špeciálny typ funkcie - pravidelne vykresľuje všetko, čo je vnútri
function _draw()
    --príkaz cls() premaže všetko na obrazovke (starú mapu)
    cls()
    --príkaz map() vloží na obrazovku naše pozadie z map editora
    map(0,0)
end
```

Teraz hru najprv ulož klávesami <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">ctrl + s</span> a potom spusti - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">ctrl + r</span>.

## Player & Dino
Teraz nám už len chýba pridať nášho hráča a jeho dinosaura. Najprv im potrebujeme zadefinovať nejaké vlastnosti:

```lua
--špeciálny typ funkcie - všetko vo funkcii sa prehraje tesne pred štartom hry
function _init()
    player={
        sprite=1,   --číslo obrázku, ktorý sme vytvorili
        x=60,       --x-ová pozícia / vodorovná
        y=60,       --y-ová pozícia / horizontálna
        w=1,        --šírka v štvorčeku / tile width
        h=1,        --výška v štvorčeku / tile height
        flp=false,  --obrátenie / flip
        speed=1,    --rýchlosť
    }
end
```

> **🔰 Úloha:** Vytvor rovnaké vlastnosti pre Dinosaura. Daj však pozor na jeho obrázok!

Opäť ich vykreslíme vo funkcii <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_draw()</span>. Na to použijeme príkaz:

```lua
spr(player.sprite, player.x, player.y, player.w, player.h, player.flp)
```

> **🔰 Úloha:** Vykresli podobne aj dinosaura.

Pridajme hráčovi vôdzku na dinosaura. Vôdzka bude len jednoduchá čiara od hráčovej pozície po dinosaurovu. Použijeme príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">line()</span>.

```lua
--pridáme najprv oba súradnice pozície hráča, potom pozíciu dinosaura a nakoniec farbu (8=červená)
line(player.x+8, player.y+4, dino.x+1, dino.y+4, 8)
```

## Pohyb
Tvoja hra potrebuje nejakú interakciu. Pridaj hráčovi možnosť pohybu.

Využiješ na to podmienky. Podmienky slúžia na skontrolovanie stavu nejakej situácie. Majú napríklad tvar:

```lua
--ak máš peta jednorožca, vypíš RAINBOW
if pet == "🦄" then
    print('RAINBOW')
end
```

<span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Kľúčové slová 🔑</span>
1. **if** (*ak*) **-** za ním nasleduje podmienka, kontrola stavu
2. **then** (*potom*) **-** všetko, čo sa má stať po splnenení podmienky
3. **end -** *koniec* podmienky

Pohyb pridáš napríklad podmienkou - *ak stlačíš klávesu "hore", zmeň vertikálnu (hore/dole) pozíciu hráča o -1*.
Stlačenie klávesy má príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">btn()</span>. Do zátvorky ide klávesa. Klávesu hore napíšeme ako <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">shift + U</span> (U = UP).

{{< figure src="/vyvoj-hier/lekcia1/movement-code.png" class="float-right ml-16 max-w-md">}}

- **hore -** <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">shift + U</span>, player.y = player.y - 1
- **dole -** <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">shift + D</span>, player.y = player.y + 1
- **vľavo -** <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">shift + L</span>, player.x = player.x - 1
- **vpravo -** <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">shift + R</span>, player.x = player.x + 1

Všetok kód pôjde tentokrát do špeciálnej funkcie <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_update()</span>, ktorá sa pravidelne opakuje a vytvára tzv. <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Game Loop 👾</span>.
Vďaka tejto funkcii tvoja hra bude stále kontrolovať, či si stlačil nejakú klávesu.

{{< figure class="clear-both">}}

## Detaily
Pridaj ešte zopár detailov, aby si si skrášlil hru. Môžeš využiť napríklad tieto <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">sprites 🎨</span> alebo si sprav vlastné.
Vlož ich do mapy a uvidíš, že je hra hneď živšia.

{{< figure src="/vyvoj-hier/lekcia1/skull.png" class="float-right ml-16 max-w-sm">}}
{{< figure src="/vyvoj-hier/lekcia1/bone.png" class="float-left mr-16 max-w-sm">}}
{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia1/sign.png" class="float-right ml-16 max-w-sm">}}
{{< figure src="/vyvoj-hier/lekcia1/flower.png" class="float-left mr-16 max-w-sm">}}
{{< figure class="clear-both">}}

## Hudba

{{< figure src="/vyvoj-hier/lekcia1/notes.png" class="float-right ml-16 max-w-xs">}}

Ešte si nevyskúšal jeden nástroj - hudobný editor. V tomto nástroji ti odporúčam pohrať sa. Skrátka vytvor hudbu, ktorá sa ti bude páčiť. Vyskúšaj si:
- pridávať a meniť noty
- znižovať rýchlosť
- upravovať dĺžku skladby
- hlasitosť nôt

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia1/composer.png" class="float-right ml-16 max-w-xs">}}

Keď máš skladbu, s ktorou si spokojný, pridaj ju ako <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">track 🎼</span>. To spravíš zaškrtnutím štvorčeka pri prvom rámčeku a vybratím čísla skladby - 00.

Taktiež nezabudni dať track sa opakovať - <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">loop 🔂</span>. Zaklikni ikonku šípky naspäť.

Ako posledné budeš potrebovať hudbu pridať do hry. To spravíš tak, že do funkcie <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_init()</span> na začiatok pridáš príkaz:

```lua
--v zátvorke - číslo track-u
music(0)
```

{{< figure class="clear-both">}}