import { StyledProvider } from "@gluestack-style/react";

import { config } from "../gluestack.config";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <StyledProvider config={config}>{children}</StyledProvider>;
}
