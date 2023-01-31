---
author: "Spawn.codes"
title: "🐍 Lekcia I."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Vitaj na kurze Python** 👋

<!--more-->

Vďaka tomuto kurzu sa naučíš programovať v populárnom programovacom jazyku - <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Python 🐍</span>. Budeš riešiť úlohy podobné ako pri programovaní hier. Všetky znalosti potom vieš aplikovať aj na iné programy alebo dokonca programovacie jazyky.

## Úvod

Python je vysokoúrovňový univerzálny programovací jazyk. Bol navrhnutý na <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">jednoduchosť používania</span>. Poprvýkrát bol predstavený v roku 1991, avšak jeho verzia 3.0 vyšla v roku 2008. Najnovšia verzia 3.11 predstavila zlepšenie jedinej nevýhody - výrazné zrýchlenie.

## Inštalácia Python
Programovací jazyk Python si nevyžaduje zložitú inštaláciu. Na [oficiálnej stránke](https://www.python.org/downloads/)
si jednoducho stiahneme a nainštalujeme jazykový balík pre náš operačný systém.
1. Na stránke stlačíme download a počkáme na stiahnutie súboru
2. Stiahnutý súbor otvoríme
3. Pokračujeme podľa inštalačných krokov a dáme inštalovať
4. Python je pripravený na použitie 🥳

## Inštalácia IDE
Asi najdôležitejšie vybavenie programátora je IDE (Integrated Development Environment).
Skrátka, je to program, v ktorom budeme "kódiť".
Momentálne najpopulárnejšie IDE je <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Visual Studio Code</span>. To si vieme stiahnuť a nainštalovať z ich [oficiálnej stránky](https://code.visualstudio.com/download).
1. Opäť si vyberieme inštalačný súbor pre náš operačný systém Windows / Mac
2. Stiahnutý súbor otvoríme
3. Vyberieme si English ako jazyk inštalácie
5. Klikneme Next a následne Install
6. Potvrdíme Finish a Visual Studio Code sa nám samo spustí

## Programovacie prostredie
Predtým než si vytvoríme prvý program, musíme si prispôsobiť a zorganizovať naše prostredie.
1. Vytvoríme si na Pracovanej ploche priečinok *Python*
2. Vo *Visual Studio Code* si klikneme na *Open Folder...*
3. Nájdeme a vyberieme si náš priečinok na pracovnej ploche a dáme Otvoriť
Teraz sa vo *Visual Studio Code* nachádzame v našom priečinku *Python*.<br>
Tu budeme tvoriť všetky naše programy a budú tu ukladané všetky naše súbory. Vo *Visual Studio Code* si vytvoríme náš prvý súbor.
4. Pravým tlačidlom myši klikneme v Súborovom prehliadači a vyberieme možnosť *New File*
{{< figure src="/python/lekcia1/new-file.png" class="ml-16 max-w-xxl">}}
5. Súbor si pomenujeme hello.py<br>
<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">🎈 **Pomôcka:** Všimnime si ako sa nám aj ikonka pri súbore zmení na 🐍</span>
6. Teraz môžeme vytvoriť náš prvý program 🎉

## Hello world
Vytvoríme si náš prvý program. Zároveň overíme, či všetko funguje tak, ako má. Pôjde iba o
jednoduchý výpis známej programátorskej hlášky: "Hello World!"

```python
print("Hello world! 👋")
```

## Spustenie programu
Pre spustenie programov v Python používame príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">python3 názov_súboru.py</span>. Program sa nám
skompiluje (zmení do jazyka počítača) a spustí. V konzole nám vybehne výsledok.

{{< figure src="/python/lekcia1/program.png" class="ml-16 max-w-xxl">}}