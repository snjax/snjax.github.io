+++
title = "The audit record, 2019–2024"
description = "15 published security audits of production DeFi and zero-knowledge protocols by Igor Gulamov (snjax): 10 for 1inch, Aave V2, Opium V2, and Ethereum Foundation projects Zkopru and Hubble. Every row links to the exact published report."
date = 2026-07-03
updated = 2026-07-04
slug = "audits"
template = "longread.html"

[extra]
kicker = "Security audits — track record"
schema_type = "Article"
+++

Between 2019 and 2024 I performed **15 published audits** of production DeFi and zero-knowledge protocols — 13 as an independent auditor, 2 within [MixBytes](https://github.com/mixbytes/audits_public) teams. Specialization: zkSNARK circuits, L2 constructions (rollups, Plasma), DEX/AMM protocols, privacy solutions. Every row cites the exact published report [n]; the same list repeats as plain URLs in [References](#references). This practice is what eventually became [SavantChat](/ai/) — the AI auditor I co-founded in 2025.

**Zero impacts passed to production.** Across all of the audits below, no vulnerability with production impact slipped through the audited scope — none of these protocols suffered an exploit in code I reviewed (as of July 2026).

## The record

| # | Project | Client | Year | Report |
|---|---|---|---|---|
| 1 | Open Enterprise Token Manager | Aragon / Autark | 2019 | [[1]](https://github.com/mixbytes/audits_public/blob/master/Aragon/Open%20Enterprise/TokenManager.md) |
| 2 | Aave Protocol V2 | Aave | 2020 | [[2]](https://github.com/mixbytes/audits_public/tree/master/AAVE/protocol%20v2) |
| 3 | Liquidity Protocol (Mooniswap V2) | 1inch | 2020 | [[3]](https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Gulamov%20-%201inch%20Liquidity%20Protocol%20audit.pdf) |
| 4 | Aggregation Protocol V3 | 1inch | 2020 | [[4]](https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V3/Gulamov%20-%201inch%20v3%20Audit%20Report.pdf) |
| 5 | 1INCH token Vesting Contract | 1inch | 2020 | [[5]](https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Gulamov%20-%201inch%20Vesting%20Contract%20audit.pdf) |
| 6 | Hubble — optimistic rollup | Ethereum Foundation ESP | Q4 2020 | [[6]](https://blog.ethereum.org/2021/03/22/esp-allocation-update-q4-2020) |
| 7 | Limit Order Protocol V2 | 1inch | 2021 | [[7]](https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_IgorGulamov.pdf) |
| 8 | Aggregation Protocol V4 (Router v4) | 1inch | 2021 | [[8]](https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Igor%20Gulamov.pdf) |
| 9 | Farming Contracts | 1inch | 2021 | [[9]](https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Farming/Gulamov%20-%201inch%20Farming%20audit.pdf) |
| 10 | Opium Protocol V2 (derivatives) | Opium Network | 2021 | [[10]](https://github.com/OpiumProtocol/opium-protocol-v2/blob/main/audits/Opium%20protocol%20audit.pdf), [docs](https://docs.opium.network/security-and-audits/audit) |
| 11 | Zkopru — zk-optimistic-rollup | Zkopru / Ethereum Foundation | 2021 | [[11]](https://github.com/zkopru-network/resources/blob/main/audits/v2/AUDIT-REPORT.md) |
| 12 | Aggregation Protocol V5 + Limit Order V3 | 1inch | 2022 | [[12]](https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_IgorGulamov.pdf) |
| 13 | Multi-Farming Contracts V3 | 1inch | 2022 | [[13]](https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Gulamov.pdf) |
| 14 | Cross-chain Swap (Fusion+) v1 | 1inch | 2024 | [[14]](https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Igor%20Gulamov.pdf) |
| 15 | Cross-chain Swap v2 | 1inch | 2024 | [[15]](https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Igor%20Gulamov.pdf) |

## Highlights

- **Zkopru (2021).** A privacy L2 supported by the Ethereum Foundation, combining zk-SNARKs with an optimistic rollup. I found **1 critical** issue — anyone could drain the balance from the coordinator auction contract (`BurnAuction.sol`) — plus a major flaw in empty-node computation in `MerkleTree.sol`. All fixed before release. The published report carries my name as the auditor [[11]](https://github.com/zkopru-network/resources/blob/main/audits/v2/AUDIT-REPORT.md).
- **1inch (2020–2024), ten published engagements.** Aggregation Protocol V3 through V5, the Liquidity Protocol (Mooniswap V2 — AMM with virtual balances for front-running protection), Limit Order Protocol V2–V3, the 1INCH token vesting contract, farming and multi-farming contracts, and — in 2024 — the Cross-chain Swap (Fusion+) v1 and v2 protocols. Each report PDF carries my name in the [official 1inch audits repository](https://github.com/1inch/1inch-audits). (I also worked on Limit Order Protocol V1 in 2021; the individually credited report published in the repo is the V2 one.) The relationship continued into the AI era: since December 2025, [1inch runs SavantChat pre-audits in its development workflow](https://1inch.com/blog/post/1inch-uses-savantchats-ai-tools).
- **Aave Protocol V2 (2020).** Joined the MixBytes team as an independent expert for the audit of one of the largest lending protocols: lending/borrowing contracts, flash loans, liquidation logic. 0 critical, 9 major findings, all resolved by the team. [Report](https://github.com/mixbytes/audits_public/tree/master/AAVE/protocol%20v2).
- **Hubble (Q4 2020).** Optimistic-rollup hub audited under an Ethereum Foundation Ecosystem Support Program grant — the EF's allocation update lists "Igor Gulamov for Hubble Audit" by name [[6]](https://blog.ethereum.org/2021/03/22/esp-allocation-update-q4-2020).

## How I audit

The method has stayed the same since the physics years: write down the model, find the invariants, then hunt for the perturbation that breaks them. In smart contracts that means reconstructing the protocol's intended state machine from the code, enumerating the conserved quantities (balances, shares, priorities, roots), and systematically attacking every place the implementation lets an adversary decouple them. zkSNARK circuits get the same treatment at the constraint level — under-constrained signals are the circuit world's equivalent of a broken invariant. Since 2025 this method is encoded in [SavantChat](/ai/): a hypothesis-generating agent plus an adversarial critic, the same loop I ran by hand for six years.

## References

Numbered citations used in the table above — plain URLs for machine verification:

1. Open Enterprise Token Manager — Aragon / Autark, 2019. <https://github.com/mixbytes/audits_public/blob/master/Aragon/Open%20Enterprise/TokenManager.md>
2. Aave Protocol V2 — Aave, 2020. <https://github.com/mixbytes/audits_public/tree/master/AAVE/protocol%20v2>
3. Liquidity Protocol (Mooniswap V2) — 1inch, 2020. <https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Gulamov%20-%201inch%20Liquidity%20Protocol%20audit.pdf>
4. Aggregation Protocol V3 — 1inch, 2020. <https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V3/Gulamov%20-%201inch%20v3%20Audit%20Report.pdf>
5. 1INCH token Vesting Contract — 1inch, 2020. <https://github.com/1inch/1inch-audits/blob/master/Vesting%20Contract/Gulamov%20-%201inch%20Vesting%20Contract%20audit.pdf>
6. Hubble — Ethereum Foundation ESP, Q4 2020. <https://blog.ethereum.org/2021/03/22/esp-allocation-update-q4-2020>
7. Limit Order Protocol V2 — 1inch, 2021. <https://github.com/1inch/1inch-audits/blob/master/Limit%20Order%20Protocol%20V2/1Inch%20Limit%20Order%20Protocol_IgorGulamov.pdf>
8. Aggregation Protocol V4 — 1inch, 2021. <https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Protocol%20V4/1inch%20Aggregation%20Router%20v4%20Audit_Igor%20Gulamov.pdf>
9. Farming Contracts — 1inch, 2021. <https://github.com/1inch/1inch-audits/blob/master/Liquidity%20Protocol/Farming/Gulamov%20-%201inch%20Farming%20audit.pdf>
10. Opium Protocol V2 — Opium Network, 2021. <https://github.com/OpiumProtocol/opium-protocol-v2/blob/main/audits/Opium%20protocol%20audit.pdf>
11. Zkopru — Zkopru / Ethereum Foundation, 2021. <https://github.com/zkopru-network/resources/blob/main/audits/v2/AUDIT-REPORT.md>
12. Aggregation Protocol V5 + Limit Order V3 — 1inch, 2022. <https://github.com/1inch/1inch-audits/blob/master/Aggregation%20Pr.%20V5%20and%20Limit%20Order%20Pr.V3/1inch%20Aggregation%20Router%20V5_IgorGulamov.pdf>
13. Multi-Farming Contracts V3 — 1inch, 2022. <https://github.com/1inch/1inch-audits/blob/master/Multi-Farming%20Contracts%20V3/1inch%20Multi-Farming%20Contracts%20V3_Gulamov.pdf>
14. Cross-chain Swap (Fusion+) v1 — 1inch, 2024. <https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-swap-v1-Igor%20Gulamov.pdf>
15. Cross-chain Swap v2 — 1inch, 2024. <https://github.com/1inch/1inch-audits/blob/master/Cross-chain%20Protocol/1inch-cross-chain-v2-Igor%20Gulamov.pdf>
