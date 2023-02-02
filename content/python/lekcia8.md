---
author: "Spawn.codes"
title: "🐍 Lekcia VIII."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---
 
**Zdravím! 👋**

<!--more-->

Na dnešnej lekcii ťa čaká ďalší <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">zaujímavý projekt</span>, na ktorom si zopakuješ znalosti z predošlých hodín.


## Minecraft
Minecraft je hra s unikátnym konceptom - nekonečne veľký náhodne generovaný svet. V
tomto projekte si vytvoríme jednoduchšiu simuláciu generovania takéhoto sveta. Vytvoríme
výrez od vrchnej vrstvy (trávy) až po najspodnejšiu vrstvu (bedrock). Do podzemia pridáme
aj typické diamanty, lávu, jaskyne a mobov.


Tento projekt slúži na zopakovanie znalostí z predošlých hodín. Využijete náhodné čísla,
rôzne cykly, funkcie, podmienky a výpisy.


1. Vytvorte nový súbor minecraft.py .
2. Importujte knižnicu "random".
3. Vyskúšajte vytvoriť 10 x 10 svet najprv čisto z jedného emoji, napr. kameň ⬜. Využite
pri tom vnorený cyklus.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🎈 Pomôcka:** Vytvorte najprv cyklus, ktorý vypíše do riadku 10 emoji. Potom ho zaobalte ďalším cyklom, ktorý nás bude posúvať na nový riadok.</span>

4. Vytvorte vrchnú vrstvu (hĺbka 0) trávy 🌾.
5. Pod trávu pridajte 2 vrstvy hliny 🟫.
6. Vytvorte najspodnejšiu vrstvu (hĺbka 9) bedrocku 🌑.
7. V hĺbke 6 a 7 naprogramujte generovanie diamantov. Diamant 💎 má šancu na vygenerovanie 1 z 5 (20%). Nezabudnite, že ak sa diamant nevygeneruje, nehraďte ho kameňom ⬜.

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**🎈 Pomôcka:** Vygenerujte náhodné číslo z rozsahu 0-4. Určte si, že ak sa vygeneruje číslo
0, potom zapíšeme diamant 💎. Vo všetkých ostatných prípadoch zapíšeme kameň ⬜.</span> 

8. Na vrchnej vrstve trávy pridajte šancu 1 zo 6 na vygenerovanie zvieratka 🐄 namiesto trávy.
9. Vygenerované zvieratko bude vždy náhodne jedno následovných: 🐄 krava, 🐏 ovca alebo 🐖 prasa.
10. Do podzemia nad diamantami vygenerujte jaskyňu s nejakým mobom - napr. 💀 skeleton. Tvar jaskyne aj hĺbku si môžete zvoliť sami.

**Príklad vygenerovaného sveta**

```
🌾🌾🐄🌾🌾🌾🌾🐑🌾🌾
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜
⬜⬜⬜⬜⬛⬛💀⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜💎⬜⬜⬜💎⬜
⬜⬜💎⬜⬜⬜⬜💎💎⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑
```

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**✨ Bonus:** Pridajte na tretiu vrstvu hliny zopár blokov hliny.</span> 

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**✨ Bonus:** Ku diamantovej vrstve vygenerujte aj potok/jazierko lávy.</span> 

<span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">**✨ Bonus:** Na vrchnú vrstvu niekedy namiesto hliny a trávy vygenerujte rieku.</span> 

**Príklad vygenerovaného sveta**

```
      🐖🌾🌾🌾🌾🌾🌾
🟦🟦🟦🟫🟫🟫🟫🟫🟫🟫
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
🟫⬜⬜⬜🟫🟫🟫⬜⬜🟫
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜
⬜⬜⬜⬜⬛⬛💀⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜💎⬜⬜⬜💎⬜🟧🟧🟧
⬜⬜💎⬜⬜💎💎⬜🟧🟧
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑
```