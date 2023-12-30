import { config } from "../gluestack.config";

type ColorToken = keyof typeof config.tokens.colors;

export function lighten(color: `$${ColorToken}`, amount: number) {
  const token = withoutPrefix(color);

  if (amount > 100 || amount < 0) {
    throw new Error(`Invalid amount: ${amount}`);
  }

  const colorValue = config.tokens.colors[token];

  const match = /hsl\((.+)\)/.exec(colorValue);
  if (!match) {
    return colorValue;
  }

  return `hsla(${match[1]} / ${amount / 100})`;
}

function withoutPrefix<TInput extends string>(token: TInput) {
  return token.replace("$", "") as TInput extends `$${infer T}` ? T : TInput;
}

export function isColorToken(token: unknown): token is `$${ColorToken}` {
  if (typeof token !== "string" || !token.startsWith("$")) return false;

  const value = withoutPrefix(token);

  return value in config.tokens.colors;
}
