---
author: "Spawn.codes"
title: "🐍 Lekcia VI."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Vitaj 👋**

<!--more-->

Na dnešnej lekcii sa naučíš rôzne použitia cyklov. Naprogramuješ si minihry.


## Cykly
Cykly slúžia na opakovanie programových inštrukcií. Kľúčové slovíčko je <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">for</span>. Ďalej sa skladá z troch častí:

- **Riadiaca premenná** - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">i</span>. Slúži na zapisovanie počtu priebehov cyklu.
- **Rozsah** - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">in range(10)</span>. Znamená to, že cyklus prebehne 10x. Teda <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">i</span> nadobudne hodnoty od 0 po 9.
- **Obsah cyklu** - musí byť **indentovaný**, pretože patrí k cyklu. Obsahuje všetko, čo sa má stať počas jedného priebehu cyklu

```python
for i in range(10):
    print("SPAM 😈")
```

Všimnite si, že je <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">jednoduchšie</span> vytvoriť cyklus ako 10x napísať do programu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">print("SPAM 😈")</span>.


<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Naprogramuj cyklus tak, aby 5x vypísal "🎉🎈".</span>

## Cyklus s podmienkou
Tento špeciálny typ cyklov bude bežať dovtedy, kým platí podmienka. Využíva sa často v
Herných cykloch, kedy cyklus prebieha dokým hra nie je dohraná - výhra alebo prehra.

```python
guess = -1

# minihra - uhádni číslo
while guess != "3":
    print("Guess the 🍀Lucky Number: ")
    guess = input()
print("Congratulations! 🎉")
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvorte Herný cyklus, v ktorom budete využívať vstupy Hero, Shop a Battle z predošlej hodiny. Cyklus sa bude opakovať pokým vstup nebude Quit.</span>

## 🔰 Úloha: Combat system
Navrhnite Combat system pre súboje hrdinov. Postupujte po krokoch, výsledky si vždy vyskúšajte.
1. Využite funkciu *spawn_hero()* a vytvorte podobného protivníka
2. Vytvorte cyklus s podmienkou, ktorý sa bude opakovať pokým funkcia *check_hp()* bude *True*.
3. Naprogramujte podmienku, ktorá porovná SPD hrdinov je vyšší - ten hrdina začína vždy prvý.
4. Pri útoku sa odráta toľko HP, koľko má útočník ATK.
5. Pridajte vypisovanie zostávajúcich životov.
6. Nakoniec vypíšte "Congratulations, your hero wins! 🏆", pridajte mu 10 💸 coins a
zvýšte mu level s funkciou *level_up()*.</span>

## Vnorené cykly
V tele nejakého cyklu sa môže nachádzať ďalší cyklus - <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">cyklus v cykle</span>. Týmto spôsobom pri každom opakovaní vrchného cyklu prebehne celý vnútorný cyklus. Použiť sa môžu pri generovaní alebo vypisovaní do viacerých riadkov.

```python
for i in range(10):
    # vnoreny cyklus
    for j in range(5):
        # vypise sa dokopy 50x <= 10x5
        print("💜")
    print("\n")
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Naprogramuj cyklus tak, aby vypísal do 10 riadkov "🧊" 5x.</span>