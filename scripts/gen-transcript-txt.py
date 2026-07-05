#!/usr/bin/env python3
"""Generate static/transcripts/<slug>.txt from content/transcripts/<slug>.md.
Converts <figure> blocks to markdown image refs (absolute URLs), strips other
markdown, and prepends a machine-readable header. Run: python3 scripts/gen-transcript-txt.py [slug ...]
With no args, processes every content/transcripts/*.md (except _index)."""
import re, sys, glob, os
BASE = "https://igorgulamov.com"

def frontmatter(s):
    fm = s.split('+++', 2)[1]
    d = {}
    for line in fm.splitlines():
        m = re.match(r'\s*(\w+)\s*=\s*"(.*)"\s*$', line)
        if m: d[m.group(1)] = m.group(2)
    return d

def figrepl(m):
    b = m.group(0)
    src = re.search(r'src="([^"]+)"', b); cap = re.search(r'<figcaption>(.*?)</figcaption>', b, re.S)
    url = BASE + src.group(1) if src.group(1).startswith('/') else src.group(1)
    caption = re.sub(r'<[^>]+>', '', cap.group(1)) if cap else ''
    return f'![{caption}]({url})'

def process(path):
    s = open(path).read()
    fm = frontmatter(s)
    slug = fm.get('slug') or os.path.splitext(os.path.basename(path))[0]
    body = s.split('+++', 2)[2].strip()
    body = re.sub(r'<figure>.*?</figure>', figrepl, body, flags=re.S)
    body = re.sub(r'(?<!\!)\[([^\]]+)\]\([^)]+\)', r'\1', body)   # links (keep images)
    body = re.sub(r'\*\*([^*]+)\*\*', r'\1', body)
    body = re.sub(r'(?<!\*)\*([^*]+)\*(?!\*)', r'\1', body)
    body = re.sub(r'^---$', '', body, flags=re.M)
    has_img = '![' in body
    header = (
        f"{fm.get('title','')}\n"
        f"Igor Gulamov (snjax){' — ' + fm['event'] if fm.get('event') else ''}\n"
        f"Original video: {fm.get('video_url','')}\n"
        f"Human-readable version: {BASE}/transcripts/{slug}/\n"
        "Machine-readable transcript (this file) for LLMs and AI research agents.\n"
        "Auto-transcribed with speaker diarization and edited for readability; terms normalized to match "
        f"{BASE}/bio/\n"
        + (f"Speakers: {fm['speakers']}.\n" if fm.get('speakers') else "")
        + ("Slide images referenced inline as markdown.\n" if has_img else "")
        + "====================================================================\n\n"
    )
    out = f"static/transcripts/{slug}.txt"
    open(out, 'w').write(header + body.strip() + "\n")
    print(f"{out}: {os.path.getsize(out)} bytes, images={body.count('![')}")

def main():
    root = os.path.join(os.path.dirname(__file__), '..')
    os.chdir(root)
    slugs = sys.argv[1:]
    files = ([f"content/transcripts/{s}.md" for s in slugs] if slugs
             else [f for f in glob.glob("content/transcripts/*.md") if not f.endswith('_index.md')])
    for f in files:
        process(f)

if __name__ == '__main__':
    main()
