---
author: "Spawn.codes"
title: "🐍 Lekcia II."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Vitaj naspäť! 🤙**

<!--more-->

Na dnešnej lekcii si vytvoríš ďalší program. Bude to začiatok <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">textovej hry 🎮</span>, na ktorej sa naučíš všetky princípy programovania v Pythone.


## Štruktúra programu
Python je vynikajúci vďaka svojej <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">jednoduchosti</span>. Na rozdiel od iných programovacích jazykov, nemá predpísanú takmer žiadnu štruktúru. To znamená, že si môžeš programovať voľne a bez zbytočných starostí.

V iných programovacích jazykoch musí byť všetok kód v nejakej funkcii, zvyčajne hlavnej (main).

## Komentáre
Komentáre v programovaní slúžia ako <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">vysvetlivky 🗒️</span> ku kódu. Častokrát zlepšujú prehľadnosť. Komentár síce nemá žiaden efekt na fungovanie programu, ale pomáha programátorom rýchlo porozumieť a orientovať sa v kóde. 

V Pythone na rozdiel od iných programovacích jazykov sa komentáre píšu ako <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">mriežka #</span>, za ktorou nasleduje text komentára.

Napr. <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800"># toto je komentár</span>

## Výpis do terminálu
Na jednoduchú komunikáciu s počítačom vieme využiť terminál. Terminál je príkazové okno.
Pre výpis do terminálu poznáme príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">print()</span>.

```python
# Program vypise do terminalu "Hello world"
print("Hello world! 👋")   # prikaz print() -> vypisuje
```

Ak chceme vypísať na nový riadok, používame špeciálny znak <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">\n</span>.

```python
# \n nas presunie na novy riadok
print("Ahoj 👋\n")
print("Vitaj v Python")
```

## Projekt: Hero profile
**Úlohy**
1. Zvoľte a vypíšte meno hrdinu a jeho level. Hrdina bude mať spočiatku level 1.
2. Pridajte hrdinovi vymyslenú zbraň, napr. 📘 Kniha kúziel
3. Oddeľte meno a zbraň hrdinu pomlčkami a novým riadkom
4. Pridajte ešte štatistiky ako 🎯 ATK, 💖 HP a ⚡ SPD
5. Prerozdeľte 100 bodov do jednotlivých štatistík, napr. 50 ATK, 25 HP, 25 SPD

Hrdinu si nadizajnujte podľa vlastného vkusu. Čím kreatívnejší, tým lepšie. Využite pri tom emoji 😉.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🎈 Pomôcka:** Pre otvorenie okna na výber emoji slúži pre Windows skratka Win + .<br>
Pre Mac je to skratka Control + Command + Spacebar</span>

**Príklad hotového profilu**
{{< figure src="/python/lekcia2/profile.png" class="ml-16 max-w-xxl">}}

## Premenné
Na ukladanie dát a informácií v programovaní využívame premenné. V Pythone existujú 3 hlavné
typy premenných:

**1. číslo**
```python
level = 10
legendaryChance = 0.00001
```

**2. text**
```python
name = "🧙‍♂️ Wizard"
```

**3. pravda/nepravda (bool)**
```python
online = True
inGame = False
```

## Výpis premenných
Informácie z premenných vieme tiež vypísať do terminálu.

```python
level = 1

print(level)

# alebo ich vieme retazit pomocou ciarky ,
print("🧙‍♂️ Wizard, lvl ", level, "\n")
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Aby sme vedeli s hrdinovými bodmi narábať, nemôžu byť iba text. Vytvorte premenné pre ATK, HP a SPD body. Profil upravte tak, aby hrdinove body boli vypísané ako premenné.</span>
