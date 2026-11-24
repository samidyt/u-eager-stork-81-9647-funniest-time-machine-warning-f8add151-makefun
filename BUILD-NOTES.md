# Build notes — Funniest Time Machine Warning Label (takeover)

Bounty: https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
Prize: $2, 1 paid place (winner takes all). Deadline: Thu 26 Nov 2026 21:15 WIB.
Submissions at discovery: 20 (API re-check said 4). Entry free. Blind rounds
on; next round 2026-11-25T02:53:14Z.

## Takeover context

The first build session fetched the kit and chose the line, then was stopped
by a system execution-risk notice on `gh repo create`. The repo existed on
GitHub but was EMPTY (no refs). This takeover session re-downloaded the kit
fresh, cloned the empty repo fresh, and authored every file fresh. The first
session's build-report file, local clone, and kit dir were never opened, read,
copied, or used.

## The line (83 chars, gate 1–120 PASS)

> WARNING: If you see your own grave, do not read the dates. Some spoilers are final.

Chosen by the first session from 10 gate-counted candidates (53–88 chars).
Feed checked at build time: avoided "meet yourself", "wave at yourself",
"warranty", "lend money to past self", "second fare", "grandfather",
"butterflies" concepts.

## Local verification (PASS)

- Kit re-downloaded fresh: tarball sha256
  `9d813613951bfebd982c4eb75bc3877b749806f06497c550b0dca94ac8d0103d`
  (kit files one nesting level down, as usual).
- RULES.txt read: gate /output/entry.txt, 1–120 UTF-8 chars; no local grader
  (server grades).
- `main.ts` run twice (Node v24.22.1): `out/entry.txt` byte-identical across
  runs, sha256
  `3d4971ea312ab2722f5fa6a7dcd1068c256eb3dfefef0c81e37bffa2161d8817`,
  83 chars / 83 bytes, exactly 1 line, no trailing newline.
- 2 genuine write/edit passes on main.ts (initial write + determinism-note
  edit with the real sha256). Re-run after pass 2: output still identical.
- Only the harmless Node MODULE_TYPELESS_PACKAGE_JSON warning.

## Repo contents

- `main.ts` — entrypoint, gate self-check (1–120 chars, non-whitespace,
  exactly one line, fails loudly).
- `README.md` — 3 live make.fun badges.
- `LICENSE` — MIT.
- `.gitignore` — `out/`.
- `.makefun/owner.json` — deliberately OMITTED per RULES.txt step 1: the
  repository's GitHub owner `samidyt` IS the make.fun account's GitHub login,
  so no override is needed (same as Traveler 1800 and Office Joke Open).

## Not done (main agent's job)

Bundle / check / submit.
