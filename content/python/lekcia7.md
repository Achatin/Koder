---
author: "Spawn.codes"
title: "🐍 Lekcia VII."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Vitaj naspäť! 🤙**

<!--more-->

Na dnešnej lekcii sa naučíš pracovať s <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">náhodnymi číslami 🎲</span>. Potom si budeš vedieť implementovať do hry LootBox systém s náhodnými odmenami.


## Knižnice
Knižnice sú zbierka rozšírení pre programovací jazyk. Vďaka nim môžeme používať nové
príkazy a programovať zaujímavejšie veci. To, aké knižnice chceme používať je nutné napísať
na začiatku programu za kľúčovým slovom <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">import</span>. Existujú knižnice, ktoré sú zakomponované
priamo v Pythone, ale existujú aj také, ktoré treba stiahnúť. Nám postačia iba zakomponované.

```python
import random

# ...
print("RNG on! 🎲")
# ...
```

Všimni si, že sme naimportovali knižnicu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">random</span>, ktorá nám umožní generovať náhodné čísla.

## Nahodné čísla
Náhodné čísla slúžia na simulovanie šance alebo pravdepodobnosti v programovaní.
Môžeme si predstaviť hod kockou, kedy nám padne 1 zo 6 možných číslic.

Náhodné číslo vygenerujeme príkazom <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">random.randint()</span>, pričom do zátvorky pôjde z akého
rozsahu má generovať. Napríklad <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">random.randint(0,5)</span> vygeneruju číslo od 0 po 5.

```python
import random

# do premennej cislo vygenerujeme nahodne cislo
cislo = random.randint(0,5)
# vypiseme nase nahodne cislo
print("Nahodne cislo: ", cislo)
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vyskúšajte si náhodné čísla pri jednoduchom hode kocky. Naprogramujte generovanie čísel od 1 po 6, tieto čísla vypíšte. Ak padne číslo 6, vypíšte "Lucky 🍀".</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvor funkciu GeneratePet(), ktorá náhodne vygeneruje hrdinovi vždy 1 z
týchto "🦊🐵🦝" petov. Všetky možnosti majú rovnakú šancu - 33%. Výsledok vypíš v
hrdinovom profile. Funkciu potom zavolaj po otvorení darčeku z predošlej hodiny.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Pridaj do funkcie vzácneho peta "🦄", ktorý bude mať šancu iba 10%.</span>

```
🧙‍♂️ Wizard, lvl 10
-----------------
Weapon: 📘 Spellbook
Pet: 🦄Stats:
🎯 ATK: 30
💖 HP: 50
⚡ SPD: 20
```