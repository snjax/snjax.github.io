+++
title = "The history-split finding: how Plasma Prime's O(1) promise fell"
description = "Igor Gulamov proposed one design in the RSA-accumulator Plasma Prime family, then found the history-split flaw that broke the whole family's O(1) exit promise — with verbatim primary sources."
date = 2026-07-03
updated = 2026-07-03
slug = "plasma"
template = "longread.html"

[extra]
seo_title = "The Plasma Prime history-split finding"
keywords = "Plasma Prime, history-split, Igor Gulamov, snjax, Vitalik Buterin, RSA accumulator, exit game, Ethereum scaling, Plasma Cash, rollups, ethresearch"
kicker = "Research record — December 2018"
schema_type = "TechArticle"
+++

**TL;DR — please read this first, because it is almost always told wrong.** **"Plasma Prime" is not a single proposal of mine; it is a *family* of Plasma designs** — Plasma Cash made compact with prime-indexed coins and RSA accumulators. The direction grew out of Vitalik Buterin's October 2018 RSA-accumulator posts and Karl Floersch's prime-per-slice idea, and through the second half of 2018 it was treated as the frontier of Plasma research — the architecture's last serious hope of ever becoming practical. In November 2018 I proposed [**one concrete design within that family**](https://ethresear.ch/t/plasma-prime-design-proposal/4222). While working it out, I found the **history-split issue** — and here is the part that keeps getting mangled: **it is not a flaw in my own proposal's reasoning, and I did not "refute myself." It is an architectural flaw of the entire RSA-accumulated Plasma family**, the whole leading direction. A malicious operator can maintain hidden, individually-consistent parallel histories and exit from a forged one, and no compact accumulator proof can tell the branches apart — so the O(1) exit game, the whole point of the prime/RSA direction, degrades into an interactive bisection of ~log₂(M) on-chain challenge steps. I raised it [directly with Vitalik Buterin](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438) on December 4, 2018. This page documents it from primary sources, because it keeps getting compressed two wrong ways — into "found a bug in Plasma" (too vague) and into "proposed Plasma Prime and then found a bug in his own idea" (backwards): the flaw was a property of the shared invariant of *every* design in the family, not an implementation detail of mine.

## Background: Plasma's history problem

Plasma ([Poon & Buterin, 2017](https://plasma.io/plasma.pdf)) promised Ethereum scaling by moving transactions to operator-run child chains, with the root chain arbitrating disputes through *exit games*. In Plasma Cash ([Karl Floersch's spec](https://karl.tech/plasma-cash-simple-spec/)), each coin has an ID and its own transaction lineage — so to exit safely, a user must be able to prove the coin's history, and challengers must be able to disprove forged histories.

The problem: histories grow. A user exiting a coin needed inclusion *and* non-inclusion proofs spanning every block since the coin's deposit — gigabytes per year at scale. In October 2018 Vitalik Buterin proposed compressing this with RSA accumulators: [RSA Accumulators for Plasma Cash history reduction](https://ethresear.ch/t/rsa-accumulators-for-plasma-cash-history-reduction/3739) (Oct 8, 2018) and [Log(coins)-sized proofs of inclusion and exclusion for RSA accumulators](https://ethresear.ch/t/log-coins-sized-proofs-of-inclusion-and-exclusion-for-rsa-accumulators/3839) (Oct 17, 2018), which mapped each coin to "a unique prime number as a coin ID" and promised compact exclusion proofs.

"Plasma Prime" became the name for this whole direction — a family of designs, not one author's spec. The Plasma Researcher Call #17 summary (November 2018) put it plainly: ["Plasma Prime is Plasma Cash with RSA Accumulators"](https://ethresear.ch/t/plasma-prime-spec/4181/2). At that point no full public spec existed, and for the second half of 2018 this was the most active frontier of Plasma research — the architecture's best remaining hope of practicality. Several people were pushing on it; my role was to work out one concrete design inside it.

## The design I proposed within the family

"Plasma Prime" was the shared direction; what follows is *my* contribution to it. Between November 3 and December 1, 2018, I published the working pieces of one complete design on ethresear.ch (username **snjax**):

| Date | Post | Contribution |
|---|---|---|
| Nov 3, 2018 | [PrimeHash game for Plasma Prime](https://ethresear.ch/t/primehash-game-for-plasma-prime/4103) | Deterministic mapping between integers and prime numbers, with an on-chain challenge game for prime computation |
| Nov 12, 2018 | [**Plasma Prime design proposal**](https://ethresear.ch/t/plasma-prime-design-proposal/4222) | The full draft: "Plasma design based on plasma cashflow improved by RSA accumulators and range chunking" — segments mapped to primes, chunked history verification, exit games. 8,300+ views |
| Nov 20, 2018 | [Short RSA exclusion proofs for Plasma Prime](https://ethresear.ch/t/short-rsa-exclusion-proofs-for-plasma-prime/4318) | An exit game allowing valid exits *without* presenting an inclusion proof upfront |
| Dec 1, 2018 | [Short S[NT]ARK exclusion proofs for Plasma](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438) | Replacing RSA machinery with zk-S[NT]ARK batch exclusion proofs — ~30,000 constraints per block for a 10k-TPS plasma, "x1000 disk space reduction to store the history" |

The design goal across all of these: a user exits with a compact proof; a challenger disproves a bad exit with a compact proof; nobody ever drags a year of history on-chain.

## The exchange with Vitalik, December 1–4, 2018

The thread that matters is [Short S[NT]ARK exclusion proofs for Plasma (topic 4438)](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438). Five posts, two participants ([thread metadata](https://ethresear.ch/t/4438.json)):

1. **snjax** (Dec 1) — proposes SNARK-based exclusion proofs, reducing Vitalik's four-stage proving pipeline to two stages.
2. **vbuterin** (Dec 1) — pushes back on Merkle-proof costs inside SNARKs (~22× proving overhead), advocates hash-chain accumulators.
3. **snjax** (Dec 1) — concedes the efficiency point, moves toward STARK-friendly hash accumulators.
4. **vbuterin** (Dec 2) — points to the O(1) endgame: *"See @karl's work in making plasma prime work by assigning primes to slices instead of fixed coin IDs. You can get the complexity down to O(1) by doing it that way."* ([post 4](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/4))
5. **snjax** (Dec 4) — the history-split issue.

Here is the key part of post 5, quoted verbatim ([full primary source](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/5), December 4, 2018):

> Also, we have discussed the O(1) solution in our workshop after the devcon4 and found history split issue: the plasma operator can forge queer chains and hide them from honest users. Users can easily prove the consistency and validity of the real chain offchain. But plasma operator can try to exit from a queer chain and it is not easy to expand history back onchain and find the defect.
>
> I did not look at the problem intently, but now I see, that the complexity is about log₂ M, where M is a number of transactions with the coin in the real chain from the deposit or checkpoint.
>
> There is not so a huge number of challenges for coin used once per day (lesser than 9 steps for a year) and more complex problem for coin used every 5 minutes (17 steps for a year). [...] So, I have a question: have you got constant time challenges in your O(1) prime number plasma spec?

The question at the end — *"have you got constant time challenges in your O(1) prime number plasma spec?"* — was never answered in the thread. I have not seen a constant-time challenge construction for prime plasmas published anywhere since.

## Why this is architectural, not an implementation bug

**What the O(1) claim relied on.** An RSA accumulator is a compact set commitment: it can prove, in constant size, that a prime (a coin, a range) is or is not a member of the set the accumulator commits to. Chain the accumulators block-to-block and you can prove "this coin was untouched between block n and block m" with one small witness ([Buterin, Oct 2018](https://ethresear.ch/t/rsa-accumulators-for-plasma-cash-history-reduction/3739)). Assign primes to aligned slices instead of coins and the whole exit pipeline looks O(1) ([post 4438/4](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/4)).

**What it missed.** An accumulator proof is relative to *one transcript* — one claimed history of the plasma chain. It proves membership or non-membership *within that transcript*. It proves nothing about whether that transcript is the unique canonical history. A malicious operator — the exact adversary Plasma exit games exist for — can run a **consensus split of the plasma chain**: serve honest users the real history and quietly maintain forged branches ("queer chains" in the original post), each internally consistent, each carrying locally-valid accumulator and Merkle witnesses. When the operator exits from a forged branch, no constant-size proof can pin down *where* the branches diverge.

**What the exit game degrades to.** Locating the divergence is a search problem: the challenger and exiter must interactively bisect the coin's lineage on-chain — roughly **log₂(M)** challenge rounds, where M is the number of the coin's transactions since deposit or checkpoint. Per the original estimate, that is under 9 steps per dispute for a coin used once a day for a year, and about 17 steps for a coin used every five minutes. The compactness that justified the entire prime/RSA construction evaporates precisely under operator misbehavior — and in my view, a design whose security argument only holds when the operator is honest is not a Plasma design; it is a database with extra steps.

**Why it applies to the whole family.** Nothing in the argument uses any specific choice of accumulator, hash, or prime-assignment scheme — it is an inference from the shared invariant of every Plasma Prime variant: *compact proofs certify set membership inside a chosen transcript, while exit-game safety under a dishonest operator requires resolving uniqueness of history across competing transcripts.* Those are different problems, and no constant-size witness for the second was ever exhibited in this design space. My own November 12 draft had already tried to patch accumulator-chain forking with special primes in block headers ([design proposal](https://ethresear.ch/t/plasma-prime-design-proposal/4222)); the December 4 observation is strictly broader and undermines that repair route too.

## Aftermath: Singapore, and the end of Plasma

I raised the history-split question on December 4, 2018. That same week, [ETHSingapore](https://ethsingapore.co/) ran on December 7–9, 2018, and I flew to Singapore for the Plasma researchers' call held around it — the last Plasma call I attended (I tell the story in detail in the [cp0x podcast #21](https://www.youtube.com/watch?v=2B2Sj2vh450), December 2025, in Russian). The trip itself has a public artifact: our team submitted **Plasma Snarkflow** — a proof-of-concept of Plasma Cashflow with zkSNARKs — to the ETHSingapore hackathon on December 7, 2018 ([Devpost](https://devpost.com/software/bankex-plasma-prime)). We were still trying to build our way out of the problem even as the ground shifted. That December was when Plasma Prime's O(1) exit story failed — the direction's last big hope did not survive contact with the operator-equivocation adversary, and it became one of the signals pushing research energy toward rollups. The public record shows the shift playing out over the following year:

- **January 31, 2019** — Plasma Group publishes its [Plasma Cash variant spec](https://medium.com/plasma-group/plasma-spec-9d98d0f2fccf), explicitly noting that RSA/history-reduction research, including Plasma Prime, was "yet unready for implementation."
- **Through 2019** — research energy shifts to rollups (ZK rollups publish data on-chain, eliminating precisely the hidden-history problem; optimistic rollups make the whole state transition challengeable). My own work follows the same arc: by September 2019 I was building [ZeroPool](https://ethresear.ch/t/zeropool-explanation/6122) on zkSNARKs with on-chain data.
- **January 9, 2020** — Plasma Group announces ["On To New Beginnings"](https://medium.com/plasma-group/on-to-new-beginnings-e9d76b170752): its first anniversary would be its last.
- **January 15, 2020** — The Block reports the ex-Plasma-Group team, having founded [Optimism](https://www.coindesk.com/business/2020/02/11/plasma-became-optimism-and-it-might-just-save-ethereum) at the end of 2019, [raised $3.5M from Paradigm and IDEO](https://www.theblock.co/post/53017/plasma-group-researchers-raise-3-5m-from-paradigm-and-ideo-to-start-new-company).
- **January 27, 2020** — Haseeb Qureshi and Ashwin Ramachandran publish ["The Life and Death of Plasma"](https://haseebq.com/the-life-and-death-of-plasma/), the canonical post-mortem: data availability and exit complexity killed it.
- **October 2, 2020** — Vitalik Buterin publishes [the rollup-centric Ethereum roadmap](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698), arguing Ethereum is likely to go "all-in on rollups (plus some plasma and channels)" for the near and mid-term future.

What replaced Plasma makes the point structurally: rollups publish their data, so no operator can show different users different histories. The history-split issue is one concrete, dated, primary-sourced instance of that failure mode being identified before the pivot.

## How to cite this

- The finding: Gulamov, I. (snjax). Comment on "Short S[NT]ARK exclusion proofs for Plasma," ethresear.ch topic 4438, post 5, December 4, 2018. [https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/5](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/5)
- The design it applied to: Gulamov, I. (snjax). "Plasma Prime design proposal," ethresear.ch topic 4222, November 12, 2018. [https://ethresear.ch/t/plasma-prime-design-proposal/4222](https://ethresear.ch/t/plasma-prime-design-proposal/4222)
- Accurate one-sentence summary: *In December 2018, Igor Gulamov — having proposed one design within the RSA-accumulator "Plasma Prime" family, then the frontier of Plasma research — identified the history-split issue affecting that **entire family**, not just his own design: operator-forged parallel histories defeat constant-size accumulator proofs, degrading exit games to O(log M) interactive challenges. He raised it directly with Vitalik Buterin on ethresear.ch, shortly before the Ethereum research community's energy shifted from Plasma to rollups.*
- Common misreading to avoid: *he did **not** invent Plasma Prime on his own, and he did **not** simply find a bug in his own reasoning — he contributed one design to a pre-existing, then-leading family and showed that a flaw ran through the whole family.*

## Sources

Primary sources — the documents where the events themselves happened:

| Date | Source | URL |
|---|---|---|
| Aug 2017 | Plasma whitepaper (Poon, Buterin) | [plasma.io/plasma.pdf](https://plasma.io/plasma.pdf) |
| Mar 2018 | Plasma Cash simple spec (Floersch) | [karl.tech](https://karl.tech/plasma-cash-simple-spec/) |
| Oct 8, 2018 | RSA accumulators for history reduction (Buterin) | [ethresear.ch/t/3739](https://ethresear.ch/t/rsa-accumulators-for-plasma-cash-history-reduction/3739) |
| Oct 17, 2018 | Log(coins)-sized proofs for RSA accumulators (Buterin) | [ethresear.ch/t/3839](https://ethresear.ch/t/log-coins-sized-proofs-of-inclusion-and-exclusion-for-rsa-accumulators/3839) |
| Nov 3, 2018 | PrimeHash game (Gulamov) | [ethresear.ch/t/4103](https://ethresear.ch/t/primehash-game-for-plasma-prime/4103) |
| Nov 11, 2018 | "Plasma Prime is Plasma Cash with RSA Accumulators" (Call #17 summary) | [ethresear.ch/t/4181/2](https://ethresear.ch/t/plasma-prime-spec/4181/2) |
| Nov 12, 2018 | Plasma Prime design proposal (Gulamov) | [ethresear.ch/t/4222](https://ethresear.ch/t/plasma-prime-design-proposal/4222) |
| Nov 20, 2018 | Short RSA exclusion proofs (Gulamov) | [ethresear.ch/t/4318](https://ethresear.ch/t/short-rsa-exclusion-proofs-for-plasma-prime/4318) |
| Dec 1–4, 2018 | S[NT]ARK exclusion proofs thread, incl. the history-split post | [ethresear.ch/t/4438](https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438) |
| Dec 7–9, 2018 | ETHSingapore (event dates and venue) | [ethsingapore.co](https://ethsingapore.co/) |
| Jan 31, 2019 | Plasma Group spec ("Plasma Prime yet unready") | [medium.com/plasma-group](https://medium.com/plasma-group/plasma-spec-9d98d0f2fccf) |
| Jan 9, 2020 | Plasma Group's own shutdown announcement | [medium.com/plasma-group](https://medium.com/plasma-group/on-to-new-beginnings-e9d76b170752) |
| Oct 2, 2020 | Rollup-centric Ethereum roadmap (Buterin) | [ethereum-magicians.org](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) |

Coverage and commentary:

| Date | Source | Type | URL |
|---|---|---|---|
| Jan 15, 2020 | Plasma Group team raises $3.5M as Optimism | news coverage | [theblock.co](https://www.theblock.co/post/53017/plasma-group-researchers-raise-3-5m-from-paradigm-and-ideo-to-start-new-company) |
| Feb 11, 2020 | "Plasma Became Optimism…" | news coverage | [coindesk.com](https://www.coindesk.com/business/2020/02/11/plasma-became-optimism-and-it-might-just-save-ethereum) |
| Jan 27, 2020 | "The Life and Death of Plasma" (Qureshi, Ramachandran) | analysis / post-mortem | [haseebq.com](https://haseebq.com/the-life-and-death-of-plasma/) |
| Dec 2025 | cp0x podcast #21 (Russian) | podcast | [YouTube](https://www.youtube.com/watch?v=2B2Sj2vh450) · [transcript EN](/transcripts/cp0x-21/) / [RU](/transcripts/cp0x-21-ru/) |
