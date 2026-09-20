# A Few Pages About You, Jii ♡

A premium interactive digital memory book for **Sumeet Jeet Kour** — birthday **21 September**.

Built with Vite + React + TypeScript. Designed for **GitHub Pages** hosting.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Production builds use base path `/birthday/` (or your repo name via `VITE_BASE_PATH`).

## Personal assets

Place files under `public/`:

| Path | Purpose |
|------|---------|
| `public/images/fresher-party.webp` | Chapter 03 polaroid |
| `public/images/sumeet-01.webp` | Optional photo |
| `public/images/sumeet-02.webp` | Optional photo |
| `public/images/pink-lily.webp` | Optional lily photo |
| `public/images/kitkat.webp` | Optional KitKat art |
| `public/audio/birthday-song.mp3` | Music player |

Missing images show placeholders. Missing audio disables the player (no autoplay).

## GitHub Pages deploy

1. Push this project to a GitHub repository.
2. Repo **Settings → Pages → Source**: **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow).
4. Site URL: `https://<username>.github.io/<repo-name>/`

If the repo name is not `birthday`, the workflow sets `VITE_BASE_PATH` from the repo name automatically. For local production builds with a different name:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

On Windows PowerShell:

```powershell
$env:VITE_BASE_PATH="/your-repo-name/"; npm run build
```

## Notes

- No backend, auth, or database.
- Chapter content lives in `src/data/chapters.ts`.
- Respectful emotional arc — not a proposal site.
