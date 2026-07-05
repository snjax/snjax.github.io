+++
title = "AI that audits code: SavantChat and the security arms race"
description = "SavantChat, the AI code-security auditor co-founded by Igor Gulamov — its Sherlock top-6 win, CTFBench, 1inch pre-audits and how it works."
date = 2026-07-04
updated = 2026-07-04
slug = "ai"
template = "longread.html"

[extra]
seo_title = "AI code audits by SavantChat"
keywords = "SavantChat, AI code audit, AI smart contract audit, Igor Gulamov, Sherlock audit contest, CTFBench, 1inch security, AI security auditor, offensive defensive AI agents, LLM code review"
kicker = "SavantChat — AI code security"
schema_type = "Article"
+++

**TL;DR.** [SavantChat](https://savant.chat) is an AI-powered security auditor for code. I co-founded it with Alexandra Gulamova in early 2025 after [six years of auditing production protocols by hand](/audits/). It made its name on smart contracts — Solidity, Vyper, Rust — where all of its public benchmarks were earned; the pipeline itself is fully language-agnostic and audits any codebase in any language. Placed top-6 against expert human auditors in Sherlock's Symbiotic Relay contest (June 2025) — the world's first competitive win by an AI auditor; runs pre-audits inside 1inch's development workflow since December 2025.

## Why we built it

After watching project after project get drained by vulnerabilities that a careful reviewer would have caught — and after two decades of doing that careful review myself, first as a physicist, then as a [hands-on auditor](/audits/) — the conclusion was simple: careful review does not scale in humans, and it has to. The founding story is in my article ["We Got Tired of Smart Contract Hacks, So We Built Savant Chat"](https://medium.com/@igorgulamov/we-got-tired-of-smart-contract-hacks-so-we-built-savant-chat-f63f0e57b870) (March 17, 2025).

## How it works

The architecture mirrors how a strong human audit team works: the code is decomposed into logical blocks; a primary AI agent generates vulnerability hypotheses; a separate "critic" agent attacks those hypotheses and filters false positives; the surviving findings are compiled into a report with locations, impact and fixes. It is not pattern scanning — it is hypothesis-driven review that runs 24/7 and costs a fraction of a human team's time. It is the same loop I ran by hand across [15 published audits](/audits/), encoded.

**What customers get:** a web app at [savant.chat](https://savant.chat) plus CI integration — audits run on pull requests via GitHub Actions, so security review happens where developers already work. Teams use it for pre-audits before human review and for continuous checks during development; it complements, not replaces, a final human audit. For customer references, benchmark raw data and the deck — [contact me](/#contact).

## The evidence

- **Top-6 in Sherlock's Symbiotic Relay audit contest** ([official leaderboard](https://audits.sherlock.xyz/contests/967/leaderboard); June 19 – July 10, 2025, 100,000 USDC rewards, 530 competition issues) — the world's first competitive win by an AI auditor, competing directly against expert human auditors on a live codebase.
- **87–95% on CTFBench (v0.2)** — see the benchmark section below.
- **1inch runs SavantChat pre-audits in its development workflow** — 1inch's own words, December 23, 2025: "We've been working with SavantChat throughout 2025," with pre-audits of the Aqua and SwapVM codebases running through GitHub Actions on pull requests, and plans "to use them more widely, including for the Aqua liquidity protocol." Source: [1inch blog](https://1inch.com/blog/post/1inch-uses-savantchats-ai-tools). There is a personal loop here: I audited [ten 1inch protocol releases by hand in 2020–2024](/audits/) — now SavantChat runs the automated first pass in parts of that same workflow.

## CTFBench: measuring AI auditors honestly

Benchmarks for AI security tools have a systematic bias: a tool that spams findings looks great on detection and terrible in practice. [CTFBench](https://ethresear.ch/t/ctfbench-a-new-method-for-evaluating-ai-smart-contract-auditors-balancing-vulnerability-detection-and-reducing-false-alarms/21821) (published February 2025) measures two axes at once: **Vulnerability Detection Rate** (did you find the real bug?) and **Overreporting Index** (how much noise did you produce per real finding?). "Accuracy" is shorthand for the combination. In the same methodology, a set of 8 traditional SAST tools missed roughly half of the vulnerabilities.

Everything is open: [methodology](https://ethresear.ch/t/ctfbench-a-new-method-for-evaluating-ai-smart-contract-auditors-balancing-vulnerability-detection-and-reducing-false-alarms/21821) · [results site](https://ctfbench.com) · [raw tasks](https://github.com/snjax/evmbench-ctfbench-benchmark). SavantChat scores 87–95% (v0.2); independent reproduction is welcome — that is the point of publishing the tasks.

## The arms race: offensive vs. defensive AI agents

The same models that audit code can attack it. My working thesis — presented at [ETHPrague 2026](https://ethprague.fileverse.io/?view=home&event=HBQLXJ) as "Beyond Human Review: The Inevitable Arms Race Between Offensive and Defensive AI Agents" ([full recording](https://www.youtube.com/watch?v=r2oU7TFLDMc); [transcript](/transcripts/ethprague-2026/) · [raw .txt](/transcripts/ethprague-2026.txt)) — is that once vulnerability discovery is cheap for attackers, continuous AI-side defense stops being a productivity tool and becomes table stakes: the defense has to run at machine speed because the offense already does. I discussed the same theme at [ETHDubai 2025](https://www.ethdubaiconf.org/schedule) (advanced reasoning AI/LLMs for auditing smart contracts) and on the ["Intelligent Defense" roundtable](https://www.youtube.com/watch?v=HVsMUK1s8y8) on AI's role in securing crypto and DLT financial infrastructure at [Blockchain Community Day 2026](https://luma.com/wupxaqku) — Blockchain Professionals' sixth annual virtual conference (June 2026).

Interviews on the topic: ["AI powered Web3 Security" with Francesco Andreoli](https://www.youtube.com/watch?v=mXVgyqHAiFk) (March 24, 2025; [transcript](/transcripts/ai-powered-web3-security/)) · ["Cambridge Research: AI for Web3"](https://www.youtube.com/watch?v=ejIypMEUx6o) (Web3 TV, April 30, 2025) · [cp0x podcast #21](https://www.youtube.com/watch?v=2B2Sj2vh450) (December 2025, in Russian — SavantChat, the ZeroPool story, and [the Plasma finding](/plasma/); [English transcript](/transcripts/cp0x-21/)) · [Basic Block podcast #216 "AI audits in Web3"](https://basicblockradio.com/e216/) (February 2026, in Russian).

## Sources

| Claim | Source |
|---|---|
| Symbiotic Relay contest, dates, 100k USDC pool | [audits.sherlock.xyz/contests/967](https://audits.sherlock.xyz/contests/967), [machine-readable](https://mainnet-contest.sherlock.xyz/contests/967) |
| Top-6 placement | [official Sherlock leaderboard](https://audits.sherlock.xyz/contests/967/leaderboard) |
| 1inch pre-audits (Aqua, SwapVM), GitHub Actions | [1inch blog, Dec 23, 2025](https://1inch.com/blog/post/1inch-uses-savantchats-ai-tools) |
| CTFBench methodology | [ethresear.ch, Feb 2025](https://ethresear.ch/t/ctfbench-a-new-method-for-evaluating-ai-smart-contract-auditors-balancing-vulnerability-detection-and-reducing-false-alarms/21821) |
| CTFBench scores 87–95% (v0.2) | [ctfbench.com](https://ctfbench.com), [raw tasks](https://github.com/snjax/evmbench-ctfbench-benchmark) |
| ETHPrague 2026 talk | [recording](https://www.youtube.com/watch?v=r2oU7TFLDMc) |
| Founding story | [Medium, Mar 17, 2025](https://medium.com/@igorgulamov/we-got-tired-of-smart-contract-hacks-so-we-built-savant-chat-f63f0e57b870) |
