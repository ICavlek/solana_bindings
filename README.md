# solana_bindings
Project that uses `shank` to generate idl for native solana program and `codama` to generate typescript bindings.

All credits go to [create-solana-program](https://github.com/solana-program/create-solana-program/tree/main) team which example has been used as template.

Disclaimer: It is pre-assumed that necessary Rust and Solana packages such as `cargo`, `solana` and `solana-test-validator` are already installed.

## PNPM package manager

At first, pnpm package manager has to be installed by running the following:

```
npm install -g pnpm@latest-10
```

To verify, that it has been installed, verify it by running the following:

```
pnpm -v
10.3.0
```

## Building Solana program

To build solana program, run the following:

```
cargo build-sbf
```
Program should be located in here `./target/deploy/solana_program_my_program.so`.

## Creating idl and bindings

Inside the `package.json`, commands are added which point out to scripts located in `./scripts` folder.

First of all, it is necessary to run:

```
pnpm install
```

To create idl, run the following:

```
pnpm generate:idls
```

To create bindings from the created idl, run the following:

```
pnpm generate:clients
```

Finally, to run the script which starts the local solana test validator and runs the tests, use the following:

```
pnpm clients:js:test
```

## Terminating validator

Since the validator is running in background, you should check which process is running by the port and terminate it, as shown in the following:

```
lsof -t -i:9900
27729
kill 27729
```
