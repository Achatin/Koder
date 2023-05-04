---
author: "Spawn.codes"
title: "🐍 Lekcia X."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Zdravím! 🤙**

<!--more-->

Toto je tvoja posledná lekcia. Preto som pripravil niečo iné ako zvyčajne, aby som ukázal aj iné stránky jazyka Python.


## Pygame Zero
Pygame je populárna knižnica na tvorbu počítačových hier. Pygame Zero je zjednodušená verzia originálu. Je to teda jednoduchý <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">game-engine 🎮</span>. Na jeho použitie ti stačia doterajšie znalosti a trochu vysvetliviek.

## Inštalácia Pygame Zero
Pygame sa inštaluje cez nástroj <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">pip</span>. Pip je inštalátor cudzích knižníc na Python. Dokáže nainštalovať akúkoľvek potrebnú knižnicu jedným príkazom:

```
pip install pgzero
```

⚠️ Ty si však pip musíš najprv nainštalovať. To urobíš týmito príkazmi v termináli:

```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

python3 get-pip.py
```

## Hra v Pygame Zero
Aby sme si overili, že inštalácia prebehla úspešne, vyskúšame si spustiť prázdny súbor.

Príkazom:
```
pgzrun game.py
```

### Vykreslenie

Ako prvý krok si vykreslíme pozadie hry. Použijeme špeciálnu funkciu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">draw()</span>, ktorá na to slúži.

```python
WIDTH = 300
HEIGHT = 300

def draw():
    screen.fill((128, 0, 0))
```

{{< figure src="/python/lekcia10/alien.png" class="float-left mr-16 max-w-xl">}}

Ako ďalší krok si vytvoríme actora 'Alien'. Dáme mu tento obrázok.

{{< figure src="/python/lekcia10/path.png" class="float-right ml-16 max-w-xl">}}

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🎈 Pomôcka:** Obrázok si môžeš stiahnuť pravým kliknutím a uložením.</span>

Obrázok si ulož do priečinku "images".

```python
alien = Actor('alien')
alien.pos = 100, 56

WIDTH = 500
HEIGHT = alien.height + 20

def draw():
    screen.clear()
    alien.draw()
```

### Pohyb

Na rozpohybovanie aliena môžeš vyskúšať príkaz:
```python
alien.topright = 10, 10
```

Určite si si všimol, že sa niekde pohol. Ten pohyb bol ale instantný a pre nás neviditeľný.
Preto pridáme špeciálnu funkciu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">update()</span>, aby sa pohyboval pomaly smerom doprava.

```python
def update():
    alien.left += 2
    # ked vyjde z obrazovku, vrátime ho na zaciatok
    if alien.left > WIDTH:
        alien.right = 0
```

### Klikanie
Opäť použijeme špeciálnu funkciu <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">on_mouse_down()</span>, ktorá kontroluje klikanie.

```python
def on_mouse_down(pos):
    if alien.collidepoint(pos):
        print("Eek!")
    else:
        print("You missed me!")
```

Teraz si stiahni ďalší obrázok aj zvukovú nahrávku, ktorú použijeme v hre:

 <a href="/python/lekcia10/alien_hurt.png" download>alien_hurt.png</a><br>
 <a href="/python/lekcia10/eep.wav" download>eep.wav</a>

 Súbory si porozdeľuj do priečinkov nasledovne:

 ```
.
├── images/
│   └── alien.png
│   └── alien_hurt.png
├── sounds/
│   └── eep.wav
└── game.py
 ```

Uprav si hru a použi nové súbory.

 ```python
def on_mouse_down(pos):
    if alien.collidepoint(pos):
        sounds.eep.play()
        alien.image = 'alien_hurt'
 ```

 Ako si si asi všimol, alien sa po kliknutí zmení na nový obrázok, ale nikdy sa nevráti do pôvodného stavu.
 Hru si trochu poupravíme.

 ```python
def on_mouse_down(pos):
    if alien.collidepoint(pos):
        set_alien_hurt()

def set_alien_hurt():
    alien.image = 'alien_hurt'
    sounds.eep.play()

def set_alien_normal():
    alien.image = 'alien'

def set_alien_hurt():
    alien.image = 'alien_hurt'
    sounds.eep.play()
    clock.schedule_unique(set_alien_normal, 1.0)
 ```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Vyskúšaj urobiť hru ťažšiu a aliena zrýchliť.</span>

**Pygame Zero SNAKE**<br>
[https://simplegametutorials.github.io/pygamezero/snake/](https://simplegametutorials.github.io/pygamezero/snake/)