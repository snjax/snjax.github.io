+++
title = "Theoretical physics: Q-balls, gauge fields, cosmology"
description = "Igor Gulamov's physics record: Faculty of Physics at Lomonosov MSU, doctoral research on U(1) gauged Q-balls (2012–2018, left before defense), 7 peer-reviewed papers with 190 citations, three in Physical Review D — and how the method carried over into protocol security."
date = 2026-07-04
updated = 2026-07-04
slug = "physics"
template = "longread.html"

[extra]
kicker = "Physics — 2006–2018"
schema_type = "Article"
+++

**TL;DR.** Before cryptography I was a theoretical physicist. Faculty of Physics, Lomonosov Moscow State University (2006–2012), Department of Quantum Statistics and Field Theory; doctoral research there in 2012–2018 under M.N. Smolyakov, affiliated with MSU and SINP. Seven peer-reviewed papers — three in Physical Review D — with **190 citations** as of July 2026 ([INSPIRE-HEP author record](https://inspirehep.net/authors/2337589)). In 2018 I left the program before defending the dissertation and went all-in on cryptography; the papers remain.

## The subject: Q-balls

A **Q-ball** is a non-topological soliton — a lump of scalar field held together not by topology but by a conserved charge Q: for a fixed charge, the lump configuration has lower energy than any collection of free particles, so it simply cannot decay. They arise naturally in supersymmetric extensions of the Standard Model, and cosmology takes them seriously as dark-matter candidates.

Our line of work studied the harder, more physical variant: **U(1) gauged Q-balls**, where the scalar field carries an actual gauge charge and the soliton must survive its own electrostatic self-repulsion. The main results: exact analytic Q-ball solutions in a piecewise-parabolic potential usable as a testbed for numerics ([Phys. Rev. D 87](https://arxiv.org/abs/1303.1173)), a systematic re-examination of the theory of gauged Q-balls with new constraints on their parameters ([Phys. Rev. D 89](https://arxiv.org/abs/1311.0325)), and general properties and stability analysis of gauged Q-balls ([Phys. Rev. D 92](https://arxiv.org/abs/1506.05786) — the most-cited paper of the series, 75 citations). Earlier work covered embeddings of FRW cosmologies into five-dimensional pseudo-Euclidean spaces ([Gen. Rel. Grav. 44](https://arxiv.org/abs/1111.0687)).

## Publications

All seven, with citation counts as of July 2026 ([INSPIRE-HEP](https://inspirehep.net/authors/2337589); machine-readable: [literature API](https://inspirehep.net/api/literature?q=a%20I.E.Gulamov.2&fields=citation_count,titles)):

| Year | Paper | Venue | Citations |
|---|---|---|---|
| 2015 | [Some properties of U(1) gauged Q-balls](https://arxiv.org/abs/1506.05786) | Phys. Rev. D 92, 045011 | 75 |
| 2013 | [Theory of U(1) gauged Q-balls revisited](https://arxiv.org/abs/1311.0325) | Phys. Rev. D 89, 085006 (2014) | 69 |
| 2013 | [Analytic Q-ball solutions and their stability in a piecewise parabolic potential](https://arxiv.org/abs/1303.1173) | Phys. Rev. D 87, 085043 | 40 |
| 2014 | [Some general properties of U(1) gauged Q-balls](http://quarks.inr.ac.ru/2014/proceedings/www/p1/Smolyakov.pdf) | Quarks 2014 proceedings | — |
| 2014 | [Linearized solutions for U(1) gauged Q-balls](http://quarks.inr.ac.ru/2014/proceedings/www/p1/Gulamov.pdf) | Quarks 2014 proceedings | — |
| 2011 | [Submanifolds in five-dimensional pseudo-Euclidean spaces and four-dimensional FRW universes](https://arxiv.org/abs/1111.0687) | Gen. Rel. Grav. 44, 703–710 (2012) | 6 |
| 2010 | [Submanifolds in spacetime with an auxiliary unphysical extra dimension](https://arxiv.org/abs/1012.0320) | arXiv preprint | — |

Co-authors: M.N. Smolyakov, E.Ya. Nugaev, A.G. Panin. Profiles: [INSPIRE-HEP](https://inspirehep.net/authors/2337589), [ResearchGate](https://www.researchgate.net/profile/Igor-Gulamov-2).

## Before the university

The pattern starts at school: AESC MSU — the Kolmogorov boarding school of Moscow State University (Advanced Educational Scientific Center) — after a lyceum in Shatura, Moscow region. Olympiad record: III-degree diploma at the XI Russian Olympiad in Astronomy and Space Physics ([2004](http://www.issp.ac.ru/iao/russia/2004/wir04_w.html)), II-degree diploma at the XII ([2005](http://www.issp.ac.ru/iao/russia/2005/wir05_w.html)), III diploma at the X International Astronomy Olympiad in Beijing ([2005, senior group](http://www.issp.ac.ru/iao/2005/iao05_pw.html)), prize-winner of the Moscow regional physics olympiad ([2006](http://genphys.phys.msu.ru/ol/2006/11vic.htm)), and winner of the All-Russian Student Physics Olympiad (2009, [LinkedIn](https://www.linkedin.com/in/igorgulamov/)).

## Why the physics matters for everything after

The physics training is not a biographical footnote — it is the method. Q-ball stability analysis and protocol security analysis are the same discipline: write down the model, find the conserved quantities and invariants, then hunt for the perturbation that breaks them. That is how the [Plasma history-split issue](/plasma/) was found (the invariant that breaks is uniqueness of history under an equivocating operator), how [15 production audits](/audits/) were done (balances, shares and roots are conserved quantities; exploits are perturbations that decouple them), and what [SavantChat](/ai/) now encodes as a hypothesis-and-critic loop. Leaving before the defense traded a credential for a decade of applying the method where the adversary is real.
