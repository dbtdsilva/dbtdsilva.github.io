---
title: "Real-Time Tower Defense"
categories: academical_work
image: "assets/images/portfolio/tower-defense.png"
post_url: https://github.com/dbtdsilva/tower-defense
---

This project came across with the idea of developing a faster game to implement using real-time techniques and deploy it under a Xenomai system. So it was decided to implement Tower Defense as real-time system. The Tower Defense game is composed of a path, where monsters have to find their way to the end. 

The objective of the game is to not allow the monsters to reach the end of the path. To do so a human player must place towers alongside the path, that will try to take out the monsters while they traverse it. The human player can place or remove towers, but it can't interfere with the behaviour of the towers. To make the game more interesting, difficulty will increase when the player surpasses a level. This increase in the difficulty was implemented by introducing a stronger type of monster.

In my GitHub it is possible to find out a more detailed explanation about the existing tasks in the system and the respective report proving that the system is schedulable.
**Feel free to check at: [https://github.com/dbtdsilva/tower-defense](https://github.com/dbtdsilva/tower-defense)**

_The following image shows a scenario with a total of 7 tasks (1 cannon, 4 minions, 1 god task and 1 user interaction):_
![Tower defense sample scenario](){:src="assets/images/portfolio/description/tower_radar.png"}

