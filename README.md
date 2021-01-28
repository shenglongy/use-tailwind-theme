# use-tailwind-theme

A Hook for changing dark mode in Tailwind CSS.

## Install

``` sh
$ npm install --save @shenglong/use-tailwind-theme
```

Or with Yarn

``` sh
$ yarn add @shenglong/use-tailwind-theme
```

## Usage

```tsx
import useTheme from "@shenglong/use-tailwind-theme";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      <div>{ theme }</div>
      <button onClick={() => changeTheme()}>change theme</button>
    <div>
  )
}
```

## API

```typescript
const { theme, changeTheme } = useTheme(options?: Partial<{
  key: string;
  defaultTheme: "light" | "dark";
}>);
```

## Params

| Property      | Description            | Type | Default |
|---------------|------------------------|------|---------|
| options       | optional initial value | Partial<{key: string; defaultTheme: "light" \| "dark";}>  | {key: "theme"; defaultTheme: "light"}       |


## Tailwind CSS config

You need to use the `class` strategy for this hook. The config you should set is on the below.

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class",
  // ...
}
```
[Read more details ](https://tailwindcss.com/docs/dark-mode).