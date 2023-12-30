import "react-native-reanimated";
import "react-native-gesture-handler";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "@acme/ui";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          title: "",
          contentStyle: {
            backgroundColor: "hsl(224 71% 4%)",
          },
        }}
      />
      <StatusBar />
    </ThemeProvider>
  );
}
