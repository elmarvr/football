import { AnimationResolver } from "@gluestack-style/animation-resolver";
import { MotionAnimationDriver } from "@gluestack-style/legend-motion-animation-driver";
import { createConfig } from "@gluestack-style/react";
import { config as gluestackConfig } from "@gluestack-ui/config";

export const config = createConfig({
  ...gluestackConfig,

  tokens: {
    ...gluestackConfig.tokens,
    colors: {
      background: "hsl(224 71% 4%)",
      foreground: "hsl(213 31% 91%)",
      muted: "hsl(223 47% 11%)",
      "muted-foreground": "hsl(215.4 16.3% 56.9%)",
      accent: "hsl(216 34% 17%)",
      "accent-foreground": "hsl(210 40% 98%)",
      popover: "hsl(224 71% 4%)",
      "popover-foreground": "hsl(215 20.2% 65.1%)",
      border: "hsl(216 34% 17%)",
      input: "hsl(216 34% 17%)",
      card: "hsl(224 71% 4%)",
      "card-foreground": "hsl(213 31% 91%)",
      primary: "hsl(210 40% 98%)",
      "primary-foreground": "hsl(222.2 47.4% 1.2%)",
      secondary: "hsl(222.2 47.4% 11.2%)",
      "secondary-foreground": "hsl(210 40% 98%)",
      destructive: "hsl(0 63% 31%)",
      "destructive-foreground": "hsl(210 40% 98%)",
    },
  },
  plugins: [new AnimationResolver(MotionAnimationDriver)],
} as const);

type Config = typeof config;

declare module "@gluestack-ui/config" {
  interface IConfig extends Config {}
}
