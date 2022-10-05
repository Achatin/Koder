---
author: "Spawn.codes"
title: "🎮 Lekcia III."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

{{< figure src="/vyvoj-hier/lekcia3/celeste.gif" class="float-right ml-16 max-w-xs">}}

**Zdravím 👋**

Na dnešnej lekcii začneme pracovať na novej hre - <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Galaxy Rush 🌌</span>. Bude to jednoduchá plaformová hra inšpirovaná hrou <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Celeste</span>. Dnešná lekcia bude venovaná precvičovaniu programovania.

## Spritesheet
Spritesheet je hárok hernej grafiky. Je to obrázok, ktorý pozostáva z množstva menších obrázkov, ktoré sú oddelené vždy rovnako podľa nejakej mriežky.

V Pico-8 sa obrázky v spritesheet oddeľujú každých 8 pixelov. Sú výhodné použiť, vďaka ich využitiu pri tvorbe máp.

{{< figure src="/vyvoj-hier/lekcia3/spritesheet.png" class="float-right ml-16 max-w-md">}}

**Spritesheets sa do Pico-8 vkladajú nasledovne:**
1. Klikni pravým tlačidlom myši na malý obrázok napravo
2. Uložiť obrázok ako...
3. Vyhľadaj priečinok %appdata%
4. Uložený obrázok si presuň do *pico-8/carts*
5. V Pico-8 napíš príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">import spritesheet.png</span>

{{< figure class="clear-both">}}

## Špeciálne funkcie
Už z predošlých lekcií viete, že v Pico-8 existujú 3 špeciálne funkcie. Tieto funkcie sú presne nadizajnované na tvorbu hier.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_init()</span> - Táto funkcia prehraje celý obsah funkcie tesne pred spustením hry. Zvyčajne sa vnútri inicializujú premenné a tabuľky.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_update()</span> - Táto funkcia sa opakuje 60x za sekundu. Tvorí <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Game Loop 🎮</span>. Slúži hlavne na pravidelné kontrolovanie podmienok, napr. ovládanie pohybu.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_draw()</span> - Podobne ako <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_update()</span> sa pravidelne opakuje, avšak slúži len na vykresľovanie mapy alebo iných herných objektov, či animácií.

> **🔰 Úloha:** Vytvor všetky 3 špeciálne funkcie. Každú jednu umiestni zvlášť do odlišného hárku.

## Premenné
Premenné slúžia na ukladanie a prácu s informáciami - <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">dátami 🔢</span>.

{{< figure src="/vyvoj-hier/lekcia3/premenne.png" class="float-right ml-16 max-w-md">}}

**Premenná pozostáva z:**
- mena
- =
- hodnoty

**Môžeme do nej uložiť:**
- slová: <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">premenna = "Health"</span>
- čísla: <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">premenna = 100</span>
- pravdivostné hodnoty: <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">premenna = false</span>

## Tabuľky
Tabuľky zhromažďujú premenné týkajúce sa jedného herného objektu, napr. objekt <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">player</span> môže mať svoje vlastnosti ako <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">speed, hp, attack</span>...

```Lua
player = {
    sprite = 1,
    x = 60,
    y = 60,
    w = 1,
    h = 1,
    w = 1,
    flp = false,
    speed = 1,
    hp = 3,
}
```

> **🔰 Úloha:** Do funkcie _init() vytvor tabuľku pre objekt 'player'.

## Podmienky

{{< figure src="/vyvoj-hier/lekcia3/code.jpg" class="float-right ml-16 max-w-md">}}

Podmienky slúžia na skontrolovanie <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">stavu 💨</span> nejakej situácie.

**Podmienka pozostáva z:**
- if
- kontrola stavu
- then
- telo
- end

```Lua
--ak stlačíš šípku vpravo, hráčova pozícia sa zmení
if btn(➡️) then
    player.x += 1
    player.flp = false
end
```
> **🎈 Tip:** Kód vo vnútri podmienok oddeľujte medzerami zo začiatku riadku. Pomáha to čitateľnosti. Vyjadruje to, že kód patrí do podmienky.

> **🔰 Úloha:** Naprogramuj hráčov pohyb pomocou podmienok.

## Funkcie
Funkcie slúžia na vytváranie <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">vlastných príkazov 🔧</span>.

**Funkcia pozostáva z:**
- function
- názov
- (parametre)
- návratová hodnota 
- end

<span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Parametre 📐</span> - premenné vložené do funkcie.

```Lua
function LevelUp(level)
    level += 1
end
```

<span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Návratová hodnota</span> - kľúčové slovo <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">return</span>. Vracia nejakú hodnotu naspäť z funkcie.

```Lua
function rename()
    newName = "🧙‍♂️ Wizard"
    return newName
end
```

> **🔰 Úloha:** Vytvor funkciu movement() a vlož do nej podmienky s hráčovým pohybom.

> **🔰 Úloha:** Zopakuj si znalosti z predošlej lekcie a vytvor funkciu collision(), ktorá bude detekovať kolízie na základe vlajok na hernej grafike.