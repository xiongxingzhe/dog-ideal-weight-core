# Dog Ideal Weight Core

[![CI](https://github.com/xiongxingzhe/dog-ideal-weight-core/actions/workflows/ci.yml/badge.svg)](https://github.com/xiongxingzhe/dog-ideal-weight-core/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Utilities for comparing current dog weight against a target range in kilograms.

Built by [pawsandpounds.com](https://pawsandpounds.com).

## Installation

```bash
npm install dog-ideal-weight-core
```

## Quick Start

```ts
import { compareToIdealKg } from "dog-ideal-weight-core"

const range = { minKg: 29, maxKg: 36 } // e.g. male Labrador

compareToIdealKg(26, range) // "below"
compareToIdealKg(32, range) // "within"
compareToIdealKg(40, range) // "above"
```

## API

### `compareToIdealKg(currentKg: number, range: { minKg: number; maxKg: number }): "below" | "within" | "above"`

- `below` if `currentKg < minKg`
- `within` if in range
- `above` if `currentKg > maxKg`

Throws if `currentKg <= 0`.

## License

MIT
