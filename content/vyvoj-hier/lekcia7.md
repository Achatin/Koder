---
author: "Spawn.codes"
title: "🎮 Lekcia VII."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Hey ✌**

Na dnešnej lekcii sa budeme venovať vylepšovaniu hry <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Galaxy Rush 🌌</span>. Pridáme checkpoints, cieľ a možnosť zopakovať si hru.

## Checkpoints

{{< figure src="/vyvoj-hier/lekcia7/checkpoint.gif" class="float-right ml-16 max-w-xs">}}

Ako prvé môžeš do hry doplniť <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">checkpointy 🚩</span>. Aby hráč nemusel pri narazení do prekážky začínať úplne odzačiatku, pridaj do každého levelu záchytné body.

Checkpointy môžu byť na začiatku každého levelu. Po ich aktivácii, sa hráč bude vracať na ich pozíciu.

```Lua
-- po kolizii s prekazkou sa hrac vrati na checkpoint
if collision(2) then
 	player.x = checkpoint.x
 	player.y = checkpoint.y
end

-- po aktivacii checkpointu sa hodnota nastavi na aktualnu poziciu hraca
if collision(3) then
 	checkpoint.x = player.x
 	checkpoint.y = player.y
    -- po dotyku zmizne
 	mset(player.x/8, player.y/8, 0)
end
```

{{< figure src="/vyvoj-hier/lekcia7/finish.gif" class="float-right ml-16 max-w-xs">}}

## Cieľ

Ako posledný level môžeš spraviť malé poďakovanie a gratuláciu za dohratie hry.

Ukonči hru so štýlom, nech zanechá dobrý dojem a zážitok aj po dohraní.

> **🔰 Úloha:** Ako posledný level vytvor špeciálnu miestnosť, kde hráčovi pogratuluješ k výhre. Môžeš tam pridať aj logo svojej hry.

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia7/restart.gif" class="float-right ml-16 max-w-xs">}}

## Play Again

Pridaj hre opakovateľnosť, poprípade sprav malý timer, ktorý môže slúžiť ako pomôcka na speedrunning.

> **🔰 Úloha:** Pridaj do posledného levelu možnosť zahrať si hru odznova. Môžeš sa inšpirovať portálom z animácie.