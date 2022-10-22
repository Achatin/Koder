---
author: "Spawn.codes"
title: "🎮 Lekcia V."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

{{< figure src="/vyvoj-hier/lekcia5/intro.gif" class="float-right ml-16 max-w-xs">}}

**Ahoj 👋**

Blížime sa ku dokončeniu <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Galaxy Rush 🌌</span>. Na dnešnej lekcii pridáme do našej hry nové levely, prekážky a zbieranie mincí. Precvičíš si map-design a naučíš sa aj pracovať s hernou kamerou.

## Nová mapa
Správna platformová hra by mala mať veľkú mapu a/alebo množstvo levelov. Levely by mali byť <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">unikátne 🎈</span> nielen po grafickej, ale aj po gameplay-ovej stránke. Mali by hráča zoznámiť s rôznymi úrovňami a hernými mechanikami.

V Pico-sa nové levely tvoria v mapovom editore. V ňom sa využíva voľný priestor pri pôvodnej mape na budovanie novej mapy/levelu.

> **🔰 Úloha:** Vymysli aspoň jeden nový level a pridaj ho vedľa pôvodného

{{< figure src="/vyvoj-hier/lekcia5/camera.gif" class="float-right ml-16 max-w-xs">}}

## Kamera
Na presun fo novej mapy môžeš použiť príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">camera()</span>. Tento príkaz posunie kameru hry na špecifikovanú pozíciu.

```Lua
--posunie kameru o 128px po x-ovej osi (doprava)
--0px po y-ovej osi
camera(128, 0)
```

Posun mapy môžeš ľahko automatizovať nasledujúcou funkciou:

```Lua
function SetCamera()
    --počet 128px máp, ktoré hráč prešiel
    map_x = flr(player.x / 128)
    map_y = flr(player.y / 128)

    camera(map_x*128, map_y*128)
end
```

{{< figure src="/vyvoj-hier/lekcia5/reset.gif" class="float-right ml-16 max-w-xs">}}

## Prekážky
Ak sa hráč dotkne pichľavej prekážky, mal by sa vrátiť na <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">začiatok 🏁</span> mapy. Zabezpeč, aby sa jeho pozícia zmenila na tú, na ktorej sa pôvodne spawn-e. Nastav vlajku prekážok na 1 (oranžová).

```Lua
if collision(1) == true then
    player.x = 8
    player.y = 96
end
```

Na kolízie použi známu funkciu z predošlých lekcií:

```Lua
function collision(flag)
    if fget(mget(player.x/8, player.y/8), flag)
	or fget(mget((player.x+6)/8, player.y/8), flag)
	or fget(mget(player.x/8, (player.y+6)/8), flag)
    or fget(mget((player.x+6)/8, (player.y+6)/8), flag)
	then
		return true
	end
	
	return false
end
```

{{< figure src="/vyvoj-hier/lekcia5/collect.gif" class="float-right ml-16 max-w-xs">}}

## Zbieranie mincí
Zbieranie opäť funguje na princípe kolízie hráča s mincou. Keď sa hráč dotkne <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">mince 💰</span>, minca sa stratí a hráčovi sa pripíše minca na konto. Nastav vlajku mincí na 2 (žltá).

```Lua
if collision(2) == true then
    mset(player.x/8, player.y/8, 0)
    coins += 1
end
```