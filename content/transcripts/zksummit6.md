+++
title = "Account-based privacy in ZeroPool"
description = "Transcript of Igor Gulamov's zkSummit 6 talk on ZeroPool's account-based privacy: single-nullifier UTXO design, spent-intervals, and calldata-minimal private transactions."
date = 2020-11-01
updated = 2026-07-05
slug = "zksummit6"
template = "transcript.html"

[extra]
seo_title = "zkSummit 6 talk transcript — ZeroPool"
keywords = "Igor Gulamov zkSummit 6, ZeroPool account-based privacy, zkSNARK private transactions, UTXO nullifier, ZeroPool talk transcript"
event = "zkSummit 6 (online)"
lang_label = "English"
source_kind = "Conference talk"
video_url = "https://www.youtube.com/watch?v=f885LTdgJVs"
video_label = "YouTube (Zero Knowledge)"
raw_txt = "/transcripts/zksummit6.txt"
speakers = "Igor Gulamov, Host"
+++

*zkSummit 6 (online, November 2020) · "Account based privacy in ZeroPool" · [original video](https://www.youtube.com/watch?v=f885LTdgJVs) · [raw transcript for LLMs](/transcripts/zksummit6.txt)*

*Transcribed with automatic diarization and edited for readability; technical terms normalized. Speakers: **Igor Gulamov** and the session **Host**.*

---

<figure><img src="/img/transcripts/zksummit6/title.png" alt="Account based privacy in ZeroPool — title slide from Igor Gulamov's zkSummit 6 talk" loading="lazy" width="1400"><figcaption>Title slide — "Account based privacy in ZeroPool."</figcaption></figure>

**Igor Gulamov:** I'm Igor Gulamov from ZeroPool, and we're building a privacy engine for blockchains that support smart contracts — like Ethereum, NEAR, Polkadot and Waves.

One problem we set out to solve: if you use UTXO-based private transactions, you have to publish a nullifier for each input UTXO. If the nullifiers aren't collision-resistant, you can spend few bytes per nullifier, but that's risky; if you want collision resistance — which you need, because a collision means losing money, since if your nullifier is already present you can't spend the asset — you have to spend roughly twice the space. Either way it's expensive in gas and storage.

<figure><img src="/img/transcripts/zksummit6/utxo-transaction.png" alt="Account-based transaction: one input account with a single nullifier, output UTXOs and one commitment — slide from Igor Gulamov's zkSummit 6 talk" loading="lazy" width="1400"><figcaption>Account-based privacy: one input account, a single nullifier, and one output commitment.</figcaption></figure>

This is how account-based privacy works. We have one account on the input and one account on the output, and we only need to publish a nullifier for the input account. We merge all the amounts from the input UTXOs into that account and create new UTXOs on the output. The input UTXOs are considered spent because the account structure has a "spent interval" field: we increment the interval, and all UTXOs belonging to the account owner that fall inside the interval are considered spent.

<figure><img src="/img/transcripts/zksummit6/privacy-set.png" alt="Merkle tree of the privacy set with UTXO, account and out-commitment leaves — slide from Igor Gulamov's zkSummit 6 talk" loading="lazy" width="1400"><figcaption>The privacy set as a Merkle tree — only output commitments go on-chain.</figcaption></figure>

So we just publish the output commitments into our Merkle tree, and when we spend a UTXO we update the account and move the right border of the interval, and every UTXO inside the interval is considered spent. Importantly, it's enough to publish only the output commitments on-chain — not the separate account hashes and UTXO hashes — because if the receiver knows only the hashes of their data, they can build Merkle proofs and perform new transactions. So the encrypted UTXOs and accounts can be moved to cheaper storage, like history nodes and similar solutions.

<figure><img src="/img/transcripts/zksummit6/circuit-structure.png" alt="ZeroPool circuit: input UTXOs and account, output UTXOs and account, Merkle proofs, sum check — slide from Igor Gulamov's zkSummit 6 talk" loading="lazy" width="1400"><figcaption>The circuit — input/output UTXOs and accounts, Merkle proofs, a single nullifier and a sum check.</figcaption></figure>

This is the scheme of our circuit. We have the UTXO structure with three fields and the account structure, which has the interval field — in the simplest case, an interval from zero to the value; in a more complex case, a set of primitive intervals, which lets us improve the user experience. The delta-amount parameter is used for withdrawals, deposits and gas fees. The output UTXO hashes and account hashes are not public fields of our zkSNARK, but we compute a hash of the whole output structure — that's the public commitment of our transaction. There's the root of all UTXOs and accounts, the output commitment, and a single nullifier — one, because we have only one account on the input — plus a check that the sum of inputs equals the sum of outputs. With this approach we use much less storage and data per transaction than in the beta version we deployed on Ethereum.

<figure><img src="/img/transcripts/zksummit6/links.png" alt="Closing slide with links to ZeroPool resources — slide from Igor Gulamov's zkSummit 6 talk" loading="lazy" width="1400"><figcaption>Closing slide — links to the project.</figcaption></figure>

Thank you for your attention — you can read more about the project at these links.

**Host:** I don't see questions in the chat yet, so I'll encourage anyone watching to add some. But I have a question for Igor: why did you choose an optimistic rollup?

**Igor Gulamov:** Our solution was deployed on Ethereum in March 2020 — a very early experiment in private transactions for Ethereum — so we chose an existing technology, the optimistic rollup, and used it in our prototype.

**Host:** You mentioned you're also building on NEAR and Polkadot. Why work with those?

**Igor Gulamov:** Because we love Rust, and most of our source code is in Rust — smart contracts, clients, wallet code and the zkSNARKs, including our own library for building circuits, Fawkes-Crypto.
