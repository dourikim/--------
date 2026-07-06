@echo off
chcp 65001 > nul
cd /d "C:\Users\dooly\OneDrive\Documents\Claude\Projects\홈페이지 만들기"

echo === Git init and GitHub upload ===
echo.

rmdir /s /q .git

git init
git config user.name "Douri Kim"
git config user.email "douri.kim@gmail.com"
git add -A
git commit -m "Initial commit: French tutor website (dourikim.com)"
git branch -M main
git remote add origin https://github.com/dourikim/--------.git
git push -u origin main

echo.
echo === Done! ===
pause
