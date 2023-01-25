---
author: "Spawn.codes"
title: "🎮 Lekcia X."
description: "Programovanie hier pre deti - Spawn.codes"
tags: ["vývoj-hier", "hry", "game-development", "kurz", "programovanie-hier", "programovanie-pre-deti"]
---

**Ahoj ✌**

Vitaj na poslednej lekcii. Ďakujem ti, že si sa kurzu zúčastnil. Patrí ti veľká <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">vďaka 💖</span>. Na tejto lekcii si môžeš dokázať, čo si sa na kurze naučil. Tvojou úlohou bude riešiť výzvy pri jednoduchej hre.

{{< figure src="/vyvoj-hier/lekcia10/dino.p8.png" class="float-right ml-16 max-w-xs">}}

## Chrome Dino
Určite poznáš hru Chrome Dino. Ak nie, vyskúšaj si niekedy vypnúť internet na PC, spustiť prehliadač Chrome a stlačiť medzerník. Otvorí sa ti minihra, ktorá spočíva vo vyhývaní sa prekážok s dinosaurom.

Ja som si pre teba túto hru predpripravil. Vieš si ju stiahnúť priamo tu v učebnici ako obrázok. Táto hra je však <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">nedokončená 🔨</span>. Tvojou úlohou bude pridať implementovať nejaké funkcie a dokončiť hru. Všetky úlohy nájdeš vypísané v piatej záložke v editore kódu. <span class="font-semibold text-lg text-slate-800 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-md shadow-indigo-600">Veľa šťastia 🍀</span>.

## Úloha I.
Oprav tento kód a rozhýb dinosaura.

```Lua
function movement()
	dino.speed = 0
end
```

## Úloha II.
Do funkcie <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">jump()</span> pridaj možnost skákať aj šípkou hore ⬆️

```Lua
function jump()
	if dino.y < 40 then
			dino.y+=gravity
	end
	if btn(❎) and dino.y>=39 then
			sfx(0)
			dino.jump=true
	end
end
```

## Úloha III.
Nakresli dinosaurovi animáciu podľa kódu.

```Lua
function animate()
		--ak casovac presiahne 0.1 sekundy (cas snimku animacie)
	 if (time() - dino.anim) > 0.1 then
	     --aktualizacia casovaca
	     dino.anim = time()
	     
	     --na striedacku menime vsetky sprites hraca
	     if dino.sprite == 1 then
	         dino.sprite = 2
	     elseif dino.sprite == 2 then
	         dino.sprite = 1
	     end
	 end
end
```

## Úloha IV.
Vypíš <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">score</span> a <span class="font-mono text-slate-400 text-center max-w-sm mx-1 rounded-md px-2 py-1 bg-slate-800">highscore</span>.

```Lua
function print_score()
    --score
    
    --highscore
		
end
```

## Bonus ✨
Doplň do hry vlastný content, napr. uprav sprites, pridaj možnost zohnúť sa, vylepši animácie, skrášli mapu, pridaj hudbu...