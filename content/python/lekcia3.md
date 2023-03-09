---
author: "Spawn.codes"
title: "🐍 Lekcia III."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Zdravím! 👋**

<!--more-->

Na dnešnej lekcii sa naučíš používať <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">podmienky</span>. Táta kľúčová súčasť programovania ti dovolí doplniť si ku hre <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Hero Progression 🧙‍♂️</span> nové možnosti.


## Opakovanie

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvorte herný obchod. Do obchodu vypíšte, koľko má hráč peňazí. Vytvorte aspoň jednu položku a vymyslite jej cenu.</span>

**Príklad obchodu**

```
Welcome to the Shop 👋
You have 90 💸
----------------------
🎁 Gift - 10 💸
```

## Odsadenie kódu
Odsadenie kódu alebo <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">indentácia</span> je odsek v kóde. V Pythone sú tieto odseky veľmi dôležité, lebo určujú, čo všetko patrí do podmienky alebo funkcie.

## Podmienky
Na skontrolovanie stavu nejakej situácie používame v programovaní podmienky. Kľúčovým slovíčkom je <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">if</span> (ak) a za ním nasleduje situácia/podmienka, ktorú chceme skontrolovať. Tento riadok ukončíme dvojbodkou. Do nového riadku po odsadení píšeme potom všetko, čo sa má stať, ak platí podmienka.

```python
# ak premenna pet sa rovna "unicorn", vypis "🦄"
if pet == "unicorn":
    # indentacia kodu
    print("🦄")
```

**⚠️ Nesprávne použitie**
```python
if online == True:
# chyba indentacia, teda print nepatri ku podmienke :(
print("Player is Online 🟢")
```

## Zložené podmienky
Niekedy je užitočné použiť aj opak podmienky - <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">else</span> (inak). Ak podmienka if neplatí, vykoná sa else zátvorka.

```python
online = False

# vsimni si indentaciu
if online == True:
    print("Player is online ✅")
else:
    print("Player is offline ❌")
```

Vytvoriť vieme aj <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">viacnásobnú podmienku</span>, pomocou ktorej vieme zahrnúť viacero prípadov. Po jednoduchej <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">if</span> podmienke nasleduje <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">elif</span>, potom znenie podmienky a nakoniec po dvojbodke obsah (čo sa má odohrať po splnení). Na koniec viacnásobnej podmienky vieme rovnako pripojiť aj <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">else</span> podmienku.

```python
if pet == "unicorn":
    print("🦄")
elif pet == "dragon":
    print("🐲")
elif pet == "python":
    print("🐍")
else:
    print("no pet ❌")
```

## Porovnávacie znamienka
Porovnávacie znamienka používame pri porovnávaní javov. Využívajú sa v podmienkach a
cykloch.

**1. == rovná sa**

```python
level = 10
if level == 10:
    print("😎 PRO")
```

**2. != nerovná sa**

```python
level = 6
if level != 10:
    print("🤓 Noob")
```

**3. > väčši ako**

```python
exp = 10

# 11+, nemáme dostatok exp
if exp > 10:
    print("Level Up! 🎉")
else:
    print("Potrebuješ aspoň 11 exp!")
```

**4. >= väčšie rovné**

```python
exp = 10

// 10+, získame nový level
if exp >= 10:
    print("Level Up! 🎉")
else:
    print("Potrebuješ aspoň 10 exp!")
```

**5. < menšie ako**

```python
hp = 10

if hp < 10:
    print("Your hero is weak! Health Potion 🍯")
else:
    print("Healthy hero 💪")
```

**6. <= menšie rovné**

```python
hp = 10

if hp <= 10:
    print("Your hero is weak! Health Potion 🍯")
else:
    print("Healthy hero 💪")
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vytvorte mechanizmus, ktorý zistí, či je hrdina nažive. Použite podmienku na skontrolovanie životov. Vypíšte, či je hrdina nažive alebo nie.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Využite herný obchod z minulej hodiny a vytvorte pre neho podmienku, ktorá zistí, či máme dostatok peňazí na nákup z obchodu. Výsledok vypíšte.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Naprogramujte podmienku tak, aby nahradila číslicu za zodpovedajúce emoji. Využite pri tom else if. Príklad: 7 => 7️⃣</span>

## Logické operátory
**&& - A zároveň**
Podmienka platí, keď všetky výrazy sú pravdivé.

```python
online = True
playing = False

# ak je hráč online A ZÁROVEŇ nie je v hre
if online == true and playing == false:
    print("Ready to play 🎮")
```

**|| - Alebo**
Podmienka platí, keď aspoň jeden výraz je pravdivý.

```python
pet = "🦊"
# ak máme peta 🐲 ALEBO 🦊
if pet == "🐲" or pet == "🦊":
    print("Pet used 🔥")
```