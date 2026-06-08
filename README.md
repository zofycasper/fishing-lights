# 🎣 Fishing Lights - 北岸钓鱼红绿灯

Single-file HTML SPA for Auckland North Shore fishing conditions.

## Features

- Strict 3-color fishing light system (Green/Yellow/Red) for light (2-4kg) and medium (4-8kg) lures
- Apple Weather style SVG wind & temperature charts (24h view, arrows every 2 hours, hover tooltips, past/future)
- Real tide extremes from World Tides (built-in safe key + custom key support)
- Wind direction penalty (easterlies)
- Fully responsive - excellent on mobile (WeChat built-in browser, Safari) and desktop
- Open-Meteo for weather + marine data

## Live

https://fishinglights.netlify.app/

## Run locally

Open `fishing_lights_app_v5.12.html` in any browser.

The entire app is one self-contained HTML file (Tailwind via CDN).

## Key files

- `fishing_lights_app_v5.12.html` - The current production version (internal v5.19+)

## Notes

- All forecast days and today now use 25 data points for consistent arrow formatting (every 2h, arrows at both ends).
- Last forecast day falls back to duplicating 23:00 data if API has no more points.
- Built with vanilla JS + SVG.

## Data sources

- Weather/Marine: Open-Meteo
- Tides: World Tides v3

For personal use / reference only. Always prioritize safety.