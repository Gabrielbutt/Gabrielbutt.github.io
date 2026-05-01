# Deployment notes

## Replace your current `Gabrielbutt.github.io` website

1. Extract this folder.
2. Open PowerShell inside the extracted folder.
3. Run:

```powershell
git init
git branch -M main
git remote add origin https://github.com/Gabrielbutt/Gabrielbutt.github.io.git
git add .
git commit -m "Replace portfolio with React website"
git push -u origin main --force
```

4. On GitHub, open `Gabrielbutt.github.io`.
5. Go to Settings → Pages.
6. Set Source to **GitHub Actions**.
7. Wait for the action to finish, then open `https://Gabrielbutt.github.io`.

## Contact placeholders

The site still has placeholder contact values in:

- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/Footer.tsx`

Replace `your-email@example.com` and the LinkedIn placeholder when ready.
