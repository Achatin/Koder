---
author: "Spawn.codes"
title: "🐍 Lekcia X."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Zdravím! 🤙**

<!--more-->

Toto je tvoja posledná lekcia. Preto som pripravil niečo iné ako zvyčajne, aby som ukázal aj iné stránky jazyka Python.


## Pygame
Pygame je populárna knižnica na tvorbu počítačových hier. Je to teda jednoduchý <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">game-engine 🎮</span>. Na jeho použitie ti stačia doterajšie znalosti a trochu vysvetliviek.

## Inštalácia Pygame
Pygame sa inštaluje cez nástroj <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">pip</span>. Pip je inštalátor cudzích knižníc na Python. Dokáže nainštalovať akúkoľvek potrebnú knižnicu jedným príkazom:

```
pip install pygame
```

Ty si však pip musíš najprv nainštalovať. To urobíš týmito príkazmi v termináli:

```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
```

## Hra v Pygame

```python
# importujeme si novu kniznicu
import pygame

# inicializujeme / nastartujeme pygame
pygame.init()

# nastavime si velkost obrazovky / rozlisenie
screen = pygame.display.set_mode((720, 480))
# herny cas
clock = pygame.time.Clock()
FPS = 60 # pocet snimkov za sekundu

# pouzite farby
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# trieda hraca
class Player(pygame.sprite.Sprite):
    def __init__(self):                         # konstruktor (vytvori hraca)
        super().__init__()
        self.image = pygame.Surface((32, 32))   # velkost hraca 32x32 px
        self.image.fill(WHITE)                  # farba hraca
        self.rect = self.image.get_rect()       # obrazok hraca bude stvorec
        self.velocity = [0, 0]                  # rychlost hraca (v smere x a y)

    def update(self):                           # funkcia update()
        self.rect.move_ip(*self.velocity)       # rozpohybuje hraca


player = Player()
running = True

# herny cyklus
while running:
    dt = clock.tick(FPS) / 1000
    screen.fill(BLACK)  # Farba pozadia

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_w:         # ak stlacime klavesu W
                player.velocity[1] = -200 * dt  # zmenime rychlost
            elif event.key == pygame.K_s:
                player.velocity[1] = 200 * dt
            elif event.key == pygame.K_a:
                player.velocity[0] = -200 * dt
            elif event.key == pygame.K_d:
                player.velocity[0] = 200 * dt
        elif event.type == pygame.KEYUP:
            if event.key == pygame.K_w or event.key == pygame.K_s:
                player.velocity[1] = 0
            elif event.key == pygame.K_a or event.key == pygame.K_d:
                player.velocity[0] = 0

    player.update()

    screen.blit(player.image, player.rect)
    pygame.display.update()

print("Exited the game loop. Game will quit...")
quit()
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Skús hráčovi zmeniť farbu a zväčšiť jeho sprite. Zrýchli hráčov pohyb.</span>

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🔰 Úloha:** Skús do hry vložiť nový červený objekt.</span>

**Pygame SNAKE**<br>
[https://www.edureka.co/blog/snake-game-with-pygame/](https://www.edureka.co/blog/snake-game-with-pygame/)