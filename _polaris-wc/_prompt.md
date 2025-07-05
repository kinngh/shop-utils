# Polaris Web Components

Prompts used to generate `*.d.ts` files from .dev's documentation. 

## Prompts

```
"Generate TypeScript type definition (`.d.ts`) files for custom web components, in this case, Shopify's new Polaris Web Components. Please include interfaces for their properties, events, and any associated types like `ActivationEventEsque` and `ClickOptions`, and ensure they extend `React.DetailedHTMLProps` for use in React JSX. Also, include the `declare module 'react'` block to augment React's `JSX.IntrinsicElements`."
```

Follow this up with copying markdown from the documentation.