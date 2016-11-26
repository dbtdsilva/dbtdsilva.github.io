---
title: "Distributed System"
categories: academical_work
image: "assets/images/portfolio/distributed-system.png"
post_url: https://github.com/dbtdsilva/distributed-systems-sim
---

The idea of this project was to **understand how distributed system works**. 

**Feel free to check the source code at [github.com/dbtdsilva/distributed-systems-sim](https://github.com/dbtdsilva/distributed-systems-sim).**

The project consisted in **simulating the crafting of several products**, those products would go for several phases, **collect the prime materials, craft the product and sell the product**. In this problem there is 3 different type of entities: **craftsmanship** (that creates the products and collects the prime materials); **entrepreneur** (sells products); **customers** (buy products).

The system was **created and modified several times**:
1. **Simple multi-threaded system** that could solve the problem without any deadlocks;
2. Modify the first solution to support a **distributed system**, implementing specific **messages and communicate those messages using TCP sockets.**
3. Modify the first solution again but to support a **distributed system** using **remote method invocation** instead of creating specific messages. This process was solved by using Java RMI (marshalling and unmarshalling), a vector clock was also implemented for the final system produce a log properly ordered.