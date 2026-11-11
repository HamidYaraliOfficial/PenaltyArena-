# Penalty Arena — 3D Penalty Shootout

Developer: Hamid Yarali  
Creator: حمید یارعلی  
Copyright © 2026 Hamid Yarali. All Rights Reserved.  
Project: https://github.com/HamidYaraliOfficial

## Introduction
Penalty Arena is an original, fully offline 3D penalty shootout game with its own name, teams and artwork. Created & Developed by Hamid Yarali.

## Features
- Take penalties and defend them in a full 5-kick match with sudden death.
- Physics-based ball: gravity, air drag, Magnus curve, ground bounce, post, crossbar and net.
- AI goalkeeper that predicts the real trajectory, plus an AI kicker; 5 difficulty levels (Easy to Legendary).
- Stadium with crowd, floodlights, ad boards, dugouts and tunnel; night, dusk and day looks.
- Detailed 3D players with kits, numbers and animation; procedural sound effects.
- Settings and statistics are saved between sessions.

## Screenshots
See the `Screenshots/` folder.

## Installation
Run `Installer/Setup.exe`, choose a folder and finish. Desktop and Start Menu shortcuts are created. Uninstall from Windows Settings > Apps or with the uninstaller in the install folder.
Portable: run `Portable/PenaltyArena-Portable.exe` (no install). The `Game/` folder also contains `PenaltyArena.exe` directly.

## Running
Start "Penalty Arena" from the desktop or Start Menu. F11 toggles fullscreen.

## Controls
| Role | Controls |
|---|---|
| Kicker | Mouse or touch to aim; hold click or Space to charge, release to shoot; Q/E for curve. High power reduces accuracy. |
| Goalkeeper | Left/Right arrows dive, Up arrow high dive, Space stay centered; clicking dives to that spot. |

## Game modes
Full match (5 kicks each, then sudden death) · Training (endless kicks) · Goalkeeper Challenge (10 shots, best score saved).

## Graphics settings
Day, dusk or night and the difficulty level are in the main menu. Resolution follows the window size; F11 for fullscreen.

## System requirements
Windows 10/11 64-bit, 4 GB RAM, a GPU with WebGL support. No internet needed.

## Development
Source code is in `SourceCode/` (Electron + Three.js r128). Run `npm install`, then `npm start` to play and `npm run dist` to build the Windows installer (building on Linux requires Wine).

## Known limits (v1.0)
Players are procedural models (no motion capture), only three camera views, no replay, no local multiplayer and no team or stadium picker yet. The game is not built with Unreal Engine.

## License
See `LICENSE`.
