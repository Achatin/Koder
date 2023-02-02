---
author: "Spawn.codes"
title: "🐍 Lekcia IX."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Ahoj! 👋**

<!--more-->

Na dnešnej lekcii ťa čaká ďalší <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">zaujímavý projekt</span>, na ktorom si zopakuješ znalosti z predošlých hodín. Bude to jednoduchá hra proti počítaču.


## Rock-Paper-Scissors Game
Náš ďalší projekt je klasická hra Kameň-Papier-Nožnice. Zaujímavosťou tohto projektu je, že náš protivník bude jednoduchá umelá inteligenciu, čiže náš počítač.


**Pravidlá hry:**<br>
kameň porazí nožnice<br>
nožnice porazia papier<br>
papier porazí kameň<br>


1. Vytvorte nový súbor <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">rps.py</span>
2. Importujte knižnicu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">random</span>
3. Vypíšte názov hry a oddeľte ho pomlčkami
4. Vytvorte si celočíselnú premennú action , ktorá bude slúžiť na zapísanie odpovede: kameň? papier? nožnice?
5. Vypíšte spôsob odpovedania, napr. 🗿 = 0 | 📄 = 1 | ✂ = 2
6. Vytvorte vstup a ako vstupnú premennú použite action
7. Vytvorte číselnú premennú <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">computer</span>
8. Do tejto premennej vygenerujte náhodné číslo od 0 po 3
9. Výsledok generácie vypíšte ako emoji podľa pravidla: 🗿 = 0 | 📄 = 1 | ✂ = 2
10. Naprogramujte mechanizmus, ktorý určí výťaza. Použite pri tom podmienky. Vypíšte, či hráč vyhral alebo prehral.
11. Po hre sa opýtajte hráča, či chce hrať ešte raz. Použite na to novú vstupnú premennú <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">play</span>, ktorá bude text.
12. Celú hru zaobalte cyklom s podmienkou, ktorá zistí, či premenná <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">play</span> má hodnotu "Y". Ak nemá, vypíšte hráčovi poďakovanie za zahratie.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**✨ Bonus:** Po dohratí hry, vypíšte do terminálu skóre, kto koľkokrát vyhral.</span>


**Ukážka hry**
```
------------------------
Welcome to the 🗿-📄-✂
Rock-Paper-Scissors Game
------------------------
🗿 = 0 | 📄 = 1 | ✂ = 2
❔ Rock, Paper or Scissors: 1
📄 vs. 🗿
You win! 🏆
Play again? [Y/N]: Y
---------------------------
🗿 = 0 | 📄 = 1 | ✂ = 2
❔ Rock, Paper or Scissors: 2
✂ vs. 🗿
You lose... 😭
Play again? [Y/N]: N
------------------------
Thank you for playing 😎
```