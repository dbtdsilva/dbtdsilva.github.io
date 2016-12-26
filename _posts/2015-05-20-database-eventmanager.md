---
title: "Database Event Manager"
categories: academical_work
image: "assets/images/portfolio/eventmanager.png"
---

This project was created to show everything that we have learnt in a university class related with databases.

This was developed using **Microsoft SQL Server and Visual Studio without any intermediate to access the database such a ORM**. The professor did not want us to use any kinda of ORM because he wanted us to understand deeply how this kind of system works.

At first **an idea had to be selected**, in this case, it was decided to create an **Event Manager** which allowed the user to create several events, such as conferences. Each conference has several programs associated with it and their schedule. It also should allow to assign speakers and participants to these programs.

_The following image shows the followed step, the design of the **DER schema**:_
![DER Schema](){:data-original="assets/images/portfolio/description/database.png"}

After that, a **relational schema was obtained from the DER** (converted using specific steps to keep the consistency). 
At last, the **implementation of that schema using several SQL scripts**. SQL Server Management Studio was used to access the database and create SQL scripts to manipulate it. Those scripts include tables creation and respective indexes to optimize specific searches, the most used ones.

