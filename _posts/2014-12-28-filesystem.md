---
title: "Custom Filesystem"
categories: academical_work
image: "assets/images/portfolio/filesystem.png"
---

This project, SOFS, is a simple and limited file system based on Linux's ext2 file system.

> "In general terms, the introduction of a new file system into the operating system implies two well-defined tasks. The first consists of integration code associated with the implementation of the data type file in the kernel of the operative system and the second is the instantiation on one or more mass memory devices of the computational system.
>
> FUSE (File system in User SpacE) is a very ingenious alternative solution that aims to build file systems in the user space, as if they were mere applications, preventing any inconsistencies and errors that arise in its implementation. This means that those errors will not be transmitted directly to the kernel and lead to its inoperability.
>
> The infrastructure offered is made up of two main parts:
> • file system interface module - acts as the communications mediator between the uniform interface of file operations provided by the Kernel and its implementation in user space;
> • implementation library - provides the communication data structures and the prototype of operations that have to be developed to ensure compatibility User-defined data type with the underlying model; It also provides a set of functionalities designed to instantiate the type of Data on a mass storage device and its integration into the operating system."

The idea of this project was to **understand how a filesystem works and can be modified/created.**

Several tasks were implemented in SOFS, such as, _allocate/free i-nodes, read/write/clean i-nodes, write/read clusters, perform operations on those clusters, manipulate directory entries_. 

Besides the low level definition of the filesystem, it had been implemented some _syscalls for the user to manipulate the system._