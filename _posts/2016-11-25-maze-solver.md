---
title: "Maze Solver Robotics"
categories: academical_work
image: "assets/images/portfolio/maze.png"
post_url: "https://github.com/dbtdsilva/robot-naga-simulated/tree/master/maze_pathfinder"
---

**Feel free to check source code at [https://github.com/dbtdsilva/robot-naga-simulated/tree/master/maze_pathfinder](https://github.com/dbtdsilva/robot-naga-simulated/tree/master/maze_pathfinder)**

This project consisted in **developing an autonomous agent**, which is a system that tries to understand the environment **using sensors and acts according with it using actuators**. In this case, after it senses the world, it will plan and only then actuate over the motors; it is a deliberative agent.

**_It is possible to check in more detail what was done for this project in [this report](https://github.com/dbtdsilva/robot-naga-simulated/blob/master/docs/maze_pathfinder_report.pdf)._**

This agent will have to **find its way to the final target through a maze**. This maze contains walls that might be vertical or horizontal. After the robot finds the final target, it **must return to the initial position** in the less possible time.

_The following image shows one of the possible mazes:_
![One possible maze](assets/images/portfolio/description/maze.png)

Besides the description of the problem, the strategies adopted to fulfil every challenge are described. For example, when exploring the agent uses an flood fill algorithm to discover the next unexplored zone.
After it finds the target area, it also checks if it has the best path to return. To discover if it has the best path, it compares the size of the path of an A* algorithm of explored and unexplored nodes to the size of a path of an A* algorithm with explored nodes only.

_In the following image it is possible to verify that the agent is able to create a mapping and plans his next action. The orange path is the best path discovered and purple path might be a better path than the discovered one._
![Agent mapping](assets/images/portfolio/description/astar.png)

This agent is simulated using a specific platform and was never implemented in a non-simulated environment. The agent described is able to find its way to the target and it is also able to return to the initial position after finding the shortest path, without any collisions.

_The following image shows the robot's sensors and actuators, in this case, it has 3 obstacles sensors, compass, and motors._

![Razernaga sensors and actuators](assets/images/portfolio/description/razernaga.jpg)

Robot did not have any kind of encoders associated with the wheels or GPS, the project had to use a movement model that is associated with the motors.