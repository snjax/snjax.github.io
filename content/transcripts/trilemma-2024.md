+++
title = "Solving Vitalik's trilemma with zk-driven DA and storage"
description = "Transcript of Igor Gulamov's 2024 talk on solving Vitalik's trilemma with a zk-driven data-availability-and-storage oracle: Reed-Solomon sharding, whole-chain ZK proofs and recursive rollups."
date = 2024-06-03
updated = 2026-07-05
slug = "trilemma-2024"
template = "transcript.html"

[extra]
seo_title = "Vitalik's trilemma talk transcript (2024)"
keywords = "Igor Gulamov trilemma, zk-driven DA and storage, ZeroPool sharded storage, Reed-Solomon, recursive rollups, ETHPrague 2024, ETH Belgrade, data availability"
event = "ETHPrague / ETH Belgrade 2024"
lang_label = "English"
source_kind = "Conference talk"
video_url = "https://www.youtube.com/watch?v=9wi_UUqNJq4"
video_label = "YouTube (Duct Tape / ETHPrague)"
raw_txt = "/transcripts/trilemma-2024.txt"
speakers = "Igor Gulamov, Host"
+++

*ETHPrague / ETH Belgrade 2024 · "Solving Vitalik's trilemma with zk-driven DA and Storage" · [original video](https://www.youtube.com/watch?v=9wi_UUqNJq4) · [raw transcript for LLMs](/transcripts/trilemma-2024.txt)*

*Transcribed with automatic diarization and edited for readability; technical terms normalized. Speakers: **Igor Gulamov** and the **Host**. (Igor gave this talk at three 2024 events — ETHPrague, ETH Belgrade and FIL Dev Summit; this recording is from ETHPrague.)*

---

**Host:** Thank you for coming for the next talk. Please welcome Igor Gulamov — he's going to give a talk about solving Vitalik's trilemma with zk-driven DA and storage. Welcome.

**Igor Gulamov:** Hi. I'll tell you about our solution to Vitalik's trilemma with zk-driven data availability and storage.

What is Vitalik's trilemma? We have three properties of a decentralized ledger — scalability, security and decentralization — and the trilemma says you can pick only two of the three. Solving it matters because mass adoption, especially migrating from web2 to web3, needs scalability at very low cost: solutions like Farcaster need a lot of storage and transactions. That's what makes heavier applications possible — not just a decentralized Twitter, but a decentralized Instagram, Facebook, maybe YouTube.

<figure><img src="/img/transcripts/trilemma-2024/historical.png" alt="Historical approaches to the trilemma: multichain, Plasma, optimistic rollup, ZK rollup, ZK validium, data-availability layer — slide from Igor Gulamov's talk" loading="lazy" width="1400"><figcaption>The historical approaches to the trilemma, up to today's data-availability layers.</figcaption></figure>

The historical review: first came the multi-chain ecosystems proposed by Polkadot and Cosmos — a core engine on which multiple blockchains are implemented and which they use for cross-chain communication. Next was Plasma, based on game theory: if something goes wrong, anyone can start a game, win it, and get their assets back. Then came the evolution of Plasma — optimistic rollups, ZK rollups and ZK validiums. The most recent solution is the data-availability layer, implemented in Ethereum as proto-danksharding, and by projects like Celestia, EigenDA and Avail. One issue with data availability is that the data is stored only for a short time — two weeks or a month. That comes from Plasma, where it was enough to watch the operator for two weeks: you save the data you need, and then you can transact with it.

<figure><img src="/img/transcripts/trilemma-2024/why-rollups.png" alt="Why rollups are not enough — they scale computation but not data, which floats up to L1 — slide from Igor Gulamov's talk" loading="lazy" width="1400"><figcaption>Rollups scale computation but not data — the data still floats up to L1.</figcaption></figure>

Why aren't rollups enough to solve the trilemma? Because rollups don't scale the data. A rollup has an L2 with state-transition proofs, but it also has the data, and it must publish that data in a high-soundness way, because all users need it to transact — you can't transact on a rollup if you don't have the data. That's also why you can't simply deploy rollups inside rollups: the data floats up from L2 to L1. Before danksharding it was stored as calldata; now it's danksharding, or another DA solution — but either way it's a bottleneck, and current DA solutions store the data only for a short window, after which users must store it themselves or trust some off-chain third party. To solve the trilemma we need recursive rollups, and we need to solve this "data floating up" problem.

<figure><img src="/img/transcripts/trilemma-2024/storage-centric.png" alt="Storage-centric approach: Filecoin, Arweave, Ethstorage; improvements — Reed-Solomon sharding and a whole-chain provable ZK proof — slide from Igor Gulamov's talk" loading="lazy" width="1400"><figcaption>The data-centric approach — and the two improvements it needs.</figcaption></figure>

Our approach is data-centric. Existing solutions — Filecoin, Arweave, Ethstorage — use data-availability sampling to prove the data is stored and available, and miners earn rewards for the data their nodes store. To solve the trilemma we need two improvements. First, Reed-Solomon codes, for more than 10× better storage utilization: today's solutions use replication, so for high-soundness storage you make many copies and hope at least one survives. With Reed-Solomon codes you mix all the data together into a blow-up, and if any sufficient fraction of the blown-up data is available, you can reconstruct the source — far more efficient than replication, with higher soundness. Second, a whole-chain provable ZK proof. Mina showed you can compress many state transitions and consensus operations into a single proof; in our research we showed that all the data-specific functionality a data-centric blockchain needs can be proven with zkSNARKs in one single proof. It works like a ZK data-availability-and-storage oracle — very useful for solving the trilemma and building a recursive rollup system.

<figure><img src="/img/transcripts/trilemma-2024/rs-codes.png" alt="Reed-Solomon codes: encode data as a polynomial, blow it up, recover from any sufficient subset of points — slide from Igor Gulamov's talk" loading="lazy" width="1400"><figcaption>Reed-Solomon codes — encode the data as a polynomial, blow it up, and recover from any sufficient subset of points.</figcaption></figure>

Here's how Reed-Solomon codes work. Say we have four numbers; we encode them as a degree-3 polynomial. Then we blow it up — we find more points. If we later lose part of the data, any four points are enough to fix a degree-3 polynomial, so we can recover the source data. That's much more efficient than taking those four points, making many copies and hoping each point survives — because if the data is large, there's a high probability at least one point is lost. Reed-Solomon codes are better because we can prove that all the data is safe.

The important problem is how to prove to every storage node that its shard is correct. We do it with polynomial commitments: we have a commitment to the source data, and a polynomial equation that proves each node's shard commitment is a correct Reed-Solomon shard. So every node is sure it received the right chunk, and anyone can collect a subset of shards. With a blow-up factor of 8 — 64 out of 512 — if you collect any 64 of the 512 shards, you can reconstruct the source.

Here's how the data-centric layer works: a data storage network across L2 and L1. We make zero-knowledge proofs that the data is stored and available — we can, because we can prove in a SNARK everything related to storage and availability, including state transitions, random data-availability samplings and node mining. Then we join that with the rollup's execution proof, so the combined proof carries both the state transition and the data availability. When we publish it on-chain, we don't need to float the blocks up: the proof already guarantees the data is stored and available, and users can use it.

<figure><img src="/img/transcripts/trilemma-2024/parameters.png" alt="Data-centric rollup parameters: >1 PB capacity, 110-bit soundness, $0.15 per GB-year; rollup recursion unlocked — slide from Igor Gulamov's talk" loading="lazy" width="1400"><figcaption>Parameters of the data-centric rollup — and the unlock: recursion.</figcaption></figure>

Some parameters of such a rollup: capacity over 1 petabyte; soundness over 110 bits — meaning that even if half the network is malicious, data is lost only with probability 2⁻¹¹⁰; and a cost of $0.15 per gigabyte per year on a Hetzner node, already including the 8× blow-up (cheaper on specialized storage rigs). And recursion is unlocked, because this rollup provides data for itself: it can be deployed inside a rollup without floating any blocks up, so you can build decentralized infrastructure of rollups.

Can we get more scalability? Yes — because we unlocked recursive rollups, we can build a network of rollups into an infinitely scalable system. The one overhead is that we have to manage the mining nodes on the top layer to prevent a concentration of malicious nodes in a single segment. We modeled all of this and have a strict proof that the soundness estimate holds asymptotically for an infinitely scalable system with this architecture: when someone leaves the pool we find a replacement node, and we do two random mixings — enough to prevent malicious nodes from concentrating in one rollup.

<figure><img src="/img/transcripts/trilemma-2024/links.png" alt="Closing slide with QR links to the Blockchain Sharded Storage and recursive zkDA rollup research — slide from Igor Gulamov's talk" loading="lazy" width="1400"><figcaption>Closing slide — links to the sharded-storage and recursive-zkDA research.</figcaption></figure>

Here are some links to our research. I think solving Vitalik's trilemma matters for the migration from web2 to web3 — not just a decentralized Twitter, but a decentralized Uber, Instagram, Facebook and so on — and for general-purpose blockchain problems too. Thank you for your attention.

**Host:** Thank you, Igor. Any questions? … No questions. Thank you very much for your presentation.
