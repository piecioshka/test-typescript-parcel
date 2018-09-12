# test-typescript-parcel

:ledger: Use Parcel to run project with TypeScript files.

## Demo :zap:

Click here: https://piecioshka.github.io/test-typescript-parcel/

## Development

```bash
npm install -g parcel-bundler
git clone git@github.com:piecioshka/test-typescript-parcel.git
cd test-typescript-parcel/
parcel index.html
```

## How to build `dist` version?

```bash
parcel build --public-url . index.html
open in browser dist/ directory
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
