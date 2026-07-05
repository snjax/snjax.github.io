+++
title = "AI-powered Web3 security — Agent Intelligence interview with Francesco"
description = "Transcript of Igor and Alexandra Gulamova discussing SavantChat with Francesco (Agent Intelligence): how the AI auditor works, why it's fully LLM-based, and the roadmap."
date = 2025-03-24
updated = 2026-07-05
slug = "ai-powered-web3-security"
template = "transcript.html"

[extra]
seo_title = "SavantChat interview transcript (Agent Intelligence)"
keywords = "SavantChat interview, Igor Gulamov, Alexandra Gulamova, AI smart contract audit, Agent Intelligence, Francesco, Web3 security"
event = "Agent Intelligence livestream"
lang_label = "English"
source_kind = "Interview"
video_url = "https://www.youtube.com/watch?v=mXVgyqHAiFk"
video_label = "YouTube (Francesco Andreoli)"
raw_txt = "/transcripts/ai-powered-web3-security.txt"
speakers = "Francesco (host), Alexandra Gulamova, Igor Gulamov"
+++

*Agent Intelligence livestream · "AI-powered Web3 Security" with Francesco Andreoli · [original video](https://www.youtube.com/watch?v=mXVgyqHAiFk) · [raw transcript for LLMs](/transcripts/ai-powered-web3-security.txt)*

*Transcribed with automatic diarization and edited for readability; technical terms normalized. Speakers: **Francesco** (host, Mother DAO / Consensys), **Alexandra Gulamova** and **Igor Gulamov** (SavantChat).*

---

**Francesco:** Welcome, everybody, to Agent Intelligence — we're exploring everything about AI agents in Web3, speaking with awesome builders and leaders in the space. I'm Francesco; I contribute to Mother DAO and I'm also at Consensys. Today we're going deep on the vision behind SavantChat, with two great AI-agent builders. Welcome, Alexandra; welcome, Igor. Want to quickly introduce yourselves?

**Alexandra Gulamova:** Hi, thank you for the invitation, Francesco. We're building SavantChat. We have experience in auditing, and we decided to make the process much smoother — there are a lot of issues in it today, and we wanted to make it easier both for auditors and for DeFi builders. That's why we started building SavantChat, which shows amazing results in our benchmarks.

**Igor Gulamov:** Most of us have riddles we throw at AI — every time a new model is released, we ask it those riddles. I have experience in security audits, including hard things like zero-knowledge, and I have my own security riddles. When DeepSeek-R1 came out, I asked it these riddles and saw that it could solve them with only minor help from my side. That's why we started building SavantChat in early February. We saw it could solve complex things in smart-contract security — and sometimes it genuinely surprised me.

**Francesco:** And it's difficult to surprise auditors in general, right? So let's dive in. What problems were you initially trying to solve by building SavantChat?

**Alexandra Gulamova:** As you know, bugs and black-hat hackers keep arriving on the market. A human audit takes a lot of time and money, and not every team can afford it, especially early on. We built our agent so that every team can check the code first, and auditors can make their process faster. It's good for everyone: auditors save time, and teams can check with SavantChat first and then go to a human audit — so the process is safer and faster.

**Igor Gulamov:** We see this as a kind of "GPT-3.5 moment" in smart-contract security, where the technology becomes useful for practical cases. Right now it reaches the level of a mid-level human auditor — with a lot of false positives, a lot of prompt engineering, and some noise-filtering by human auditors — but it can invent original ways to attack smart contracts, and that helps us protect them from hackers. You can run it in a mode where it brings a lot of ideas that we check manually, or you can filter out most of the false positives and just read the report and fix things. As models improve, our solution gets better. It's not just an interface to OpenAI — we use multiple LLMs, mostly DeepSeek, and now good general-reasoning models like Grok 3 are arriving, so the next versions will be much stronger.

**Francesco:** Strong pain points. On the auditing side there's a lot that needs to happen. For the other agent builders listening — can you walk us through the agent's core functionality? Feel free to screen-share the docs or the website.

**Alexandra Gulamova:** The process is very simple. You upload your codebase; it scans the context and then produces a report. Depending on the scope it can take from 15–20 minutes up to 24 hours — for example, 8,000 lines took about 24 hours.

**Igor Gulamov:** I won't show the full cycle, but we can create a new audit and load a project here. We have scoping tools — for example, load a single file and manage the scope. So here's how it works: we launch the report and read it. This is a token with a vulnerability — it caches balances, and if `from` equals `to`, it overwrites twice and you can mint money. The AI found that self-transfer vulnerability, with zero false positives — it found only one issue, and it was genuinely critical. I first ran into this class of bug back in 2018.

**Alexandra Gulamova:** And we invite everyone to go through the process — we give a welcome balance to every new user, so you can try the whole thing yourself.

**Igor Gulamov:** With models like o3-mini-high or o1 Pro, if you drop in a full ERC-20 token contract with this issue, they'll very likely miss it. So we prepare the scope where the bug lives, do special prompt engineering and hypothesis generation, and then filter with a dedicated critic agent — that's how we reach the results.

**Francesco:** How long does an audit take compared to a manual one?

**Igor Gulamov:** More than 100× faster than a human audit. For a scope of 8,000 lines, a human audit is about one or two months, or several auditors. With limited resources our agent spends about 24 hours; if we rent multiple servers, four hours is possible — for that you'd need roughly 50 Nvidia H200s. A very large amount of compute, but audits are expensive: a human audit of 8,000 lines costs from $100,000 to $200,000 or $300,000.

**Alexandra Gulamova:** And with SavantChat it's about $1 per line.

**Igor Gulamov:** We're bringing it down to 25 cents per line this month.

**Francesco:** Very cool. Run me through your background and the key technical decisions in your architecture — there's a lot of lessons there for other agent builders.

**Igor Gulamov:** Our background is ZK, privacy and some scalability work. Since 2019 we've worked on ZK and on audits, because that's cryptography experience — projects came to us to check cryptography and the Solidity around it. When AI arrived we used it in our team's own processes and wrote some agents, but before modern reasoning models it was very expensive and not good at common sense. That changed from January 2025, and we started building SavantChat.

**Francesco:** What's the lesson learned — the thing you'd do differently, in terms of technical decisions or frameworks?

**Igor Gulamov:** Most AI agents today are fast, cheap things using Llama or other lightweight LLMs with very high tokens-per-second, running for minutes. Our solution runs for tens of hours and is highly parallelizable — an audit of 8,000 lines is about 100 parallel processes over 24 hours across different stages. That's why we wrote our own engine: there was nothing on the market for this, because nobody had run AI agents with 100 parallel processes over 24 hours before.

**Alexandra Gulamova:** One main decision was not to use static analyzers of the code — we made it fully AI, to get an absolutely new point of view on the codebase. Some of our users had already gone through several human audits and shared the same code with SavantChat, and it surfaced completely new bugs even after those human audits — because humans, and static analyzers, tend to go the same way, and a fully-AI approach gives a different perspective.

**Igor Gulamov:** Some other AI auditors use Slither forks — they improve Slither and add an AI filter over its false positives. We don't go that way, because it doesn't scale: our approach scales with the performance of LLMs, so when the next generation is released we just attach it to our engine and get better results. If your hypothesis generator is a static analyzer, you're limited to what that analyzer can find. The main value isn't low false positives — it's finding something complex and interesting.

**Francesco:** Anything that surprised you during development?

**Igor Gulamov:** Sure. Take a casino smart contract — it shows up in a lot of CTFs. The standard way to hack a casino contract with predictable randomness is to write a contract that pre-computes the randomness and only plays if it's a winning combination. But SavantChat found another way: take a flash loan, play, and if you win, repay the loan; if you lose, the flash-loan contract reverts everything.

**Alexandra Gulamova:** One thing — after that, we decided to close the code and not open-source it. When we discussed it with the founders of other projects, they were so worried: "keep it closed, please don't open it."

**Francesco:** Any specific frameworks you used — Eliza, or specific Python frameworks?

**Igor Gulamov:** We use the standard OpenAI library, and that's it.

**Francesco:** What do you think about agent-to-agent coordination on the auditing side — will your agent work together with other auditing agents? There are no standards yet.

**Igor Gulamov:** There's a discussion — Nethermind's idea is to bring all AI agents together and run them all so they collectively find something interesting. We think the right direction is the opposite: spend all resources on computation inside one AI agent. Why? Because we can make the reasoning chains longer. It's not that you run one audit next to another and sum the outputs — instead you make a twice-as-long chain of reasoning that takes into account everything found before and removes duplicate findings, and you get a better result. Multi-agent could work if agents feed their inputs to one another and reuse each other's knowledge, but then you need protocols to interact — and some ideas are bad, or get filtered by our critic agent, while another agent might keep working on them, which isn't efficient. The cost of our agent is 2 to 10% of a human audit, so you can't run 50 of them on the same contract. If a company needs an audit and has a budget, the best thing is to spend all of it on inference in the single best agent — then the results are best.

**Francesco:** So you believe in specialized, verticalized agents rather than all-in-one agents, at least on the contract-auditing side?

**Igor Gulamov:** Yes, that's definitely the way to go.

**Francesco:** We're almost out of time — what's next for SavantChat? How do you see the agent evolving, and what integrations are you planning?

**Igor Gulamov:** For now it's a tool for human auditors, because we do have some false positives — if we filter too aggressively we might drop something useful, and most clients ask us for audits with a lot of false positives but the maximum number of real issues. So we calibrate to find the maximum real issues with a number of false positives that humans can filter.

**Alexandra Gulamova:** The main milestones on our roadmap are making the CI/CD process easier and covering more programming languages, like Rust.

**Igor Gulamov:** Our team is working on CI/CD integration through GitHub Actions, so the audit runs on the diffs of a codebase but takes the whole codebase into account as context and checks the changed part more deeply. Another direction is documentation recovery from the codebase, because large smart contracts are hard to understand. Then we're moving to multiple languages beyond Solidity — Rust and others — and using more modern AI models. In the future, with next-generation AI, we think we can audit general-purpose codebases, which matters a lot for information security and AI-generated code: you'd attach it to something like a package repository and check that AI-generated code is safe to use. Checking AI-generated code is important, and I think in the future we can do it.

**Francesco:** For the agent builders listening — how can they get in touch or try SavantChat?

**Alexandra Gulamova:** There's a welcome balance, as I mentioned. We also have a promotion right now: if you're willing to wait a bit for your audit to start, you can use a 75% discount — it just postpones the start, not the audit itself. We're open to talk through our X account, @auditdio — that's our main project — and on the SavantChat website there's a way to reach us through Telegram and X.

**Francesco:** Awesome. Alexandra, Igor — thank you so much.

**Alexandra Gulamova:** Thank you so much. We'll send some links to people here — it's been a pleasure.

**Francesco:** We look forward to seeing more of SavantChat, and to seeing you demo in different places. Thanks everybody for watching the stream — this is one of the first sessions on the due-diligence and auditing side, and it's super valuable. Maybe we'll see you back in Dubai next time.
