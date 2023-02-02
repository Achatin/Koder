---
author: "Spawn.codes"
title: "🐍 Lekcia IV."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Hey ✌**

<!--more-->

Na dnešnej lekcii si vyskúšaš operácie s číslami ako sčítanie, odčítanie, násobenie a delenie. Tvoje nové znalosti potom môžeš aplikovať na zaujímavé úlohy ako vytvorenie <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">PowerBoost 💪</span> pre hrdinu.<br>
Navyše sa naučíš ako robiť zaujímavé interakcie s programom vďaka možnosti vstupu.


## Operácie s číslami
Pri programovaní je mnohokrát potrebné <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">počítať 🧮</span>. Na rozdiel od matematiky, tu za nás počíta náš počítač. My iba zadávame, čo má počítať. Tak ako v matematike, aj pri programovaní používame číselné operácie:

### Sčítanie

```python
level = 1

# v oboch pripadoch pripocitame jednotku ku levelu
level += 1
level = level + 1
print("lvl: ", level)  # lvl: 3
```

### Odčítanie

```python
level = 10

# v oboch pripadoch odpocitame jednotku od levelu
level -= 1
level = level - 1
print("lvl: ", level)  # lvl: 8
```

### Násobenie

```python
level = 10
level = level * 2
print("lvl: ", level)  # lvl: 20
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Naprogramuj PowerBoost, ktorý dvojnásobne zvýši ATK hrdinu. Vypíš jeho útok po BOOST-e.</span>

### Delenie

```python
level = 10
level = level / 2
print("lvl: ", level)  # lvl: 5
```

## Vstup
Slúži na <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">zadanie dát</span> cez konzolu do programu. Používame na neho príkaz <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">input()</span>. Do premennej uložíme to, čo napíšeme do konzoly (terminálu).

```python
print("Enter your name:")
name = input()
print("Hello, " + name + " 👋") 
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:**  Vytvorte vstup pre meno hrdinu.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:**  Vytvorte vstup pre obchod. Ak bude zadané Buy, hrdina stratí 10 💸, ak ich má (využite podmienku z predošlej hodiny) a vypíše sa "You have bought a 🎁 Gift".</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:**  Vytvorte vstup pre otvorenie darčeka. Vypíš "Press any key to open..." a očakávaj akýkoľvek vstup na otvorenie. Po otvorení vypíšte "Legendary Pet 🦄".</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:**  Vytvorte vstup action.<br>
Ak bude zadané Hero, vypíše hrdinov profil.<br>
Ak bude zadané Shop, vypíše obchod s jeho položkami.<br>
Ak bude zadané Battle, vypíše "🚧 Low Level".<br>
Ak nebude zadané nič z možností, vypíše "Use commands Hero | Shop | Battle".</span>