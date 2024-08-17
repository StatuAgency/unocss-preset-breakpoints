import type { Preset } from "unocss"

/**
 * Interface for the options that can be passed to the presetBreakpoints function.
 * @property {boolean} show - Determines whether the breakpoints should be shown or not.
 * @property {string} prefix - The prefix to be used for the breakpoint variable in the CSS.
 */
export interface BreakpointsOptions {
  show?: boolean
  prefix?: string
}

/**
 * Function to create a preset for UnoCSS that handles breakpoints.
 * @param {BreakpointsOptions} options - The options for the preset.
 * @returns {Preset} The created preset.
 */
export function presetBreakpoints(options: BreakpointsOptions = {}): Preset {
  // Default show status
  const show = options?.show ?? true

  // If no prefix is provided, use "statu-" as the default.
  const prefix = options?.prefix ?? "statu-"

  // If the show option is not set, return a preset with only a name.
  if (!show) return { name: "unocss-preset-breakpoints" }

  // If the show option is set, return a preset with preflights that generate CSS for breakpoints.
  return {
    name: "unocss-preset-breakpoints",
    preflights: [
      {
        getCSS: ({ theme }: any) => {
          // Initialize an array to store the breakpoints.
          const breakpoints: any[] = []

          // Iterate over the breakpoints in the theme.
          Object.entries(theme.breakpoints).forEach(([name, value]) => {
            // For each breakpoint, generate CSS that applies when the viewport is wider than the breakpoint.
            breakpoints.push(`
              @media (min-width: ${value}) {
                body { --${prefix}breakpoint: "${name}"; }
                body::after {
                  content: "${name}";
                  display: flex;
                }
              }
            `)
          })

          // Return the generated CSS, including a style for the body::after pseudo-element that is used to display the current breakpoint.
          return `
            body::after {
              position: fixed;
              bottom: 8px;
              left: 8px;
              z-index: 9999;
              display: none;
              font-weight: bold;
              letter-spacing: .4px;
              font-size: 12px;
              text-transform: uppercase;
              width: 44px;
              overflow: hidden;
              align-items: center;
              justify-content: center;
              pointer-events: auto;
              border-radius: 9999px;
              gap: 2px;
              height: 30px;
              padding: 2px;
              border: 1px solid #3336;
              background-color: #111;
              backdrop-filter: blur(10px);
              color: #F5F5F5;
              box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
              user-select: none;
              touch-action: none;
            }

            ${breakpoints.join("\n")}
          `
        }
      }
    ]
  }
}

export default presetBreakpoints
