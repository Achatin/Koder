---
author: "Spawn.codes"
title: "🎮 Lekcia IV."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

{{< figure src="/vyvoj-hier/lekcia4/galaxyrush.gif" class="float-right ml-16 max-w-xs">}}

**Hey ✌**

Na dnešnej lekcii budeme pokračovať v hre <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Galaxy Rush 🌌</span>. Vďaka tvojmu tréningu programovania na predošlej lekcii si ukážeme komplexnejšie techniky zábavnej platformovej hry.

## Úprava tabuľky PLAYER
Ako prvé si potrebujeme pridať do tabuľky "player" zopár nových premenných.

```Lua
gravity = 0.2
player = {
    --rychlost pohybu sprava dolava
    ➡️spd=0,
    --rychlost pohybu zhora dole
    ⬇️spd=0,
    --rychlost skoku
    jmpspd=3.4,
    --kontrola skoku
    jmp=false,
}
```

{{< figure src="/vyvoj-hier/lekcia4/gravity.gif" class="float-right ml-16 max-w-xs">}}

## Gravitácia
Gravitácia v hrách funguje na jednoduchom princípe. Tak ako aj na Zemi, potrebujeme hráča pritiahnuť silou ku spodku mapy. Táto sila bude naša premenná <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">gravity</span>. Zvýšime ňou y-ovú rýchlosť, ktorá bude pravidelne meniť hráčovu y-ovú pozíciu. Takto dokonca docielime efekt <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">gravitačného zrýchlenia ⚡</span>.

```Lua
--gravity
player.➡️spd += gravity
player.y += player.➡️spd
player.jmp = false
```

## Kolízia s platformou

Vytvor kolíziu s <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">platformou 👾</span> na spodku mapy. Takto tvoj hráč nespadne mimo mapu.

1. Nastav na všetky steny 0-tú červenú vlajku
2. Príkazmi <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">fget()</span> a <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">mget()</span> skontroluj, či došlo ku kolízii hráča so stenou
3. Ak dôjde ku kolízii, polož hráča na platformu - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">flr((player.y)/8)*8</span>
4. Zruš jeho padanie - y-ová rýchlosť - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">player.➡️spd = 0</span>
5. Opäť mu dovoľ skákanie mu skákanie - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">player.jmp=true</span>

```Lua
--ak padame
if player.➡️spd >= 0 then
    --najdi solidnu bunku
    if fget(mget((player.x+4)/8,(player.y+8)/8),0) then
        --poloz hraca na platfomu
        player.y = flr((player.y)/8)*8
        --zrus padanie
        player.➡️spd = 0
        --dovol skakanie
        player.jmp=true
    end
end
```

## Kolízia so stenami

{{< figure src="/vyvoj-hier/lekcia4/walls.gif" class="float-right ml-16 max-w-xs">}}

Je nutné ošetriť aj <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">kolízie 💥</span> so stenami. Pri nich stačí skontrolovať, či sa hráčova pravá alebo ľavá strana dotýka steny. Ak áno, hráča dáme na začiatok.

```Lua
--hracova zaciatocna pozicia na vrchu _update()
local startx = player.x
--ak sa dotkneme pravou alebo (or) lavou stranou steny, vratime sa
if fget(mget(player.x/8,(player.y+7)/8),0)
or fget(mget((player.x+7)/8,(player.y+7)/8),0) then
    player.x=startx
end
```

## Skok

Na skok stačí jednoduchá podmienka. Ak stlačíš šípku hore, tak vyskoč. Do podmienky sa však ešte vkladá aj kontrola skoku, pretože skákať hráč môže iba, ak je na zemi.

V podmienke znížime hráčovu y-ovú rýchlosť o hodnotu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">player.jmpspd</span>.

```Lua
--jump
if btn(⬆️) and player.jmp == true then
    player.➡️spd -= player.jmpspd
end
```

> **🔰 Úloha:** Pridaj skákaniu zvukový efekt príkazom sfx().

## Kolízia so stropom

{{< figure src="/vyvoj-hier/lekcia4/ceil.gif" class="float-right ml-16 max-w-xs">}}

Takmer rovnako ako kolíziu s platformou naprogramujeme aj kolíziu so stropom.

```Lua
--ak stupame
if player.➡️spd <= 0 then
    --najdi solidnu bunku
    if fget(mget((player.x+4)/8, player.y/8),0) then
        --poloz hraca pod platformu
        player.y = flr((player.y+8)/8)*8
        --zrus stupanie
        player.➡️spd = 0
    end
end
```


> **🔰 Úloha:** Vyskladaj si detailnú mapu na skákanie. Rozmiestni do nej aj prekážky, coins alebo iné zbierateľné predmety. Inšpiruj sa našim príkladom na vrchu stránky.