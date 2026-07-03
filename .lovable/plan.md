Plan: Add a production-safe environment gate to the TypewriterText debug panel.

## Goal
Ensure the debug panel in `TypewriterText` never renders in production builds, even if the `debug` prop is accidentally left on, while keeping it fully functional in development.

## Implementation

1. **Gate the debug panel in `TypewriterText.tsx`**
   - Add a build-time check using Vite's `import.meta.env.DEV`.
   - Derive `const showDebug = debug && import.meta.env.DEV;`.
   - Replace the panel render condition `{debug && (...)}` with `{showDebug && (...)}`.
   - Apply the same `showDebug` gate to the `recordHold` console-log helper so debug logging is also disabled in production.

2. **Keep the `debug` prop API unchanged**
   - The `debug` prop remains available as a manual toggle for local development.
   - Existing instances (Hero, Final CTA) can keep `debug` if still useful; the panel will simply not appear in production.

3. **Verify behavior**
   - Confirm the panel still appears during `vite` dev mode when `debug` is true.
   - Confirm the panel is absent after a production build by checking the rendered output (the debug DOM is stripped by the `false` branch and Vite's build-time evaluation).

## Scope
Only touches `src/components/shared/TypewriterText.tsx`. No route, page, or design changes.