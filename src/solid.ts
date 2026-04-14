import { extend } from "@fairyhunter13/opentui-solid"
import { SpinnerRenderable } from "."

// Add TypeScript support
declare module "@fairyhunter13/opentui-solid" {
  interface OpenTUIComponents {
    spinner: typeof SpinnerRenderable
  }
}

// Register the component
extend({ spinner: SpinnerRenderable })
