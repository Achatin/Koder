---
author: "Spawn.codes"
title: "🎮 Lekcia II."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
<script src="https://cdn.tailwindcss.com?plugins=typography"></script>
**Vitaj naspäť! 🤙**

Na dnešnej lekcii budeme pokračovať v našej rozpracovanej hre - <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Pet Dino 🐲</span>. V tejto hre máme implementované už všetky podstatné veci, vďaka tomu môže byť celá hodina venovaná konceptu **kolízií**.

{{< figure src="/vyvoj-hier/lekcia2/solid.gif" class="float-right ml-16 max-w-sm">}}

## Kolízie
Kolízie (v preklade *zrážky*) sú blízke <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">interakcie 👈</span> medzi dvoma objektami hry. V hrách sa bude zrážať najčastejšie hráč s predmetom. Príkladom takýchto kolízií je napríklad zbieranie *Coins* alebo vytvorenie stien, cez ktoré sa nedá prechádzať. Ty si dnes vyskúšaš oba tieto typy kolízií.

## Sprites
Na začiatok si vytvor jednoduchú <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">hernú grafiku 🎨</span>. Jeden obrázok bude pre interaktívny predmet, v mojom prípade truhla s pokladom, a druhý obrázok bude pre solídny objekt, napr. tehlová stena.
{{< figure src="/vyvoj-hier/lekcia2/brick.png" class="float-right ml-16 max-w-sm">}}
{{< figure src="/vyvoj-hier/lekcia2/chest.png" class="float-left mr-16 max-w-sm">}}

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia2/flags.png" class="float-right ml-16 max-w-xs">}}
## Flags
V Pico-8 existuje koncept, kedy si sprites vieme označiť 8 rôznymi <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">vlajkami 🚩</span>. Tieto vlajky slúžia hlavne na účely kolízií. My si označíme náš solídny objekt (stenu) vlajkou 0 - prvou zľava. Interaktívny predmet označíme vlajkou 1 (oranžová).

## Princíp kolízií
Princíp kolízií v hrách je nasledovný: <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">ak sa hráč dotkne svojim pixelom pixelu iného objektu s kolíziami, nastane interakcia 👈</span>. Takáto interakcia môže byť napr. zahratie zvučky, otvorenie truhly, zmiznutie mince alebo nemožnosť ísť ďalej (pri stenách).

Vlajky určujú, ktoré sprites vyvolajú kolíziu. My iba skontrolujeme, či sa obrázok nášho hráča neprekrýva s obrázkom s vlajkou. To spravíme tak, že budeme kontrolovať pozície 4 pixelov na rohoch obrázku a budeme ich porovnávať s pozíciami obrázku s vlajkou. Znie to zložitejšie, ako to v skutočnosti je, pretože Pico-8 má presne na tento prípad špeciálne príkazy.

## Funkcia collision()
Funkcie slúžia na vytváranie <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">vlastných príkazov 🔧</span>. Ty si vytvoríš funkciu **collision()**, ktorá bude kontrolovať, či sa hráč zrazil s predmetom s vlajkou.

Funkcia má parameter flag, ktorý bude číslo vlajky - 0 pre solídny objekt, 1 pre interaktívny predmet.

Budeš potrebovať 2 nové príkazy:
- <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">fget()</span> - skontroluje, či sa na obrázku nachádza vlajka
- <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">mget()</span> - vráti obrázok z určitej pozície na mape

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

Funkciu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">collision()</span> môžeš rovno použiť pri kolízii s pokladom. Do špeciálnej funkcie <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">_update()</span>, ktorá pravidelne kontroluje stav hry, pridaj podmienku - ak dôjde ku kolízii s interaktívnym predmetom, potom napr. zahraj zvučku.

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
Special Effects je v Pico-8 spôsob ako zahrať krátku <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">zvučku 🎺</span>. Slúži na to príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">sfx()</span>.

Najprv si vytvor zvučku. Stačí iba jednoduché "ča-čing". Je však dôležité si zapamätať číslo skladby. U mňa je to skladba *01*. Po vytvorení stačí použiť spomenutý príkaz a do zátvorky napísať číslo skladby.

Rozdiel medzi príkazmi <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">sfx()</span> a <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">music()</span> je, že music hrá celý track, ktorý sa môže skladať s viacero zvučiek. Sfx je iba jediná zvučka.

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia2/open-chest.png" class="float-right ml-16 max-w-xs">}}
## Mini-animácia
Pri kolízií s truhlou vieme pridať aj malú animáciu, kedy sa truhla otvorí. Stačí len zmeniť obrázok na pozícii truhly.

Na tento prípad slúži príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">mset(x,y,sprite)</span>. Jeho parametre sú x-ová a y-ová pozícia **na mape** a číslo obrázku, na ktorý sa má zmeniť. X-ová a y-ová pozícia sa dá zistiť v mapovom editore ako koorinácie na spodnej červenej lište.

> **🔰 Úloha:** Vytvor podobnú animáciu aj pre otváranie dverí.

{{< figure class="clear-both">}}

{{< figure src="/vyvoj-hier/lekcia2/solid.gif" class="float-right ml-16 max-w-xs">}}
## Kolízia so stenou
Pri kolízii so stenou chceš, aby hráč nemohol prechádzať stenami. To znamená, že mu musíš dovoliť pohyb iba keď nie je v kolízii so stenou.

V programe pri pohybe teda stačí pridať do každej podmienky <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">or collision(0)</span>.

Operátor <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">or 💁‍♀️</span> (alebo) robí to, že podmienka bude pravdivá vtedy, keď iba jeden výrok bude pravdivý. To znamená, že keď sa drží tlačítko na pohyb alebo keď dochádza ku kolízii. Dôležité je, že keď sú oba výroky pravdivé, pohyb je nemožný.

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