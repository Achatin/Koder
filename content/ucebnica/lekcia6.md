---
author: "Spawn.codes"
title: "🎮 Lekcia VI."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

<iframe allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" src="https://v6p9d9t4.ssl.hwcdn.net/html/6699071/index.html" scrolling="no" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" id="game_drop" allowfullscreen="true" frameborder="0" width="350px" height="350px" class="float-right"></iframe>

**Vitaj naspäť! 🤙**

Dnes pridáme animácie a checkpoints do našej hry a tým dokončíme celý <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Galaxy Rush 🌌</span>. Na záver tohto projektu si ukážeme ako hru zverejniť na internete a zahrať si ju hoci aj na mobile.

## Animácie
Animácie v hrách fungujú na jednoduchom princípe - rapídneho menenia obrázkov. Ak chceš vytvoriť animáciu pre pohyb hráča, potrebuješ pravidelne meniť jeho sprite.

{{< figure src="/vyvoj-hier/lekcia6/anim.gif" class="float-right ml-16 max-w-xs">}}

```Lua
function animation()
    --na striedacku menime vsetky sprites hraca
    if player.sprite < 3 then
        player.sprite += 1
    else
        --vratenie sa na povodny sprite
        player.sprite = 1
    end
end
```

Funkciu potom môžeš zavolať pri pohybe hráča - vo funkcii <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">movement()</span>.

Všimni si, že animácia prebieha príliš rýchlo. Rýchlosť animovania vieš meniť pomocou <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">časovača ⌚</span>.

### Časovač
V Pico-8 existuje funkcia <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">time()</span>, ktorá meria čas od jej použitia. Využitím tejto funkcie vieme vytvoriť časovač.

Na animácie vytvoríme v tabuľke <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">player</span> premennú <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">anim = time()</span>.

Teraz vieme našu funkciu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">animation()</span> upraviť pridaním časovača.

{{< figure src="/vyvoj-hier/lekcia6/run.gif" class="float-right ml-16 max-w-xs">}}

```Lua
function animation()
    --ak casovac presiahne 0.1 sekundy (cas snimku animacie)
    if (time() - player.anim) > 0.1 then
        --aktualizacia casovaca
        player.anim = time()
        --na striedacku menime vsetky sprites hraca
        if player.sprite < 3 then
            player.sprite += 1
        else
            --vratenie sa na povodny sprite
            player.sprite = 1
        end
    end
end
```

## Zverejnenie hry
Existuje webová aplikácia zameraná na <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Game Development 🎮</span> - **Itch.io**. Sem môžu vývojári hier zverejňovať svoje hry. Vďaka možnosti monetizácie, šikovní vývojari si týmto zarábajú. Staň sa aj ty plnohodnotným vývojárom a vyskúšaj si svoju hru zverejniť!

1. Navštív stránku **Itch.io**
2. Zaregistruj sa a vytvor si účet
3. Pri svojom profile otvor záložku **Upload new project**
4. Napíš názov hry
5. V Pico-8 zostroj úvodný obrázok klávesou <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">F2</span>
6. Napíš príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">export galaxy-rush.html</span>
7. Príkazom <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">folder</span> si otvor úložný priečinok programu Pico-8
8. Nájdi oba súbory vytvorené exportom
9. Súbor s príponou **.HTML** premenuj na index
10. Oba súbory zarchivuj do priečinku **galaxy-rush.zip**
11. V sekcii **Uploads** vyhľadaj svoj priečinok a vlož ho na Itch.io
12. Zaškrtni možnosť **This file will be played in the browser**
13. Zaškrtni možnosť **Mobile friendly**
14. Save & view page
15. Prepni mód viditeľnosti z *Draft* na **Public**
16. Vyskúšaj svoju hru 🎉