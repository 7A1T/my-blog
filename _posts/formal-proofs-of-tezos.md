---
title: "Writing formal proofs of the Tezos blockchain"
excerpt: "During the summer of 2022, I worked as an intern at Formal Land, a company that specializes in formal verification of blockchain protocols. I worked on writing formal proofs of the Tezos blockchain."
coverImage: "/assets/blog/tezos-formal-land/cover.jpg"
date: "2024-10-14T20:35:07.322Z"
author:
  name: Tait van Strien
  picture: "/assets/blog/authors/tait.jpg"
ogImage:
  url: "/assets/blog/tezos-formal-land/cover.jpg"
---

# What is Tezos?

Tezos is a decentralized, open-source blockchain platform that supports smart contracts and peer-to-peer transactions using proof of stake (PoS). One unique feature of Tezos is its _on-chain governance_: the ability for its users to propose, discuss, and vote on upgrades to the blockchain, making it adaptable to change. Through its native cryptocurrency, _Tez_, and the mutability of its code, Tezos can support a variety of use cases—from self-executing contracts and decentralized finance (DeFi) to NFTs and more.

This flexibility, however, also presents a challenge: _how do you ensure the security and reliability of a blockchain that can change over time?_ That’s where formal verification, and companies like Formal Land, come into play.

## What is Formal Verification?

Formal verification is a rigorous process of using mathematical proofs to verify that a program or system behaves exactly as expected. Unlike traditional testing, which typically checks for issues in specific scenarios, formal verification can comprehensively guarantee correctness by proving that a program meets its specifications under all possible conditions. For blockchain systems, this level of certainty is crucial, as it ensures that smart contracts and blockchain protocols are secure and error-free.

## What is Formal Land?

Founded in 2021, Formal Land focuses on providing advanced formal verification solutions specifically tailored to blockchain protocols. They utilize Coq, a formal proof assistant language, to create mathematical proofs that validate critical elements of blockchain protocols. Formal Land has developed tools to translate code from various languages into Coq, enabling rigorous verification processes across multiple blockchain projects. This is especially valuable for platforms like Tezos, where continuous updates can make comprehensive validation challenging but necessary for security.

## My Role at Formal Land

During the summer of 2022, I interned at Formal Land, where I contributed to the translation and verification of an optimized version of a _map function_ from OCaml to Coq. This project aimed to convert and validate OCaml code, commonly used in blockchain development, into Coq to prove its correctness within the blockchain environment.

One of my responsibilities was to document the process, so I wrote a detailed blog post on our progress and findings. This required not only technical work but also clear communication of our methods and results.

## What I Learned

- **Formal Verification Fundamentals**: The project expanded my understanding of formal verification, particularly how to use Coq to validate blockchain code.
- **Teamwork & Communication**: Working on a collaborative, high-stakes project taught me the value of asking for help early and providing detailed pull requests to keep everyone aligned.
- **Version Control Mastery**: I gained more confidence in using Git in a large, professional project, learning techniques to maintain efficiency and accuracy within a shared codebase.

## Accomplishments

- **Completed a Functional Proof of Concept**: I was able to successfully translate and verify the optimized map function from OCaml to Coq, a step toward secure blockchain development.
- **Enhanced Documentation**: By documenting the translation process and creating a blog post, I helped Formal Land establish a knowledge base that could be referenced for future projects.

## What I Enjoyed

I really enjoyed the learning experience and collaborating with knowledgeable peers who were passionate about formal verification and blockchain technology.

## What I Didn't Enjoy

Although I appreciated the depth of formal verification, I discovered that I’m more interested in dynamic, hands-on coding environments rather than the abstract nature of formal proofs.

## What I Would Do Differently

If I could redo my internship, I’d start asking questions earlier. I’d also create diagrams to help visualize the logical steps, particularly when working on complex proofs, as a way to better structure my approach and communicate my thought process with the team.
