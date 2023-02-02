---
author: "Spawn.codes"
title: "🐍 Lekcia V."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Ahoj 👋**

<!--more-->

Na dnešnej lekcii sa naučíš princípy efektívnejšieho programovania. Naviaže na to téma funkcií v Pythone.


## Princípy programovania
Pri programovaní existuje zopár <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">princípov</span>, vďaka ktorým budú naše programy bezchybnejšie, efektívnejšie a jednoduchšie.

**KISS** - *Keep it simple, stupid*, z angličtiny *Nekomplikuj to*. Píšte kód jednoducho. V zásade väčšinou platí - čím kratší kód, tým lepší.

**DRY** - *Don't Repeat Yourself*, z angličtiny *Neopakuj sa*. Nepíšte rovnaký kód dvakrát. My sa naučíme kód neopakovať pomocou cyklov a funkcií.

**Refactor** - Skontroluj si svoj kód. Po napísaní kódu by ste sa mali vždy <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">vrátiť na začiatok</span> a pozrieť si ho znova. Natrafíte na chyby a veci, ktoré by sa dali zlepšiť.

## Snake Case
Už vieš, že premenné si môžeš nazvať hocijako. Teda, vždy by to mal byť názov, ktorý najlepšie vystihuje danú premennú, napr. pre uloženie mena môžeš použiť premennú <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">name</span>. Existujú však zaužívané spôsoby ako zapisovať niektoré názvy.

Pre Python je typický spôsob <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Snake Case 🐍</span>, ktorý viacslovné premenné spája <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">podtržítkom _</span>.

```python
# priklady snake case
hero_level = 10
is_player_online = False
```

## Funkcie
Slúžia na organizáciu a znovuvyužiteľnosť kódu. Kľúčové slovíčko pri definovaní (vytváraní) funkcie je <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">def</span>, potom nasleduje názov funkcie a zátvorky s parametrami. Nakoniec prvého riadku už ide len dvojbodka <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">:</span>. Obsah funkcie musí byť odsadený/indentovaný.

**Parameter** - premenná vložená do funkcie

```python
# funkcia spawn_hero s parametrom - jeho menom
def spawn_hero(name):
    # funkcia iba vypíše jeho meno s levelom
    print(name, ", lvl 1")
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvor funkciu *open_shop()* s parametrom *coins*, ktorá vypíše obchod s jeho položkami a počet tvojich peňazí.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvor funkciu *spanw_hero()* s parametrami *name, lvl, weapon, atk, hp a spd*, ktorá vypíše hrdinu s jeho vlastnosťami.</span>

## Volanie funkcie
Volanie funkcie je použitie vytvorenej funkcie. Funkcia sa zavolá napísaním jej mena so zátvorkami, prípadne jej parametrami.

```python
level = 1

# funkcia zvysi level o 1
levelUp(level)
print("lvl: " + level) # lvl: 2
```

## Návratová hodnota
Funkcie dokážu taktiež vracať hodnoty. Slúži to na získanie dát z funkcie. kľúčové slovíčko je return , následuje vracaná hodnota. Taktiež sa nesmie zabudnúť na určenie typu vrátenia pri definovaní funkcie.

```python
def power_boost(atk):
    atk *= 2
    return atk
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvor funkciu *level_up()* s parametrom *lvl*, ktorá zvýši level hrdinu o 1. Funkcia vráti nový level.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvor funkciu *check_hp()* s parametrom *hp*, ktorá skontroluje životy hrdinu a vráti *True* = má životy alebo *False* = nemá životy.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvor funkciu *check_coins()* s parametrami *coins* a *value*, ktorá či máme poniaze na nákup z herného obchodu. Vráti *True* = máme alebo *False* = nemáme.</span>