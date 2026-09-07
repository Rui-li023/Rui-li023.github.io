# Publication media

Updated 2026-09-07. All six publication videos (including N₀ and MARS) play at 2× their encoded speed via `defaultPlaybackRate` and `playbackRate`. The 2× playback adjustment does not re-encode media files. The original publication card layout is preserved: venue badges overlay the upper-left corner and there are no playback buttons.

## Sources

- CoEnv: [project page](https://faceong.github.io/CoEnv/), [official demo](https://faceong.github.io/CoEnv/videos/demo.mp4). Preview uses the first 18 seconds (cube stacking and ball pickup), retaining the source playback speed and on-video labels. Original: 13,669,795 bytes, 80.062 seconds.
- LabUtopia: [project page](https://rui-li023.github.io/labutopia-site/), [official action demo](https://rui-li023.github.io/labutopia-site/static/videos/action.mp4). Uses the full 28.5-second demo at its original speed. Original: 2,795,867 bytes. Other carousel video URLs on the project page returned 404 at the time of checking.
- LabBuilder: [project page](https://che-0212.github.io/LabBuilder-site/). Its video section says “Coming soon”; the existing overview figure remains in use.
- CFSSeg, AIDC, HFGS: compressed from the existing local paper figures without changing their contents.

- MARS Challenge: [challenge page](https://mars-eai.github.io/MARS-Challenge-Webpage/) links to RoboFactory as the Track 2 control benchmark. Replaced the narrow four-panel still with the [official three-robot cube-stacking demo](https://iranqin.github.io/robofactory/assets/videos/three_robot_stack_cube.mp4) from the [RoboFactory project](https://iranqin.github.io/robofactory/). This shows the benchmark task, not a competition submission or result. Uses the complete 15.23-second sequence, scaled from 3840×2160 to 640×360, H.264 CRF 27, 18 fps, silent, faststart; poster at 5 seconds (WebP quality 84). On-page speed is 2× like the other videos.

## Display assets

All paths are under `images/publications/`. Static images have a maximum width of 800 pixels (no upscaling) plus a 400-pixel responsive variant, WebP quality 86. Original figures remain available by clicking the thumbnail. Video posters are taken at one second, WebP quality 82.

| Paper | Poster / large image (KiB) | Video (KiB) |
| --- | ---: | ---: |
| labbuilder | 57.6 | — |
| cfsseg | 41.3 | — |
| aidc | 35.1 | — |
| hfgs | 43.2 | — |
| coenv | 13.2 | 198.8 |
| labutopia | 13.9 | 365.5 |
| mars-challenge | 15.2 | 166.9 |

Previews use H.264, 640×360, 18 fps, CRF 29, yuv420p, no audio, and MP4 faststart. Encoding recipe (add `-t 18` for CoEnv):

```sh
ffmpeg -i source.mp4 -an \
  -vf 'scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2,fps=18' \
  -c:v libx264 -preset slow -crf 29 -pix_fmt yuv420p \
  -movflags +faststart -map_metadata -1 preview.mp4
```

`_includes/paper-media.html` renders seven updated publication previews using the existing card styles. All six videos share the `.paper-media` playback handler in `assets/js/glass.js`. Every video URL is stored in `data-src`, so no MP4 is requested before the video is visible. Loading starts after 200 ms at 25% visibility to avoid downloading cards during a quick scroll. When a video leaves the viewport or the tab becomes hidden, its source is detached to stop buffering and decoding; its position is saved and restored on return. Native looping and 2× speed remain enabled. Reduced-motion visitors retain the poster. Without JavaScript, posters and figures remain visible. A fixed 16:9 video aspect ratio reserves the same space while sources are detached.
