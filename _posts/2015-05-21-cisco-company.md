---
title: "GNS3 Cisco Company"
categories: academical_work
image: "assets/images/portfolio/cisco-company.png"
---

This project consisted in simulating a **implementation of a new topology configuration for a company in their building without destroying their old connectivity using GNS3**.

The idea is pretty simple, the company has an **older part of the building that the administrator does not want to be modified or touched** (that area includes a datacenter and some clients). The other main task is to **provide connectivity along the new part of the building**, this new part includes **2 floors, DMZ Area and an area where the core of the network will be installed**. 

This project includes the **implementations of several mechanisms**:
1. Organize the network with the proper addressing (guaranteeing connectivity with the old network) and preventing single points of failure;
2. Proper switching and routing according with the situation, communication between VLANs should using switching instead of routing in some situation, that is the reason why inter-switches are useful;
3. Implementation of local VLANs for different types of access and some VLANs end-to-end for security cameras and;
4. QoS implementation for the VoIP conferences;
5. SNMP to monitor some attempts of IP Spoofing;
6. Implementation of SNAT (Stateful NAT, the network receives connectivity from two different ISP).

_In the following image it is possible to visualize the schema previously described._

![Company Cisco GNS3](){:data-original="assets/images/portfolio/description/company.png"}
