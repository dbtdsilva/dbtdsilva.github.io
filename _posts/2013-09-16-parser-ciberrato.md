---
title: "Bison and Flex"
categories: academical_work
image: "assets/images/portfolio/parser-ciberrato.png"
---

**"Bison and Flex"** project consists into using **Bison and Flex to convert from a robot maze described in JSON to URDF files that could be played in a 3D Viewer** in order to visualize the maze and the robots on the map 3D.

This project was created because there is a simulator implemented in 2D that outputs those kinds of details about the maze, but the objective is to be possible to represent in 3 dimensions.

The **following image contains an example of what is possible to describe in the JSON**. Such as, walls with thickness, target areas, beacons, overlapping was taken into account, robot's pose, maze dimensions and even challenge parameters.

![Bison and Flex Output](){:data-original="assets/images/portfolio/description/bison.png"}

The following example was the **input received by converter for the previous image** (output):
~~~~ 
{
    "challenge name" : "Final, 2005",
    "challenge type" : "competitive",
    "cycle time" : 50,
    "duration" : 2400,
    "scenario description" : {
        "name" : "TOS challenge",
        "dimensions" : [28, 14],
        "beacons" : [
            { "position" : [14, 7], "radius" : 1, "height" : 2 },
            { "position" : [3.5, 6.5], "radius" : 1, "height" : 4 },
            { "position" : [24, 1] }
        ],
        "target areas" : [
            { "position" : [14, 7], "radius" : 1},
            { "position" : [9, 5], "radius" : 1}
        ],
        "models" : [
            { "id": 1, "height" : 1, "corner list" : [ [0, 0], [0, 5], [5, 5] ] },
            { "id": 2, "use model": 1, "translation": [5, 5] },
            { "id": 3, "height" : 1, "corner list" : [ [5, 5], [10, 5], [5, 10], [10, 10] ], "thickness" : 1 },
            { "id": 4, "height" : 1, "corner list" : [ [5, 5], [10, 5], [15, 5]], "thickness" : 1 }
        ],
        "walls" : [
            { "use model": 1, "height": 2, "translation": [15, 5], "rotate": 90 },
            { "use model": 3, "rotate": 45 },
            { "height" : 2, "corner list" : [ [15, 7] ], "thickness" : 1 },
            { "use model": 4 },
            { "corner list" : [ [24, 9], [24, 7], [28, 7] ], "thickness" : 1 },
            { "corner list" : [ [24, 13], [28, 13], [22, 11] ], "thickness" : 0.5 }
        ],         
        "grid" : [ 
            [2, 12.5, -15],
            [2, 12.5, -15], 
            [1.75, 1.5, 15], 
            [26.25, 12.5, 90],
            [24.25, 12.5, 180],
            [22.25, 12.5, 270]
        ]
    },
    "robot modelling parameters" : {  
        "motors noise" : 1.5,
        "beacon sensor noise": 2,
        "beacon sensor aperture" : "PI",
        "requests per cycle" : 10
    },
    "scoring parameters" : {
        "robot-robot collision penalty" : 1,
        "robot-wall collision penalty" : 1,
        "key time" : 1800,
        "arrival time penalty" : 100,
        "home reward" : 100,
        "return time penalty" : 2000,
        "target reward" : 100
    },
    "debugging parameters" : {
    }
}
~~~~
