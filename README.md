# csstypes

`csstypes` provides a set of strict type definitions for CSS length and color values.

## Installation

Add `csstypes` as a dev dependency:

```sh
pnpm install -D csstypes # or npm/yarn, of course
```

## Usage

See the [documentation](https://slingshot.github.io/csstypes/) for a full list of available types.

```typescript
import { CSSLength, CSSColor, PixelSize } from 'csstypes';

// Valid values
const length: CSSLength = '1em';
const color: CSSColor = 'red';
const pixels: PixelSize = '1px';

// Invalid values
const length2: CSSLength = '1px';
// Type '"1px"' is not assignable to type 'CSSLength'

const color2: CSSColor = '1px';
// Type '"1px"' is not assignable to type 'CSSColor'

const pixels2: PixelSize = '1em';
// Type '"1em"' is not assignable to type '`${number}px`'
```
