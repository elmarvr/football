import {
  ActivityIndicator,
  Pressable,
  Text as RNText,
  View,
} from "react-native";
import { styled } from "@gluestack-style/react";
import { createButton } from "@gluestack-ui/button";

import { isColorToken, lighten } from "../utils";

const Root = styled(
  Pressable,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    rounded: "$md",
    ":disabled": {
      pointerEvents: "none",
      opacity: 0.5,
    },

    variants: {
      variant: {
        default: {
          bg: "$primary",
          ":active": {
            bg: lighten("$primary", 90),
          },
        },
      },

      size: {
        default: {
          px: "$4",
          py: "$2",
          h: "$9",
        },
      },
    },
    defaultProps: {
      variant: "default",
      size: "default",
    },
  },
  {
    descendantStyle: ["_text"],
  },
  {
    propertyResolver: {
      backgroundColor: (rawValue: string, resolver) => {
        const [token, opacity] = rawValue.split("/");

        if (!opacity || !isColorToken(token)) {
          return resolver(token);
        }

        return lighten(token, parseInt(opacity));
      },
    },
  },
);

const Text = styled(
  RNText,
  {
    fontSize: "$sm",
    fontWeight: "$medium",
    variants: {
      variant: {
        default: {
          color: "$primary-foreground",
        },
      },
    },
    defaultProps: {
      variant: "default",
    },
  },
  {
    ancestorStyle: ["_text"],
  },
);
const Group = styled(View, {});
const Spinner = styled(ActivityIndicator, {});
const Icon = styled(View, {});

const Button = createButton({
  Root,
  Text,
  Group,
  Spinner,
  Icon,
});

const ButtonRoot = Button;
const ButtonText = Button.Text;
const ButtonGroup = Button.Group;
const ButtonSpinner = Button.Spinner;
const ButtonIcon = Button.Icon;

export {
  ButtonRoot as Button,
  ButtonText,
  ButtonGroup,
  ButtonSpinner,
  ButtonIcon,
};
