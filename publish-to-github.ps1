# Publish this repo to GitHub ( https://github.com/Adhurim4/luarda-portfolio )
# Run in PowerShell from this folder:
#   .\publish-to-github.ps1
# First push: use GitHub username + Personal Access Token when prompted.

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

Write-Host "Working directory: $(Get-Location)" -ForegroundColor Cyan

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git not found. Install from https://git-scm.com/download/win"
}

git add .

if (-not (git diff --cached --quiet 2>$null)) {
  git commit -m "Portfolio site: Next.js app with Luarda content"
}

git branch -M main

$originUrl = "https://github.com/Adhurim4/luarda-portfolio.git"
$hasRemote = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
  git remote set-url origin $originUrl
  Write-Host "Updated remote origin -> $originUrl" -ForegroundColor Cyan
} else {
  git remote add origin $originUrl
  Write-Host "Added remote origin -> $originUrl" -ForegroundColor Cyan
}

Write-Host "Pushing branch main (sign in if asked)..." -ForegroundColor Green
git push -u origin main

Write-Host "Done. Open https://github.com/Adhurim4/luarda-portfolio" -ForegroundColor Green
