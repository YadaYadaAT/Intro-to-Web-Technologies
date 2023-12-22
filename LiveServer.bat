@echo off
cd /d %~dp0
start cmd.exe /K browser-sync start --server --files "**/*.html" --files "**/*.css" --files "**/*.js" --files "**/*.less" --serveStatic="./**"
