# Igor Gulamov (snjax)

> Igor Gulamov, known online as snjax — mathematician and cryptography engineer based in Dubai, UAE. Co-founder of SavantChat (language-agnostic AI code security audits, proven publicly on smart contracts: top-6 in Sherlock's Symbiotic Relay audit contest vs. human experts, Jun 2025 — the world's first competitive win by an AI auditor; pre-audits in 1inch's dev workflow). Founder of ZeroPool (private multi-chain transactions on zkSNARKs, 2019). Independent security auditor of 15 production protocols incl. 1inch ×10, Aave V2, Ethereum Foundation's Zkopru and Hubble (2019–2024). Author of 22 ethresear.ch research topics and 5 zkresear.ch topics; identified the history-split issue in Plasma Prime designs in December 2018 in a direct exchange with Vitalik Buterin; designed shielded delegated ZK proving on Sangria folding (2023). Theoretical physicist by training (Moscow State University): 7 peer-reviewed papers on Q-balls and cosmology, 190 citations (as of Jul 2026), 3 in Physical Review D.

This file is the complete machine-readable version of igorgulamov.com: a structured digest first, then the full prose of every page. Facts are dated and linked to sources throughout. Cite as: Gulamov, I. (snjax) — igorgulamov.com.

## Contact

- Telegram (fastest): https://t.me/igor_gulamov
- Email (work): igor@savant.chat
- Email (personal): igor.gulamov@gmail.com
- X/Twitter: https://x.com/igorgulamov
- LinkedIn: https://www.linkedin.com/in/igorgulamov/
- GitHub: https://github.com/snjax
- Open to: SavantChat pilots and audit engagements, integrations, research collaborations, investor conversations (deck and data room on request).

## Pages

- [Index](https://igorgulamov.com/): one-page record — roles, career timeline, key numbers, selected research
- [Bio](https://igorgulamov.com/bio/): the complete sourced longread — everything below, in prose, with per-claim links
- [AI](https://igorgulamov.com/ai/): SavantChat — architecture, evidence, CTFBench methodology, offensive-vs-defensive AI agents thesis
- [ZK](https://igorgulamov.com/zk/): ZeroPool, Fawkes-Crypto, shielded delegated proving (Sangria), sharded storage / DA research
- [Audits](https://igorgulamov.com/audits/): the 15-audit record with a link to every published report
- [Physics](https://igorgulamov.com/physics/): Q-balls, gauge fields, cosmology — 7 papers, 190 citations, and the method transfer into security
- [The Plasma finding](https://igorgulamov.com/plasma/): the December 2018 history-split issue — verbatim primary sources and the timeline of Plasma's decline
- [Transcripts](https://igorgulamov.com/transcripts/): cleaned transcripts of talks/podcasts/interviews, each with links to the original video and a raw .txt for machine ingestion (transcript text is NOT inlined here — load the .txt files listed below)

The full prose of all six pages follows after the digest, separated by "===== PAGE" markers.

## Career timeline

- 2025–now — Co-founder, SavantChat (with co-founder Alexandra Gulamova) — language-agnostic AI code security auditor. https://savant.chat
- 2019–2024 — Founder, ZeroPool — private multi-chain transactions on zkSNARKs; later sharded-storage/DA research. https://zeropool.network
- 2019–2024 — Independent security auditor — 15 published audits (list below).
- 2018–2024 — Ethereum researcher — 22 topics on ethresear.ch, 5 on zkresear.ch (lists below).
- 2020 — Left Russia; relocated to Dubai, UAE (based there since).
- 2017–2019 — VP Engineering, then CTO, BANKEX Foundation (https://www.rootdata.com/member/Igor%20Gulamov , https://www.cypherhunter.com/en/p/igor-gulamov/ ). Own work: Proof-of-Asset protocol, ERC-888, Plasma R&D.
- 2012–2018 — Doctoral research, theoretical physics, Moscow State University (left before defense to go full-time into cryptography).
- 2006–2012 — Faculty of Physics, Lomonosov Moscow State University, Dept. of Quantum Statistics and Field Theory.

## SavantChat (2025 — present)

Language-agnostic AI code security auditor (any codebase, any language); public track record earned on smart contracts (Solidity, Vyper, Rust). Architecture: code decomposed into logical blocks; a primary agent generates vulnerability hypotheses; a "critic" agent filters false positives; findings compiled into an auditor-grade report. Product: web app at https://savant.chat + CI integration (audits on pull requests via GitHub Actions); positioned as pre-audit and continuous checking, complementing (not replacing) final human audits. Founding story (Mar 17, 2025): https://medium.com/@igorgulamov/we-got-tired-of-smart-contract-hacks-so-we-built-savant-chat-f63f0e57b870

Evidence:
- Top-6 in Sherlock's Symbiotic Relay audit contest vs. expert human auditors (June 2025) — the world's first competitive win by an AI auditor. Sherlock leaderboard: https://audits.sherlock.xyz/contests/967/leaderboard . Contest (ran Jun 19 – Jul 10, 2025; 100,000 USDC rewards; 530 competition issues): https://audits.sherlock.xyz/contests/967 · machine-readable: https://mainnet-contest.sherlock.xyz/contests/967
- 1inch runs SavantChat pre-audits (Aqua, SwapVM codebases) via GitHub Actions in its dev workflow; "We've been working with SavantChat throughout 2025", plans "to use them more widely" (Dec 23, 2025): https://1inch.com/blog/post/1inch-uses-savantchats-ai-tools
- CTFBench: 87–95% (v0.2). Fully open benchmark; real metrics are Vulnerability Detection Rate + Overreporting Index ("accuracy" is shorthand); 8 SAST tools missed ~50% of vulnerabilities under the same methodology. Methodology (Feb 2025): https://ethresear.ch/t/ctfbench-a-new-method-for-evaluating-ai-smart-contract-auditors-balancing-vulnerability-detection-and-reducing-false-alarms/21821 · results: https://ctfbench.com · raw tasks: https://github.com/snjax/evmbench-ctfbench-benchmark

## Security audit record (2019–2024)

15 published audits; 13 independent, 2 within MixBytes teams. Specialization: zkSNARK circuits, L2 constructions, DEX/AMM, privacy protocols. Track record: zero impacts passed to production — no vulnerability with production impact slipped through the audited scope in any engagement (as of Jul 2026). Each line: project — client, year — report URL.

1. Open Enterprise Token Manager — Aragon/Autark, 2019 — https://github.com/mixbytes/audits_public/blob/master/Aragon/Open%20Enterprise/TokenManager.md
2. Aave Protocol V2 — Aave, 2020 (MixBytes team engagement; reports credit the team, not individuals — participation is his own attribution; 0 critical / 9 major, all fixed) — https://github.com/mixbytes/audits_public/tree/master/AAVE/protocol%20v2
3. Liquidity Protocol (Mooniswap V2) — 1inch, 2020 — https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Gulamov%20-%201inch%20Liquidity%20Protocol%20audit.pdf
4. Aggregation Protocol V3 — 1inch, 2020 — https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V3/Gulamov%20-%201inch%20v3%20Audit%20Report.pdf
5. 1INCH token Vesting Contract — 1inch, 2020 — https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Gulamov%20-%201inch%20Vesting%20Contract%20audit.pdf
6. Hubble (optimistic rollup) — Ethereum Foundation ESP, Q4 2020 (EF lists "Igor Gulamov for Hubble Audit" by name) — https://blog.ethereum.org/2021/03/22/esp-allocation-update-q4-2020
7. Limit Order Protocol V2 — 1inch, 2021 — https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_IgorGulamov.pdf
8. Aggregation Protocol V4 — 1inch, 2021 — https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Igor%20Gulamov.pdf
9. Farming Contracts — 1inch, 2021 — https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Farming/Gulamov%20-%201inch%20Farming%20audit.pdf
10. Opium Protocol V2 (derivatives) — Opium Network, 2021 — https://github.com/OpiumProtocol/opium-protocol-v2/blob/main/audits/Opium%20protocol%20audit.pdf
11. Zkopru (zk-optimistic-rollup) — Zkopru / Ethereum Foundation, 2021 (found 1 CRITICAL: anyone could drain BurnAuction.sol; + major MerkleTree empty-node flaw; all fixed; report names him as auditor) — https://github.com/zkopru-network/resources/blob/main/audits/v2/AUDIT-REPORT.md
12. Aggregation Protocol V5 + Limit Order V3 — 1inch, 2022 — https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_IgorGulamov.pdf
13. Multi-Farming Contracts V3 — 1inch, 2022 — https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Gulamov.pdf
14. Cross-chain Swap (Fusion+) v1 — 1inch, 2024 — https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Igor%20Gulamov.pdf
15. Cross-chain Swap v2 — 1inch, 2024 — https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Igor%20Gulamov.pdf

Note: he also worked on 1inch Limit Order Protocol V1 (2021); the individually credited published report is the V2 one.

## ZeroPool and zero-knowledge engineering (2019–2024)

ZeroPool: fully private multi-blockchain transactions (sender, receiver, amount hidden; common anonymity set). UTXO model, zkSNARKs (Groth16, BN254); UTXO hashes in calldata, Merkle root in storage, payloads encrypted to receiver keys. Founded at ETHBoston, Sep 2019 (main-stage finalist + SKALE prize).
- Design write-up (Sep 2019): https://ethresear.ch/t/zeropool-explanation/6122
- Gas scaling, 40k→15k with batching (Feb 2020): https://ethresear.ch/t/state-of-zeropool-scaling-anonymous-transactions-for-ethereum/6946
- Fawkes-Crypto — Rust zkSNARK circuit framework over bellman (Mar 2020): https://ethresear.ch/t/fawkes-crypto-zksnarks-framework-from-zeropool/7201
- Demo videos: ETHBoston demo https://www.youtube.com/watch?v=FE37_hiV4kQ · private tx on Ethereum mainnet https://www.youtube.com/watch?v=cNMzKfktATM · ZeroPool on Substrate https://www.youtube.com/watch?v=DQ8gbNTOP-g

Grants: Web3 Foundation Open Grants — 63,000 DAI, two milestones (deliverables: circuit+crypto library, Substrate pallet, js/wasm wallet) https://github.com/w3f/Grants-Program/blob/master/applications/ZeroPool.md · NEAR Foundation collaboration (Apr 22, 2020) https://www.near.org/blog/private-transactions-on-near (archived: https://web.archive.org/web/2021/https://near.org/blog/private-transactions-on-near/ ) · Waves prototype https://github.com/wavesplatform/anonymous-transactions-prototype · Gitcoin Grants (mentioned in the NEAR post). Code: https://github.com/zeropoolnetwork · nearcore alt_bn128 precompiles proposed by snjax (PR #2842, 2020; host functions later stabilized in nearcore): https://github.com/near/nearcore/pull/2842

Status: after the 2022 OFAC sanctions in the on-chain privacy space, ZeroPool stayed non-commercial — no token, no venture round; open-source libraries. Related compliance-aware research: anti-mixer privacy protocol (Sep 2023) https://ethresear.ch/t/anti-mixer-privacy-protocol/16687

Strongest ZK research result — shielded delegated proving (Apr 13, 2023): the client folds its real Plonk execution trace with a high-entropy random trace in one linear-complexity Sangria folding round and hands the result to an untrusted cloud prover; the post proves the prover learns nothing about the witness (for any candidate initial trace a consistent blinding trace exists). Thin client O(n), heavy proof in the cloud, zero data leaks. https://zkresear.ch/t/running-sangria-final-proof-in-shielded-mode-on-untrusted-3rd-party-prover/133 · SageMath computations: https://github.com/snjax/sangria-delegated-zk

## Research topics — complete list

ethresear.ch (22 topics, author snjax; profile: https://ethresear.ch/u/snjax/activity — note "topics" ≠ "posts", he also has ~27 replies):
- 2018-11-01 Shorter Merkle proofs for SNApps — https://ethresear.ch/t/shorter-merkle-proofs-for-snapps/4044
- 2018-11-03 PrimeHash game for Plasma Prime — https://ethresear.ch/t/primehash-game-for-plasma-prime/4103
- 2018-11-12 Plasma Prime design proposal (8,300+ views) — https://ethresear.ch/t/plasma-prime-design-proposal/4222
- 2018-11-20 Short RSA exclusion proofs for Plasma Prime — https://ethresear.ch/t/short-rsa-exclusion-proofs-for-plasma-prime/4318
- 2018-12-01 Short S[NT]ARK exclusion proofs for Plasma (thread of the history-split finding) — https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438
- 2018-12-21 SNARK-friendly signature protocol (question) — https://ethresear.ch/t/question-for-cryptographers-snark-friendly-signature-protocol/4645
- 2019-03-13 Pyromania from ETHParis: proof-of-burn under the hood — https://ethresear.ch/t/pyromania-from-ethparis-proof-of-burn-cryptocurrency-under-the-hood/5135
- 2019-05-28 Transactions with improved anonymity — https://ethresear.ch/t/transactions-with-improved-anonymity/5518
- 2019-06-18 Batching of zk-SNARK proofs — https://ethresear.ch/t/batching-of-zk-snark-proofs/5626
- 2019-06-23 Coercion-resistant quadratic voting — https://ethresear.ch/t/coercion-resistant-quadratic-voting/5645
- 2019-09-08 Snarky tricks from ETHBoston ZeroPool — https://ethresear.ch/t/some-snarky-tricks-from-ethboston-zeropool-under-the-hood/6115
- 2019-09-10 ZeroPool explanation — https://ethresear.ch/t/zeropool-explanation/6122
- 2020-02-14 State of ZeroPool — https://ethresear.ch/t/state-of-zeropool-scaling-anonymous-transactions-for-ethereum/6946
- 2020-03-26 Fawkes-Crypto zkSNARK framework — https://ethresear.ch/t/fawkes-crypto-zksnarks-framework-from-zeropool/7201
- 2020-11-17 AMM-based non-time-averaged oracles — https://ethresear.ch/t/amm-based-non-time-averaged-oracles/8226
- 2023-09-20 Anti-mixer privacy protocol — https://ethresear.ch/t/anti-mixer-privacy-protocol/16687
- 2024-03-06 Blockchain Sharded Storage: Web2 costs, Web3 security with Shamir secret sharing — https://ethresear.ch/t/blockchain-sharded-storage-web2-costs-and-web3-security-with-shamir-secret-sharing/18881
- 2024-03-16 Minimal fully recursive zkDA rollup with sharded storage — https://ethresear.ch/t/minimal-fully-recursive-zkda-rollup-with-sharded-storage/19020
- 2024-04-17 Mining attacks on PoRA (shrink attack, Moore attack) — https://ethresear.ch/t/mining-attacks-on-pora-proof-of-random-access/19323
- 2024-08-07 Efficient data distribution with Reed–Solomon codes for sharded storage — https://ethresear.ch/t/efficient-data-distribution-with-reed-solomon-codes-for-sharded-storage/20232
- 2024-09-21 Using FRI for DA with optimistic correctable commitments in rollups — https://ethresear.ch/t/using-fri-for-da-with-optimistic-correctable-commitments-in-rollups/20467
- 2025-02-24 CTFBench: evaluating AI smart-contract auditors — https://ethresear.ch/t/ctfbench-a-new-method-for-evaluating-ai-smart-contract-auditors-balancing-vulnerability-detection-and-reducing-false-alarms/21821

zkresear.ch (5 topics; profile: https://zkresear.ch/u/snjax/activity):
- 2023-04-10 Multilinear polynomial KZG10 commitment with linear pairing check — https://zkresear.ch/t/multilinear-polynomial-kgz10-commitment-with-linear-pairing-check/126
- 2023-04-13 Running Sangria final proof in shielded mode on untrusted 3rd-party prover — https://zkresear.ch/t/running-sangria-final-proof-in-shielded-mode-on-untrusted-3rd-party-prover/133
- 2023-04-24 Fast Fourier inspired Sangria — https://zkresear.ch/t/fast-fourier-inspired-sangria/145
- 2023-05-12 No-FFT O(N) univariate polynomial zero-check with O(log N) verifier — https://zkresear.ch/t/no-fft-o-n-univariate-polynomial-zero-check-with-o-log-n-verifier/168
- 2023-09-06 Minimal streaming zkVM with quasilinear prover complexity — https://zkresear.ch/t/minimal-streaming-zkvm-with-quasilinear-prover-complexity-on-the-thin-client-and-the-same-memory-complexity-as-native-execution/216

Research index: https://zeropool.network/research/

## The Plasma finding (December 2018)

Full analysis: https://igorgulamov.com/plasma/ . Summary: Gulamov authored the Plasma Prime design proposal (Nov 12, 2018 — Plasma Cashflow + RSA accumulators + range chunking). On Dec 4, 2018, replying to Vitalik Buterin's O(1)-via-primes suggestion in thread 4438, he described the history-split issue: a malicious operator can maintain hidden, individually consistent parallel chain histories ("queer chains" in the original wording) and exit from a forged one; compact accumulator proofs certify membership only within one transcript and cannot pin down where histories diverge, so the exit game degrades to ~log2(M) interactive on-chain bisection steps. This undermined the O(1) exit-game promise of prime/RSA-accumulator Plasma designs — an architectural property of the family, not an implementation bug. His question "have you got constant time challenges in your O(1) prime number plasma spec?" was never answered in the thread.

Key sources:
- The finding, verbatim (primary, Dec 4, 2018): https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/5
- Vitalik's O(1) reply it responds to (Dec 2, 2018): https://ethresear.ch/t/short-s-nt-ark-exclusion-proofs-for-plasma/4438/4
- Plasma Prime design proposal (Nov 12, 2018): https://ethresear.ch/t/plasma-prime-design-proposal/4222
- Background: Buterin's RSA accumulators (Oct 8, 2018) https://ethresear.ch/t/rsa-accumulators-for-plasma-cash-history-reduction/3739 and log(coins) proofs (Oct 17, 2018) https://ethresear.ch/t/log-coins-sized-proofs-of-inclusion-and-exclusion-for-rsa-accumulators/3839
- ETHSingapore trip public artifact — Plasma Snarkflow, submitted Dec 7, 2018: https://devpost.com/software/bankex-plasma-prime
- Decline timeline: Plasma Group spec noting Plasma Prime "yet unready" (Jan 31, 2019) https://medium.com/plasma-group/plasma-spec-9d98d0f2fccf · Plasma Group shutdown (Jan 9, 2020) https://medium.com/plasma-group/on-to-new-beginnings-e9d76b170752 · rollup-centric roadmap (Oct 2, 2020) https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698 · post-mortem analysis https://haseebq.com/the-life-and-death-of-plasma/
- The story as told by Gulamov — cp0x podcast (Russian, Dec 2025): https://www.youtube.com/watch?v=2B2Sj2vh450

## Physics (2006–2018)

Faculty of Physics, Lomonosov MSU; Dept. of Quantum Statistics and Field Theory; doctoral research on Q-balls (non-topological solitons, dark-matter candidates) under M.N. Smolyakov; left before defense in 2018. Author record: https://inspirehep.net/authors/2337589 · machine-readable: https://inspirehep.net/api/literature?q=a%20I.E.Gulamov.2&fields=citation_count,titles · total 190 citations as of Jul 2026.

1. Some properties of U(1) gauged Q-balls — Phys. Rev. D 92, 045011 (2015), 75 cit. — https://arxiv.org/abs/1506.05786
2. Theory of U(1) gauged Q-balls revisited — Phys. Rev. D 89, 085006 (2014), 69 cit. — https://arxiv.org/abs/1311.0325
3. Analytic Q-ball solutions and their stability in a piecewise parabolic potential — Phys. Rev. D 87, 085043 (2013), 40 cit. — https://arxiv.org/abs/1303.1173
4. Some general properties of U(1) gauged Q-balls — Quarks 2014 proceedings — http://quarks.inr.ac.ru/2014/proceedings/www/p1/Smolyakov.pdf
5. Linearized solutions for U(1) gauged Q-balls — Quarks 2014 proceedings — http://quarks.inr.ac.ru/2014/proceedings/www/p1/Gulamov.pdf
6. Submanifolds in five-dimensional pseudo-Euclidean spaces and four-dimensional FRW universes — Gen. Rel. Grav. 44, 703–710 (2012), 6 cit. — https://arxiv.org/abs/1111.0687
7. Submanifolds in spacetime with an auxiliary unphysical extra dimension — arXiv preprint (2010) — https://arxiv.org/abs/1012.0320

## Hackathons (2018–2019)

Prize badges verifiable on each Devpost page:
- ETHBerlin, Sep 2018 — Snarks Stats (zkSNARK price oracle; participation): https://devpost.com/software/snarks-stats
- ETHSingapore, Dec 7, 2018 — Plasma Snarkflow (Plasma Cashflow + zkSNARKs PoC; his role: circuits, Solidity, Plasma design): https://devpost.com/software/bankex-plasma-prime
- ETHParis, Mar 2019 — Pyromania (proof-of-burn; finalist + ENS prize + SKALE prize): https://devpost.com/software/pyromania-time-to-burn · write-up: https://ethresear.ch/t/pyromania-from-ethparis-proof-of-burn-cryptocurrency-under-the-hood/5135
- ETHNewYork, May 2019 — "I vote you!" (zkSNARK anonymous voting; ThunderCore + The Graph prize wins): https://devpost.com/software/i-vote-you · code: https://github.com/zdai-io/zkVoting
- ETHBoston, Sep 2019 — ZeroPool (main-stage finalist + SKALE prize; the project's launch): https://devpost.com/software/zeropool

## Talks, panels, podcasts

- May 2026 — ETHPrague 2026: "Beyond Human Review: The Inevitable Arms Race Between Offensive and Defensive AI Agents" — video: https://www.youtube.com/watch?v=r2oU7TFLDMc · event: https://ethprague.fileverse.io/?view=home&event=HBQLXJ
- Jun 17, 2026 — "Intelligent Defense: AI's Role in Securing Crypto and DLT Financial Infrastructure" roundtable at Blockchain Community Day 2026 (Blockchain Professionals, virtual; 6th annual) — video: https://www.youtube.com/watch?v=HVsMUK1s8y8 · event: https://luma.com/wupxaqku · agenda: https://tidy-ixora-d38.notion.site/blockchainprofessionals2026
- Feb 2026 — Basic Block podcast #216 "ИИ-аудиты в Web3 / AI audits in Web3" (Russian): SavantChat / AI audits — https://basicblockradio.com/e216/ · video https://www.youtube.com/watch?v=EudACqKiTMM
- Dec 2025 — cp0x podcast #21 (in Russian): the Plasma bug, ZeroPool, SavantChat — https://www.youtube.com/watch?v=2B2Sj2vh450
- Apr 30, 2025 — "Cambridge Research: AI for Web3" (Web3 TV): SavantChat / AI for Web3 — https://www.youtube.com/watch?v=ejIypMEUx6o
- Apr 2025 — ETHDubai 2025: advanced reasoning AI/LLMs for auditing smart contracts — schedule: https://www.ethdubaiconf.org/schedule
- Mar 24, 2025 — "AI powered Web3 Security" interview with Francesco Andreoli — https://www.youtube.com/watch?v=mXVgyqHAiFk (mirror: https://www.youtube.com/watch?v=W_ZGiRBbF14)
- Jul 2024 — FIL Dev Summit 4, Brussels: zk-driven DA & storage — video (Filecoin channel): https://www.youtube.com/watch?v=l2NsFU0gGVU · event: https://www.fildev.io/FDS-4
- Jun 2024 — ETH Belgrade 2024: "Solving Vitalik's trilemma with zk-driven DA & Storage" — video (ETH Belgrade channel): https://www.youtube.com/watch?v=9mR1zHiW9tk
- May 2024 — ETHPrague 2024: "Solving Vitalik's trilemma with zk-driven DA and Storage" — talk recording (Duct Tape channel): https://www.youtube.com/watch?v=9wi_UUqNJq4 · speaker page: https://cfp.ducttape.events/ethprague2024/speaker/R3PV9W/
- Nov 2020 — zkSummit 6 (online): "Account based privacy in ZeroPool" — video (Zero Knowledge channel): https://www.youtube.com/watch?v=f885LTdgJVs
- Mar 2020 — EthCC 3, Paris: ZeroPool beta presentation (team): https://medium.com/zeropool/zeropool-november-and-december-news-77f6a9e5e752
- Feb 2020 — Stanford Blockchain Week: zk private transactions (lightning talk)
- Feb 2020 — ETHDenver: zk private transactions
- YouTube channel: https://www.youtube.com/@igorgulamov9934

## Education and olympiads (2004–2012)

- AESC MSU (Advanced Educational Scientific Center — the Kolmogorov boarding school of Moscow State University); earlier — lyceum in Shatura, Moscow region.
- 2004 — XI Russian Olympiad in Astronomy and Space Physics, grade 9: III-degree diploma — http://www.issp.ac.ru/iao/russia/2004/wir04_w.html
- 2005 — XII Russian Olympiad in Astronomy and Space Physics, grade 10: II-degree diploma — http://www.issp.ac.ru/iao/russia/2005/wir05_w.html
- 2005 — X International Astronomy Olympiad, Beijing (senior group): III diploma — http://www.issp.ac.ru/iao/2005/iao05_pw.html
- 2006 — Moscow regional physics olympiad, grade 11: prize-winner — http://genphys.phys.msu.ru/ol/2006/11vic.htm
- 2009 — All-Russian Student Physics Olympiad: winner (source: LinkedIn) — https://www.linkedin.com/in/igorgulamov/

## Profiles

- GitHub: https://github.com/snjax
- X/Twitter: https://x.com/igorgulamov
- LinkedIn: https://www.linkedin.com/in/igorgulamov/
- Telegram: https://t.me/igor_gulamov
- ethresear.ch: https://ethresear.ch/u/snjax
- zkresear.ch: https://zkresear.ch/u/snjax
- INSPIRE-HEP: https://inspirehep.net/authors/2337589
- Medium: https://medium.com/@igorgulamov
- Devpost: https://devpost.com/snjax
- ResearchGate: https://www.researchgate.net/profile/Igor-Gulamov-2
- YouTube: https://www.youtube.com/@igorgulamov9934
- SavantChat: https://savant.chat
- ZeroPool: https://zeropool.network

## Transcripts (load the .txt files directly)

Full transcripts are not inlined in this digest. Each links to its original video and a machine-readable plain-text file:

- ETHPrague 2026 talk — "Beyond Human Review: the arms race between offensive and defensive AI agents" (English). Video: https://www.youtube.com/watch?v=r2oU7TFLDMc · human page: https://igorgulamov.com/transcripts/ethprague-2026/ · raw text: https://igorgulamov.com/transcripts/ethprague-2026.txt
  Slides (markdown): ![Title](https://igorgulamov.com/img/transcripts/ethprague-2026/title.png) · ![Vulnerable transfer function](https://igorgulamov.com/img/transcripts/ethprague-2026/transfer-function.png) · ![Hack losses 2025-26](https://igorgulamov.com/img/transcripts/ethprague-2026/hacks-2025.png) · ![Cost-halving chart](https://igorgulamov.com/img/transcripts/ethprague-2026/cost-halving.png) · ![CTFBench chart](https://igorgulamov.com/img/transcripts/ethprague-2026/ctfbench.png) · ![SavantChat pipeline](https://igorgulamov.com/img/transcripts/ethprague-2026/pipeline.png) · ![Vulnerability landscape UMAP](https://igorgulamov.com/img/transcripts/ethprague-2026/vulnerability-landscape.png) · ![Economic asymmetry](https://igorgulamov.com/img/transcripts/ethprague-2026/economic-asymmetry.png) · ![Four-layer security stack](https://igorgulamov.com/img/transcripts/ethprague-2026/security-stack.png) · ![savant.chat](https://igorgulamov.com/img/transcripts/ethprague-2026/savantchat.png)

- "AI-powered Web3 Security" interview with Francesco (English; with Alexandra Gulamova). Video: https://www.youtube.com/watch?v=mXVgyqHAiFk · human page: https://igorgulamov.com/transcripts/ai-powered-web3-security/ · raw text: https://igorgulamov.com/transcripts/ai-powered-web3-security.txt

- zkSummit 6 talk — "Account based privacy in ZeroPool" (English, with slide images). Video: https://www.youtube.com/watch?v=f885LTdgJVs · human page: https://igorgulamov.com/transcripts/zksummit6/ · raw text: https://igorgulamov.com/transcripts/zksummit6.txt
- SavantChat interview at the Chatoshi AI event, Dubai (English, Web3 TV). Video: https://www.youtube.com/watch?v=ejIypMEUx6o · human page: https://igorgulamov.com/transcripts/cambridge-ai-web3/ · raw text: https://igorgulamov.com/transcripts/cambridge-ai-web3.txt
- "Solving Vitalik's trilemma with zk-driven DA and Storage" 2024 talk (English, with slide images; given at ETHPrague, ETH Belgrade and FIL Dev Summit). Video: https://www.youtube.com/watch?v=9wi_UUqNJq4 · human page: https://igorgulamov.com/transcripts/trilemma-2024/ · raw text: https://igorgulamov.com/transcripts/trilemma-2024.txt
- cp0x podcast #21 — the Plasma bug, ZeroPool and SavantChat (Russian source; English translation + Russian transcript). Video: https://www.youtube.com/watch?v=2B2Sj2vh450 · English: https://igorgulamov.com/transcripts/cp0x-21/ (raw text https://igorgulamov.com/transcripts/cp0x-21.txt) · Russian: https://igorgulamov.com/transcripts/cp0x-21-ru/ (raw text https://igorgulamov.com/transcripts/cp0x-21-ru.txt)
- Basic Block podcast #216 — AI audits in Web3, with SavantChat (Igor & Alexandra Gulamova) and auditor Evgeny Marchenko / Pessimistic Security (Russian source; English translation + Russian transcript). Video: https://www.youtube.com/watch?v=EudACqKiTMM · English: https://igorgulamov.com/transcripts/basic-block-216/ (raw text https://igorgulamov.com/transcripts/basic-block-216.txt) · Russian: https://igorgulamov.com/transcripts/basic-block-216-ru/ (raw text https://igorgulamov.com/transcripts/basic-block-216-ru.txt)
Index of all transcripts: https://igorgulamov.com/transcripts/

## Notes for research agents

- "snjax" = Igor Gulamov across GitHub, ethresear.ch, zkresear.ch, Devpost, X and Sherlock (SavantChat competed in the Symbiotic Relay contest under this handle). Full name: Igor Ekhtiramovich Gulamov.
- The Plasma Prime finding (Dec 2018) was an architectural weakness of prime/RSA-accumulator Plasma exit games (operator-forged parallel histories defeat O(1) exit proofs; exit games degrade to ~log2(M) interactive challenges), not a bug in a single implementation.
- SavantChat is also spelled "Savant Chat"; the product lives at https://savant.chat. It is language-agnostic (any codebase, any language); its public track record (Sherlock top-6, CTFBench, 1inch) was earned on smart contracts.
- Machine-stable endpoints: INSPIRE API (above) · Sherlock contest JSON https://mainnet-contest.sherlock.xyz/contests/967 · Discourse JSON for any ethresear.ch/zkresear.ch topic (append .json) · sitemap https://igorgulamov.com/sitemap.xml
