![Lumina](./apps/docs/public/images/bg-1.png)

# Welcome to the Lumina Design System!

> This project was completed as fulfillment of the course Design Systems for Interactive Systems taught by Pablo Deeleman at Harbour.Space University (Barcelona).

The OpenAI Lumina Design System driven by three essential core principles: Consistent, Accessible, and Semantic.

Lumina empowers designers and developers by providing a comprehensive, consistent, and flexible framework that enhances efficiency, collaboration, and innovation.

## Installation

To install the monorepo dependencies run

```bash
pnpm install
```

## Usage

The ui folder serves a `@lumina/ui` packages which can be consumed within every app in `apps/` folder. To setup the design system in a new app do the following:

Add to your project's `package.json` the following dependency

```json
    "@lumina/ui": "workspace:*",
```

Install to link your project to the library

```bash
pnpm install
```

Include the base styles into your project

```typescript
import "@lumina/ui/styles.css";
```

Then you can use the components like so:

```typescript
import { Container, Button } from "@lumina/ui";

export function Main() {
  return (
    <Container>
      <Button>Click me</Button>
    </Container>
  )
}
```

You can also use the theme variables and tokens

```typescript
import { theme } from "@lumina/ui/theme";
import { tokens } from "@lumina/ui/tokens";

// theme.lightTheme is the default theme
```
