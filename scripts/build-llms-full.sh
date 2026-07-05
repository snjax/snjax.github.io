#!/usr/bin/env bash
# Generates static/llms.txt: the hand-maintained digest (scripts/llms-header.md)
# followed by the full prose of every page, so the machine-readable file never
# drifts from the published pages. Run before `zola build`.
set -euo pipefail

python3 scripts/gen-transcript-txt.py >/dev/null 2>&1 || true
cd "$(dirname "$0")/.."

strip_frontmatter() {
  awk 'BEGIN{n=0} /^\+\+\+$/{n++; next} n>=2{print}' "$1"
}

page() { # $1 = title, $2 = url path, $3 = source file
  echo
  echo "===== PAGE: $1 (https://igorgulamov.com$2) ====="
  strip_frontmatter "$3"
}

{
  cat scripts/llms-header.md
  echo
  echo "---"
  page "Igor Gulamov — the full biography" "/bio/" content/bio.md
  page "The history-split finding: how Plasma Prime's O(1) promise fell" "/plasma/" content/plasma.md
  page "AI that audits code: SavantChat and the security arms race" "/ai/" content/ai.md
  page "Zero-knowledge engineering: privacy, delegated proving, storage" "/zk/" content/zk.md
  page "The audit record, 2019–2024" "/audits/" content/audits.md
  page "Theoretical physics: Q-balls, gauge fields, cosmology" "/physics/" content/physics.md
} > static/llms.txt

rm -f static/llms-full.txt
echo "static/llms.txt: $(wc -c < static/llms.txt) bytes"
