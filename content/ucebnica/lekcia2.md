---
author: "Spawn.codes"
title: "🎮 Lekcia II."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Vitaj naspäť! 🤙**

Na dnešnej lekcii budeme pokračovať v našej rozpracovanej hre - **Pet Dino 🐲**. V tejto hre máme implementované už všetky podstatné veci, vďaka tomu môže byť celá hodina venovaná konceptu **kolízií**.

{{< figure src="/vyvoj-hier/lekcia2/solid.gif" class="float-right ml-16 max-w-sm">}}

## Kolízie
Kolízie (v preklade *zrážky*) sú blízke interakcie medzi dvoma objektami hry. V hrách sa bude zrážať najčastejšie hráč s predmetom. Príkladom takýchto kolízií je napríklad zbieranie *Coins* alebo vytvorenie stien, cez ktoré sa nedá prechádzať. Ty si dnes vyskúšaš oba tieto typy kolízií.

## Sprites 🎨
Na začiatok si vytvor jednoduchú hernú grafiku. Jeden obrázok bude pre interaktívny predmet, v mojom prípade truhla s pokladom, a druhý obrázok bude pre solídny objekt, napr. tehlová stena.
{{< figure src="/vyvoj-hier/lekcia2/brick.png" class="float-right ml-16 max-w-sm">}}
{{< figure src="/vyvoj-hier/lekcia2/chest.png" class="float-left mr-16 max-w-sm">}}

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia2/flags.png" class="float-right ml-16 max-w-xs">}}
## Flags 🚩
V Pico-8 existuje koncept, kedy si sprites vieme označiť 8 rôznymi vlajkami. Tieto vlajky slúžia hlavne na účely kolízií. My si označíme náš solídny objekt (stenu) vlajkou 0 - prvou zľava. Interaktívny predmet označíme vlajkou 1 (oranžová).

## Princíp kolízií
Princíp kolízií v hrách je nasledovný: **ak sa hráč dotkne svojim pixelom pixelu iného objektu s kolíziami, nastane interakcia**. Takáto interakcia môže byť napr. zahratie zvučky, otvorenie truhly, zmiznutie mince alebo nemožnosť ísť ďalej (pri stenách).

Vlajky určujú, ktoré sprites vyvolajú kolíziu. My iba skontrolujeme, či sa obrázok nášho hráča neprekrýva s obrázkom s vlajkou. To spravíme tak, že budeme kontrolovať pozície 4 pixelov na rohoch obrázku a budeme ich porovnávať s pozíciami obrázku s vlajkou. Znie to zložitejšie, ako to v skutočnosti je, pretože Pico-8 má presne na tento prípad špeciálne príkazy.

## Funkcia collision()
Funkcie slúžia na vytváranie vlastných príkazov. Ty si vytvoríš funkciu **collision()**, ktorá bude kontrolovať, či sa hráč zrazil s predmetom s vlajkou.

Funkcia má parameter flag, ktorý bude číslo vlajky - 0 pre solídny objekt, 1 pre interaktívny predmet.

Budeš potrebovať 2 nové príkazy:
- **fget()** - skontroluje, či sa na obrázku nachádza vlajka
- **mget()** - vráti obrázok z určitej pozície na mape

```Lua
function collision(flag)
    if fget(mget(player.x/8, player.y/8), flag)
	or fget(mget((player.x+8)/8, player.y/8), flag)
	or fget(mget(player.x/8, (player.y+8)/8), flag)
    or fget(mget((player.x+8)/8, (player.y+8)/8), flag)
	then
		return true
	end
	
	return false
end
```

Všimni si, že kontrolujeme všetky 4 rohy obrázku - pravý aj ľavý, horný aj dolný. Tieto body nám na správnu kolíziu postačia.

Ak dôjde ku zrážke, funkcia vráti (return) TRUE. V opačnom prípade vždy vráti FALSE. To potom môžeme využiť v podmienke, napr.:

```Lua
--podmienka
if collision(0) == true then
    --interakcia
    player.sprite=2
end
```

## Kolízia s pokladom
{{< figure src="/vyvoj-hier/lekcia2/solid.gif" class="float-right ml-16 max-w-xs">}}

Funkciu **collision()** môžeš rovno použiť pri kolízii s pokladom. Do špeciálnej funkcie **_update()**, ktorá pravidelne kontroluje stav hry, pridaj podmienku - ak dôjde ku kolízii s interaktívnym predmetom, potom napr. zahraj zvučku.

```Lua
--ak dôjde ku kolízii s interaktívným predmetom
if collision(1) == true then
	--môžeš zahrať zvučku
	sfx(1)
	--alebo zmeniť sprite
	mset(x,y,sprite)
end
```

Všimni si, že ako parameter funkcie sme dali 1, pretože chceme skontrolovať kolízie pre predmety s vlajkou 1.


{{< figure src="/vyvoj-hier/lekcia2/sfx.png" class="float-right ml-16 max-w-xs">}}
## SFX
Special Effects je v Pico-8 spôsob ako zahrať krátku zvučku. Slúži na to príkaz **sfx()**.

Najprv si vytvor zvučku. Stačí iba jednoduché "ča-čing". Je však dôležité si zapamätať číslo skladby. U mňa je to skladba *01*. Po vytvorení stačí použiť spomenutý príkaz a do zátvorky napísať číslo skladby.

Rozdiel medzi príkazmi **sfx()** a **music()** je, že music hrá celý track, ktorý sa môže skladať s viacero zvučiek. Sfx je iba jediná zvučka.

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia2/open-chest.png" class="float-right ml-16 max-w-xs">}}
## Mini-animácia
Pri kolízií s truhlou vieme pridať aj malú animáciu, kedy sa truhla otvorí. Stačí len zmeniť obrázok na pozícii truhly.

Na tento prípad slúži príkaz **mset(x,y,sprite)**. Jeho parametre sú x-ová a y-ová pozícia **na mape** a číslo obrázku, na ktorý sa má zmeniť. X-ová a y-ová pozícia sa dá zistiť v mapovom editore ako koorinácie na spodnej červenej lište.

> **🔰 Úloha:** Vytvor podobnú animáciu aj pre otváranie dverí.

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia2/solid.gif" class="float-right ml-16 max-w-xs">}}
## Kolízia so stenou
Pri kolízii so stenou chceš, aby hráč nemohol prechádzať stenami. To znamená, že mu musíš dovoliť pohyb iba keď nie je v kolízii so stenou.

V programe pri pohybe teda stačí pridať do každej podmienky **or collision(0)**.

Operátor **or** (alebo) robí to, že podmienka bude pravdivá vtedy, keď iba jeden výrok bude pravdivý. To znamená, že keď sa drží tlačítko na pohyb alebo keď dochádza ku kolízii. Dôležité je, že keď sú oba výroky pravdivé, pohyb je nemožný.

```Lua
if btn(⬆️) or collision(0) then player.y -= player.speed end
if btn(⬇️) or collision(0) then player.y += player.speed end
if btn(⬅️) or collision(0) then
	player.x -= player.speed
	player.flp = true
end
if btn(➡️) or collision(0) then 
	player.x += player.speed
	player.flp = false
end
```

> **🔰 Úloha:** Vytvor aj iné solídne objekty, cez ktoré sa nedá prechádzať. Všimni si, že stačí už len pridať vlajku.