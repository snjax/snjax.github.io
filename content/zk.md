+++
title = "Zero-knowledge engineering: privacy, delegated proving, storage"
description = "Igor Gulamov's zero-knowledge work: ZeroPool private transactions, the Fawkes-Crypto framework, shielded delegated proving and sharded storage."
date = 2026-07-04
updated = 2026-07-04
slug = "zk"
template = "longread.html"

[extra]
seo_title = "Zero-knowledge engineering"
keywords = "ZeroPool, zkSNARK, zero-knowledge proofs, private transactions, Fawkes-Crypto, Sangria folding, delegated proving, sharded storage, data availability, Igor Gulamov, snjax"
kicker = "Zero-knowledge — 2018–2024"
schema_type = "Article"
+++

**TL;DR.** Six years of zero-knowledge engineering across the full stack: a production-grade private-transaction protocol ([ZeroPool](#zeropool-private-transactions), 2019, grants from Web3 Foundation, NEAR and Waves), a Rust zkSNARK framework ([Fawkes-Crypto](#fawkes-crypto)), a construction for [cloud ZK proving over a blinded witness](#delegated-proving-shielded-sangria) (2023 — the strongest single result of the research line), and a [sharded-storage / data-availability](#storage-and-data-availability) research program (2024). 22 research topics on [ethresear.ch](https://ethresear.ch/u/snjax/activity), 5 on [zkresear.ch](https://zkresear.ch/u/snjax/activity). The Plasma-era prehistory lives on its own page: [the history-split finding](/plasma/).

## ZeroPool: private transactions {#zeropool-private-transactions}

[ZeroPool](https://zeropool.network/) is a fully private multi-blockchain transaction protocol: sender, receiver and amount are all hidden, with a common anonymity set and low fees. I founded it at ETHBoston in September 2019, where it reached the main-stage finals and took the SKALE prize (team: Igor Gulamov, Artem Vorobev, Nick Kozlov — [Devpost](https://devpost.com/software/zeropool), [demo video](https://www.youtube.com/watch?v=FE37_hiV4kQ)). Later demos: [a private transaction on Ethereum mainnet](https://www.youtube.com/watch?v=cNMzKfktATM), [ZeroPool on Substrate](https://www.youtube.com/watch?v=DQ8gbNTOP-g).

I presented ZeroPool's account-based privacy design at **zkSummit 6** (online, November 2020) — [talk recording](https://www.youtube.com/watch?v=f885LTdgJVs) on the Zero Knowledge channel. Earlier that year: a zk-private-transactions talk at **ETHDenver** and a lightning talk on the same topic at **Stanford Blockchain Week** (both February 2020), and the ZeroPool beta shown at **EthCC 3 in Paris** (March 2020) — "the final offline event before COVID-19," per [ZeroPool's blog](https://medium.com/zeropool/zeropool-november-and-december-news-77f6a9e5e752).

Technically, ZeroPool is a UTXO-based design: UTXO hashes live in calldata, the Merkle root in storage, and UTXOs plus transactions are encrypted to the receiver's public key — the design write-up is on [ethresear.ch (September 2019)](https://ethresear.ch/t/zeropool-explanation/6122), with the gas-scaling follow-up ["State of ZeroPool"](https://ethresear.ch/t/state-of-zeropool-scaling-anonymous-transactions-for-ethereum/6946) (February 2020) showing transaction costs dropping from 40k toward 15k gas with batching.

**Grants and integrations:**

- **Web3 Foundation** Open Grants Program — 63,000 DAI across two milestones; deliverables: zkSNARK circuit + cryptography library, a Substrate pallet for private transactions, and a js/wasm wallet library. [Grant application](https://github.com/w3f/Grants-Program/blob/master/applications/ZeroPool.md).
- **NEAR Foundation** — collaboration announced April 22, 2020: ["A Deep Dive into Private Transactions on NEAR"](https://www.near.org/blog/private-transactions-on-near) ([archived copy](https://web.archive.org/web/2021/https://near.org/blog/private-transactions-on-near/)); a 2023 NEAR blog overview still listed ZeroPool as active on testnet ([Medium](https://medium.com/nearprotocol/zero-knowledge-now-on-near-bd575fb3182)). Code: [zeropoolnetwork/zeropool-near](https://github.com/zeropoolnetwork/zeropool-near); I also proposed the alt_bn128 precompiles for nearcore itself ([PR #2842](https://github.com/near/nearcore/pull/2842), 2020 — the alt_bn128 host functions were later stabilized in nearcore).
- **Waves** — anonymous-transactions prototype, including a fork of the Waves node with a `groth16verify` verifier. [wavesplatform/anonymous-transactions-prototype](https://github.com/wavesplatform/anonymous-transactions-prototype).
- **Gitcoin Grants** — community quadratic funding (mentioned in the [NEAR announcement](https://www.near.org/blog/private-transactions-on-near)).

**Status, for the record:** after the 2022 OFAC sanctions in the on-chain privacy space, a business around private transactions became untenable; ZeroPool remained free, open research and libraries — no token was ever issued, no venture round was raised, grant deliverables were shipped, code stays open under [zeropoolnetwork](https://github.com/zeropoolnetwork). My later research engages the compliance question directly: the [anti-mixer privacy protocol](https://ethresear.ch/t/anti-mixer-privacy-protocol/16687) (September 2023) is a privacy design built around deanonymization and compliance concerns — privacy engineering that takes regulation seriously, not a mixer.

## Fawkes-Crypto {#fawkes-crypto}

To build ZeroPool's circuits I wrote [Fawkes-Crypto](https://ethresear.ch/t/fawkes-crypto-zksnarks-framework-from-zeropool/7201) (March 2020) — a lightweight Rust framework for building zkSNARK circuits over bellman (Groth16, BN254).

## Delegated proving: shielded Sangria {#delegated-proving-shielded-sangria}

The strongest single result of this research line: [**Running Sangria final proof in shielded mode on untrusted 3rd party prover**](https://zkresear.ch/t/running-sangria-final-proof-in-shielded-mode-on-untrusted-3rd-party-prover/133) (April 13, 2023).

The problem: ZK proving is expensive, so you want to outsource it to a cloud prover — but sending your witness to someone else's server destroys the very privacy the proof exists for. The construction: instead of running the final (expensive) proving step locally, the client — in one extra [Sangria](https://geometry.xyz/notebook/sangria-a-folding-scheme-for-plonk) folding round of only linear complexity — folds its real Plonk execution trace with a specially generated high-entropy random trace, and hands the folded trace to the untrusted prover. The post proves that for any candidate initial trace there exists a consistent blinding trace producing exactly what the prover sees, so the delegated trace reveals nothing about the original witness: the thin client does O(n) work, the heavy final proof happens in the cloud, and there are zero data leaks. Worked computations (SageMath): [snjax/sangria-delegated-zk](https://github.com/snjax/sangria-delegated-zk). This idea family — folding-based delegated and private proving — has since become an active industry theme around proving markets and client-side privacy.

All five zkresear.ch topics:

| Date | Topic | Contribution |
|---|---|---|
| Apr 10, 2023 | [Multilinear polynomial KZG10 commitment with linear pairing check](https://zkresear.ch/t/multilinear-polynomial-kgz10-commitment-with-linear-pairing-check/126) | Multilinear KZG-style commitment with a linear pairing check |
| Apr 13, 2023 | [**Running Sangria final proof in shielded mode on untrusted 3rd party prover**](https://zkresear.ch/t/running-sangria-final-proof-in-shielded-mode-on-untrusted-3rd-party-prover/133) | Cloud ZK proving over a blinded witness — see above |
| Apr 24, 2023 | [Fast Fourier inspired Sangria](https://zkresear.ch/t/fast-fourier-inspired-sangria/145) | FFT-style folding tree for Sangria |
| May 12, 2023 | [No-FFT O(N) univariate polynomial zero-check with O(log N) verifier](https://zkresear.ch/t/no-fft-o-n-univariate-polynomial-zero-check-with-o-log-n-verifier/168) | Zero-check protocol avoiding FFTs entirely |
| Sep 6, 2023 | [Minimal streaming zkVM with quasilinear prover complexity](https://zkresear.ch/t/minimal-streaming-zkvm-with-quasilinear-prover-complexity-on-the-thin-client-and-the-same-memory-complexity-as-native-execution/216) | Streaming zkVM: thin client, memory complexity of native execution |

## Storage and data availability {#storage-and-data-availability}

In 2024 the research line shifted to the data problem: how to store and prove large amounts of data with web2 costs and web3 security.

- [**Blockchain Sharded Storage: Web2 Costs and Web3 Security with Shamir Secret Sharing**](https://ethresear.ch/t/blockchain-sharded-storage-web2-costs-and-web3-security-with-shamir-secret-sharing/18881) (March 2024) — a horizontally scalable, fault-tolerant blockchain storage design (beyond petabytes) built on Shamir secret sharing, Reed–Solomon codes, FFT and zkSNARKs. Detailed [walkthrough PDF](https://zeropool.network/pdf/WriteupZeroPoolShardedStorage.pdf) (edited by Ivan Oleynikov).
- [**Minimal fully recursive zkDA rollup with sharded storage**](https://ethresear.ch/t/minimal-fully-recursive-zkda-rollup-with-sharded-storage/19020) (March 2024).
- [**Mining attacks on PoRA**](https://ethresear.ch/t/mining-attacks-on-pora-proof-of-random-access/19323) (April 2024) — security analysis of Proof-of-Random-Access consensus against the "shrink attack" (cheaper storage with equal throughput) and the "Moore attack" (technology-driven throughput advantage).
- [**Efficient data distribution with Reed–Solomon codes for sharded storage**](https://ethresear.ch/t/efficient-data-distribution-with-reed-solomon-codes-for-sharded-storage/20232) (August 2024).
- [**Using FRI for DA with optimistic correctable commitments in rollups**](https://ethresear.ch/t/using-fri-for-da-with-optimistic-correctable-commitments-in-rollups/20467) (September 2024).
- Research index: [zeropool.network/research](https://zeropool.network/research/).

I gave the "Solving Vitalik's trilemma with zk-driven DA and Storage" talk at three 2024 events: [ETHPrague 2024](https://www.youtube.com/watch?v=9wi_UUqNJq4), [ETH Belgrade 2024](https://www.youtube.com/watch?v=9mR1zHiW9tk), and [FIL Dev Summit 4, Brussels](https://www.youtube.com/watch?v=l2NsFU0gGVU).

## Where it started, and where it went

The zero-knowledge track grew out of the Plasma era — the full story of the [December 2018 history-split finding](/plasma/) explains why on-chain data availability won and privacy had to be engineered on top of it, not around it. And the security habits built while writing and reviewing circuits became the [audit record](/audits/), which in turn became [SavantChat](/ai/).
