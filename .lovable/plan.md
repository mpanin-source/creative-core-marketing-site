## Issue
In `TypewriterText.tsx`, phrase 0 renders pre-typed at mount and uses `initialRestMs` (1500ms) as its hold, while every other phrase holds for `holdMs` (2200ms). Result: "How people actually search." and "We'll bring the AI." flash off ~700ms sooner than the rest.

## Fix
In `src/components/shared/TypewriterText.tsx`, raise the default `initialRestMs` to match `holdMs` (2200ms) so phrase 0's on-screen time equals every other phrase. No call-site changes needed — both Hero and EndCTA use the default.

## Result
First phrase in each loop now lingers as long as the others. Loop pause and color alternation unchanged.
